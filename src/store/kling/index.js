"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kling = void 0;
var actions_1 = require("./actions");
var mutations_1 = require("./mutations");
var state_1 = require("./state");
exports.kling = {
    namespaced: true,
    state: state_1.default,
    mutations: mutations_1.default,
    actions: actions_1.default
};
exports.default = exports.kling;
