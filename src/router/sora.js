"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
exports.default = {
    path: '/sora',
    meta: {
        auth: true,
        appName: 'sora'
    },
    component: function () { return Promise.resolve().then(function () { return require('@/layouts/Main.vue'); }); },
    children: [
        {
            path: '',
            name: constants_1.ROUTE_SORA_INDEX,
            component: function () { return Promise.resolve().then(function () { return require('@/pages/sora/Index.vue'); }); }
        }
    ]
};
