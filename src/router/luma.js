"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
exports.default = {
    path: '/luma',
    meta: {
        auth: true,
        appName: 'luma'
    },
    component: function () { return Promise.resolve().then(function () { return require('@/layouts/Main.vue'); }); },
    children: [
        {
            path: '',
            name: constants_1.ROUTE_LUMA_INDEX,
            component: function () { return Promise.resolve().then(function () { return require('@/pages/luma/Index.vue'); }); }
        }
    ]
};
