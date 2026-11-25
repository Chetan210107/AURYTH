# AURYTH

Independent, self-managed gothic luxury and alternative-fashion commerce
application. This repository currently contains the **Phase 1 development
foundation only**. Authentication, products, storefront, checkout, payments,
shipping, and other commerce features are not implemented.

## Requirements

- Node.js 22.12 or newer (Node 22 LTS recommended)
- npm 10 or newer
- Docker Desktop with Docker Compose for local PostgreSQL

## Local setup

```powershell
Copy-Item .env.example .env
npm install
docker compose up -d db
docker compose ps
npm run db:check
npm run dev
```

The development server binds to `127.0.0.1:3000`. The local PostgreSQL
container publishes its port only on the loopback interface.

## Database commands

```powershell
# Start PostgreSQL
docker compose up -d db

# Inspect service state
docker compose ps

# Follow PostgreSQL logs (Ctrl+C exits log viewing, not the container)
docker compose logs -f db

# Stop PostgreSQL and preserve its data volume
docker compose stop db

# Remove the stopped container and network; preserve the data volume
docker compose down

# Verify the connection using DATABASE_URL from .env
npm run db:check

# Generate a SQL migration from the Drizzle schema
npm run db:generate

# Apply version-controlled SQL migrations
npm run db:migrate
```

**Destructive reset:** `docker compose down -v` permanently removes the local
PostgreSQL data volume. Back up anything needed before running it. This command
is never run automatically.

The Phase 1 schema intentionally has no application tables. Add domain schema
and reviewed migrations in later approved phases; do not use `drizzle-kit push`
against production.

## Development and quality commands

```powershell
npm run dev
npm run build
npm run start
npm run typecheck
npm run lint
npm run format:check
npm test
```

Run `npm run format` to apply Prettier formatting.

## Environment variables

Copy `.env.example` to `.env`. The example database username and password are
local-development-only and must never be reused in production.

| Variable               | Required                                     | Purpose                                                                 |
| ---------------------- | -------------------------------------------- | ----------------------------------------------------------------------- |
| `DATABASE_URL`         | Yes for database access and Drizzle commands | PostgreSQL connection URL, validated server-side                        |
| `NODE_ENV`             | No                                           | `development`, `test`, or `production`; defaults to `development`       |
| `PORT`                 | No                                           | Production preview server port; defaults to `3000`                      |
| `POSTGRES_DB`          | No                                           | Docker Compose local database name; defaults to `auryth`                |
| `POSTGRES_USER`        | No                                           | Docker Compose local database user; defaults to `auryth`                |
| `POSTGRES_PASSWORD`    | No                                           | Docker Compose local-only password; defaults to `auryth_local_dev_only` |
| `POSTGRES_PORT`        | No                                           | Host port bound to loopback for local PostgreSQL; defaults to `5432`    |
| `VITE_PUBLIC_APP_NAME` | No                                           | Public application label; defaults to `AURYTH`                          |

Only explicitly allowlisted `VITE_PUBLIC_*` settings belong in browser code.
Never put credentials, private URLs, or provider secrets in public variables.

## Project layout

```text
src/
  config/       Environment schemas and validated configuration
  lib/          Shared client-safe utilities
  routes/       TanStack Router routes and document root
  server/db/    Server-only PostgreSQL/Drizzle foundation
  styles.css    AURYTH dark-theme design tokens
scripts/        Local developer utilities
tests/          Unit tests
drizzle/        Generated, version-controlled SQL migrations
```

See [ARCHITECTURE.md](./ARCHITECTURE.md), [DATABASE.md](./DATABASE.md),
[SECURITY.md](./SECURITY.md), [API.md](./API.md), and
[DEPLOYMENT.md](./DEPLOYMENT.md) for implementation status and conventions.
