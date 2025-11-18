"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
exports.default = {
    path: '/flux',
    meta: {
        auth: true,
        appName: 'flux'
    },
    component: function () { return Promise.resolve().then(function () { return require('@/layouts/Main.vue'); }); },
    children: [
        {
            path: '',
            name: constants_1.ROUTE_FLUX_INDEX,
            component: function () { return Promise.resolve().then(function () { return require('@/pages/flux/Index.vue'); }); }
        }
    ]
};
