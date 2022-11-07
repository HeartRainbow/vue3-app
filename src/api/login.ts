import { http } from "../utils";
import { IRequestConfig } from "@app/contract";

export function login() {
  return http.post<IRequestConfig>('/ih/exchange', {
    id: '62b7092f15be6e815217ed1e',
    userID: '62abde5bca866c42509d3cec',
    openID: 'oSqlj5IhQsZSx2Szo-BJz2en8Qs8'
  });
}
