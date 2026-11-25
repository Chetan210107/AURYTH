import { describe, expect, it } from 'vitest'
import { parsePublicEnv } from '../../src/config/public-env-schema'
import { serverEnvSchema } from '../../src/config/server-env-schema'

describe('server environment configuration', () => {
  it('requires a PostgreSQL URL and supplies local defaults', () => {
    expect(
      serverEnvSchema.parse({
        DATABASE_URL: 'postgresql://auryth:local-only@localhost:5432/auryth',
      }),
    ).toEqual({
      DATABASE_URL: 'postgresql://auryth:local-only@localhost:5432/auryth',
      NODE_ENV: 'development',
      PORT: 3000,
    })
  })

  it('rejects missing database URLs and non-PostgreSQL URLs', () => {
    expect(() => serverEnvSchema.parse({})).toThrow()
    expect(() =>
      serverEnvSchema.parse({
        DATABASE_URL: 'https://example.test/database',
      }),
    ).toThrow(/postgres|postgresql/i)
  })

  it('rejects ports outside the valid TCP range', () => {
    expect(() =>
      serverEnvSchema.parse({
        DATABASE_URL: 'postgres://localhost/auryth',
        PORT: '70000',
      }),
    ).toThrow()
  })
})

describe('public environment configuration', () => {
  it('returns only explicitly allowed public settings', () => {
    expect(
      parsePublicEnv({
        DATABASE_URL: 'postgresql://private.example/auryth',
        VITE_PUBLIC_APP_NAME: 'AURYTH',
      }),
    ).toEqual({
      VITE_PUBLIC_APP_NAME: 'AURYTH',
    })
  })
})
