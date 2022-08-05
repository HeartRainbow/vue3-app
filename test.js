// const arr = [
//     {
//         min: 50,
//         max: 60
//     },
//     {
//         min: 40,
//         max: 50
//     },
//     {
//         min: 30,
//         max: 40
//     },
//     {
//         min: 20,
//         max: 30
//     },
//     {
//         min: 10,
//         max: 20
//     },
// ]

// function change(val, i) {
//     arr[i - 1].min = val
//     arr[i].max = val;

//     arr.forEach((item, index) => {
//         if(index < i) {
//             arr[i - index - 1].min = arr[i - index].max;
//             if (i - index > 1) {
//                 arr[i - index -1].max = arr[i - index -1].min + 1;
//             }
//         }

//     })
//     arr[0].max = -1;
// }

// change(100, 3);
// console.log(arr);

// // "babel-jest": "^28.1.0",
// // "compression-webpack-plugin": "^5.0.1",
// // "jest": "^28.1.0",
// // "jest-environment-jsdom": "^28.1.0",
// // "@types/jest": "^27.5.1",
// // "vue-jest": "^5.0.0-alpha.10",


const data = [{ "id": 56, "name": "周科", "userArrange": [{ "user_id": 56, "id": 164619, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1656604800, "special": 2, "work_arrange_id": 0, "work_schedule_id": 5 }, { "user_id": 56, "id": 164668, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 2, "work_date": 1656691200, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 164717, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1656777600, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 164766, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1656864000, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 164815, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1656950400, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 164864, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1657036800, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 164913, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1657123200, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 164962, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1657209600, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 165011, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 2, "work_date": 1657296000, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 165060, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1657382400, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 165109, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1657468800, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 165158, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1657555200, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 165207, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1657641600, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 165256, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1657728000, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 165305, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1657814400, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 165354, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 2, "work_date": 1657900800, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 165403, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1657987200, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 165452, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1658073600, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 165501, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1658160000, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 165550, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1658246400, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 165599, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1658332800, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 165648, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1658419200, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 165697, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 2, "work_date": 1658505600, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 165746, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1658592000, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 165795, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1658678400, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 165844, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1658764800, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 165893, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1658851200, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 165942, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1658937600, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 165991, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1659024000, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 166040, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 2, "work_date": 1659110400, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }, { "user_id": 56, "id": 166089, "attendance_day": 26, "attendance_month": "2022-07", "work_status": 1, "work_date": 1659196800, "special": 2, "work_arrange_id": 0, "work_schedule_id": 1 }], "attendance_day": 26, "attendance_month": "2022-07" }];

const newData = data.reduce((memo, cr) => {
    const item = {
        name: cr.name,
        attendance_day: cr.attendance_day,
        id: cr.id,
        ...(cr.userArrange.reduce((prev, r) => {
            prev[dateFormat(r.work_date * 1000)] = {
                id: r.id,
                special: r.special,
                user_id: r.user_id,
                work_arrange_id: r.work_arrange_id,
                work_date: r.work_date,
                work_schedule_id: r.work_schedule_id,
                work_status: r.work_status
            }
            return prev
        }, {})),
        attendance_month: cr.attendance_month,
    }
    memo.push(item)
    return memo;
}, [])

console.log(newData);

//根据某年某月计算出具体日期
function getDaysInMonth(year, month) {
    const daysOfMonth = [];
    month = parseInt(month, 10);
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    for (let i = 1; i <= lastDayOfMonth; i++) {
        if (i < 10) {
            daysOfMonth.push(year + "-" + month + "-" + "0" + i);
        } else {
            daysOfMonth.push(year + "-" + month + "-" + i);
        }
    }
    return daysOfMonth;
}

console.log(getDaysInMonth('2022', '2'));


//根据输入的年月获取某年月的总天数
function getDaysInsMonth(year, month) {
    month = parseInt(month, 10);  //parseInt(number,type)这个函数后面如果不跟第2个参数来表示进制的话，默认是10进制。
    const temp = new Date(year, month, 0);
    console.log(temp.getDate());
    return temp.getDate();
}


//根据某年某月计算出具体日期
// function getDaysInMonth(year, month) {
//     const daysOfMonth = [];
//     month = parseInt(month, 10);
//     const lastDayOfMonth = new Date(year, month, 0).getDate();
//     for (let i = 1; i <= lastDayOfMonth; i++) {
//         if (i < 10) {
//             daysOfMonth.push("0" + i); //判断是部否小于10，如果小于加0，，例如“01”
//         } else {
//             daysOfMonth.push(i + "");
//         }
//     }
//     return daysOfMonth;
// }


/**
 * 日期格式化
 * @param Number time 
 */
function dateFormat(time) {
    const t = new Date(time)
    // 日期格式
    const format = 'Y-m-d'
    const year = t.getFullYear()
    // 由于 getMonth 返回值会比正常月份小 1
    const month = t.getMonth() + 1
    const day = t.getDate()
    const hours = t.getHours()
    const minutes = t.getMinutes()
    const seconds = t.getSeconds()
    const hash = {
        'Y': year,
        'm': month < 10 ? `0${month}` : month,
        'd': day < 10 ? `0${day}` : day,
        'h': hours,
        'i': minutes,
        's': seconds
    }
    return format.replace(/\w/g, o => {
        return hash[o]
    })
}