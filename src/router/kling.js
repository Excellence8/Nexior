"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
exports.default = {
    path: '/kling',
    meta: {
        auth: true,
        appName: 'kling'
    },
    component: function () { return Promise.resolve().then(function () { return require('@/layouts/Main.vue'); }); },
    children: [
        {
            path: '',
            name: constants_1.ROUTE_KLING_INDEX,
            component: function () { return Promise.resolve().then(function () { return require('@/pages/kling/Index.vue'); }); }
        }
    ]
};
