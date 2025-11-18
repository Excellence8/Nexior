"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHAT_MODEL_GROUPS = exports.CHAT_MODELS = exports.CHAT_MODEL_GROUP_GROK = exports.CHAT_MODEL_GROUP_DEEPSEEK = exports.CHAT_MODEL_GROUP_CHATGPT = exports.CHAT_MODEL_GROK_3_DEEPSEARCH = exports.CHAT_MODEL_GROK_3_REASONER = exports.CHAT_MODEL_GROK_3 = exports.CHAT_MODEL_GROK_4 = exports.CHAT_MODEL_DEEPSEEK_REASONER = exports.CHAT_MODEL_DEEPSEEK_CHAT = exports.CHAT_MODEL_O4_MINI = exports.CHAT_MODEL_O3 = exports.CHAT_MODEL_O1_MINI = exports.CHAT_MODEL_O1 = exports.CHAT_MODEL_GPT_4O_IMAGE = exports.CHAT_MODEL_GPT_4O_MINI = exports.CHAT_MODEL_GPT_4O = exports.CHAT_MODEL_GPT_4_ALL = exports.CHAT_MODEL_GPT_4O_ALL = exports.CHAT_MODEL_GPT_5_MINI = exports.CHAT_MODEL_GPT_5 = exports.CHAT_MODEL_GPT_5_ALL = exports.CHAT_SERVICE_ID = exports.CHAT_MODEL_ICON_DEEPSEEK = exports.CHAT_MODEL_ICON_GROK = exports.CHAT_MODEL_ICON_CHATGPT = exports.CHAT_MODEL_NAME_GROK_3_DEEPSEARCH = exports.CHAT_MODEL_NAME_GROK_3_REASONER = exports.CHAT_MODEL_NAME_GROK_3 = exports.CHAT_MODEL_NAME_GROK_4 = exports.CHAT_MODEL_NAME_DEEPSEEK_REASONER = exports.CHAT_MODEL_NAME_DEEPSEEK_CHAT = exports.CHAT_MODEL_NAME_O4_MINI = exports.CHAT_MODEL_NAME_O3 = exports.CHAT_MODEL_NAME_O1_MINI = exports.CHAT_MODEL_NAME_O1 = exports.CHAT_MODEL_NAME_GPT_4O_IMAGE = exports.CHAT_MODEL_NAME_GPT_4O_MINI = exports.CHAT_MODEL_NAME_GPT_4O = exports.CHAT_MODEL_NAME_GPT_4_ALL = exports.CHAT_MODEL_NAME_GPT_4O_ALL = exports.CHAT_MODEL_NAME_GPT_5_MINI = exports.CHAT_MODEL_NAME_GPT_5 = exports.CHAT_MODEL_NAME_GPT_5_ALL = exports.ROLE_USER = exports.ROLE_ASSISTANT = exports.ROLE_SYSTEM = void 0;
var i18n_1 = require("@/i18n");
exports.ROLE_SYSTEM = 'system';
exports.ROLE_ASSISTANT = 'assistant';
exports.ROLE_USER = 'user';
exports.CHAT_MODEL_NAME_GPT_5_ALL = 'gpt-5-all';
exports.CHAT_MODEL_NAME_GPT_5 = 'gpt-5';
exports.CHAT_MODEL_NAME_GPT_5_MINI = 'gpt-5-mini';
exports.CHAT_MODEL_NAME_GPT_4O_ALL = 'gpt-4o-all';
exports.CHAT_MODEL_NAME_GPT_4_ALL = 'gpt-4-all';
exports.CHAT_MODEL_NAME_GPT_4O = 'gpt-4o';
exports.CHAT_MODEL_NAME_GPT_4O_MINI = 'gpt-4o-mini';
exports.CHAT_MODEL_NAME_GPT_4O_IMAGE = 'gpt-4o-image';
exports.CHAT_MODEL_NAME_O1 = 'o1';
exports.CHAT_MODEL_NAME_O1_MINI = 'o1-mini';
exports.CHAT_MODEL_NAME_O3 = 'o3';
exports.CHAT_MODEL_NAME_O4_MINI = 'o4-mini';
exports.CHAT_MODEL_NAME_DEEPSEEK_CHAT = 'deepseek-v3';
exports.CHAT_MODEL_NAME_DEEPSEEK_REASONER = 'deepseek-r1';
exports.CHAT_MODEL_NAME_GROK_4 = 'grok-4';
exports.CHAT_MODEL_NAME_GROK_3 = 'grok-3';
exports.CHAT_MODEL_NAME_GROK_3_REASONER = 'grok-3-reasoning';
exports.CHAT_MODEL_NAME_GROK_3_DEEPSEARCH = 'grok-3-deepsearch';
exports.CHAT_MODEL_ICON_CHATGPT = 'https://cdn.acedata.cloud/7dljuv.png';
exports.CHAT_MODEL_ICON_GROK = 'https://cdn.acedata.cloud/p1ge98.png';
exports.CHAT_MODEL_ICON_DEEPSEEK = 'https://cdn.acedata.cloud/4rb23t.jpg';
exports.CHAT_SERVICE_ID = 'b1fbcc32-e218-4253-9dc3-4fe600a1bfb9';
exports.CHAT_MODEL_GPT_5_ALL = {
    enabled: true,
    name: exports.CHAT_MODEL_NAME_GPT_5_ALL,
    icon: exports.CHAT_MODEL_ICON_CHATGPT,
    modelGroup: 'chatgpt',
    isFileSupported: true,
    isImageSupported: true,
    getDisplayName: function () { return i18n_1.default.global.t('chat.model.5All'); },
    getDescription: function () { return i18n_1.default.global.t('chat.model.5AllDescription'); }
};
exports.CHAT_MODEL_GPT_5 = {
    enabled: false,
    name: exports.CHAT_MODEL_NAME_GPT_5,
    icon: exports.CHAT_MODEL_ICON_CHATGPT,
    modelGroup: 'chatgpt',
    isFileSupported: false,
    isImageSupported: true,
    getDisplayName: function () { return i18n_1.default.global.t('chat.model.5'); },
    getDescription: function () { return i18n_1.default.global.t('chat.model.5Description'); }
};
exports.CHAT_MODEL_GPT_5_MINI = {
    name: exports.CHAT_MODEL_NAME_GPT_5_MINI,
    icon: exports.CHAT_MODEL_ICON_CHATGPT,
    modelGroup: 'chatgpt',
    isFileSupported: true,
    isImageSupported: true,
    getDisplayName: function () { return i18n_1.default.global.t('chat.model.5Mini'); },
    getDescription: function () { return i18n_1.default.global.t('chat.model.5MiniDescription'); }
};
exports.CHAT_MODEL_GPT_4O_ALL = {
    enabled: true,
    name: exports.CHAT_MODEL_NAME_GPT_4O_ALL,
    icon: exports.CHAT_MODEL_ICON_CHATGPT,
    modelGroup: 'chatgpt',
    isFileSupported: true,
    isImageSupported: true,
    getDisplayName: function () { return i18n_1.default.global.t('chat.model.4OAll'); },
    getDescription: function () { return i18n_1.default.global.t('chat.model.4OAllDescription'); }
};
exports.CHAT_MODEL_GPT_4_ALL = {
    name: exports.CHAT_MODEL_NAME_GPT_4_ALL,
    icon: exports.CHAT_MODEL_ICON_CHATGPT,
    modelGroup: 'chatgpt',
    isFileSupported: true,
    isImageSupported: true,
    getDisplayName: function () { return i18n_1.default.global.t('chat.model.4All'); },
    getDescription: function () { return i18n_1.default.global.t('chat.model.4AllDescription'); }
};
exports.CHAT_MODEL_GPT_4O = {
    name: exports.CHAT_MODEL_NAME_GPT_4O,
    icon: exports.CHAT_MODEL_ICON_CHATGPT,
    modelGroup: 'chatgpt',
    isFileSupported: false,
    isImageSupported: true,
    getDisplayName: function () { return i18n_1.default.global.t('chat.model.4O'); },
    getDescription: function () { return i18n_1.default.global.t('chat.model.4ODescription'); }
};
exports.CHAT_MODEL_GPT_4O_MINI = {
    name: exports.CHAT_MODEL_NAME_GPT_4O_MINI,
    icon: exports.CHAT_MODEL_ICON_CHATGPT,
    modelGroup: 'chatgpt',
    isFileSupported: false,
    isImageSupported: true,
    getDisplayName: function () { return i18n_1.default.global.t('chat.model.4OMini'); },
    getDescription: function () { return i18n_1.default.global.t('chat.model.4OMiniDescription'); }
};
exports.CHAT_MODEL_GPT_4O_IMAGE = {
    name: exports.CHAT_MODEL_NAME_GPT_4O_IMAGE,
    icon: exports.CHAT_MODEL_ICON_CHATGPT,
    modelGroup: 'chatgpt',
    isFileSupported: false,
    isImageSupported: true,
    getDisplayName: function () { return i18n_1.default.global.t('chat.model.4OImage'); },
    getDescription: function () { return i18n_1.default.global.t('chat.model.4OImageDescription'); }
};
exports.CHAT_MODEL_O1 = {
    name: exports.CHAT_MODEL_NAME_O1,
    icon: exports.CHAT_MODEL_ICON_CHATGPT,
    modelGroup: 'chatgpt',
    isFileSupported: true,
    isImageSupported: true,
    getDisplayName: function () { return i18n_1.default.global.t('chat.model.o1'); },
    getDescription: function () { return i18n_1.default.global.t('chat.model.o1Description'); }
};
exports.CHAT_MODEL_O1_MINI = {
    name: exports.CHAT_MODEL_NAME_O1_MINI,
    icon: exports.CHAT_MODEL_ICON_CHATGPT,
    modelGroup: 'chatgpt',
    isFileSupported: true,
    isImageSupported: true,
    getDisplayName: function () { return i18n_1.default.global.t('chat.model.o1Mini'); },
    getDescription: function () { return i18n_1.default.global.t('chat.model.o1MiniDescription'); }
};
exports.CHAT_MODEL_O3 = {
    name: exports.CHAT_MODEL_NAME_O3,
    icon: exports.CHAT_MODEL_ICON_CHATGPT,
    modelGroup: 'chatgpt',
    isFileSupported: true,
    isImageSupported: true,
    getDisplayName: function () { return i18n_1.default.global.t('chat.model.o3'); },
    getDescription: function () { return i18n_1.default.global.t('chat.model.o3Description'); }
};
exports.CHAT_MODEL_O4_MINI = {
    name: exports.CHAT_MODEL_NAME_O4_MINI,
    icon: exports.CHAT_MODEL_ICON_CHATGPT,
    modelGroup: 'chatgpt',
    isFileSupported: true,
    isImageSupported: true,
    getDisplayName: function () { return i18n_1.default.global.t('chat.model.o4Mini'); },
    getDescription: function () { return i18n_1.default.global.t('chat.model.o4MiniDescription'); }
};
exports.CHAT_MODEL_DEEPSEEK_CHAT = {
    enabled: true,
    name: exports.CHAT_MODEL_NAME_DEEPSEEK_CHAT,
    icon: exports.CHAT_MODEL_ICON_DEEPSEEK,
    modelGroup: 'deepseek',
    getDisplayName: function () { return i18n_1.default.global.t('chat.model.deepseekChat'); },
    getDescription: function () { return i18n_1.default.global.t('chat.model.deepseekChatDescription'); }
};
exports.CHAT_MODEL_DEEPSEEK_REASONER = {
    enabled: true,
    name: exports.CHAT_MODEL_NAME_DEEPSEEK_REASONER,
    icon: exports.CHAT_MODEL_ICON_DEEPSEEK,
    modelGroup: 'deepseek',
    getDisplayName: function () { return i18n_1.default.global.t('chat.model.deepseekReasoner'); },
    getDescription: function () { return i18n_1.default.global.t('chat.model.deepseekReasonerDescription'); }
};
exports.CHAT_MODEL_GROK_4 = {
    enabled: true,
    name: exports.CHAT_MODEL_NAME_GROK_4,
    icon: exports.CHAT_MODEL_ICON_GROK,
    modelGroup: 'grok',
    getDisplayName: function () { return i18n_1.default.global.t('chat.model.grok4'); },
    getDescription: function () { return i18n_1.default.global.t('chat.model.grok4Description'); }
};
exports.CHAT_MODEL_GROK_3 = {
    enabled: true,
    name: exports.CHAT_MODEL_NAME_GROK_3,
    icon: exports.CHAT_MODEL_ICON_GROK,
    modelGroup: 'grok',
    getDisplayName: function () { return i18n_1.default.global.t('chat.model.grok3'); },
    getDescription: function () { return i18n_1.default.global.t('chat.model.grok3Description'); }
};
exports.CHAT_MODEL_GROK_3_REASONER = {
    enabled: true,
    name: exports.CHAT_MODEL_NAME_GROK_3_REASONER,
    icon: exports.CHAT_MODEL_ICON_GROK,
    modelGroup: 'grok',
    getDisplayName: function () { return i18n_1.default.global.t('chat.model.grok3Reasoner'); },
    getDescription: function () { return i18n_1.default.global.t('chat.model.grok3ReasonerDescription'); }
};
exports.CHAT_MODEL_GROK_3_DEEPSEARCH = {
    enabled: true,
    name: exports.CHAT_MODEL_NAME_GROK_3_DEEPSEARCH,
    icon: exports.CHAT_MODEL_ICON_GROK,
    modelGroup: 'grok',
    getDisplayName: function () { return i18n_1.default.global.t('chat.model.grok3Deepsearch'); },
    getDescription: function () { return i18n_1.default.global.t('chat.model.grok3DeepsearchDescription'); }
};
exports.CHAT_MODEL_GROUP_CHATGPT = {
    icon: exports.CHAT_MODEL_ICON_CHATGPT,
    name: 'chatgpt',
    getDisplayName: function () { return i18n_1.default.global.t('chat.modelGroup.chatgpt'); },
    getDescription: function () { return i18n_1.default.global.t('chat.modelGroup.chatgptDescription'); },
    models: [
        exports.CHAT_MODEL_GPT_5_ALL,
        exports.CHAT_MODEL_GPT_5,
        exports.CHAT_MODEL_GPT_5_MINI,
        exports.CHAT_MODEL_GPT_4O,
        exports.CHAT_MODEL_GPT_4O_MINI,
        exports.CHAT_MODEL_GPT_4O_ALL,
        exports.CHAT_MODEL_GPT_4_ALL,
        exports.CHAT_MODEL_GPT_4O_IMAGE,
        exports.CHAT_MODEL_O3,
        exports.CHAT_MODEL_O4_MINI,
        exports.CHAT_MODEL_O1_MINI
    ]
};
exports.CHAT_MODEL_GROUP_DEEPSEEK = {
    icon: exports.CHAT_MODEL_ICON_DEEPSEEK,
    name: 'deepseek',
    getDisplayName: function () { return i18n_1.default.global.t('chat.modelGroup.deepseek'); },
    getDescription: function () { return i18n_1.default.global.t('chat.modelGroup.deepseekDescription'); },
    models: [exports.CHAT_MODEL_DEEPSEEK_CHAT, exports.CHAT_MODEL_DEEPSEEK_REASONER]
};
exports.CHAT_MODEL_GROUP_GROK = {
    icon: exports.CHAT_MODEL_ICON_GROK,
    name: 'grok',
    getDisplayName: function () { return i18n_1.default.global.t('chat.modelGroup.grok'); },
    getDescription: function () { return i18n_1.default.global.t('chat.modelGroup.grokDescription'); },
    models: [exports.CHAT_MODEL_GROK_4, exports.CHAT_MODEL_GROK_3, exports.CHAT_MODEL_GROK_3_REASONER, exports.CHAT_MODEL_GROK_3_DEEPSEARCH]
};
exports.CHAT_MODELS = [
    exports.CHAT_MODEL_GPT_5_ALL,
    exports.CHAT_MODEL_GPT_5,
    exports.CHAT_MODEL_GPT_5_MINI,
    exports.CHAT_MODEL_GPT_4O,
    exports.CHAT_MODEL_GPT_4O_ALL,
    exports.CHAT_MODEL_GPT_4_ALL,
    exports.CHAT_MODEL_GPT_4O_MINI,
    exports.CHAT_MODEL_GPT_4O_IMAGE,
    exports.CHAT_MODEL_O3,
    exports.CHAT_MODEL_O4_MINI,
    exports.CHAT_MODEL_DEEPSEEK_CHAT,
    exports.CHAT_MODEL_DEEPSEEK_REASONER,
    exports.CHAT_MODEL_GROK_4,
    exports.CHAT_MODEL_GROK_3,
    exports.CHAT_MODEL_GROK_3_REASONER,
    exports.CHAT_MODEL_GROK_3_DEEPSEARCH
];
exports.CHAT_MODEL_GROUPS = [
    exports.CHAT_MODEL_GROUP_CHATGPT,
    exports.CHAT_MODEL_GROUP_DEEPSEEK,
    exports.CHAT_MODEL_GROUP_GROK
];
