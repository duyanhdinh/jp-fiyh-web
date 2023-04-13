import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";

import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [
    tailwind(),
    vue({
      appEntrypoint: '/src/vue/main'
    }),
    sitemap(),
    astroI18next()
  ]
});
