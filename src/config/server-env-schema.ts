import { z } from 'zod'

const postgresUrlSchema = z
  .url()
  .refine(
    (value) => ['postgres:', 'postgresql:'].includes(new URL(value).protocol),
    {
      error: 'DATABASE_URL must use the postgres or postgresql protocol.',
    },
  )

export const serverEnvSchema = z.object({
  DATABASE_URL: postgresUrlSchema,
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  PORT: z.coerce.number().int().min(1).max(65_535).default(3000),
})

export type ServerEnv = z.infer<typeof serverEnvSchema>
