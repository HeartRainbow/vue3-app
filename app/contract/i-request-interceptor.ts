import { AxiosRequestConfig, AxiosResponse, } from 'axios';

/**
 * 请求拦截器
 */
export interface IRequestInterceptor {
  /**
   * 请求成功
   */
  requestInterceptor: (reqCfg: AxiosRequestConfig) => AxiosRequestConfig;

  /**
   * 请求错误
   */
  requestInterceptorCatch?: (error: any) => any;

  /**
   * 响应成功
   */
  responseInterceptor: <T = AxiosResponse>(response: T) => T;
  
  /**
   * 响应错误
   */
  responseInterceptorCatch?: (error: any) => any;
}
