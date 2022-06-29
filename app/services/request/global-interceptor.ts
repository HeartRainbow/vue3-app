import { AxiosInstance, AxiosRequestConfig, AxiosResponse, } from 'axios';
import { ElLoading } from 'element-plus';


import { ErrorHandler } from '.';
import { IRequestConfig } from '../../contract';

/**
 * 全局拦截器
 * 
 */
export class GlobalInterceptor {


  private errorHandler: ErrorHandler;
  private loader: any;


  constructor(
    private m_Instance: AxiosInstance,
    private m_Option: IRequestConfig
  ) {

    this.errorHandler = new ErrorHandler();
  }

  /**
   * 请求拦截器
   * 
   */
  public request() {
    this.m_Instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        console.log('全局请求拦截器');

        if (this.m_Option.loading) {
          this.loader = ElLoading.service({
            lock: true,
            text: 'loading....',
            background: 'rgba(0, 0, 0, 0.4)',
          })
        };

        return res;
      },
      (err: any) => err
    );
  }

  /**
   * 响应拦截器
   * 
  */
  public response() {
    this.m_Instance.interceptors.response.use(
      (res: AxiosResponse) => {
        console.log('全局响应拦截器');

        setTimeout(() => {
          this.loader?.close()
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
