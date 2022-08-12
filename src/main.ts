import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import liteTypeDI from 'lite-typedi';

import { initIoC } from '@app/services';

import App from '@/App.vue';
import api from '@/api';
import globalComponents from '@/components';
import router from '@/router';
import store from '@/store';
import directives from '@/utils/directives';

import 'element-plus/dist/index.css';
import '@/assets/styles/loading.css';

console.log(api);


(async () => {
  await initIoC();

  createApp(App).use(store).use(router).use(globalComponents).use(liteTypeDI).use(directives).use(ElementPlus).mount('#app');
})();