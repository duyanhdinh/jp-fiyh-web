import type { App } from 'vue';
import { createPinia } from 'pinia';
import i18nPlugin from './plugins/i18n';
import { dictionary } from '../locales/en/translation';

export default (app: App) => {
    app
        .use(createPinia)
        .use(i18nPlugin, dictionary);
}
