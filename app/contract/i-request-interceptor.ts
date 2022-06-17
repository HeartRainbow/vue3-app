import { AxiosRequestConfig, AxiosResponse, } from 'axios';

export interface IRequestInterceptor {
  requestInterceptor: (res: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorErr?: (error: any) => any;
  responseInterceptor: <T = AxiosResponse>(config: T) => T;
  responseInterceptorErr?: (error: any) => any;
}
