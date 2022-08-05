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
}