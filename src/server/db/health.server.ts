import { sql } from 'drizzle-orm'
import { db } from './client.server'

export async function verifyDatabaseConnection() {
  await db.execute(sql`select 1`)
}
