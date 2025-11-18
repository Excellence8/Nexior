"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setConversations = exports.setService = exports.setApplications = exports.setApplication = exports.setCredential = exports.setModelGroup = exports.setModel = exports.resetAll = void 0;
var resetAll = function (state) {
    state.application = undefined;
    state.conversations = undefined;
    state.credential = undefined;
    state.service = undefined;
};
exports.resetAll = resetAll;
var setModel = function (state, payload) {
    state.model = payload;
};
exports.setModel = setModel;
var setModelGroup = function (state, payload) {
    state.modelGroup = payload;
};
exports.setModelGroup = setModelGroup;
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
var setService = function (state, payload) {
    state.service = payload;
};
exports.setService = setService;
var setConversations = function (state, payload) {
    state.conversations = payload;
};
exports.setConversations = setConversations;
exports.default = {
    setModel: exports.setModel,
    setModelGroup: exports.setModelGroup,
    setService: exports.setService,
    setCredential: exports.setCredential,
    setConversations: exports.setConversations,
    setApplication: exports.setApplication,
    setApplications: exports.setApplications,
    resetAll: exports.resetAll
};
