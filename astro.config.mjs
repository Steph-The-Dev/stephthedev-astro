// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import robotsTxt from 'astro-robots-txt';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://stephthedev.de',
  integrations: [
    icon({
      include: {
        mdi: ['*'], // (Default) Loads entire Material Design Icon set
        devicon: ['*'], // Loads only Material Design Icon's "account" SVG
        'simple-icons': ['*'],
        logos: ['*'],
      },
    }),
    robotsTxt(),
    sitemap(),
  ],
  vite: {
    css: {
      devSourcemap: false, // Disable source maps in development
    },
  },
});
