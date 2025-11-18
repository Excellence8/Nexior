"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("@/constants");
var constants_2 = require("./constants");
exports.default = {
    path: '/chatgpt',
    meta: {
        modelGroup: constants_1.CHAT_MODEL_GROUP_CHATGPT,
        appName: 'chat'
    },
    component: function () { return Promise.resolve().then(function () { return require('@/layouts/Main.vue'); }); },
    children: [
        {
            path: '',
            redirect: {
                name: constants_2.ROUTE_CHATGPT_CONVERSATION_NEW
            }
        },
        {
            path: 'conversations',
            name: constants_2.ROUTE_CHATGPT_CONVERSATION_NEW,
            component: function () { return Promise.resolve().then(function () { return require('@/pages/chat/Conversation.vue'); }); }
        },
        {
            path: 'conversations/:id',
            name: constants_2.ROUTE_CHATGPT_CONVERSATION,
            component: function () { return Promise.resolve().then(function () { return require('@/pages/chat/Conversation.vue'); }); }
        }
    ]
};
