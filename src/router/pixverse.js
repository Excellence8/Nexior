"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
exports.default = {
    path: '/pixverse',
    meta: {
        auth: true,
        appName: 'pixverse'
    },
    component: function () { return Promise.resolve().then(function () { return require('@/layouts/Main.vue'); }); },
    children: [
        {
            path: '',
            name: constants_1.ROUTE_PIXVERSE_INDEX,
            component: function () { return Promise.resolve().then(function () { return require('@/pages/pixverse/Index.vue'); }); }
        }
    ]
};
