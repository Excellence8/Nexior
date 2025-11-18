"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMode = void 0;
/**
 * Get mode of app, return development or production
 * @returns
 */
var getMode = function () {
    return import.meta.env.MODE;
};
exports.getMode = getMode;
