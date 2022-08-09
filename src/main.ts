import Container, { Inject } from 'typedi';
import { createApp } from 'vue';
import ElementPlus from 'element-plus';

import { ConfigLoaderBase } from '../app/contract';
import { config } from '@app/model';
import { initIoC } from '@app/services';
import liteTypeDI from '@app/lite-typedi';

import App from './App.vue';
import router from './router';
import store from './store';
import globalComponents from '@/components';
import api from './api';
import directives from './utils/directives';

import 'element-plus/dist/index.css';
import './assets/styles/tailwind.css';
import './assets/styles/loading.css';

console.log(api);


(async () => {
  await initIoC();

  // const JsYamlConfigLoader = Container.get<ConfigLoaderBase>(ConfigLoaderBase as any);
  // const mode = process.env.NODE_ENV.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
  // console.log(await JsYamlConfigLoader.load(config[mode]));

  createApp(App).use(store).use(router).use(globalComponents).use(liteTypeDI).use(directives).use(ElementPlus).mount('#app');

  class Test {

    @Inject()
    public JsYamlConfigLoader: ConfigLoaderBase

    public async call() {
      const mode = process.env.NODE_ENV.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
      return await this.JsYamlConfigLoader.load(config[mode]);
    }
  }

  const t1 = Container.get(Test);
  console.log('>>>>>>>>>>>>>>>>>>>>>=', await t1.call());
})();