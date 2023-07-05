import 'dotenv/config';

import { defineConfig } from "astro/config";
import cloudflare from '@astrojs/cloudflare';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";
import {generalUrlSiteMap} from "./sitemap/genera-sitemap-ssr";

const customPages = async (file) => await generalUrlSiteMap(file);

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['floating-vue'],
    },
    define: {
      'process.env.FETCH_API_HOST': JSON.stringify(process.env.FETCH_API_HOST)
    }
  },
  output: "server",
  adapter: cloudflare(),
  site: process.env.PUBLIC_HOST,
  integrations: [
    tailwind(),
    vue({
      appEntrypoint: "/src/vue/main",
    }),
    sitemap({
      customPages: await customPages(process.env.SITEMAP_SOURCE)
    }),
  ],
});
