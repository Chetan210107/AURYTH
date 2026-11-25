# Database

## Current status

Phase 1 configures PostgreSQL, Drizzle ORM, Drizzle Kit, connection
verification, and a version-controlled migration directory. No application
tables or commerce schema have been created.

## Local development

The root `docker-compose.yml` runs PostgreSQL 17 with a persistent named volume
and a `pg_isready` health check. Its published port is bound to `127.0.0.1`.
Credentials in `.env.example` are local-only.

```powershell
Copy-Item .env.example .env
docker compose up -d db
docker compose ps
npm run db:check
```

Use `docker compose stop db` or `docker compose down` to stop local services
without deleting persisted database data. `docker compose down -v` deletes the
volume and must be treated as destructive.

## Migrations

- Drizzle schema entry point: `src/server/db/schema.ts`
- Drizzle configuration: `drizzle.config.ts`
- SQL migration output: `drizzle/`
- Generate: `npm run db:generate`
- Apply: `npm run db:migrate`

Review generated SQL before applying it and commit schema changes with their
migrations. Production schema changes must use reviewed migrations; do not use
`drizzle-kit push`. Use additive/expand-and-contract migrations for changes
that require safe deployment across application versions.

The empty Phase 1 schema entry point exists only to let Drizzle Kit initialize
against a deliberately schema-free application. The next approved phase will
define the initial tables and constraints.

## Future data requirements

Later phases must model users and roles, addresses, catalog and variants,
product images, inventory movements and reservations, carts and wishlists,
orders and immutable snapshots, separate payment/refund records, shipments and
tracking events, returns, discounts, notifications, settings, audit logs, and
background jobs. Store money as integer paise and use transactions and database
constraints for critical business invariants.
