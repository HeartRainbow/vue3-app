import { Service } from "typedi";
import 'reflect-metadata';


@Service()
export class DateLoader extends Date {
    constructor() {
        super()
    }

    /**
     * 当前时间戳 （秒）
     */
    get nowTime() {
        return Math.floor(this.getTime() / 1000)
    }

    /**
     * 当前时间戳 （毫秒）
     */
    get nowTimeStamp() {
        return this.getTime()
    }


    public format(time: any, pattern: string) {
        if (!arguments.length) {
            return ''
        }
        if (time === null) {
            return ''
        }
        const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
        let date = null;
        if (time instanceof Date) {
            date = time;
        } else {
            if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
                time = parseInt(time);
            }
            if (typeof time === 'number' && time.toString().length === 10) {
                time *= 1000;
            }
            if (typeof time === 'string') {
                const dates: string[] = time.split(/[^0-9]/);
                date = new Date(Number(dates[0]), Number(+dates[1] - 1), Number(dates[2]), Number(dates[3]), Number(dates[4]), Number(dates[5]));
            } else {
                date = new Date(time);
            }
        }
        const formatObj = {
            y: date.getFullYear(),
            m: date.getMonth() + 1,
            d: date.getDate(),
            h: date.getHours(),
            i: date.getMinutes(),
            s: date.getSeconds(),
            a: date.getDay()
        }
        const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
            let value = formatObj[key]
            // Note: getDay() returns 0 on Sunday
            if (key === 'a') {
                return ['日', '一', '二', '三', '四', '五', '六'][value]
            }
            if (result.length > 0 && value < 10) {
                value = `0${value}`
            }
            return value || 0
        })
        return time_str
    }
}
