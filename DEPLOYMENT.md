# Deployment

## Current status

Production deployment is out of scope for Phase 1. There are no production
images, reverse-proxy configuration, TLS configuration, secrets manager,
backup automation, or hosted services configured.
The production-preview command uses `srvx` to serve the Vite-generated Start
fetch handler and static client assets; this is not a production deployment
configuration. It binds to `127.0.0.1` by default and is intended for local
verification behind a future reverse proxy.

## Local development database

Prerequisites: Docker Desktop with Docker Compose, Node.js 22.12+, and npm 10+.

```powershell
Copy-Item .env.example .env
docker compose up -d db
docker compose ps
docker compose logs -f db
npm install
npm run db:check
npm run dev
```

`docker compose stop db` stops the database and preserves its data.
`docker compose down` removes the container and network but preserves the named
volume. `docker compose down -v` deletes the volume and all local database data;
use only when an intentional destructive reset is wanted.

## Future production requirements

The approved target is a Linux VPS using Docker, PostgreSQL, and a reverse proxy
such as Caddy or Nginx. Production configuration must use externally managed
secrets, HTTPS, least-privilege database credentials, backups with tested
restores, health checks, and operational logging. Do not use the example
credentials from `.env.example`.
