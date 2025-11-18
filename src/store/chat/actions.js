"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConversations = exports.setConversations = exports.setConversation = exports.setModelGroup = exports.setModel = exports.getApplications = exports.getService = exports.createCredential = exports.setCredential = exports.setService = exports.setApplications = exports.setApplication = exports.resetAll = void 0;
var operators_1 = require("@/operators");
var models_1 = require("@/models");
var constants_1 = require("@/constants");
var resetAll = function (_a) {
    var commit = _a.commit;
    commit('resetAll');
};
exports.resetAll = resetAll;
var setApplication = function (_a, payload_1) { return __awaiter(void 0, [_a, payload_1], void 0, function (_b, payload) {
    var credential;
    var _c;
    var commit = _b.commit, dispatch = _b.dispatch;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                console.debug('set application', payload);
                commit('setApplication', payload);
                console.debug('application is set');
                if (!payload) {
                    console.debug('application is null, return');
                    return [2 /*return*/];
                }
                credential = (_c = payload === null || payload === void 0 ? void 0 : payload.credentials) === null || _c === void 0 ? void 0 : _c.find(function (credential) { return (credential === null || credential === void 0 ? void 0 : credential.host) === window.location.origin; });
                if (!credential) return [3 /*break*/, 1];
                console.debug('credential exists, set credential', credential);
                commit('setCredential', credential);
                return [3 /*break*/, 3];
            case 1:
                console.debug('credential not exists, start to create credential for application', payload);
                return [4 /*yield*/, dispatch('createCredential')];
            case 2:
                _d.sent();
                _d.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.setApplication = setApplication;
var setApplications = function (_a, payload_1) { return __awaiter(void 0, [_a, payload_1], void 0, function (_b, payload) {
    var commit = _b.commit;
    return __generator(this, function (_c) {
        console.debug('set applications for chat', payload);
        commit('setApplications', payload);
        return [2 /*return*/];
    });
}); };
exports.setApplications = setApplications;
var setService = function (_a, payload_1) { return __awaiter(void 0, [_a, payload_1], void 0, function (_b, payload) {
    var commit = _b.commit;
    return __generator(this, function (_c) {
        console.debug('set service for chat', payload);
        commit('setService', payload);
        return [2 /*return*/];
    });
}); };
exports.setService = setService;
var setCredential = function (_a, payload_1) { return __awaiter(void 0, [_a, payload_1], void 0, function (_b, payload) {
    var commit = _b.commit;
    return __generator(this, function (_c) {
        console.debug('set credential', payload);
        commit('setCredential', payload);
        return [2 /*return*/];
    });
}); };
exports.setCredential = setCredential;
var createCredential = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var application, credential;
    var commit = _b.commit, state = _b.state;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                application = state.application;
                console.debug('prepare to create credential for application for chat', application);
                if (!application) {
                    console.error('Application not found');
                    return [2 /*return*/, undefined];
                }
                console.debug('creating create credential for application for chat', application);
                return [4 /*yield*/, operators_1.credentialOperator.create({
                        application_id: application === null || application === void 0 ? void 0 : application.id,
                        host: window.location.origin
                    })];
            case 1:
                credential = (_c.sent()).data;
                console.debug('created credential success', credential);
                commit('setCredential', credential);
                console.debug('end createCredential');
                return [2 /*return*/, credential];
        }
    });
}); };
exports.createCredential = createCredential;
var getService = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var service, error_1;
    var commit = _b.commit, state = _b.state;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                state.status.getService = models_1.Status.Request;
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, operators_1.serviceOperator.get(constants_1.CHAT_SERVICE_ID)];
            case 2:
                service = (_c.sent()).data;
                state.status.getService = models_1.Status.Success;
                commit('setService', service);
                return [2 /*return*/, service];
            case 3:
                error_1 = _c.sent();
                state.status.getService = models_1.Status.Error;
                commit('setService', undefined);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getService = getService;
