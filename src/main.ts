import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import liteTypeDI from 'lite-typedi';
import VueLazyload from 'vue-lazyload'

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
  // 配置项
  createApp(App).use(store).use(router).use(globalComponents).use(liteTypeDI).use(directives).use(ElementPlus).use(VueLazyload, {
    preLoad: 1.3,
    error: 'http://static.oschina.net/uploads/img/201409/26073943_nCX5.gif',
    loading: 'http://static.oschina.net/uploads/img/201409/26073950_YyYz.gif',
    attempt: 1
  }).mount('#app');
})();