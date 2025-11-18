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
exports.getTasks = exports.setTasksActive = exports.setTasksTotal = exports.setTasksItems = exports.setTasks = exports.setConfig = exports.getApplications = exports.getService = exports.createCredential = exports.setCredential = exports.setService = exports.setApplications = exports.setApplication = exports.resetAll = void 0;
var operators_1 = require("@/operators");
var common_1 = require("@/models/common");
var constants_1 = require("@/constants");
var merge_1 = require("@/utils/merge");
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
        console.debug('set applications', payload);
        commit('setApplications', payload);
        return [2 /*return*/];
    });
}); };
exports.setApplications = setApplications;
var setService = function (_a, payload_1) { return __awaiter(void 0, [_a, payload_1], void 0, function (_b, payload) {
    var commit = _b.commit;
    return __generator(this, function (_c) {
        console.debug('set service', payload);
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
                console.debug('prepare to create credential for application', application);
                if (!application) {
                    console.error('Application not found');
                    return [2 /*return*/, undefined];
                }
                console.debug('creating create credential for application', application);
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
                state.status.getService = common_1.Status.Request;
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, operators_1.serviceOperator.get(constants_1.SORA_SERVICE_ID)];
            case 2:
                service = (_c.sent()).data;
                state.status.getService = common_1.Status.Success;
                commit('setService', service);
                return [2 /*return*/, service];
            case 3:
                error_1 = _c.sent();
                state.status.getService = common_1.Status.Error;
                commit('setService', undefined);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getService = getService;
var getApplications = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var currentApplication, applications, error_2;
    var _c;
    var commit = _b.commit, state = _b.state, rootState = _b.rootState;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                console.debug('start to get applications for chat');
                state.status.getApplications = common_1.Status.Request;
                currentApplication = state.application;
                console.debug('current application', currentApplication);
                _d.label = 1;
            case 1:
                _d.trys.push([1, 3, , 4]);
                return [4 /*yield*/, operators_1.applicationOperator.getAll({
                        user_id: (_c = rootState === null || rootState === void 0 ? void 0 : rootState.user) === null || _c === void 0 ? void 0 : _c.id,
                        service_id: constants_1.SORA_SERVICE_ID
                    })];
            case 2:
                applications = (_d.sent()).data;
                state.status.getApplications = common_1.Status.Success;
                commit('setApplications', applications.items);
                return [2 /*return*/, applications.items];
            case 3:
                error_2 = _d.sent();
                console.error('get applications failed', error_2);
                state.status.getApplications = common_1.Status.Error;
                commit('setApplications', undefined);
                commit('setApplication', undefined);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getApplications = getApplications;
var setConfig = function (_a, payload) {
    var commit = _a.commit;
    commit('setConfig', payload);
};
exports.setConfig = setConfig;
var setTasks = function (_a, payload) {
    var commit = _a.commit;
    commit('setTasks', payload);
};
exports.setTasks = setTasks;
var setTasksItems = function (_a, payload) {
    var commit = _a.commit;
    commit('setTasksItems', payload);
};
exports.setTasksItems = setTasksItems;
var setTasksTotal = function (_a, payload) {
    var commit = _a.commit;
    commit('setTasksTotal', payload);
};
exports.setTasksTotal = setTasksTotal;
var setTasksActive = function (_a, payload) {
    var commit = _a.commit;
    commit('setTasksActive', payload);
};
exports.setTasksActive = setTasksActive;
var getTasks = function (_a, _b) { return __awaiter(void 0, [_a, _b], void 0, function (_c, _d) {
    var commit = _c.commit, state = _c.state, rootState = _c.rootState;
    var offset = _d.offset, limit = _d.limit, createdAtMin = _d.createdAtMin, createdAtMax = _d.createdAtMax;
    return __generator(this, function (_e) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                var _a;
                console.debug('start to get tasks', offset, limit);
                var credential = state.credential;
                console.debug('current credential', credential);
                var token = credential === null || credential === void 0 ? void 0 : credential.token;
                if (!token) {
                    return reject('no token');
                }
                operators_1.soraOperator
                    .tasks({
                    userId: (_a = rootState === null || rootState === void 0 ? void 0 : rootState.user) === null || _a === void 0 ? void 0 : _a.id,
                    createdAtMin: createdAtMin,
                    createdAtMax: createdAtMax,
                    type: 'videos'
                }, {
                    token: token
                })
                    .then(function (response) {
                    var _a;
                    console.debug('get videos tasks success', response.data.items);
                    // merge with existing tasks
                    var existingItems = ((_a = state === null || state === void 0 ? void 0 : state.tasks) === null || _a === void 0 ? void 0 : _a.items) || [];
                    console.debug('existing items', existingItems);
                    var newItems = response.data.items || [];
                    console.debug('new items', newItems);
                    // sort and de-duplicate using created_at
                    var mergedItems = (0, merge_1.mergeAndSortLists)(existingItems, newItems);
                    commit('setTasksItems', mergedItems);
                    commit('setTasksTotal', response.data.count);
                    resolve(response.data.items);
                })
                    .catch(function (error) {
                    return reject(error);
                });
            })];
    });
}); };
exports.getTasks = getTasks;
exports.default = {
    setService: exports.setService,
    getService: exports.getService,
    resetAll: exports.resetAll,
    setCredential: exports.setCredential,
    setConfig: exports.setConfig,
    setApplication: exports.setApplication,
    setApplications: exports.setApplications,
    getApplications: exports.getApplications,
    setTasks: exports.setTasks,
    setTasksItems: exports.setTasksItems,
    setTasksTotal: exports.setTasksTotal,
    setTasksActive: exports.setTasksActive,
    getTasks: exports.getTasks,
    createCredential: exports.createCredential
};
