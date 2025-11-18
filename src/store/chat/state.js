"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("@/constants");
var models_1 = require("@/models");
exports.default = (function () {
    return {
        model: constants_1.CHAT_MODEL_GPT_4O,
        modelGroup: constants_1.CHAT_MODEL_GROUP_CHATGPT,
        applications: undefined,
        application: undefined,
        conversations: undefined,
        service: undefined,
        credential: undefined,
        status: {
            getService: models_1.Status.None,
            getApplications: models_1.Status.None,
            getConversations: models_1.Status.None
        }
    };
});
