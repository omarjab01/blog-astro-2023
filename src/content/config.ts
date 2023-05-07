import {z, defineCollection} from "astro:content";

const blog = defineCollection({
    schema: z.object({
        title : z.string(),
        description : z.string(),
        author : z.string(),
        tags : z.array(z.string()).optional(),
        date : z.date(),
        draft : z.boolean()
    })
})


export const collections = { blog }