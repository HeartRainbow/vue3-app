import Container, { Inject } from 'typedi';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { ConfigLoaderBase } from '../app/contract';
import { initIoC } from '../app/services';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/styles/tailwind.css';
import './assets/styles/loading.css';




(async () => {
  await initIoC();


  createApp(App).use(ElementPlus).use(store).use(router).mount('#app');


  class Test {

    @Inject()
    public JsYamlConfigLoader: ConfigLoaderBase

    public async call() {
      return await this.JsYamlConfigLoader.load(process.env.NODE_ENV)
    }
  }

  const t1 = Container.get(Test);
  console.log(await t1.call());
})();
