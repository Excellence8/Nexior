"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeAndSortLists = mergeAndSortLists;
function mergeAndSortLists(list1, list2) {
    var mergedMap = new Map();
    __spreadArray(__spreadArray([], list1, true), list2, true).forEach(function (item) {
        mergedMap.set(item.id, item);
    });
    // @ts-ignore
    return Array.from(mergedMap.values()).sort(function (a, b) { return new Date(a.created_at) - new Date(b.created_at); });
}
