import { createApp } from 'vue';

import './plugins';

import App from './app/app.vue';

import './main.scss';
import router from './app/app-routes';
import store from './app/app-state';

createApp(App).use(router).use(store).mount('#app');
