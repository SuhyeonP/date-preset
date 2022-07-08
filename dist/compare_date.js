"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateOfGap = exports.calculate = exports.compareDate = void 0;
function compareDate(origin, compare, options) {
    var compare1 = new Date(origin);
    var compare2 = new Date(compare);
    var year1 = compare1.getFullYear();
    var year2 = compare2.getFullYear();
    var month1 = compare1.getMonth();
    var month2 = compare2.getMonth();
    var date1 = compare1.getDate();
    var date2 = compare2.getDate();
    if (options && options.except_time) {
        var com1 = new Date(year1, month1, date1, 0, 0, 0).getTime();
        var com2 = new Date(year2, month2, date2, 0, 0, 0).getTime();
        return com1 === com2;
    }
    else {
        return compare1.getTime() === compare2.getTime();
    }
}
exports.compareDate = compareDate;
exports.calculate = {
    round: function (num) {
        return Math.round(num);
    },
    ceil: function (num) {
        return Math.ceil(num);
    },
    floor: function (num) {
        return Math.floor(num);
    },
};
function getDateOfGap(origin, compare, option) {
    var _a;
    var divideType = (_a = option === null || option === void 0 ? void 0 : option.divide) !== null && _a !== void 0 ? _a : 'round';
    var timeGap = Math.abs(origin - compare);
    var secondGap = exports.calculate[divideType](timeGap / 1000);
    var minuteGap = exports.calculate[divideType](secondGap / 60);
    var hourGap = exports.calculate[divideType](minuteGap / 60);
    var dateGap = exports.calculate[divideType](hourGap / 24);
    var gap = 'today';
    if (origin - compare > 0 && dateGap !== 0) {
        gap = 'future';
    }
    else if (origin - compare < 0 && dateGap !== 0) {
        gap = 'past';
    }
    return {
        dateGap: dateGap,
        hourGap: hourGap,
        minuteGap: minuteGap,
        secondGap: secondGap,
        timeGap: timeGap,
        bigger: origin < compare ? compare : origin,
        gap: gap,
    };
}
exports.getDateOfGap = getDateOfGap;
//# sourceMappingURL=compare_date.js.map