import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://voksir.github.io',
  base: '/brvm-intelligence-portfolio/',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
