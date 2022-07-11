/**
 * 防抖函数
 * 
 * @param func 待处理函数
 * @param wait 时间间隔
 * @param immediate 是否立即执行
 * @returns 
 */
export function debounce<T extends Function>(func: T, wait: number, immediate: boolean = false) {
    let result;
    let timeout = null;

    return function () {
        const context = this;
        const args = arguments;

        if (timeout) clearTimeout(timeout);
        if (!timeout && immediate)
            result = func.apply(context, args);

        timeout = setTimeout(() => {
            result = func.apply(context, args);
        }, wait);

        return result as T;
    };
}