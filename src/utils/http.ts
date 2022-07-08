
import { HttpRequest } from "../../app/services";
import { OsLoading } from '../../app/hooks/loading';
import yamlConfig from 'js-yaml-loader!../../config.yaml';



const mode = process.env.NODE_ENV.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
const options = yamlConfig[mode];

export const http = new HttpRequest({
    baseURL: options.baseURL,
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

// @Service()
// class Http {

//     @Inject()
//     public JsYamlConfigLoader: ConfigLoaderBase

//     public async call() {
//         const mode = process.env.NODE_ENV.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
//         return await this.JsYamlConfigLoader.load(config[mode]);
//     }
// }

//   const t1 = Container.get(Http);
//   console.log(t1.call());