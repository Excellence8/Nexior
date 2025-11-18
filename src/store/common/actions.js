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
exports.logout = exports.login = exports.createCredential = exports.getApplications = exports.setApplications = exports.getSite = exports.initializeSite = exports.getExchangeRate = exports.getToken = exports.getFingerprint = exports.getUser = exports.setFingerprint = exports.setExchange = exports.setCurrency = exports.setUser = exports.setToken = exports.resetToken = exports.resetSite = exports.resetUser = exports.resetAll = void 0;
var operators_1 = require("@/operators");
var models_1 = require("@/models");
var site_1 = require("@/utils/site");
var utils_1 = require("@/utils");
var constants_1 = require("@/constants");
var fingerprintjs_1 = require("@fingerprintjs/fingerprintjs");
var resetAll = function (_a) {
    var commit = _a.commit;
    commit('resetToken');
    commit('resetUser');
};
exports.resetAll = resetAll;
var resetUser = function (_a) {
    var commit = _a.commit;
    commit('resetUser');
};
exports.resetUser = resetUser;
var resetSite = function (_a) {
    var commit = _a.commit;
    commit('resetSite');
};
exports.resetSite = resetSite;
var resetToken = function (_a) {
    var commit = _a.commit;
    commit('resetToken');
};
exports.resetToken = resetToken;
var setToken = function (_a, payload) {
    var commit = _a.commit;
    commit('setToken', payload);
};
exports.setToken = setToken;
var setUser = function (_a, payload) {
    var commit = _a.commit;
    commit('setUser', payload);
};
exports.setUser = setUser;
var setCurrency = function (_a, payload) {
    var commit = _a.commit;
    commit('setCurrency', payload);
};
exports.setCurrency = setCurrency;
var setExchange = function (_a, payload) {
    var commit = _a.commit;
    commit('setExchange', payload);
};
exports.setExchange = setExchange;
var setFingerprint = function (_a, payload) {
    var commit = _a.commit;
    commit('setFingerprint', payload);
};
exports.setFingerprint = setFingerprint;
var getUser = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var user, error_1;
    var commit = _b.commit;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                console.debug('start to get user');
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                commit('resetUser');
                return [4 /*yield*/, operators_1.userOperator.getMe()];
            case 2:
                user = (_c.sent()).data;
                commit('setUser', user);
                console.debug('get user success', user);
                return [2 /*return*/, user];
            case 3:
                error_1 = _c.sent();
                console.error('get user failed', error_1);
                return [2 /*return*/, undefined];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getUser = getUser;
