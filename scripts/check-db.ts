import { closeDatabaseConnection } from '../src/server/db/client.server'
import { verifyDatabaseConnection } from '../src/server/db/health.server'

try {
  await verifyDatabaseConnection()
  console.info('PostgreSQL connection verified.')
} catch (error) {
  const errorType = error instanceof Error ? error.name : 'UnknownError'
  console.error(
    `PostgreSQL connection verification failed (${errorType}). Check DATABASE_URL and confirm the database is running.`,
  )
  process.exitCode = 1
} finally {
  await closeDatabaseConnection()
}
