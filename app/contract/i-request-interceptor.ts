import { AxiosRequestConfig, AxiosResponse, } from 'axios';

export interface IRequestInterceptor {
  requestInterceptor: (reqCfg: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor: <T = AxiosResponse>(response: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}
