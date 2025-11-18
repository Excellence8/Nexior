"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
exports.default = {
    path: '/console',
    meta: {
        auth: true
    },
    component: function () { return Promise.resolve().then(function () { return require('@/layouts/Console.vue'); }); },
    children: [
        {
            path: '',
            name: constants_1.ROUTE_CONSOLE_ROOT,
            redirect: {
                name: constants_1.ROUTE_CONSOLE_APPLICATION_LIST
            }
        },
        {
            path: 'orders',
            name: constants_1.ROUTE_CONSOLE_ORDER_LIST,
            component: function () { return Promise.resolve().then(function () { return require('@/pages/console/order/List.vue'); }); }
        },
        {
            path: 'orders/:id',
            name: constants_1.ROUTE_CONSOLE_ORDER_DETAIL,
            component: function () { return Promise.resolve().then(function () { return require('@/pages/console/order/Detail.vue'); }); }
        },
        {
            path: 'applications',
            name: constants_1.ROUTE_CONSOLE_APPLICATION_LIST,
            component: function () { return Promise.resolve().then(function () { return require('@/pages/console/application/List.vue'); }); }
        },
        {
            path: 'applications/:id/extra',
            name: constants_1.ROUTE_CONSOLE_APPLICATION_EXTRA,
            component: function () { return Promise.resolve().then(function () { return require('@/pages/console/application/Extra.vue'); }); }
        },
        {
            path: 'applications/:id/subscribe',
            name: constants_1.ROUTE_CONSOLE_APPLICATION_SUBSCRIBE,
            component: function () { return Promise.resolve().then(function () { return require('@/pages/console/application/Subscribe.vue'); }); }
        },
        {
            path: 'usages',
            name: constants_1.ROUTE_CONSOLE_USAGE_LIST,
            component: function () { return Promise.resolve().then(function () { return require('@/pages/console/usage/List.vue'); }); }
        }
    ]
};
