/**
 * 根据某年某月计算出具体日期
 * 
 * @param year 年份
 * @param month 月份
 * @returns 
 */
 export function daysOfMonth(year: string, month: string) {
    const daysOfMonth = [];
    const mon = parseInt(month, 10);
    const lastDayOfMonth = new Date(Number(year), mon, 0).getDate();
    for (let i = 1; i <= lastDayOfMonth; i++) {
        if (i < 10) {
            daysOfMonth.push(year + "-" + month + "-" + "0" + i);
        } else {
            daysOfMonth.push(year + "-" + month + "-" + i);
        }
    }
    return daysOfMonth;
}