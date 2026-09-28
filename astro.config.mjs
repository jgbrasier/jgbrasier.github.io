import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jgbrasier.github.io',
  integrations: [sitemap()],
  output: 'static',
});
