"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDateTimeInfo = exports.date_preset = exports.dateRange = exports.selectDays = void 0;
var now = new Date();
var month = now.getMonth();
var year = now.getFullYear();
var date = now.getDate();
function getMonday(d) {
    var temp = new Date(d);
    var day = temp.getDay();
    var sunday = new Date(temp.setDate(temp.getDate() - day + (day === 0 ? -6 : 1)));
    sunday.setHours(0);
    sunday.setMinutes(0);
    sunday.setSeconds(0);
    return sunday;
}
var thisQuarter = function (m) {
    var thisQuarterMonth = 0;
    switch (m) {
        case 0:
        case 1:
        case 2:
            thisQuarterMonth = 0;
            break;
        case 3:
        case 4:
        case 5:
            thisQuarterMonth = 3;
            break;
        case 6:
        case 7:
        case 8:
            thisQuarterMonth = 6;
            break;
        case 9:
        case 10:
        case 11:
        default:
            thisQuarterMonth = 9;
            break;
    }
    return new Date(year, thisQuarterMonth, 1, 0, 0);
};
exports.selectDays = {
    last7: '7일',
    last14: '14일',
    last30: '30일',
    last90: '90일',
    last6m: '6개월',
    last1y: '1년',
};
exports.dateRange = {
    today: [new Date(year, month, date), new Date(year, month, date)],
    yesterday: [new Date(year, month, date - 1), new Date(year, month, date - 1)],
    last7: [new Date(year, month, date - 7), new Date(year, month, date - 1)],
    last14: [new Date(year, month, date - 14), new Date(year, month, date - 1)],
    last30: [new Date(year, month, date - 30), new Date(year, month, date - 1)],
    last90: [new Date(year, month, date - 90), new Date(year, month, date - 1)],
    thisWeek: [getMonday(new Date()), new Date(year, month, date)],
    thisMonth: [new Date(year, month, 1), new Date(year, month, date)],
    thisQuarter: [thisQuarter(month), new Date(year, month, date)],
    last6m: [new Date(year, month - 6, date), new Date(year, month, date - 1)],
    last1y: [new Date(year - 1, month, date), new Date(year, month, date - 1)],
};
exports.date_preset = {
    date_range: [
        { label: '오늘', value: 'today' },
        { label: '어제', value: 'yesterday' },
        { label: '지난 7일', value: 'last7' },
        { label: '지난 30일', value: 'last30' },
        { label: '지난 90일', value: 'last90' },
        { label: '이번 주(오늘까지)', value: 'thisWeek' },
        { label: '이번 달(오늘까지)', value: 'thisMonth' },
        { label: '이번 분기(오늘까지)', value: 'thisQuarter' },
    ],
};
function makeDateTimeInfo(inputDate) {
    var copy = new Date(inputDate);
    var _a = new Intl.DateTimeFormat('ko', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })
        .format(copy)
        .split('. '), year = _a[0], month = _a[1], date = _a[2], time = _a[3];
    return "".concat(year, "-").concat(month, "-").concat(date, " ").concat(time);
}
exports.makeDateTimeInfo = makeDateTimeInfo;
//# sourceMappingURL=presetDate.js.map