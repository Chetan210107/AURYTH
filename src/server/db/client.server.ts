import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { serverEnv } from '../../config/env.server'

const connection = postgres(serverEnv.DATABASE_URL, {
  max: 10,
  connect_timeout: 10,
})

export const db = drizzle(connection)

export async function closeDatabaseConnection() {
  await connection.end({ timeout: 5 })
}
