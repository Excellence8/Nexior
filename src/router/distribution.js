"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
exports.default = {
    path: '/distribution',
    meta: {
        auth: true
    },
    component: function () { return Promise.resolve().then(function () { return require('@/layouts/Main.vue'); }); },
    children: [
        {
            path: '',
            name: constants_1.ROUTE_DISTRIBUTION_INDEX,
            component: function () { return Promise.resolve().then(function () { return require('@/pages/distribution/Index.vue'); }); }
        },
        {
            path: 'history',
            name: constants_1.ROUTE_DISTRIBUTION_HISTORY,
            component: function () { return Promise.resolve().then(function () { return require('@/pages/distribution/History.vue'); }); }
        },
        {
            path: 'invitees',
            name: constants_1.ROUTE_DISTRIBUTION_INVITEES,
            component: function () { return Promise.resolve().then(function () { return require('@/pages/distribution/Invitees.vue'); }); }
        }
    ]
};
