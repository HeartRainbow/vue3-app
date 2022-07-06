export interface IResponseData<Data = any> {
  /**
   * 错误码
   */
  err: number;

  /**
   * 响应数据
   */
  data: Data;

  /**
   * 描述
   */
  msg?: string;
}
