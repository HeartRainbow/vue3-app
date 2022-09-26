
export function tableToJson(el: string) {
    const result = [];
    const obj = document.getElementById(el) as any;
    const rows = obj.rows;
    console.log(result.length)
    for (var i = 1; i < rows.length; i++) { //行
        var griditem = {} as any;
        for (var j = 0; j < rows[i].cells.length; j++) {
            griditem[rows[0].cells[j].id] = rows[i].cells[j].innerHTML;
        }
        result.push(griditem);
    }
    console.log(result)
    return result;
}
