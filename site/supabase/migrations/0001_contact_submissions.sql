create table if not exists contact_submissions (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  project     text not null,
  timeline    text not null,
  details     text,
  status      text not null default 'new',
  created_at  timestamptz not null default now()
);

-- Only allow inserts from anonymous users (no reads/updates/deletes via anon key)
alter table contact_submissions enable row level security;

create policy "allow_anon_insert"
  on contact_submissions
  for insert
  to anon
  with check (true);
