import { HttpRequest } from "../../app/services";
import { OsLoading } from '../../app/hooks/loading';
import { IApi } from "app/contract";
import Container, { Service } from "typedi";

@Service()
export default class Login implements IApi {

  public userName: string;

  public token: string;

  public data: { [key: string]: any };

  public async call() {
    console.log(this.token);
  }
}

const login3 = Container.get(Login);
console.log(login3);

const login2 = new Login();

console.log(login2, Object.keys(login2));


const http = new HttpRequest({
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

export function login() {
  return http.post('/ih/exchange', {
    id: '62b7092f15be6e815217ed1e',
    userID: '62abde5bca866c42509d3cec',
    openID: 'oSqlj5IhQsZSx2Szo-BJz2en8Qs8'
  });
}