export class Device {
    //判断是否是移动端
    static get isMobile() {
        return !!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)
    }

    /**
     * 是否为android
     */
    static get isAndroid() {
       return window.navigator.userAgent.toLowerCase().indexOf('android') > -1;
    }

    /**
     * 是否是ios
     * @returns 
     */
    static get isIOS() {
        return !!window.navigator.userAgent.match( /\(i[^;]+;( U;)? CPU.+Mac OS X/ );
    }

    /**
     * 判断是否是PC端
     */
    static get isPc() {
        const userAgentInfo = navigator.userAgent;
        const Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        let flag = true;
        for (let v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }
}
