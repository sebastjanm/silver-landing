-- Leads — booking-form submissions and post-conversion phone captures.
-- Distinct from `subscribers` (different lifecycle, different PII surface, stricter access).
create table leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  message text,
  time_window text check (time_window in ('jutro', 'popoldne', 'vecer')),
  urgency text check (urgency in ('cim_prej', 'flexible')),
  source text not null,
  consent_at timestamptz not null,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  status text not null default 'new'
    check (status in ('new', 'contacted', 'booked', 'closed_won', 'closed_lost')),
  notes text,
  created_at timestamptz not null default now()
);

create index idx_leads_created_at on leads (created_at desc);
create index idx_leads_status on leads (status);

alter table leads enable row level security;
-- No public policies. Admin access only via service role.
