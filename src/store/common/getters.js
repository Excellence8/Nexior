"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fingerprint = exports.site = exports.setting = exports.token = exports.user = exports.authenticated = void 0;
var authenticated = function (state) {
    return !!state.token.access;
};
exports.authenticated = authenticated;
var user = function (state) {
    return state.user;
};
exports.user = user;
var token = function (state) {
    return state.token;
};
exports.token = token;
var setting = function (state) {
    return state.setting;
};
exports.setting = setting;
var site = function (state) {
    return state.site;
};
exports.site = site;
var fingerprint = function (state) {
    return state.fingerprint;
};
exports.fingerprint = fingerprint;
exports.default = {
    authenticated: exports.authenticated,
    user: exports.user,
    token: exports.token,
    site: exports.site,
    fingerprint: exports.fingerprint,
    setting: exports.setting
};
