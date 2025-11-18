"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClient = void 0;
var store_1 = require("@/store");
var utils_1 = require("@/utils");
var axios_1 = require("axios");
var qs_1 = require("qs");
var typescript_cookie_1 = require("typescript-cookie");
var httpClient = axios_1.default.create({
    baseURL: "".concat((0, utils_1.getBaseUrlPlatform)(), "/api/v1"),
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
    },
    paramsSerializer: function (params) {
        return qs_1.default.stringify(params, { arrayFormat: 'repeat' });
    }
});
exports.httpClient = httpClient;
httpClient.interceptors.request.use(function (config) {
    var _a, _b;
    var accessToken = (_a = store_1.default.getters.token) === null || _a === void 0 ? void 0 : _a.access;
    var userId = (_b = store_1.default.getters.user) === null || _b === void 0 ? void 0 : _b.id;
    var fingerprint = store_1.default.getters.fingerprint;
    var locale = (0, typescript_cookie_1.getCookie)('LOCALE');
    console.debug('userId', userId);
    console.debug('fingerprint', fingerprint);
    if (accessToken) {
        config.headers['Authorization'] = "Bearer ".concat(accessToken);
    }
    if (locale) {
        config.headers['accept-language'] = locale;
    }
    if (fingerprint) {
        config.headers['x-fingerprint'] = fingerprint;
    }
    if (userId) {
        config.headers['x-user-id'] = userId;
    }
    return config;
});
httpClient.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    var _a;
    if (((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.status) === 401) {
        store_1.default.dispatch('login');
    }
    return Promise.reject(error);
});
