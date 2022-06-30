import { AxiosInstance, AxiosRequestConfig, AxiosResponse, } from 'axios';
// import { OsLoading } from '../../hooks/loading';

import { ErrorHandler } from '.';
import { IRequestConfig } from '../../contract';

/**
 * 全局拦截器
 * 
 */
export class GlobalInterceptor {


  private errorHandler: ErrorHandler;
  // private loader: any;


  constructor(
    private m_Instance: AxiosInstance,
    private m_Option: IRequestConfig
  ) {

    this.errorHandler = new ErrorHandler();
  }

  /**
   * 请求拦截
   * 
   */
  public request() {
    this.m_Instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        console.log('全局请求拦截器');

        if (this.m_Option.loading)
          // OsLoading.open();

          return res;
      },
      (err: any) => err
    );
  }

  /**
   * 响应拦截
   * 
  */
  public response() {
    this.m_Instance.interceptors.response.use(
      (res: AxiosResponse) => {
        console.log('全局响应拦截器');

        setTimeout(() => {
          // OsLoading.close();
        }, 1000);

        return res.data;
      },
      (err: any) => {
        this.errorHandler.handler(err);
        return Promise.reject(err);
      }
    );
  }
}
