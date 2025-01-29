// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        mdi: ['*'], // (Default) Loads entire Material Design Icon set
        devicon: ['*'], // Loads only Material Design Icon's "account" SVG
        'simple-icons': ['*'],
        logos: ['*'],
      },
    }),
  ],
  vite: {
    css: {
      devSourcemap: false, // Disable source maps in development
    },
  },
});
