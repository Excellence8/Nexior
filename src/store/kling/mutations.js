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
exports.setTasks = exports.setTasksActive = exports.setTasksTotal = exports.setTasksItems = exports.setConfig = exports.setApplications = exports.setApplication = exports.setCredential = exports.setService = exports.resetAll = void 0;
var resetAll = function (state) {
    state.service = undefined;
    state.application = undefined;
    state.config = undefined;
    state.credential = undefined;
    state.tasks = undefined;
};
exports.resetAll = resetAll;
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
var setTasksActive = function (state, payload) {
    var newPayload = __assign(__assign({}, state.tasks), { active: payload });
    state.tasks = newPayload;
};
exports.setTasksActive = setTasksActive;
var setTasks = function (state, payload) {
    state.tasks = payload;
};
exports.setTasks = setTasks;
exports.default = {
    setTasks: exports.setTasks,
    setApplication: exports.setApplication,
    setApplications: exports.setApplications,
    setConfig: exports.setConfig,
    setCredential: exports.setCredential,
    setService: exports.setService,
    setTasksActive: exports.setTasksActive,
    setTasksItems: exports.setTasksItems,
    setTasksTotal: exports.setTasksTotal,
    resetAll: exports.resetAll
};
