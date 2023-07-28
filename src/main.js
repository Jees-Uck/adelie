import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import { createI18n } from 'vue-i18n';
import en from '/src/locales/en.json';

const i18n = createI18n({
    locale: 'en',
    messages: {
        en
    }
})



const app = createApp(App);

app.use(router).use(i18n).mount('#app');