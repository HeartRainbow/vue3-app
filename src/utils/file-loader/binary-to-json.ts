import { read, utils } from "xlsx";

/**
 * 二进制文件转为JSON格式
 * 
 * @param el 类名/ID名称
 * @returns 
 */
export function binaryToJson(el: string) {
    return new Promise((resolve, reject) => {
        //监听input框的变动，选中一个新的文件会触发change事件
        //获取到选中的文件
        let file = (document.querySelector(el) as any).files[0];
        let type = file.name.split(".");
        if (type[type.length - 1] !== "xlsx" && type[type.length - 1] !== "xls") {
            reject("只能选择excel文件导入");
        }
        const result = [];
        const reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = e => {
            const data = e.target.result;
            const excel = read(data, {
                type: "binary"
            });
            for (let i = 0; i < excel.SheetNames.length; i++) {
                const newData = utils.sheet_to_json(excel.Sheets[excel.SheetNames[i]]);
                // result.push(...newData);
                result.push({
                    name: excel.SheetNames[i],
                    rows: newData
                });
            }
            resolve(result);
        };
        reader.onerror = () => {
            reject("转义错误");
        };
        // 一次change事件后必须清空input(type="file")，否则第二次选择相同文件不会再次触发change事件;
        (document.querySelector(el) as any).value = null;
    });
};