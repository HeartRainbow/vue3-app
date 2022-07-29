/**
 * 校验小数
 * 
 * @param _rule 校验规则
 * @param value 目标值
 * @param callback 回调函数
 */
export const verifyDecimal = (_rule, value, callback) => {
    const reg = /^[0-9]*([\.][0-9]{1,2})?$/g;
    if (value === '')
        callback(new Error('请输入内容'));
    else if (!reg.test(value))
        callback(new Error('请输入数字'));
    else
        callback();
}