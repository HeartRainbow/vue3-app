import { AxiosInstance } from 'axios';
import { IRequestConfig, IRequestInterceptor } from '../../contract';


/**
 * 实例拦截器
 */
export class InstanceInterceptor {
  private m_Interceptor: IRequestInterceptor | undefined;

  constructor(
    private m_Instance: AxiosInstance,
    private m_Option: IRequestConfig,
  ) {
    this.m_Interceptor = this.m_Option.interceptor;
  }

  /**
   * 请求拦截
   * 
   */
  public request() {
    this.m_Instance.interceptors.request.use(
      this.m_Interceptor?.requestInterceptor,
      this.m_Interceptor?.requestInterceptorCatch,
    );
  }

  /**
   * 响应拦截
   * 
  */
  public response() {
    this.m_Instance.interceptors.response.use(
      this.m_Interceptor?.responseInterceptor,
      this.m_Interceptor?.responseInterceptorCatch,
    );
  }
}