var getApplications = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var applications, error_2;
    var _c;
    var commit = _b.commit, state = _b.state, rootState = _b.rootState;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                console.debug('start to get applications for chat');
                state.status.getApplications = models_1.Status.Request;
                _d.label = 1;
            case 1:
                _d.trys.push([1, 3, , 4]);
                return [4 /*yield*/, operators_1.applicationOperator.getAll({
                        user_id: (_c = rootState === null || rootState === void 0 ? void 0 : rootState.user) === null || _c === void 0 ? void 0 : _c.id,
                        service_id: constants_1.CHAT_SERVICE_ID
                    })];
            case 2:
                applications = (_d.sent()).data;
                console.debug('get applications success for chat', applications);
                state.status.getApplications = models_1.Status.Success;
                commit('setApplications', applications.items);
                console.debug('set applications for chat', applications.items);
                return [2 /*return*/, applications.items];
            case 3:
                error_2 = _d.sent();
                console.error('get applications failed for chat', error_2);
                state.status.getApplications = models_1.Status.Error;
                commit('setApplications', undefined);
                commit('setApplication', undefined);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getApplications = getApplications;
var setModel = function (_a, payload_1) { return __awaiter(void 0, [_a, payload_1], void 0, function (_b, payload) {
    var commit = _b.commit;
    return __generator(this, function (_c) {
        commit('setModel', payload);
        return [2 /*return*/];
    });
}); };
exports.setModel = setModel;
var setModelGroup = function (_a, payload_1) { return __awaiter(void 0, [_a, payload_1], void 0, function (_b, payload) {
    var commit = _b.commit;
    return __generator(this, function (_c) {
        commit('setModelGroup', payload);
        return [2 /*return*/];
    });
}); };
exports.setModelGroup = setModelGroup;
var setConversation = function (_a, payload_1) { return __awaiter(void 0, [_a, payload_1], void 0, function (_b, payload) {
    var conversations, index;
    var commit = _b.commit, state = _b.state;
    return __generator(this, function (_c) {
        console.debug('set conversation', payload);
        conversations = state.conversations || [];
        index = conversations === null || conversations === void 0 ? void 0 : conversations.findIndex(function (conversation) { return conversation.id === payload.id; });
        if (index > -1) {
            conversations[index] = payload;
        }
        else {
            conversations === null || conversations === void 0 ? void 0 : conversations.unshift(payload);
        }
        commit('setConversations', conversations);
        console.debug('set conversation success', conversations);
        return [2 /*return*/];
    });
}); };
exports.setConversation = setConversation;
var setConversations = function (_a, payload_1) { return __awaiter(void 0, [_a, payload_1], void 0, function (_b, payload) {
    var commit = _b.commit;
    return __generator(this, function (_c) {
        console.debug('set conversations', payload);
        commit('setConversations', payload);
        return [2 /*return*/];
    });
}); };
exports.setConversations = setConversations;
var getConversations = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var credential, token, data, error_3;
    var _c, _d;
    var commit = _b.commit, state = _b.state, rootState = _b.rootState;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                state.status.getConversations = models_1.Status.Request;
                credential = state.credential;
                console.debug('credential', credential);
                token = credential === null || credential === void 0 ? void 0 : credential.token;
                if (!token) {
                    state.status.getConversations = models_1.Status.Error;
                    return [2 /*return*/, []];
                }
                _e.label = 1;
            case 1:
                _e.trys.push([1, 3, , 4]);
                return [4 /*yield*/, operators_1.chatOperator.getConversations({
                        userId: (_c = rootState.user) === null || _c === void 0 ? void 0 : _c.id
                    }, {
                        token: token
                    })];
            case 2:
                data = (_e.sent()).data;
                console.debug('get conversations success', (_d = data === null || data === void 0 ? void 0 : data.items) === null || _d === void 0 ? void 0 : _d.length);
                commit('setConversations', data.items);
                return [2 /*return*/, data.items];
            case 3:
                error_3 = _e.sent();
                state.status.getConversations = models_1.Status.Error;
                commit('setConversations', []);
                return [2 /*return*/, []];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getConversations = getConversations;
exports.default = {
    resetAll: exports.resetAll,
    createCredential: exports.createCredential,
    setModel: exports.setModel,
    setModelGroup: exports.setModelGroup,
    getService: exports.getService,
    setService: exports.setService,
    setCredential: exports.setCredential,
    setApplication: exports.setApplication,
    setApplications: exports.setApplications,
    getApplications: exports.getApplications,
    setConversation: exports.setConversation,
    setConversations: exports.setConversations,
    getConversations: exports.getConversations
};
