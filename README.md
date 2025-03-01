# StephTheDev - Web Development Portfolio

![Portfolio Screenshot](/public/StephTheDev-Screenshot.png)

## Overview

This is my personal [portfolio site](https://stephthedev.de/) showcasing my web development journey, skills, and projects. Built with modern technologies and a focus on performance and content management.

## Technologies Used

The site is built with a powerful tech stack:

- **[Astro](https://astro.build)** - A modern and blazing-fast static site generator
- **[TypeScript](https://www.typescriptlang.org/)** - For type-safe JavaScript development
- **[SASS/SCSS](https://sass-lang.com/)** - For enhanced CSS styling capabilities
- **[Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)** - For managing blog posts and projects
- **[Astro Icon](https://github.com/natemoo-re/astro-icon)** - For optimized SVG icons
- **[Astro Sitemap](https://github.com/withastro/astro/tree/main/packages/integrations/sitemap)** - For SEO optimization
- **[Astro Robots-txt](https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt)** - For search engine indexing configuration

## Key Features

- **Responsive Design** - Fully responsive across all device sizes
- **Blog System** - Using Markdown content collections for easy content management
- **Projects Showcase** - Highlighting my web development work
- **RSS Feed** - Subscribe to stay updated with my latest blog posts
- **Performance Focused** - Built with Astro for optimal loading speed
- **SEO Optimized** - With proper metadata, sitemap, and robots.txt
- **Modern Typography** - With custom fonts and careful styling
- **Animated Elements** - Subtle animations to enhance user experience

## Project Structure

```
/
├── public/                # Static assets
├── src/
│   ├── components/        # UI components
│   │   ├── blog/          # Blog-specific components
│   │   ├── home/          # Homepage components
│   │   ├── layout/        # Layout components
│   │   └── shared/        # Shared UI elements
│   ├── content/           # Content collections
│   │   ├── blog/          # Blog posts in Markdown
│   │   └── projects/      # Project data
│   ├── images/            # Image assets
│   ├── layouts/           # Page layouts
│   ├── pages/             # Astro pages
│   ├── styles/            # Global styles
│   └── types/             # TypeScript type definitions
└── package.json           # Project dependencies
```

## The Journey Behind This Site

Soon after starting my web development journey, I discovered [Astro](https://astro.build) and knew it was the perfect framework for my portfolio. Its focus on content-driven sites with [content collections](https://docs.astro.build/en/guides/content-collections/) made it ideal for my blog implementation, which uses Markdown files to auto-generate blog entries.

I was inspired by [Chris Pennington](https://chrispennington.blog/) and his [excellent Astro tutorials on YouTube](https://www.youtube.com/@codinginpublic).

## Purpose

This website serves multiple purposes:
- Showcasing my web development skills and projects
- Sharing my learning journey through blog posts
- Connecting with fellow developers
- Providing a platform for potential clients or employers to learn about me
- Documenting my growth as a developer

## Development

### Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Format code
npm run format
```

### Setting Up Your Own Portfolio

If you're inspired to create your own portfolio with Astro, check out the [official documentation](https://docs.astro.build/en/getting-started/) to get started. Astro's intuitive API and excellent developer experience make it a great choice for personal websites and blogs.

## Stay Connected

- Subscribe to my [blog RSS feed](https://stephthedev.de/blog.xml)
- Visit my portfolio at [stephthedev.de](https://stephthedev.de/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with by [Stephan Pfeiffer](https://stephthedev.de)
