import type { App } from "vue";
import { createPinia } from "pinia";
import i18nPlugin from "@vue-plugins/i18n.vue-plugin";
import { dictionary } from "@lang";
import { Dropdown, Menu } from "floating-vue";
// @ts-ignore
import { VueperSlides, VueperSlide } from "vueperslides";

const pinia = createPinia();

export default (app: App) => {
  app
    .use(pinia)
    .use(i18nPlugin, dictionary)
    .component("VDropdown", Dropdown)
    .component("VMenu", Menu)
    .component("VSlides", VueperSlides)
    .component("VSlide", VueperSlide);
};
