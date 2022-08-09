import moment from 'moment';

/**
 * 当前时间接口
 */
export abstract class DateLoaderBase extends Date {
    /**
     * 是否同一天
     * 
     * @param unixTime 其他unix时间
     */
    public isSameDayUnix(unixTime: number) {
        const nowUnix = this.unix();
        return moment.unix(nowUnix).isSame(
            moment.unix(unixTime),
            'day'
        );
    }

    /**
     * 时间戳, 单位: 秒
     */
    public abstract unix(): number;
    
    /**
     * 时间戳, 单位: 毫秒
     */
    public abstract unixMilli(): number;
}
