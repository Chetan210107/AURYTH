import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'
import { serverEnv } from './src/config/env.server'

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/server/db/schema.ts',
  out: './drizzle',
  dbCredentials: {
    url: serverEnv.DATABASE_URL,
  },
})