var getFingerprint = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var fp, result, visitorId;
    var commit = _b.commit;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, fingerprintjs_1.default.load()];
            case 1:
                fp = _c.sent();
                return [4 /*yield*/, fp.get()];
            case 2:
                result = _c.sent();
                visitorId = result.visitorId;
                console.debug('visitorId', visitorId);
                commit('setFingerprint', visitorId);
                return [2 /*return*/, visitorId];
        }
    });
}); };
exports.getFingerprint = getFingerprint;
var getToken = function (_a, code_1) { return __awaiter(void 0, [_a, code_1], void 0, function (_b, code) {
    var data, token, error_2;
    var commit = _b.commit;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                console.debug('start to get token using code', code);
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                commit('resetToken');
                return [4 /*yield*/, operators_1.oauthOperator.token({
                        code: code
                    })];
            case 2:
                data = (_c.sent()).data;
                console.debug('get token success', data);
                token = {
                    access: data.access_token,
                    refresh: data.refresh_token,
                    expiration: data.expires_in
                };
                commit('setToken', token);
                console.debug('get token success', data);
                return [2 /*return*/, token];
            case 3:
                error_2 = _c.sent();
                console.error('get token failed', error_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getToken = getToken;
var getExchangeRate = function (_a, payload_1) { return __awaiter(void 0, [_a, payload_1], void 0, function (_b, payload) {
    var key, data, e_1;
    var _c;
    var state = _b.state, commit = _b.commit;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                if (payload.source === payload.target) {
                    return [2 /*return*/];
                }
                key = "".concat(payload.source, "-").concat(payload.target);
                console.debug('start to get exchange rate', key);
                _d.label = 1;
            case 1:
                _d.trys.push([1, 3, , 4]);
                return [4 /*yield*/, operators_1.exchangeOperator.rate(payload)];
            case 2:
                data = (_d.sent()).data;
                console.debug('get exchange rate success', data);
                commit('setExchange', (_c = {},
                    _c[key] = data.rate,
                    _c));
                return [2 /*return*/, state.exchange[key]];
            case 3:
                e_1 = _d.sent();
                console.error('get exchange rate failed');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getExchangeRate = getExchangeRate;
var initializeSite = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var origin, data, error_3;
    var state = _b.state, commit = _b.commit, dispatch = _b.dispatch;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                console.debug('start to initialize site');
                origin = (0, site_1.getSiteOrigin)(state === null || state === void 0 ? void 0 : state.site);
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, operators_1.siteOperator.initialize({ origin: origin })];
            case 2:
                data = (_c.sent()).data;
                commit('setSite', data);
                console.debug('initialize site success', data);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _c.sent();
                console.error('initialize site failed', error_3);
                dispatch('login');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.initializeSite = initializeSite;
var getSite = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var origin_1, site, error_4;
    var _c, _d, _e;
    var state = _b.state, commit = _b.commit;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                console.debug('start to get site');
                _f.label = 1;
            case 1:
                _f.trys.push([1, 3, , 4]);
                origin_1 = (0, site_1.getSiteOrigin)(state === null || state === void 0 ? void 0 : state.site);
                return [4 /*yield*/, operators_1.siteOperator.getAll({
                        origin: origin_1
                    })];
            case 2:
                site = (_e = (_d = (_c = (_f.sent())) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.items) === null || _e === void 0 ? void 0 : _e[0];
                commit('setSite', site);
                console.debug('get site success', site);
                return [3 /*break*/, 4];
            case 3:
                error_4 = _f.sent();
                console.error('get site failed', error_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getSite = getSite;
var setApplications = function (_a, payload_1) { return __awaiter(void 0, [_a, payload_1], void 0, function (_b, payload) {
    var commit = _b.commit;
    return __generator(this, function (_c) {
        console.debug('set applications', payload);
        commit('setApplications', payload);
        return [2 /*return*/];
    });
}); };
exports.setApplications = setApplications;
var getApplications = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var applications, error_5;
    var _c;
    var commit = _b.commit, state = _b.state, rootState = _b.rootState;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                console.debug('start to get applications for global');
                state.status.getApplications = models_1.Status.Request;
                _d.label = 1;
            case 1:
                _d.trys.push([1, 3, , 4]);
                return [4 /*yield*/, operators_1.applicationOperator.getAll({
                        limit: 100,
                        offset: 0,
                        user_id: (_c = rootState === null || rootState === void 0 ? void 0 : rootState.user) === null || _c === void 0 ? void 0 : _c.id,
                        ordering: '-created_at',
                        type: models_1.IApplicationType.USAGE,
                        scope: models_1.IApplicationScope.GLOBAL
                    })];
            case 2:
                applications = (_d.sent()).data;
                console.debug('global applications from online', applications);
                state.status.getApplications = models_1.Status.Success;
                commit('setApplications', applications.items);
                return [2 /*return*/, applications.items];
            case 3:
                error_5 = _d.sent();
                console.error('get applications failed for global', error_5);
                state.status.getApplications = models_1.Status.Error;
                commit('setApplications', undefined);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getApplications = getApplications;
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
var login = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var site;
    var _c;
    var state = _b.state, commit = _b.commit;
    return __generator(this, function (_d) {
        site = (_c = state === null || state === void 0 ? void 0 : state.site) === null || _c === void 0 ? void 0 : _c.origin;
        if (import.meta.env.VITE_SURFACE === constants_1.SURFACE_IOS || import.meta.env.VITE_SURFACE === constants_1.SURFACE_ANDROID) {
            commit('setAuth', {
                flow: 'popup',
                visible: true
            });
            console.debug('login popup');
        }
        else {
            commit('setAuth', {
                flow: 'redirect'
            });
            console.debug('login redirect');
            (0, utils_1.loginRedirect)({ redirect: window.location.pathname, site: site });
        }
        return [2 /*return*/];
    });
}); };
exports.login = login;
var logout = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var currentUrl, baseUrlAuth, loginUrl, redirectUrl;
    var dispatch = _b.dispatch;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, dispatch('resetAll')];
            case 1:
                _c.sent();
                return [4 /*yield*/, dispatch('chat/resetAll')];
            case 2:
                _c.sent();
                return [4 /*yield*/, dispatch('midjourney/resetAll')];
            case 3:
                _c.sent();
                return [4 /*yield*/, dispatch('flux/resetAll')];
            case 4:
                _c.sent();
                return [4 /*yield*/, dispatch('hailuo/resetAll')];
            case 5:
                _c.sent();
                return [4 /*yield*/, dispatch('headshots/resetAll')];
            case 6:
                _c.sent();
                return [4 /*yield*/, dispatch('kling/resetAll')];
            case 7:
                _c.sent();
                return [4 /*yield*/, dispatch('luma/resetAll')];
            case 8:
                _c.sent();
                return [4 /*yield*/, dispatch('pika/resetAll')];
            case 9:
                _c.sent();
                return [4 /*yield*/, dispatch('pixverse/resetAll')];
            case 10:
                _c.sent();
                return [4 /*yield*/, dispatch('qrart/resetAll')];
            case 11:
                _c.sent();
                return [4 /*yield*/, dispatch('suno/resetAll')];
            case 12:
                _c.sent();
                return [4 /*yield*/, dispatch('veo/resetAll')];
            case 13:
                _c.sent();
                currentUrl = window.location.href;
                baseUrlAuth = (0, utils_1.getBaseUrlAuth)();
                loginUrl = "".concat(baseUrlAuth, "/auth/login?redirect=").concat(currentUrl);
                redirectUrl = "".concat(baseUrlAuth, "/auth/logout?redirect=").concat(loginUrl);
                window.location.href = redirectUrl;
                return [2 /*return*/];
        }
    });
}); };
exports.logout = logout;
exports.default = {
    login: exports.login,
    logout: exports.logout,
    resetToken: exports.resetToken,
    resetAll: exports.resetAll,
    resetUser: exports.resetUser,
    resetSite: exports.resetSite,
    setToken: exports.setToken,
    setFingerprint: exports.setFingerprint,
    setCurrency: exports.setCurrency,
    setUser: exports.setUser,
    getFingerprint: exports.getFingerprint,
    getExchangeRate: exports.getExchangeRate,
    getToken: exports.getToken,
    getUser: exports.getUser,
    initializeSite: exports.initializeSite,
    getSite: exports.getSite,
    setExchange: exports.setExchange,
    setApplications: exports.setApplications,
    getApplications: exports.getApplications,
    createCredential: exports.createCredential
};
