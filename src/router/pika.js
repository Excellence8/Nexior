"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
exports.default = {
    path: '/pika',
    meta: {
        auth: true,
        appName: 'pika'
    },
    component: function () { return Promise.resolve().then(function () { return require('@/layouts/Main.vue'); }); },
    children: [
        {
            path: '',
            name: constants_1.ROUTE_PIKA_INDEX,
            component: function () { return Promise.resolve().then(function () { return require('@/pages/pika/Index.vue'); }); }
        }
    ]
};
