import type { App } from "vue";
import { createPinia } from "pinia";
import i18nPlugin from "@vue-plugins/i18n.vue-plugin";
import { dictionary } from "@dictionary";

const pinia = createPinia();

export default (app: App) => {
  app.use(pinia).use(i18nPlugin, dictionary);
};
