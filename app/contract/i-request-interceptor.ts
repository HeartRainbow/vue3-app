import { AxiosRequestConfig, AxiosResponse, } from 'axios';

export interface IRequestInterceptor {
  requestInterceptor: (res: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor: <T = AxiosResponse>(config: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}
