"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
exports.default = {
    path: '/auth',
    component: function () { return Promise.resolve().then(function () { return require('@/layouts/Auth.vue'); }); },
    children: [
        {
            path: 'login',
            name: constants_1.ROUTE_AUTH_LOGIN,
            component: function () { return Promise.resolve().then(function () { return require('@/pages/auth/Login.vue'); }); }
        },
        {
            path: 'callback',
            name: constants_1.ROUTE_AUTH_CALLBACK,
            component: function () { return Promise.resolve().then(function () { return require('@/pages/auth/Callback.vue'); }); }
        }
    ]
};
