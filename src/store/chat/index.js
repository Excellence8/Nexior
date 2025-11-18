"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chat = void 0;
var state_1 = require("./state");
var actions_1 = require("./actions");
var mutations_1 = require("./mutations");
exports.chat = {
    namespaced: true,
    state: state_1.default,
    mutations: mutations_1.default,
    actions: actions_1.default
};
exports.default = exports.chat;
