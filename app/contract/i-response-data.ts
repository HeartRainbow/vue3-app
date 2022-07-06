export interface IResponseData<Data = any> {
  /**
   * 响应数据
   */
  data: Data;

  /**
   * 描述
   */
  msg: string;

  /**
   * 错误码
   */
  err: number;
}