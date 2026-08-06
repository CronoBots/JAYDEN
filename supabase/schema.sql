-- =====================================================================
--  JAYDEN — Statistiques de visites (Supabase)
--  À coller dans : Supabase → ton projet → SQL Editor → New query → Run
--  Confidentialité : on ne stocke JAMAIS d'IP brute. Seulement le pays et
--  une position ARRONDIE (~11 km), et des agrégats.
-- =====================================================================

-- 1) Table des visites (données volontairement grossières)
create table if not exists public.visits (
  id           bigint generated always as identity primary key,
  created_at   timestamptz not null default now(),
  country      text,
  country_code text,
  city         text,
  lat          numeric,   -- latitude arrondie (~11 km)
  lng          numeric    -- longitude arrondie (~11 km)
);

-- 2) Sécurité : on active RLS.
--    - insertion autorisée pour les visiteurs anonymes (log d'une visite)
--    - AUCUNE lecture des lignes brutes (pas de policy SELECT pour anon)
alter table public.visits enable row level security;

drop policy if exists "anon can insert a visit" on public.visits;
create policy "anon can insert a visit"
  on public.visits for insert
  to anon
  with check (true);

-- 3) Fonction d'agrégation : seule porte de lecture publique.
--    SECURITY DEFINER -> peut lire la table malgré RLS, mais ne renvoie
--    QUE des agrégats (jamais les lignes individuelles).
create or replace function public.get_visit_stats()
returns json
language sql
security definer
set search_path = public
as $$
  select json_build_object(
    'total', (select count(*) from visits),
    'today', (select count(*) from visits where created_at >= date_trunc('day', now())),
    'week',  (select count(*) from visits where created_at >= now() - interval '7 days'),
    'countries', (
      select coalesce(json_agg(t), '[]'::json) from (
        select country, country_code, count(*)::int as count
        from visits
        where country is not null
        group by country, country_code
        order by count desc
        limit 100
      ) t
    ),
    'points', (
      select coalesce(json_agg(p), '[]'::json) from (
        select lat, lng, max(country) as country, count(*)::int as count
        from visits
        where lat is not null and lng is not null
        group by lat, lng
        order by count desc
        limit 800
      ) p
    ),
    'updated_at', now()
  );
$$;

-- Autoriser l'appel de la fonction par les visiteurs anonymes
grant execute on function public.get_visit_stats() to anon;

-- =====================================================================
--  Fin. Ensuite : Project Settings → API → copie "Project URL" et la clé
--  "anon public", puis donne-les moi (ou colle-les dans js/analytics-config.js).
-- =====================================================================
