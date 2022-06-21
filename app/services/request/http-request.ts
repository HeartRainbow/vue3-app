import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { Interceptors } from '.';
import { IRequestConfig, IRequestInterceptor, IResponseData } from '../../contract';

export default class HttpRequest {
  private m_Instance: AxiosInstance;
  private config: AxiosRequestConfig;
  public loading: boolean;
  public interceptor?: IRequestInterceptor;

  private constructor(option: IRequestConfig) {
    this.config = option;
    this.interceptor = option.interceptor;
    this.loading = option.loading ?? true;
    this.m_Instance = axios.create(this.config);

    const interceptor = new Interceptors(this.m_Instance, option);
    interceptor.register();
  }

  /**
   * 请求方法
   * 
   * @param config 请求配置
   * @returns 
   */
  public request<T>(config: IRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptor?.requestInterceptor)
        config = config.interceptor.requestInterceptor(config);

      this.m_Instance.request<IResponseData, T>(config)
        .then(res => {
          if (config.interceptor?.requestInterceptor)
            res = config.interceptor.responseInterceptor<T>(res);
          resolve(res);
        })
        .catch((err: any) => {
          reject(err);
        })
    })
  }

  get<T>(url: string, params?: object): Promise<IResponseData<T>> {
    return this.m_Instance.get(url, { params });
  }
  post<T>(url: string, params?: object): Promise<IResponseData<T>> {
    return this.m_Instance.post(url, params);
  }
  put<T>(url: string, params?: object): Promise<IResponseData<T>> {
    return this.m_Instance.put(url, params);
  }
  delete<T>(url: string, params?: object): Promise<IResponseData<T>> {
    return this.m_Instance.delete(url, { params });
  }
}
