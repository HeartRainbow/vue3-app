/**
 * 设置 cookie
 * 
 * @param cname 键名
 * @param cvalue 键值
 * @param exdays 过期天数
 */
export function setCookie(cname: string, cvalue: any, expires: number = 7) {
    const d = new Date();
    d.setTime(d.getTime() + (expires * 24 * 60 * 60 * 1000));
    const expiresTime = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${encodeURIComponent(cvalue)};${expiresTime}`;
}


/**
 * 获取cookie值
 * 
 * @param cname 键名
 * @returns 
 */
export function getCookie(cname: any) {
    const cookies = document.cookie;
    const list = cookies.split(";"); // 解析出名/值对列表
    for (let i = 0; i < list.length; i++) {
        const arr = list[i].split("="); // 解析出名和值
        if (arr[0] == cname)
            return decodeURIComponent(arr[1]); // 对cookie值解码
    }
    return "";
}