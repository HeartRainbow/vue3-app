import { AxiosInstance } from "axios";
import { IRequestConfig } from "../../contract";
import { GlobalInterceptor, InstanceInterceptor } from ".";


export class Interceptors {
  private m_GlobalInterceptor: GlobalInterceptor;
  private m_InstanceInterceptor: InstanceInterceptor;

  /**
   * 构造函数
   * 
   * @param m_Instance 
   * @param m_Interceptor 
   */
  constructor(
    private m_Instance: AxiosInstance,
    private m_Option: IRequestConfig
  ) { }

  /**
   * 注册拦截器
   * 
   */
  public register() {
    this.instanceInterceptor.request();
    this.globalInterceptor.request();
    this.globalInterceptor.response();
    this.instanceInterceptor.response();
  }

  /**
   *全局拦截器
   *
   * @readonly
   * @memberof Interceptors
   */
  public get globalInterceptor() {
    if (!this.m_GlobalInterceptor) {
      this.m_GlobalInterceptor = new GlobalInterceptor(
        this.m_Instance,
        this.m_Option
      );
    }

    return this.m_GlobalInterceptor;
  }

  /**
   *实例拦截器
   *
   * @readonly
   * @memberof Interceptors
   */
  public get instanceInterceptor() {
    if (!this.m_InstanceInterceptor) {
      this.m_InstanceInterceptor = new InstanceInterceptor(
        this.m_Instance,
        this.m_Option,
      );
    }

    return this.m_InstanceInterceptor;
  }
}