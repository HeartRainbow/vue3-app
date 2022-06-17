export interface IResponseData<Data = any> {
  data: Data;
  msg: string;
  err: number;
}