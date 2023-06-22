import { defineConfig } from "astro/config";
import cloudflare from '@astrojs/cloudflare';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";
import {generalUrlSiteMap} from "./sitemap/genera-sitemap-ssr";
import {FETCH_API_HOST} from "./src/constant/endpoint.constant.js";

const customPages = await generalUrlSiteMap();

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
  site: "https://fateinyourhands.com",
  integrations: [
    tailwind(),
    vue({
      appEntrypoint: "/src/vue/main",
    }),
    sitemap({
      customPages: customPages
    }),
  ],
});
