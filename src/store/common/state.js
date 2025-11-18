"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var state_1 = require("../chat/state");
var state_2 = require("../midjourney/state");
var state_3 = require("../qrart/state");
var state_4 = require("../luma/state");
var state_5 = require("../pika/state");
var state_6 = require("../kling/state");
var state_7 = require("../veo/state");
var state_8 = require("../sora/state");
var state_9 = require("../pixverse/state");
var state_10 = require("../flux/state");
var state_11 = require("../hailuo/state");
var state_12 = require("../suno/state");
var state_13 = require("../headshots/state");
var state_14 = require("../nanobanana/state");
exports.default = (function () {
    return {
        applications: [],
        fingerprint: undefined,
        currency: 'usd',
        exchange: undefined,
        user: {},
        auth: {
            flow: 'redirect',
            visible: false
        },
        token: {
            access: undefined,
            refresh: undefined,
            expiration: undefined
        },
        status: {
            getService: undefined,
            getApplications: undefined,
            getTasks: undefined
        },
        setting: {},
        site: {},
        chat: (0, state_1.default)(),
        midjourney: (0, state_2.default)(),
        qrart: (0, state_3.default)(),
        luma: (0, state_4.default)(),
        pika: (0, state_5.default)(),
        kling: (0, state_6.default)(),
        sora: (0, state_8.default)(),
        veo: (0, state_7.default)(),
        pixverse: (0, state_9.default)(),
        flux: (0, state_10.default)(),
        hailuo: (0, state_11.default)(),
        suno: (0, state_12.default)(),
        headshots: (0, state_13.default)(),
        nanobanana: (0, state_14.default)()
    };
});
