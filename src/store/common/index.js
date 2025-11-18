"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var state_1 = require("./state");
var mutations_1 = require("./mutations");
var actions_1 = require("./actions");
var getters_1 = require("./getters");
exports.default = {
    state: state_1.default,
    mutations: mutations_1.default,
    actions: actions_1.default,
    getters: getters_1.default
};
