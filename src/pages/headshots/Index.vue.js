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
var vue_1 = require("vue");
var Headshots_vue_1 = require("@/layouts/Headshots.vue");
var ConfigPanel_vue_1 = require("@/components/headshots/ConfigPanel.vue");
var operators_1 = require("@/operators");
var models_1 = require("@/models");
var element_plus_1 = require("element-plus");
var constants_1 = require("@/constants");
var Status_vue_1 = require("@/components/application/Status.vue");
var RecentPanel_vue_1 = require("@/components/headshots/RecentPanel.vue");
var CALLBACK_URL = 'https://webhook.acedata.cloud/headshots';
exports.default = (0, vue_1.defineComponent)({
    name: 'HeadshotsIndex',
    components: {
        ConfigPanel: ConfigPanel_vue_1.default,
        Layout: Headshots_vue_1.default,
        ApplicationStatus: Status_vue_1.default,
        RecentPanel: RecentPanel_vue_1.default
    },
    inject: ['initialized'],
    data: function () {
        return {
            task: undefined,
            job: 0
        };
    },
    computed: {
        loading: function () {
            var _a, _b;
            return ((_b = (_a = this.$store.state.headshots) === null || _a === void 0 ? void 0 : _a.status) === null || _b === void 0 ? void 0 : _b.getApplications) === models_1.Status.Request;
        },
        service: function () {
            return this.$store.state.headshots.service;
        },
        credential: function () {
            return this.$store.state.headshots.credential;
        },
        config: function () {
            return this.$store.state.headshots.config;
        },
        initializing: function () {
            return this.$store.state.headshots.status.getApplications === models_1.Status.Request;
        },
        needApply: function () {
            return this.$store.state.headshots.status.getApplications === models_1.Status.Success && !this.application;
        },
        application: function () {
            return this.$store.state.headshots.application;
        },
        applications: function () {
            return this.$store.state.headshots.applications;
        },
        tasks: function () {
            return this.$store.state.headshots.tasks;
        }
    },
    watch: {
        tasks: {
            handler: function (value, oldValue) {
                var _a, _b;
                // scroll down if new tasks are added
                if (((_a = value === null || value === void 0 ? void 0 : value.items) === null || _a === void 0 ? void 0 : _a.length) > ((_b = oldValue === null || oldValue === void 0 ? void 0 : oldValue.items) === null || _b === void 0 ? void 0 : _b.length)) {
                    console.debug('new tasks detected');
                    // this.onScrollDown();
                }
            },
            deep: true
        },
        initialized: {
            handler: function (newValue) {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!newValue) return [3 /*break*/, 3];
                                console.debug('layout initialized');
                                return [4 /*yield*/, this.onGetTasks()];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, this.onScrollDown()];
                            case 2:
                                _a.sent();
                                this.job = setInterval(function () {
                                    _this.onGetTasks();
                                }, 5000);
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            },
            immediate: true
        }
    },
    mounted: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.onGetService()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    unmounted: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                clearInterval(this.job);
                return [2 /*return*/];
            });
        });
    },
    methods: {
        onReachTop: function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            console.debug('reached top');
                            return [4 /*yield*/, this.onGetTasks({
                                    createdAtMax: (_c = (_b = (_a = this.tasks) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.created_at
                                })];
                        case 1:
                            _d.sent();
                            return [2 /*return*/];
                    }
                });
            });
        },
        onGetService: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.debug('start onGetService');
                            return [4 /*yield*/, this.$store.dispatch('headshots/getService')];
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
                            return [4 /*yield*/, this.$store.dispatch('headshots/getApplications')];
                        case 1:
                            _a.sent();
                            console.debug('end onGetApplication');
                            return [4 /*yield*/, this.onGetTasks()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        },
        onApply: function () {
            var _this = this;
            operators_1.applicationOperator
                .create({
                // @ts-ignore
                application: this.application
            })
                .then(function (_a) {
                var data = _a.data;
                _this.application = data;
                element_plus_1.ElMessage.success(_this.$t('application.message.applySuccessfully'));
            })
                .catch(function (error) {
                var _a, _b;
                if (((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.code) === constants_1.ERROR_CODE_DUPLICATION) {
                    element_plus_1.ElMessage.error(_this.$t('application.message.alreadyApplied'));
                }
            });
        },
        onScrollDown: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    setTimeout(function () {
                        // scroll to bottom for `.recent`
                        var el = document.querySelector('.recent');
                        if (el) {
                            el.scrollTop = el.scrollHeight;
                        }
                    }, 500);
                    return [2 /*return*/];
                });
            });
        },
        onGetTasks: function (payload) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, limit, createdAtMin, createdAtMax;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (this.loading) {
                                console.debug('loading');
                                return [2 /*return*/];
                            }
                            console.debug('start onGetTasks', payload);
                            _a = payload || {}, _b = _a.limit, limit = _b === void 0 ? 5 : _b, createdAtMin = _a.createdAtMin, createdAtMax = _a.createdAtMax;
                            console.debug('limit', limit, 'createdAtMin', createdAtMin, 'createdAtMax', createdAtMax);
                            return [4 /*yield*/, this.$store.dispatch('headshots/getTasks', {
                                    limit: limit,
                                    createdAtMin: createdAtMin,
                                    createdAtMax: createdAtMax
                                })];
                        case 1:
                            _c.sent();
                            return [2 /*return*/];
                    }
                });
            });
        },
        onGeneratePicture: function () {
            return __awaiter(this, void 0, void 0, function () {
                var request, token;
                var _this = this;
                var _a;
                return __generator(this, function (_b) {
                    request = __assign(__assign({}, this.config), { callback_url: CALLBACK_URL });
                    token = (_a = this.credential) === null || _a === void 0 ? void 0 : _a.token;
                    if (!token) {
                        console.error('no token specified');
                        return [2 /*return*/];
                    }
                    element_plus_1.ElMessage.info(this.$t('headshots.message.startingTask'));
                    operators_1.headshotsOperator
                        .generate(request, {
                        token: token
                    })
                        .then(function () {
                        element_plus_1.ElMessage.success(_this.$t('headshots.message.startTaskSuccess'));
                        _this.$store.commit('headshots/setConfig', {
                            config: undefined
                        });
                    })
                        .catch(function (error) {
                        var _a, _b;
                        var response = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data;
                        if (((_b = response === null || response === void 0 ? void 0 : response.error) === null || _b === void 0 ? void 0 : _b.code) === constants_1.ERROR_CODE_USED_UP) {
                            element_plus_1.ElMessage.error(_this.$t('headshots.message.usedUp'));
                        }
                        else {
                            element_plus_1.ElMessage.error(_this.$t('headshots.message.startTaskFailed'));
                        }
                    })
                        .finally(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.onGetTasks()];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, this.onScrollDown()];
                                        case 2:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, 1000);
                            return [2 /*return*/];
                        });
                    }); });
                    return [2 /*return*/];
                });
            });
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ConfigPanel: ConfigPanel_vue_1.default,
    Layout: Headshots_vue_1.default,
    ApplicationStatus: Status_vue_1.default,
    RecentPanel: RecentPanel_vue_1.default
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
var __VLS_0 = {}.layout;
/** @type {[typeof __VLS_components.Layout, typeof __VLS_components.layout, typeof __VLS_components.Layout, typeof __VLS_components.layout, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {};
__VLS_3.slots.default;
{
    var __VLS_thisSlot = __VLS_3.slots.config;
    var __VLS_5 = {}.ConfigPanel;
    /** @type {[typeof __VLS_components.ConfigPanel, typeof __VLS_components.configPanel, ]} */ ;
    // @ts-ignore
    var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5(__assign({ 'onGenerate': {} })));
    var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([__assign({ 'onGenerate': {} })], __VLS_functionalComponentArgsRest(__VLS_6), false));
    var __VLS_9 = void 0;
    var __VLS_10 = void 0;
    var __VLS_11 = void 0;
    var __VLS_12 = {
        onGenerate: (__VLS_ctx.onGeneratePicture)
    };
    var __VLS_8;
}
{
    var __VLS_thisSlot = __VLS_3.slots.result;
    var __VLS_13 = {}.ApplicationStatus;
    /** @type {[typeof __VLS_components.ApplicationStatus, typeof __VLS_components.applicationStatus, ]} */ ;
    // @ts-ignore
    var __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13(__assign(__assign(__assign({ 'onRefresh': {} }, { 'onSelect': {} }), { initializing: (__VLS_ctx.initializing), application: (__VLS_ctx.application), applications: (__VLS_ctx.applications), service: (__VLS_ctx.service), needApply: (__VLS_ctx.needApply) }), { class: "mb-4" })));
    var __VLS_15 = __VLS_14.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onRefresh': {} }, { 'onSelect': {} }), { initializing: (__VLS_ctx.initializing), application: (__VLS_ctx.application), applications: (__VLS_ctx.applications), service: (__VLS_ctx.service), needApply: (__VLS_ctx.needApply) }), { class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_14), false));
    var __VLS_17 = void 0;
    var __VLS_18 = void 0;
    var __VLS_19 = void 0;
    var __VLS_20 = {
        onRefresh: (__VLS_ctx.onGetApplication)
    };
    var __VLS_21 = {
        onSelect: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.$store.dispatch('headshots/setApplication', $event);
        }
    };
    var __VLS_16;
    var __VLS_22 = {}.RecentPanel;
    /** @type {[typeof __VLS_components.RecentPanel, typeof __VLS_components.recentPanel, ]} */ ;
    // @ts-ignore
    var __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22(__assign({ 'onReachTop': {} }, { class: "panel recent" })));
    var __VLS_24 = __VLS_23.apply(void 0, __spreadArray([__assign({ 'onReachTop': {} }, { class: "panel recent" })], __VLS_functionalComponentArgsRest(__VLS_23), false));
    var __VLS_26 = void 0;
    var __VLS_27 = void 0;
    var __VLS_28 = void 0;
    var __VLS_29 = {
        onReachTop: (__VLS_ctx.onReachTop)
    };
    var __VLS_25;
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['recent']} */ ;
var __VLS_dollars;
var __VLS_self;
