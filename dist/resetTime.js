"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetOnlyTime = void 0;
function resetOnlyTime(date) {
    var result = new Date(date);
    result.setHours(0);
    result.setMinutes(0);
    result.setSeconds(0);
    return result;
}
exports.resetOnlyTime = resetOnlyTime;
//# sourceMappingURL=resetTime.js.map