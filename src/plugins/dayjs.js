"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dayjs_1 = require("dayjs");
exports.default = {
    install: function (app, options) {
        app.config.globalProperties.$dayjs = {
            format: function (v, formatString) {
                return v ? (0, dayjs_1.default)(v).format(formatString || options.formatString) : '';
            }
        };
    }
};
