// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define collection(s)
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md, mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      image: image(),
      draft: z.boolean().default(false),
    }),
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      pubDate: z.coerce.date(),
      url: z.string().url().optional(),
      githubUrl: z.string().url().optional(),
      icons: z.array(z.string()).optional(),
      draft: z.boolean().default(false),
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog: blogCollection, projects: projectsCollection };
