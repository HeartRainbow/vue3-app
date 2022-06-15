import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, } from 'axios';

import { IRequestInterceptor } from './i-request-interceptor';
export interface IRequestConfig extends AxiosRequestConfig {
  loading?: boolean
  interceptor?: IRequestInterceptor
}