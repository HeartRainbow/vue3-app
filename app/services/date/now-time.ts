import { NowTimeBase } from '../..';

/**
 * Date实现
 */
export class DateNowTime extends NowTimeBase {
    /**
     * @returns 时间戳(单位: s)
     */
    public unix() {
        return Math.floor(
            Date.now() / 1000
        );
    }

    /**
     * @returns 时间戳(单位: 纳秒)
     */
    public unixMilli() {
        return Date.now() * 1000;
    }
}
