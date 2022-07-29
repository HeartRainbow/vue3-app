/**
 * 表单检验并定位到第一个验证错误
 * 
 * @param formName ref绑定的表单名称
 */
export function formValidate(formName: string) {
    let validated = false;
    this.$refs[formName].validate(valid => {
        if (valid) {
            validated = true;
        } else {
            this.$nextTick(() => {
                let isError = document.getElementsByClassName("is-error");
                isError[0].querySelector("input").focus();
            });
            validated = false;
        }
    });
    return validated;
}