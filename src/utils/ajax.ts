export class Ajax {
    private m_Ajax;

    constructor() {
        if (!this.m_Ajax) this.m_Ajax = new XMLHttpRequest();
        return this;
    }

    /**
     * GET请求
     * 
     * @param url 
     * @param data 
     * @returns 
     */
    public get(url, data) {
        return new Promise((resolve, reject) => {
            let dataStr = '';
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&';
            });
            url = url + '?' + dataStr;
            this.m_Ajax.open('GET', url, true);
            this.m_Ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            this.m_Ajax.send();
            this.onChange(resolve, reject);
        });
    }

    /**
     * POST请求
     * 
     * @param url 
     * @param data 
     * @returns 
     */
    public post(url, data) {
        return new Promise((resolve, reject) => {
            this.m_Ajax.open('POST', url, true);
            this.m_Ajax.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
            this.m_Ajax.send(data);
            this.onChange(resolve, reject);
        });
    }

    /**
     * 状态监听
     * 
     * @param resolve 
     * @param reject 
     */
    private onChange(resolve, reject) {
        this.m_Ajax.onreadystatechange = function () {
            if (this.m_Ajax.readyState === 4) {
                if (this.m_Ajax.status === 200) {
                    console.log(this.m_Ajax.responseText);
                    resolve(this.m_Ajax.responseText);
                } else {
                    reject("HTTP error", this.m_Ajax.status, this.m_Ajax.statusText)
                    console.log("HTTP error", this.m_Ajax.status, this.m_Ajax.statusText);
                }
            };
        };
    }
};
