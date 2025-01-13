// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md, mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().refine((img) => img.width >= 1000, {
        message: 'Image must be 1000px wide or more',
      }),
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog: blogCollection };
