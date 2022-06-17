import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, } from 'axios';
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
  }

  // /**
  //  * 请求方法
  //  * 
  //  * @param config 请求配置
  //  * @returns 
  //  */
  // public async request<T>(config: AxiosRequestConfig<T>): Promise<T> {
  //   return this.m_Instance.request<IResponseData, T>(config);
  // }

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


  /**
   * 全局拦截器
   */
  public registerGlobalInterceptors() {
    this.m_Instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        console.log('全局请求拦截器');
        return res;
      },
      (err: any) => err
    );
    this.m_Instance.interceptors.response.use(
      // 因为我们接口的数据都在res.data下，所以我们直接返回res.data
      (res: AxiosResponse) => {
        console.log('全局响应拦截器');
        return res.data;
      },
      (err: any) => err
    );
  }

  /**
   * 实例拦截器
   */
  public registerInstanceInterceptors() {
    this.m_Instance.interceptors.request.use(
      this.interceptor?.requestInterceptor,
      this.interceptor?.requestInterceptorErr,
    );
    this.m_Instance.interceptors.response.use(
      this.interceptor?.requestInterceptor,
      this.interceptor?.requestInterceptorErr,
    );
  }
}
