import { createApp } from 'vue';
import ElementPlus from 'element-plus';

import { ConfigLoaderBase } from '@app/contract';
import liteTypeDI, { Container, Inject } from '@app/lite-vue-typedi';
import { config } from '@app/model';
import { initIoC } from '@app/services';

import App from '@/App.vue';
import api from '@/api';
import globalComponents from '@/components';
import router from '@/router';
import store from '@/store';
import directives from '@/utils/directives';

import 'element-plus/dist/index.css';
import '@/assets/styles/tailwind.css';
import '@/assets/styles/loading.css';

console.log(api);


(async () => {
  await initIoC();

  createApp(App).use(store).use(router).use(globalComponents).use(liteTypeDI).use(directives).use(ElementPlus).mount('#app');

  class Test {

    @Inject()
    public JsYamlConfigLoader: ConfigLoaderBase

    public async call() {
      return await this.JsYamlConfigLoader.load(
        process.env.NODE_ENV === 'development' ? config.Development : config.Production
      );
    }
  }

  const t1 = Container.get(Test);
  console.log(await t1.call());
})();