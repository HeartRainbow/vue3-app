import Container, { Inject } from 'typedi';
import { ConfigLoaderBase } from '../app/contract';
import { initIoC } from '../app/services';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


(async () => {
  await initIoC();


  createApp(App).use(store).use(router).mount('#app');

  class Test {

    @Inject()
    public JsYamlConfigLoader: ConfigLoaderBase

    public async call() {
      console.log(this.JsYamlConfigLoader.load);
      return await this.JsYamlConfigLoader.load(process.env.NODE_ENV)
    }
  }

  const t1 = Container.get(Test);
  console.log(await t1.call());
})();
