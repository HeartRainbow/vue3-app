
import { utils, writeFile } from "xlsx";

interface ISource {
    /**
     * 工作表名称
     */
    sheetName?: string;
    /**
     * 数据列表
     */
    data: any[];
    /**
     * 过滤字段
     */
    fields?: string[];
    /**
     * 表头名称
     */
    alias: { [key: string]: string };
}

/**
 * JSON数据导出EXECL
 * 
 * @param source 待处理数据
 * @param name 表名
 */
export function jsonToExcel(source: ISource[], execlName = 'execl表格') {
    // 新建book
    const wb = utils.book_new()

    source.forEach((r, index) => {
        let { sheetName = `Sheet${index + 1}`, data = [], fields = [], alias = {} } = r

        // 需要显示的字段
        if (!fields || fields.length === 0) {
            fields = [...new Set(Object.keys(data[0]))]
        } else {
            // 过滤掉fields中没有的字段
            data.map(item => {
                Object.keys(item).forEach(ele => {
                    if (!fields.includes(ele)) delete item[ele]
                })
            })
        }

        // 新建空workbook，然后加入worksheet
        const ws = utils.json_to_sheet(data, {
            header: fields
        })

        // 修改导出表头的名称
        if (alias && JSON.stringify(alias) !== '{}') {
            const range = utils.decode_range(ws['!ref'])
            for (let { c } = range.s; c <= range.e.c; c++) {
                const header = `${utils.encode_col(c)}1`
                ws[header].v = alias[ws[header].v] || ws[header].v
            }
        }

        // 设置每列的列宽，10代表10个字符，注意中文占2个字符
        const colWidth = data.map(row => {
            return Object.values(row).map(val => {
                // 先判断是否为null/undefined
                if (val == null) {
                    return { wch: 10 }
                }
                // 再判断是否为中文
                if (val.toString().charCodeAt(0) > 255) {
                    return { wch: val.toString().length * 2 }
                }
                return { wch: val.toString().length }
            })
        })

        // 以第一行为初始值
        const result = colWidth[0]
        for (let i = 1; i < colWidth.length; i++) {
            for (let j = 0; j < colWidth[i].length; j++) {
                if (result[j].wch < colWidth[i][j].wch) {
                    result[j].wch = colWidth[i][j].wch
                }
            }
        }
        ws['!cols'] = result

        // 生成xlsx文件(book,sheet数据,sheet命名)
        utils.book_append_sheet(wb, ws, sheetName)
    })

    // 写文件(book,xlsx文件名称)
    writeFile(wb, `${execlName}.xlsx`)
}
