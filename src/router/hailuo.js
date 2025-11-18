"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
exports.default = {
    path: '/hailuo',
    meta: {
        auth: true,
        appName: 'hailuo'
    },
    component: function () { return Promise.resolve().then(function () { return require('@/layouts/Main.vue'); }); },
    children: [
        {
            path: '',
            name: constants_1.ROUTE_HAILUO_INDEX,
            component: function () { return Promise.resolve().then(function () { return require('@/pages/hailuo/Index.vue'); }); }
        }
    ]
};
