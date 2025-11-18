"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setApplications = exports.setCurrency = exports.setExchange = exports.setSite = exports.resetUser = exports.resetSite = exports.resetToken = exports.setFingerprint = exports.setAuth = exports.setToken = exports.setUser = void 0;
var setUser = function (state, payload) {
    state.user = __assign(__assign({}, state.user), payload);
};
exports.setUser = setUser;
var setToken = function (state, payload) {
    state.token = __assign(__assign({}, state.token), payload);
};
exports.setToken = setToken;
var setAuth = function (state, payload) {
    state.auth = __assign(__assign({}, state.auth), payload);
};
exports.setAuth = setAuth;
var setFingerprint = function (state, payload) {
    state.fingerprint = payload;
};
exports.setFingerprint = setFingerprint;
var resetToken = function (state) {
    state.token = {};
};
exports.resetToken = resetToken;
var resetSite = function (state) {
    state.site = {};
};
exports.resetSite = resetSite;
var resetUser = function (state) {
    state.user = {};
};
exports.resetUser = resetUser;
var setSite = function (state, payload) {
    state.site = __assign(__assign({}, state.site), payload);
};
exports.setSite = setSite;
var setExchange = function (state, payload) {
    state.exchange = __assign(__assign({}, state.exchange), payload);
};
exports.setExchange = setExchange;
var setCurrency = function (state, payload) {
    state.currency = payload;
};
exports.setCurrency = setCurrency;
var setApplications = function (state, payload) {
    console.debug('set applications for global', payload);
    state.applications = payload;
};
exports.setApplications = setApplications;
exports.default = {
    setUser: exports.setUser,
    setSite: exports.setSite,
    setAuth: exports.setAuth,
    setCurrency: exports.setCurrency,
    setExchange: exports.setExchange,
    resetUser: exports.resetUser,
    setFingerprint: exports.setFingerprint,
    setToken: exports.setToken,
    resetToken: exports.resetToken,
    resetSite: exports.resetSite,
    setApplications: exports.setApplications
};
