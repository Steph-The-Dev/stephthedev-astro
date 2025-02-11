import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Steph-the-Dev Blog',
    description: 'A blog from a self-taught web developer',
    site: context.site,
    items: blog
      .filter(({ data }) => data.draft !== true)
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        // Compute RSS link from post `id`
        // This example assumes all posts are rendered as `/blog/[id]` routes
        link: `/blog/${post.id}/`,
      })),
  });
}
