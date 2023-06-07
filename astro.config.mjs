import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";
import {generalUrlSiteMap} from "./sitemap/genera-sitemap-ssr";

const customPages = generalUrlSiteMap();

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['floating-vue'],
    }
  },
  output: "server",
  adapter: node({
    mode: 'standalone'
  }),
  site: import.meta.env.MAIN_HOST,
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
