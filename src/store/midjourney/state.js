"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("@/models");
exports.default = (function () {
    return {
        service: undefined,
        application: undefined,
        applications: undefined,
        tasks: {
            items: undefined,
            total: undefined
        },
        credential: undefined,
        config: {},
        status: {
            getService: models_1.Status.None,
            getApplications: models_1.Status.None,
            getTasks: models_1.Status.None
        }
    };
});
