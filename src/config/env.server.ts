import 'dotenv/config'
import { serverEnvSchema } from './server-env-schema'

export const serverEnv = serverEnvSchema.parse(process.env)
