import { z } from "zod";


export const getSpecificMealBodySchema = z.object({
    id: z.string().uuid()
})