import { z } from "zod"


export const createUserBodySchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
})