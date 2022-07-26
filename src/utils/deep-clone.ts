/**
 * 深拷贝
 * 
 * @param data 原数据
 * @param map Map缓存键值
 * @returns 
 */
export function deepClone(data: any, map: Map<any, any> = new Map) {
    if (typeof data !== 'object') return data;
    if (map.get(data)) return map.get(data);

    let result: { [key: string]: any } = {};
    if (data instanceof Array || Object.prototype.toString.call(data) === '[object Array]')
        result = [];

    map.set(data, result);
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key))
            result[key] = deepClone(data[key], map);
    }
    return result;
}