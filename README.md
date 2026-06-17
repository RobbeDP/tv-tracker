# tv-tracker

## Stack

| Layer    | Technology                                        |
|----------|---------------------------------------------------|
| Frontend | Next.js                                           |
| Backend  | Supabase                                          |
| TV data  | [TMDB API](https://developer.themoviedb.org/docs) |

## Prerequisites

- [Node.js](https://nodejs.org/) 20+
- [Docker](https://www.docker.com/) (for local Supabase)
- [Supabase CLI](https://supabase.com/docs/guides/cli/getting-started)

## Getting started

```bash
# Install dependencies
npm install
# Copy environment template
cp .env.example .env.local
# Start local Supabase (Postgres, Auth, API, Studio)
npm run db:start
# Generate TypeScript types from the local schema
npm run db:types
# Start the Next.js dev server (separate terminal)
npm run dev
```

## Database changes

All backend schema changes are managed as SQL migrations under `supabase/migrations/`.

```bash
# Create a new migration
npm run db:migration:new -- my_change
# Apply migrations + seed locally
npm run db:reset
# Diff local DB against migrations
npm run db:diff
# Push migrations to linked remote project
npm run db:push
# Regenerate TypeScript types
npm run db:types
```
