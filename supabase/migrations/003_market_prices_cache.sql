-- Single-row cache for live metal prices.
-- Lets /api/prices degrade gracefully when the upstream API is down or rate-limited.
create table market_prices_cache (
  id int primary key default 1 check (id = 1),
  silver_eur_per_oz numeric,
  gold_eur_per_oz numeric,
  updated_at timestamptz,
  source text
);

insert into market_prices_cache (id) values (1) on conflict do nothing;

alter table market_prices_cache enable row level security;
-- Public read is fine — this is the same data we display on /cena-srebra.
create policy "Public can read market prices cache"
  on market_prices_cache for select
  using (true);
