"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
exports.default = {
    path: '/headshots',
    meta: {
        auth: true,
        appName: 'headshots'
    },
    component: function () { return Promise.resolve().then(function () { return require('@/layouts/Main.vue'); }); },
    children: [
        {
            path: '',
            name: constants_1.ROUTE_HEADSHOTS_INDEX,
            component: function () { return Promise.resolve().then(function () { return require('@/pages/headshots/Index.vue'); }); }
        }
    ]
};
