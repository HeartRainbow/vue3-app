import { AxiosRequestConfig } from 'axios';

import { IRequestInterceptor } from './i-request-interceptor';

/**
 * 请求配置
 */
export interface IRequestConfig extends AxiosRequestConfig {
  /**
   * Loading开关
   */
  loading?: boolean;

  /**
   * 拦截器
   */
  interceptor?: IRequestInterceptor;
}