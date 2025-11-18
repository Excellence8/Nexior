"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var vue_1 = require("vue");
var Message_vue_1 = require("@/components/chat/Message.vue");
var constants_1 = require("@/constants");
var models_1 = require("@/models");
var Composer_vue_1 = require("@/components/chat/Composer.vue");
var ModelSelector_vue_1 = require("@/components/chat/ModelSelector.vue");
var errorCode_1 = require("@/constants/errorCode");
var models_2 = require("@/models");
var Disclaimer_vue_1 = require("@/components/chat/Disclaimer.vue");
var Chat_vue_1 = require("@/layouts/Chat.vue");
var is_1 = require("@/utils/is");
var operators_1 = require("@/operators");
exports.default = (0, vue_1.defineComponent)({
    name: 'ChatConversation',
    components: {
        Composer: Composer_vue_1.default,
        Disclaimer: Disclaimer_vue_1.default,
        ModelSelector: ModelSelector_vue_1.default,
        Message: Message_vue_1.default,
        Layout: Chat_vue_1.default
    },
    data: function () {
        var _this = this;
        var _a, _b;
        return {
            drawer: false,
            question: '',
            references: [],
            upload: false,
            answering: false,
            canceler: undefined,
            messages: ((_b = (_a = this.$store.state.chat.conversations) === null || _a === void 0 ? void 0 : _a.find(function (conversation) { var _a; return conversation.id === ((_a = _this.$route.params.id) === null || _a === void 0 ? void 0 : _a.toString()); })) === null || _b === void 0 ? void 0 : _b.messages) || []
        };
    },
    computed: {
        modelGroup: function () {
            return this.$store.state.chat.modelGroup;
        },
        model: function () {
            return this.$store.state.chat.model;
        },
        conversationId: function () {
            var _a;
            return (_a = this.$route.params.id) === null || _a === void 0 ? void 0 : _a.toString();
        },
        conversation: function () {
            var _this = this;
            var _a;
            return (_a = this.$store.state.chat.conversations) === null || _a === void 0 ? void 0 : _a.find(function (conversation) { return conversation.id === _this.conversationId; });
        },
        service: function () {
            return this.$store.state.chat.service;
        },
        application: function () {
            return this.$store.state.chat.application;
        },
        applications: function () {
            return this.$store.state.chat.applications;
        },
        credential: function () {
            var _a;
            return (_a = this.$store.state.chat) === null || _a === void 0 ? void 0 : _a.credential;
        },
        needApply: function () {
            return this.$store.state.chat.status.getApplications === models_2.Status.Success && !this.application;
        },
        conversations: function () {
            return this.$store.state.chat.conversations;
        },
        initializing: function () {
            return this.$store.state.chat.status.getApplications === models_2.Status.Request;
        }
    },
    watch: {
        references: function (val) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log('references changed', val);
                    return [2 /*return*/];
                });
            });
        },
        modelGroup: function (val) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.debug('modelGroup changed', val);
                    return [2 /*return*/];
                });
            });
        },
        conversationId: function (val) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.debug('conversationId changed', val);
                    return [2 /*return*/];
                });
            });
        }
    },
    mounted: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.onGetService()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.onGetApplication()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.onGetConversations()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    methods: {
        onGetService: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.debug('start onGetService');
                            return [4 /*yield*/, this.$store.dispatch('chat/getService')];
                        case 1:
                            _a.sent();
                            console.debug('end onGetService');
                            return [2 /*return*/];
                    }
                });
            });
        },
        onGetApplication: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.debug('start onGetApplication');
                            return [4 /*yield*/, this.$store.dispatch('chat/getApplications')];
                        case 1:
                            _a.sent();
                            console.debug('end onGetApplication');
                            return [2 /*return*/];
                    }
                });
            });
        },
        onGetConversations: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.debug('start onGetConversations');
                            return [4 /*yield*/, this.$store.dispatch('chat/getConversations')];
                        case 1:
                            _a.sent();
                            console.debug('end onGetConversations');
                            return [2 /*return*/];
                    }
                });
            });
        },
        onDraft: function (question) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.question = question;
                    this.onSubmit();
                    return [2 /*return*/];
                });
            });
        },
        onStop: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (this.canceler) {
                        this.canceler.abort();
                        this.answering = false;
                    }
                    return [2 /*return*/];
                });
            });
        },
        onRestart: function (targetMessage) {
            return __awaiter(this, void 0, void 0, function () {
                var targetIndex, problemMessage, updatedMessages, i, token, question, conversationId;
                var _this = this;
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
                return __generator(this, function (_r) {
                    targetIndex = this.messages.findIndex(function (message) { return message === targetMessage; });
                    problemMessage = this.messages[targetIndex - 1];
                    updatedMessages = [];
                    if (targetIndex !== -1) {
                        // @ts-ignore
                        updatedMessages = this.messages.slice(0, targetIndex - 1);
                        this.messages = this.messages.slice(0, targetIndex);
                        // @ts-ignore
                        this.references = [];
                        if (typeof problemMessage.content === 'string') {
                            this.question = problemMessage.content;
                        }
                        else if (Array.isArray(problemMessage.content)) {
                            for (i = 0; i < (problemMessage === null || problemMessage === void 0 ? void 0 : problemMessage.content.length); i++) {
                                if (problemMessage.content[i].type === 'image_url') {
                                    if (typeof ((_b = (_a = problemMessage === null || problemMessage === void 0 ? void 0 : problemMessage.content) === null || _a === void 0 ? void 0 : _a[i]) === null || _b === void 0 ? void 0 : _b.image_url) === 'string') {
                                        // @ts-ignore
                                        this.references.push((_d = (_c = problemMessage === null || problemMessage === void 0 ? void 0 : problemMessage.content) === null || _c === void 0 ? void 0 : _c[i]) === null || _d === void 0 ? void 0 : _d.image_url);
                                    }
                                    else {
                                        // @ts-ignore
                                        this.references.push((_g = (_f = (_e = problemMessage === null || problemMessage === void 0 ? void 0 : problemMessage.content) === null || _e === void 0 ? void 0 : _e[i]) === null || _f === void 0 ? void 0 : _f.image_url) === null || _g === void 0 ? void 0 : _g.url);
                                    }
                                }
                                if (problemMessage.content[i].type === 'file_url') {
                                    if (typeof ((_j = (_h = problemMessage === null || problemMessage === void 0 ? void 0 : problemMessage.content) === null || _h === void 0 ? void 0 : _h[i]) === null || _j === void 0 ? void 0 : _j.file_url) === 'string') {
                                        // @ts-ignore
                                        this.references.push((_l = (_k = problemMessage === null || problemMessage === void 0 ? void 0 : problemMessage.content) === null || _k === void 0 ? void 0 : _k[i]) === null || _l === void 0 ? void 0 : _l.file_url);
                                    }
                                    else {
                                        // @ts-ignore
                                        this.references.push((_p = (_o = (_m = problemMessage === null || problemMessage === void 0 ? void 0 : problemMessage.content) === null || _m === void 0 ? void 0 : _m[i]) === null || _o === void 0 ? void 0 : _o.file_url) === null || _p === void 0 ? void 0 : _p.url);
                                    }
                                }
                                if (problemMessage.content[i].type === 'text') {
                                    // @ts-ignore
                                    this.question = problemMessage.content[i].text;
                                }
                            }
                        }
                    }
                    console.debug('onRestart!', this.question, JSON.stringify(this.references));
                    token = (_q = this.credential) === null || _q === void 0 ? void 0 : _q.token;
                    question = this.question.trim();
                    // reset question and references
                    if (!token || !question) {
                        console.error('no token or endpoint or question');
                        this.messages.push({
                            error: {
                                code: errorCode_1.ERROR_CODE_NOT_APPLIED
                            },
                            role: constants_1.ROLE_ASSISTANT,
                            state: models_1.IChatMessageState.FAILED
                        });
                        return [2 /*return*/];
                    }
                    conversationId = this.conversationId;
                    operators_1.chatOperator
                        .updateConversation({
                        id: this.conversationId,
                        // @ts-ignore
                        messages: updatedMessages
                    }, {
                        token: token
                    })
                        .then(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.$store.dispatch('chat/setConversation', {
                                        id: conversationId,
                                        messages: this.messages
                                    })];
                                case 1:
                                    _a.sent();
                                    console.debug('finished update conversation', this.messages);
                                    // 3. Send restart questions
                                    console.debug('onRestart', this.question);
                                    return [4 /*yield*/, this.onRequest()];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })
                        .catch(function (error) {
                        _this.handleRequestError(error);
                    });
                    return [2 /*return*/];
                });
            });
        },
        onEdit: function (targetMessage, questionValue) {
            return __awaiter(this, void 0, void 0, function () {
                var targetIndex, token, conversationId;
                var _this = this;
                var _a;
                return __generator(this, function (_b) {
                    targetIndex = this.messages.findIndex(function (message) { return message === targetMessage; });
                    if (targetIndex !== -1) {
                        this.messages = this.messages.slice(0, targetIndex);
                    }
                    this.question = questionValue;
                    token = (_a = this.credential) === null || _a === void 0 ? void 0 : _a.token;
                    // reset question and references
                    if (!token) {
                        console.error('no token or endpoint or question');
                        this.messages.push({
                            error: {
                                code: errorCode_1.ERROR_CODE_NOT_APPLIED
                            },
                            role: constants_1.ROLE_ASSISTANT,
                            state: models_1.IChatMessageState.FAILED
                        });
                        return [2 /*return*/];
                    }
                    conversationId = this.conversationId;
                    operators_1.chatOperator
                        .updateConversation({
                        id: this.conversationId,
                        messages: this.messages
                    }, {
                        token: token
                    })
                        .then(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.$store.dispatch('chat/setConversation', {
                                        id: conversationId,
                                        messages: this.messages
                                    })];
                                case 1:
                                    _a.sent();
                                    console.debug('finished update conversation', this.messages);
                                    // 3. Send edited questions
                                    this.messages.push({
                                        content: this.question,
                                        role: constants_1.ROLE_USER
                                    });
                                    console.debug('onEdit', this.question);
                                    return [4 /*yield*/, this.onRequest()];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })
                        .catch(function (error) {
                        _this.handleRequestError(error);
                    });
                    return [2 /*return*/];
                });
            });
        },
        onNewConversation: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.$router.push({
                        params: {
                            id: ''
                        }
                    });
                    this.messages = [];
                    this.question = '';
                    this.references = [];
                    return [2 /*return*/];
                });
            });
        },
        onRestoreConversation: function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var conversation, model, targetModel, targetModelGroup;
                var _a;
                return __generator(this, function (_b) {
                    console.debug('onRestoreConversation id', id);
                    conversation = (_a = this.conversations) === null || _a === void 0 ? void 0 : _a.find(function (conversation) { return conversation.id === id; });
                    model = conversation === null || conversation === void 0 ? void 0 : conversation.model;
                    console.debug('conversation model', model);
                    targetModel = constants_1.CHAT_MODELS.find(function (m) { return m.name === model; });
                    console.debug('target model', targetModel);
                    targetModelGroup = constants_1.CHAT_MODEL_GROUPS.find(function (g) { return g.name === (targetModel === null || targetModel === void 0 ? void 0 : targetModel.modelGroup); });
                    console.debug('target model group', targetModelGroup);
                    this.$store.dispatch('chat/setModelGroup', targetModelGroup);
                    this.$store.dispatch('chat/setModel', targetModel);
                    console.debug('conversation', conversation);
                    console.debug('conversation messages', this.messages);
                    this.messages = (conversation === null || conversation === void 0 ? void 0 : conversation.messages) || [];
                    this.onScrollDown();
                    return [2 /*return*/];
                });
            });
        },
        onChangeConversation: function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log('onChangeConversation in conversation', id);
                            // stop the current request
                            return [4 /*yield*/, this.onStop()];
                        case 1:
                            // stop the current request
                            _a.sent();
                            // if id is undefined, create a new conversation
                            if (!id) {
                                this.onNewConversation();
                            }
                            else {
                                this.onRestoreConversation(id);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        },
        onSubmit: function () {
            return __awaiter(this, void 0, void 0, function () {
                var content, i;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.references.length > 0) {
                                content = [];
                                content.push({
                                    type: 'text',
                                    text: this.question.trim()
                                });
                                for (i = 0; i < this.references.length; i++) {
                                    if ((0, is_1.isImageUrl)(this.references[i])) {
                                        content.push({
                                            type: 'image_url',
                                            image_url: this.references[i]
                                        });
                                    }
                                    else {
                                        content.push({
                                            type: 'file_url',
                                            file_url: this.references[i]
                                        });
                                    }
                                }
                                this.messages.push({
                                    // @ts-ignore
                                    content: content,
                                    role: constants_1.ROLE_USER
                                });
                            }
                            else {
                                this.messages.push({
                                    content: this.question.trim(),
                                    role: constants_1.ROLE_USER
                                });
                            }
                            console.debug('onSubmit', this.question, this.references);
                            return [4 /*yield*/, this.onRequest()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        },
        // Get answers to questions
        onRequest: function () {
            return __awaiter(this, void 0, void 0, function () {
                var token, question, references, conversationId;
                var _this = this;
                var _a;
                return __generator(this, function (_b) {
                    console.debug('start to get answer', this.messages);
                    token = (_a = this.credential) === null || _a === void 0 ? void 0 : _a.token;
                    question = this.question.trim();
                    references = this.references;
                    console.debug('validated', question, references);
                    // reset question and references
                    this.question = '';
                    this.references = [];
                    if (!token || !question) {
                        console.error('no token or endpoint or question');
                        this.messages.push({
                            error: {
                                code: errorCode_1.ERROR_CODE_NOT_APPLIED
                            },
                            role: constants_1.ROLE_ASSISTANT,
                            state: models_1.IChatMessageState.FAILED
                        });
                        return [2 /*return*/];
                    }
                    conversationId = this.conversationId;
                    this.messages.push({
                        content: '',
                        role: constants_1.ROLE_ASSISTANT,
                        state: models_1.IChatMessageState.PENDING
                    });
                    console.debug('start to get answer', this.messages);
                    this.onScrollDown();
                    // request server to get answer
                    this.answering = true;
                    this.canceler = new AbortController();
                    operators_1.chatOperator
                        .chatConversation({
                        question: question,
                        model: this.model.name,
                        references: references,
                        id: this.conversationId,
                        stateful: true
                    }, {
                        token: token,
                        stream: function (response) {
                            console.debug('stream response', response);
                            var lastMessage = _this.messages[_this.messages.length - 1];
                            _this.messages[_this.messages.length - 1] = {
                                role: constants_1.ROLE_ASSISTANT,
                                content: response.answer,
                                state: (lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.state) !== models_1.IChatMessageState.FINISHED ? models_1.IChatMessageState.ANSWERING : lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.state
                            };
                            conversationId = response === null || response === void 0 ? void 0 : response.id;
                        },
                        signal: this.canceler.signal
                    })
                        .then(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.debug('finished fetch answer', this.messages);
                                    this.messages[this.messages.length - 1].state = models_1.IChatMessageState.FINISHED;
                                    console.debug('finished fetch answer', JSON.stringify(this.messages));
                                    return [4 /*yield*/, this.$store.dispatch('chat/setConversation', {
                                            id: conversationId,
                                            messages: this.messages
                                        })];
                                case 1:
                                    _a.sent();
                                    this.answering = false;
                                    if (!conversationId) return [3 /*break*/, 3];
                                    return [4 /*yield*/, this.$router.push({
                                            params: {
                                                id: conversationId
                                            }
                                        })];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3:
                                    this.onScrollDown();
                                    return [4 /*yield*/, this.$store.dispatch('chat/getConversations')];
                                case 4:
                                    _a.sent();
                                    return [4 /*yield*/, this.$store.dispatch('chat/getApplications')];
                                case 5:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })
                        .catch(function (error) {
                        _this.handleRequestError(error);
                    });
                    return [2 /*return*/];
                });
            });
        },
        handleRequestError: function (error) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.error('error happened', error);
                    if (this.messages && this.messages.length > 0) {
                        this.messages[this.messages.length - 1].state = models_1.IChatMessageState.FAILED;
                    }
                    if (error.name === 'AbortError') {
                        console.error('aborted');
                        return [2 /*return*/];
                    }
                    else if (error instanceof models_1.BaseError) {
                        console.debug('BaseError', error);
                        this.messages[this.messages.length - 1].error = {
                            code: error.code,
                            message: error.detail
                        };
                    }
                    else if (axios_1.default.isCancel(error)) {
                        this.messages[this.messages.length - 1].error = {
                            code: errorCode_1.ERROR_CODE_CANCELED
                        };
                    }
                    else {
                        if (this.messages && this.messages.length > 0) {
                            this.messages[this.messages.length - 1].error = {
                                code: errorCode_1.ERROR_CODE_UNKNOWN
                            };
                        }
                    }
                    this.answering = false;
                    return [2 /*return*/];
                });
            });
        },
        // Swipe the message to the bottom
        onScrollDown: function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    setTimeout(function () {
                        var container = document.querySelector('.messages');
                        if (!container || !_this.messages || _this.messages.length === 0) {
                            return;
                        }
                        container.scrollTop = container === null || container === void 0 ? void 0 : container.scrollHeight;
                    }, 0);
                    return [2 /*return*/];
                });
            });
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    Composer: Composer_vue_1.default,
    Disclaimer: Disclaimer_vue_1.default,
    ModelSelector: ModelSelector_vue_1.default,
    Message: Message_vue_1.default,
    Layout: Chat_vue_1.default
};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['setting']} */ ;
/** @type {__VLS_StyleScopedClasses['setting']} */ ;
/** @type {__VLS_StyleScopedClasses['starter']} */ ;
// CSS variable injection 
// CSS variable injection end 
var __VLS_0 = {}.layout;
/** @type {[typeof __VLS_components.Layout, typeof __VLS_components.layout, typeof __VLS_components.Layout, typeof __VLS_components.layout, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ 'onChangeConversation': {} })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ 'onChangeConversation': {} })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4;
var __VLS_5;
var __VLS_6;
var __VLS_7 = {
    onChangeConversation: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.onChangeConversation($event);
    }
};
var __VLS_8 = {};
__VLS_3.slots.default;
{
    var __VLS_thisSlot = __VLS_3.slots.chat;
    var __VLS_9 = {}.ModelSelector;
    /** @type {[typeof __VLS_components.ModelSelector, typeof __VLS_components.modelSelector, ]} */ ;
    // @ts-ignore
    var __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9(__assign({ 'onModelGroupChanged': {} }, { class: "selector" })));
    var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([__assign({ 'onModelGroupChanged': {} }, { class: "selector" })], __VLS_functionalComponentArgsRest(__VLS_10), false));
    var __VLS_13 = void 0;
    var __VLS_14 = void 0;
    var __VLS_15 = void 0;
    var __VLS_16 = {
        onModelGroupChanged: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.onChangeConversation(undefined);
        }
    };
    var __VLS_12;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ dialogue: true, empty: __VLS_ctx.messages.length === 0 }) }));
    if (__VLS_ctx.messages.length > 0) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "messages" }));
        for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.messages)); _i < _a.length; _i++) {
            var _b = _a[_i], message = _b[0], messageIndex = _b[1];
            var __VLS_17 = {}.message;
            /** @type {[typeof __VLS_components.Message, typeof __VLS_components.message, ]} */ ;
            // @ts-ignore
            var __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17(__assign(__assign(__assign(__assign({ 'onUpdate:question': {} }, { 'onEdit': {} }), { 'onRestart': {} }), { key: (messageIndex), message: (message), messages: (__VLS_ctx.messages), question: (__VLS_ctx.question), application: (__VLS_ctx.application) }), { class: "message" })));
            var __VLS_19 = __VLS_18.apply(void 0, __spreadArray([__assign(__assign(__assign(__assign({ 'onUpdate:question': {} }, { 'onEdit': {} }), { 'onRestart': {} }), { key: (messageIndex), message: (message), messages: (__VLS_ctx.messages), question: (__VLS_ctx.question), application: (__VLS_ctx.application) }), { class: "message" })], __VLS_functionalComponentArgsRest(__VLS_18), false));
            var __VLS_21 = void 0;
            var __VLS_22 = void 0;
            var __VLS_23 = void 0;
            var __VLS_24 = {
                'onUpdate:question': function () {
                    var _a = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _a[_i] = arguments[_i];
                    }
                    var $event = _a[0];
                    if (!(__VLS_ctx.messages.length > 0))
                        return;
                    __VLS_ctx.question = $event;
                }
            };
            var __VLS_25 = {
                onEdit: (__VLS_ctx.onEdit)
            };
            var __VLS_26 = {
                onRestart: (__VLS_ctx.onRestart)
            };
            var __VLS_20;
        }
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "starter" }));
    var __VLS_27 = {}.composer;
    /** @type {[typeof __VLS_components.Composer, typeof __VLS_components.composer, ]} */ ;
    // @ts-ignore
    var __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27(__assign(__assign(__assign({ 'onUpdate:references': {} }, { 'onSubmit': {} }), { 'onStop': {} }), { question: (__VLS_ctx.question), answering: (__VLS_ctx.answering), references: (__VLS_ctx.references) })));
    var __VLS_29 = __VLS_28.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onUpdate:references': {} }, { 'onSubmit': {} }), { 'onStop': {} }), { question: (__VLS_ctx.question), answering: (__VLS_ctx.answering), references: (__VLS_ctx.references) })], __VLS_functionalComponentArgsRest(__VLS_28), false));
    var __VLS_31 = void 0;
    var __VLS_32 = void 0;
    var __VLS_33 = void 0;
    var __VLS_34 = {
        'onUpdate:references': function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.references = $event;
        }
    };
    var __VLS_35 = {
        onSubmit: (__VLS_ctx.onSubmit)
    };
    var __VLS_36 = {
        onStop: (__VLS_ctx.onStop)
    };
    var __VLS_30;
    var __VLS_37 = {}.disclaimer;
    /** @type {[typeof __VLS_components.Disclaimer, typeof __VLS_components.disclaimer, ]} */ ;
    // @ts-ignore
    var __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37(__assign({ class: "disclaimer" })));
    var __VLS_39 = __VLS_38.apply(void 0, __spreadArray([__assign({ class: "disclaimer" })], __VLS_functionalComponentArgsRest(__VLS_38), false));
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['selector']} */ ;
/** @type {__VLS_StyleScopedClasses['dialogue']} */ ;
/** @type {__VLS_StyleScopedClasses['empty']} */ ;
/** @type {__VLS_StyleScopedClasses['messages']} */ ;
/** @type {__VLS_StyleScopedClasses['message']} */ ;
/** @type {__VLS_StyleScopedClasses['starter']} */ ;
/** @type {__VLS_StyleScopedClasses['disclaimer']} */ ;
var __VLS_dollars;
var __VLS_self;
