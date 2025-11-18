"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
exports.default = {
    path: '/suno',
    meta: {
        auth: true,
        appName: 'suno'
    },
    component: function () { return Promise.resolve().then(function () { return require('@/layouts/Main.vue'); }); },
    children: [
        {
            path: '',
            name: constants_1.ROUTE_SUNO_INDEX,
            component: function () { return Promise.resolve().then(function () { return require('@/pages/suno/Index.vue'); }); }
        }
    ]
};
