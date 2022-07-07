import Container, { Inject, Service } from "typedi";

import { HttpRequest } from "../../app/services";
import { OsLoading } from '../../app/hooks/loading';
import { config } from '../../app/model';

import { ConfigLoaderBase } from "app/contract";

const JsYamlConfigLoader = Container.get<ConfigLoaderBase>(ConfigLoaderBase as any);
console.log(JsYamlConfigLoader);


export const http = new HttpRequest({
    baseURL: 'http://localhost:30120',
    loading: true,
    interceptor: {
        requestInterceptor(config) {
            console.log(config);
            console.log('实例拦截器');

            OsLoading.open();
            return config;
        },
        requestInterceptorCatch() { },
        responseInterceptor(res) {
            console.log('res--> ', res);
            OsLoading.close();
            return res;
        },
        responseInterceptorCatch(err) {
            console.log('err--> ', err);
            OsLoading.close();
        }
    }
});

@Service()
class Test {

    @Inject()
    public JsYamlConfigLoader: ConfigLoaderBase

    public async call() {
        const mode = process.env.NODE_ENV.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
        return await this.JsYamlConfigLoader.load(config[mode]);
    }
}

  const t1 = Container.get(Test);
  console.log(t1.call());