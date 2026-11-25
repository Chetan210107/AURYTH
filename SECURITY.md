# Security

## Phase 1 controls

- TypeScript strict mode is enabled.
- Server and public environment schemas are separate and validated with Zod.
- Only allowlisted `VITE_PUBLIC_*` values are read by browser-facing code.
- `.env` files are ignored by Git; `.env.example` contains local-only values.
- Database modules use server-oriented paths and `.server.ts` filenames.
- Local PostgreSQL is published only on loopback.
- PostgreSQL credentials are not included in production configuration.
- Error output from the database check avoids printing connection strings.

## Development safeguards

Do not commit `.env`, provider credentials, access tokens, private keys, or
production database URLs. Replace local example credentials for any shared
environment. Never expose private variables through Vite's public environment
prefix.

## Not implemented

Authentication, authorization, CSRF defenses, rate limiting, secure uploads,
payment verification, webhook validation, audit trails, backup operations, and
production HTTPS are not implemented in Phase 1. Do not treat this foundation
as production-ready.

OWASP ASVS Level 2 remains the future verification target. Security controls
must be added and tested as each relevant feature is introduced.
