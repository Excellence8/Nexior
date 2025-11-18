"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nanobanana = void 0;
var actions_1 = require("./actions");
var mutations_1 = require("./mutations");
var state_1 = require("./state");
exports.nanobanana = {
    namespaced: true,
    state: state_1.default,
    mutations: mutations_1.default,
    actions: actions_1.default
};
exports.default = exports.nanobanana;
