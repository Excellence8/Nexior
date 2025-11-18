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
var Navigator_vue_1 = require("@/components/common/Navigator.vue");
var Status_vue_1 = require("@/components/application/Status.vue");
var models_1 = require("@/models");
var element_plus_1 = require("element-plus");
var operators_1 = require("@/operators");
var constants_1 = require("@/constants");
var Confirm_vue_1 = require("@/components/application/Confirm.vue");
var utils_1 = require("@/utils");
exports.default = (0, vue_1.defineComponent)({
    name: 'LayoutMain',
    components: {
        Navigator: Navigator_vue_1.default,
        ApplicationStatus: Status_vue_1.default,
        ApplicationConfirm: Confirm_vue_1.default
    },
    provide: function () {
        var _this = this;
        return {
            initialized: (0, vue_1.computed)(function () { return _this.initialized; })
        };
    },
    data: function () {
        return {
            initialized: false,
            applying: false,
            mobile: window.innerWidth < 768
        };
    },
    computed: {
        appName: function () {
            return this.$route.meta.appName;
        },
        application: function () {
            var _a;
            // Global application and individual application can be used here
            return (_a = this.$store.state[this.appName]) === null || _a === void 0 ? void 0 : _a.application;
        },
        applications: function () {
            var _a, _b, _c;
            // Combine individual and global applications
            var individualApplications = (_b = (_a = this.$store.state[this.appName]) === null || _a === void 0 ? void 0 : _a.applications) !== null && _b !== void 0 ? _b : [];
            console.debug('individualApplications', individualApplications);
            var globalApplications = (_c = this.$store.state.applications) !== null && _c !== void 0 ? _c : [];
            console.debug('globalApplications', globalApplications);
            return globalApplications.concat(individualApplications);
        },
        loading: function () {
            var _a, _b;
            return ((_b = (_a = this.$store.state[this.appName]) === null || _a === void 0 ? void 0 : _a.status) === null || _b === void 0 ? void 0 : _b.getApplications) === models_1.Status.Request;
        },
        service: function () {
            var _a;
            return (_a = this.$store.state[this.appName]) === null || _a === void 0 ? void 0 : _a.service;
        }
    },
    watch: {
        appName: function () {
            this.initialize();
        }
    },
    mounted: function () {
        var _this = this;
        // Fetch applications when the component is mounted
        this.initialize();
        // Update mobile state on resize
        window.addEventListener('resize', function () {
            _this.mobile = window.innerWidth < 768;
        });
    },
    methods: {
        initialize: function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    this.initialized = false;
                    console.debug('Fetching all individual and global applications for', this.appName);
                    Promise.all([
                        this.$store.dispatch('getApplications'),
                        this.$store.dispatch("".concat(this.appName, "/getApplications"))
                    ]).finally(function () { return __awaiter(_this, void 0, void 0, function () {
                        var currentApplication, finalApplication;
                        var _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    console.debug('Fetched all applications', this.applications);
                                    // Check if we need to apply for a global application
                                    if (((_a = this.$store.state.applications) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                                        // If no global applications exist, we need to apply
                                        this.applying = true;
                                    }
                                    currentApplication = (_b = this.$store.state[this.appName]) === null || _b === void 0 ? void 0 : _b.application;
                                    console.debug('current application', currentApplication);
                                    finalApplication = (0, utils_1.getFinalApplication)(this.applications, currentApplication);
                                    console.debug('final application', finalApplication);
                                    if (!finalApplication) return [3 /*break*/, 2];
                                    console.debug('set final application', finalApplication, finalApplication === null || finalApplication === void 0 ? void 0 : finalApplication.type);
                                    return [4 /*yield*/, this.$store.dispatch("".concat(this.appName, "/setApplication"), finalApplication)];
                                case 1:
                                    _c.sent();
                                    _c.label = 2;
                                case 2:
                                    console.debug('finished initialization');
                                    this.initialized = true;
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            });
        },
        onApply: function () {
            var _this = this;
            // Only can apply for global application, not individual application
            operators_1.applicationOperator
                .create({
                type: models_1.IApplicationType.USAGE,
                scope: models_1.IApplicationScope.GLOBAL,
                user_id: this.$store.getters.user.id
            })
                .then(function () {
                element_plus_1.ElMessage.success(_this.$t('application.message.applySuccessfully'));
                _this.initialize();
                _this.applying = false;
            })
                .catch(function (error) {
                var _a, _b;
                if (((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.code) === constants_1.ERROR_CODE_DUPLICATION) {
                    element_plus_1.ElMessage.error(_this.$t('application.message.alreadyApplied'));
                }
            });
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    Navigator: Navigator_vue_1.default,
    ApplicationStatus: Status_vue_1.default,
    ApplicationConfirm: Confirm_vue_1.default
};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['main']} */ ;
/** @type {__VLS_StyleScopedClasses['navigator']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "wrapper" }));
var __VLS_0 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ class: "main" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "main" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {}.navigator;
/** @type {[typeof __VLS_components.Navigator, typeof __VLS_components.navigator, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ class: "navigator" }, { direction: (__VLS_ctx.mobile ? 'row' : 'column') })));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ class: "navigator" }, { direction: (__VLS_ctx.mobile ? 'row' : 'column') })], __VLS_functionalComponentArgsRest(__VLS_5), false));
if (__VLS_ctx.application) {
    var __VLS_8 = {}.ApplicationStatus;
    /** @type {[typeof __VLS_components.ApplicationStatus, typeof __VLS_components.applicationStatus, ]} */ ;
    // @ts-ignore
    var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign(__assign({ 'onSelect': {} }, { class: "fixed right-2 top-2" }), { application: (__VLS_ctx.application), applications: (__VLS_ctx.applications), showPrice: (false), authenticated: (!!__VLS_ctx.$store.state.token.access), service: (__VLS_ctx.service) })));
    var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign(__assign({ 'onSelect': {} }, { class: "fixed right-2 top-2" }), { application: (__VLS_ctx.application), applications: (__VLS_ctx.applications), showPrice: (false), authenticated: (!!__VLS_ctx.$store.state.token.access), service: (__VLS_ctx.service) })], __VLS_functionalComponentArgsRest(__VLS_9), false));
    var __VLS_12 = void 0;
    var __VLS_13 = void 0;
    var __VLS_14 = void 0;
    var __VLS_15 = {
        onSelect: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!(__VLS_ctx.application))
                return;
            __VLS_ctx.$store.dispatch("".concat(__VLS_ctx.appName, "/setApplication"), $event);
        }
    };
    var __VLS_11;
}
var __VLS_16 = {}.ApplicationConfirm;
/** @type {[typeof __VLS_components.ApplicationConfirm, typeof __VLS_components.applicationConfirm, ]} */ ;
// @ts-ignore
var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign({ 'onApply': {} }, { modelValue: (__VLS_ctx.applying), modelModifiers: { visible: true, } })));
var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign({ 'onApply': {} }, { modelValue: (__VLS_ctx.applying), modelModifiers: { visible: true, } })], __VLS_functionalComponentArgsRest(__VLS_17), false));
var __VLS_20;
var __VLS_21;
var __VLS_22;
var __VLS_23 = {
    onApply: (__VLS_ctx.onApply)
};
var __VLS_19;
/** @type {__VLS_StyleScopedClasses['wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['main']} */ ;
/** @type {__VLS_StyleScopedClasses['navigator']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['right-2']} */ ;
/** @type {__VLS_StyleScopedClasses['top-2']} */ ;
var __VLS_dollars;
var __VLS_self;
