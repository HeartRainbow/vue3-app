import { AxiosError } from 'axios';
import { ElMessage } from 'element-plus';

import { httpStatusCode } from 'app/model/enum';

/**
 * 统一处理HTTP状态码错误
 * 
 */
export class ErrorHandler {
    public handler(err: AxiosError) {
        if (err.response)
            ElMessage.error(httpStatusCode[err.response.status]);

        if (err.message.includes("timeout"))
            ElMessage.error("连接超时~");

        if (err.code === "ECONNABORTED" || err.message === "Network Error" || !window.navigator.onLine)
            ElMessage.error("网络已断开，请检查连接~");
    }
}
