import { defineCollection, z } from 'astro:content';

const industryExperienceCollection = defineCollection({
    type: 'content', // 'content' means .md or .mdx files
    schema: z.object({
        // The data we expect in the frontmatter
        title: z.string(),
        company: z.string(),
        dates: z.string(),
        skillsList: z.array(z.string()),
        // We'll add a 'sortOrder' to keep things in order
        sortOrder: z.number(),
    }),
});

const codeSampleCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        skillsList: z.array(z.string()),
        url: z.string(),
        sortOrder: z.number(),
    }),
});

export const collections = {
    'industryExperience': industryExperienceCollection,
    'codeSample': codeSampleCollection,
};