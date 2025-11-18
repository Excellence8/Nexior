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
exports.setTasks = exports.setConfig = exports.setApplications = exports.setApplication = exports.setCredential = exports.setService = exports.setTasksTotal = exports.setTasksItems = exports.resetAll = void 0;
var resetAll = function (state) {
    state.application = undefined;
    state.applications = undefined;
    state.config = {};
    state.tasks = {
        items: undefined,
        total: undefined
    };
};
exports.resetAll = resetAll;
var setTasksItems = function (state, payload) {
    var newPayload = __assign(__assign({}, state.tasks), { items: payload });
    state.tasks = newPayload;
};
exports.setTasksItems = setTasksItems;
var setTasksTotal = function (state, payload) {
    var newPayload = __assign(__assign({}, state.tasks), { total: payload });
    state.tasks = newPayload;
};
exports.setTasksTotal = setTasksTotal;
var setService = function (state, payload) {
    state.service = payload;
};
exports.setService = setService;
var setCredential = function (state, payload) {
    state.credential = payload;
};
exports.setCredential = setCredential;
var setApplication = function (state, payload) {
    state.application = payload;
};
exports.setApplication = setApplication;
var setApplications = function (state, payload) {
    state.applications = payload;
};
exports.setApplications = setApplications;
var setConfig = function (state, payload) {
    state.config = payload;
};
exports.setConfig = setConfig;
var setTasks = function (state, payload) {
    state.tasks = payload;
};
exports.setTasks = setTasks;
exports.default = {
    setApplication: exports.setApplication,
    setApplications: exports.setApplications,
    setConfig: exports.setConfig,
    setTasksItems: exports.setTasksItems,
    setTasksTotal: exports.setTasksTotal,
    setCredential: exports.setCredential,
    setService: exports.setService,
    setTasks: exports.setTasks,
    resetAll: exports.resetAll
};
