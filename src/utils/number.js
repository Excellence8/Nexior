"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNumberFormat = useNumberFormat;
exports.useFormatDuring = useFormatDuring;
function useNumberFormat(number) {
    if (number > 100000000) {
        return Number((number / 100000000).toFixed(1)) + ' 亿';
    }
    if (number > 10000000) {
        return Number((number / 10000000).toFixed(1)) + ' 千万';
    }
    if (number > 10000) {
        return Number((number / 10000).toFixed(1)) + ' 万';
    }
    return number;
}
function useFormatDuring(during) {
    var s = Math.floor(during) % 60;
    during = Math.floor(during / 60);
    var i = during % 60;
    var ii = i < 10 ? "0".concat(i) : i;
    var ss = s < 10 ? "0".concat(s) : s;
    return ii + ':' + ss;
}
