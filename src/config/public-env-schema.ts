import { z } from 'zod'

export const publicEnvSchema = z.object({
  VITE_PUBLIC_APP_NAME: z.string().trim().min(1).max(60).default('AURYTH'),
})

export function parsePublicEnv(env: Record<string, string | undefined>) {
  return publicEnvSchema.parse(env)
}
