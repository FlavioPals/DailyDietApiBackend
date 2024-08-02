import { z } from "zod";


export const getSpecificUserBodySchema = z.object({
    id: z.string().uuid()
})