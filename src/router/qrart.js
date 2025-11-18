"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
exports.default = {
    path: '/qrart',
    meta: {
        auth: true,
        appName: 'qrart'
    },
    component: function () { return Promise.resolve().then(function () { return require('@/layouts/Main.vue'); }); },
    children: [
        {
            path: '',
            name: constants_1.ROUTE_QRART_INDEX,
            component: function () { return Promise.resolve().then(function () { return require('@/pages/qrart/Index.vue'); }); }
        }
    ]
};
