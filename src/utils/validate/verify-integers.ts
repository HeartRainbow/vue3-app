/**
 * 校验整数
 * 
 * @param _rule 校验规则
 * @param value 目标值
 * @param callback 回调函数
 */
export const verifyIntegers = (_rule, value, callback) => {
    const reg = /^[+-]{0,1}(\d+)$/g;
    if (value === '')
        callback(new Error('请输入内容'));
    else if (!reg.test(value))
        callback(new Error('请输入整数'));
    else
        callback();
}