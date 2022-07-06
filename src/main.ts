import Container, { Inject } from 'typedi';
import { ConfigLoaderBase } from '../app/contract';
import { config } from '../app/model';
import { initIoC } from '../app/services';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import api from './api';

console.log(api);

import 'element-plus/dist/index.css';
import './assets/styles/tailwind.css';
import './assets/styles/loading.css';

(async () => {
  await initIoC();

  createApp(App).use(ElementPlus).use(store).use(router).mount('#app');

  class Test {

    @Inject()
    public JsYamlConfigLoader: ConfigLoaderBase

    public async call() {
      const mode = process.env.NODE_ENV.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
      return await this.JsYamlConfigLoader.load(config[mode]);
    }
  }

  const t1 = Container.get(Test);
  console.log(await t1.call());
})();
