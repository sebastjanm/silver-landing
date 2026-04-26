-- Blog posts
create table blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  seo_title text,
  meta_description text not null,
  meta_keywords text,
  excerpt text not null,
  hero_image text,
  hero_image_alt text,
  content text not null,
  reading_time_minutes int not null default 5,
  author_id uuid,
  category_id uuid,
  tag_ids uuid[],
  og_image text,
  canonical_url text,
  schema_type text not null default 'Article',
  schema_json jsonb,
  faq_items jsonb,
  internal_links text[],
  sources jsonb,
  status text not null default 'draft' check (status in ('draft', 'published')),
  is_published boolean not null default false,
  is_pillar boolean not null default false,
  cluster_id uuid,
  published_at timestamptz,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create index idx_blog_posts_slug on blog_posts (slug);
create index idx_blog_posts_published on blog_posts (is_published, status, published_at desc);

-- Auto-update updated_at
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger blog_posts_updated_at
  before update on blog_posts
  for each row execute function update_updated_at();

-- RLS
alter table blog_posts enable row level security;

create policy "Public can read published posts"
  on blog_posts for select
  using (is_published = true and status = 'published');

-- Categories
create table categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text,
  parent_id uuid references categories(id),
  seo_title text,
  meta_description text
);

-- Authors
create table authors (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  bio text,
  avatar_url text,
  credentials text,
  schema_json jsonb
);

-- Foreign keys for blog_posts (after categories and authors exist)
alter table blog_posts
  add constraint fk_blog_posts_author foreign key (author_id) references authors(id),
  add constraint fk_blog_posts_category foreign key (category_id) references categories(id),
  add constraint fk_blog_posts_cluster foreign key (cluster_id) references categories(id);

-- Locations
create table locations (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  city_name text not null,
  seo_title text,
  meta_description text,
  content_blocks jsonb,
  schema_json jsonb,
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  updated_at timestamptz not null default now()
);

create index idx_locations_slug on locations (slug);

alter table locations enable row level security;

create policy "Public can read published locations"
  on locations for select
  using (status = 'published');

create trigger locations_updated_at
  before update on locations
  for each row execute function update_updated_at();

-- Subscribers
create table subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  source text,
  signup_at timestamptz not null default now(),
  emails_sent jsonb default '[]'::jsonb,
  drip_status text not null default 'active' check (drip_status in ('active', 'completed', 'unsubscribed')),
  last_email_at timestamptz
);

create index idx_subscribers_email on subscribers (email);

alter table subscribers enable row level security;
-- No public read policy — subscribers are admin-only

-- Guides
create table guides (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text,
  file_url text not null,
  landing_page_id uuid,
  download_count int not null default 0,
  created_at timestamptz not null default now()
);

-- Pages (marketing pages)
create table pages (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  page_type text not null default 'marketing',
  title text not null,
  seo_title text,
  meta_description text,
  og_image text,
  canonical_url text,
  schema_type text default 'WebPage',
  schema_json jsonb,
  content_blocks jsonb,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  published_at timestamptz,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create index idx_pages_slug on pages (slug);

alter table pages enable row level security;

create policy "Public can read published pages"
  on pages for select
  using (status = 'published');

create trigger pages_updated_at
  before update on pages
  for each row execute function update_updated_at();

-- Seed default author
insert into authors (slug, name, bio)
values ('nakupsrebra', 'NakupSrebra.com', 'Posvetovanje za naložbe v srebro in zlato.');

-- Seed categories
insert into categories (slug, name, description) values
  ('cene-in-trg', 'Cene in trg', 'Spremljanje cen in tržnih gibanj srebra'),
  ('nakup-in-prodaja', 'Nakup in prodaja', 'Praktični nasveti za nakup in prodajo srebra'),
  ('davki-in-zakonodaja', 'Davki in zakonodaja', 'Davčna zakonodaja za plemenite kovine v Sloveniji'),
  ('primerjave', 'Primerjave', 'Primerjave srebra z drugimi naložbami'),
  ('strategije', 'Strategije', 'Naložbene strategije za plemenite kovine'),
  ('zgodbe-in-zgodovine', 'Zgodbe in zgodovine', 'Zgodovinski pogledi in zanimive zgodbe'),
  ('zaloge-in-ponudba', 'Zaloge in ponudba', 'Svetovne zaloge in ponudba srebra'),
  ('zacetniki', 'Začetniki', 'Vodniki za začetnike v svetu plemenitih kovin');
