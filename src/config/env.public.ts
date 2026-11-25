import { parsePublicEnv } from './public-env-schema'

export const publicEnv = parsePublicEnv(import.meta.env)
