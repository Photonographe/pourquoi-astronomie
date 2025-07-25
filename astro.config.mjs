import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pourquoi-astronomie.netlify.app',
  output: 'static',
  adapter: netlify(),
  integrations: [
    sitemap()
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    ssr: {
      external: ['node:fs', 'node:path', 'node:url']
    }
  }
});
