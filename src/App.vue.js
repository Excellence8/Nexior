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
var element_plus_1 = require("element-plus");
var AuthPanel_vue_1 = require("./components/common/AuthPanel.vue");
var endpoint_1 = require("@/constants/endpoint");
var i18n_1 = require("./i18n");
var elementPlusLocaleMap = {
    en: function () { return Promise.resolve().then(function () { return require('element-plus/es/locale/lang/en'); }); },
    de: function () { return Promise.resolve().then(function () { return require('element-plus/es/locale/lang/de'); }); },
    pt: function () { return Promise.resolve().then(function () { return require('element-plus/es/locale/lang/pt'); }); },
    es: function () { return Promise.resolve().then(function () { return require('element-plus/es/locale/lang/es'); }); },
    fr: function () { return Promise.resolve().then(function () { return require('element-plus/es/locale/lang/fr'); }); },
    'zh-CN': function () { return Promise.resolve().then(function () { return require('element-plus/es/locale/lang/zh-cn'); }); },
    'zh-TW': function () { return Promise.resolve().then(function () { return require('element-plus/es/locale/lang/zh-tw'); }); },
    it: function () { return Promise.resolve().then(function () { return require('element-plus/es/locale/lang/it'); }); },
    ko: function () { return Promise.resolve().then(function () { return require('element-plus/es/locale/lang/ko'); }); },
    ja: function () { return Promise.resolve().then(function () { return require('element-plus/es/locale/lang/ja'); }); },
    ru: function () { return Promise.resolve().then(function () { return require('element-plus/es/locale/lang/ru'); }); },
    pl: function () { return Promise.resolve().then(function () { return require('element-plus/es/locale/lang/pl'); }); },
    fi: function () { return Promise.resolve().then(function () { return require('element-plus/es/locale/lang/fi'); }); },
    sv: function () { return Promise.resolve().then(function () { return require('element-plus/es/locale/lang/sv'); }); },
    el: function () { return Promise.resolve().then(function () { return require('element-plus/es/locale/lang/el'); }); },
    uk: function () { return Promise.resolve().then(function () { return require('element-plus/es/locale/lang/uk'); }); },
    ar: function () { return Promise.resolve().then(function () { return require('element-plus/es/locale/lang/ar'); }); },
    sr: function () { return Promise.resolve().then(function () { return require('element-plus/es/locale/lang/sr'); }); }
};
exports.default = (0, vue_1.defineComponent)({
    name: 'App',
    components: {
        ElConfigProvider: element_plus_1.ElConfigProvider,
        ElTag: element_plus_1.ElTag,
        AuthPanel: AuthPanel_vue_1.default
    },
    data: function () {
        return {
            isTest: endpoint_1.isTest,
            epLocale: null
        };
    },
    computed: {
        authPopup: function () {
            return this.$store.state.auth.flow === 'popup' && this.$store.state.auth.visible;
        },
        currentLocale: function () {
            return (0, i18n_1.getLocale)(this.$i18n.locale);
        }
    },
    watch: {
        currentLocale: {
            immediate: true,
            handler: function () {
                this.loadElementPlusLocale();
            }
        }
    },
    mounted: function () {
        var _a;
        var authenticated = !!this.$store.state.token.access && !!((_a = this.$store.state.user) === null || _a === void 0 ? void 0 : _a.id);
        console.debug('App mounted, authenticated:', authenticated);
        if (!authenticated) {
            this.$store.dispatch('logout');
            this.$store.dispatch('login');
        }
    },
    methods: {
        loadElementPlusLocale: function () {
            return __awaiter(this, void 0, void 0, function () {
                var localeCode, loader, module_1, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localeCode = this.currentLocale;
                            console.debug("[i18n] Loading Element Plus locale for: ".concat(localeCode));
                            loader = elementPlusLocaleMap[localeCode];
                            if (!loader) {
                                console.warn("[i18n] No Element Plus locale found for: ".concat(localeCode));
                                return [2 /*return*/];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, loader()];
                        case 2:
                            module_1 = _a.sent();
                            this.epLocale = module_1.default;
                            console.debug("[i18n] Loaded Element Plus locale: ".concat(localeCode));
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            console.error("[i18n] Failed to load Element Plus locale for: ".concat(localeCode), err_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElConfigProvider: element_plus_1.ElConfigProvider,
    ElTag: element_plus_1.ElTag,
    AuthPanel: AuthPanel_vue_1.default
};
var __VLS_components;
var __VLS_directives;
var __VLS_0 = {}.ElConfigProvider;
/** @type {[typeof __VLS_components.ElConfigProvider, typeof __VLS_components.elConfigProvider, typeof __VLS_components.ElConfigProvider, typeof __VLS_components.elConfigProvider, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    locale: (__VLS_ctx.epLocale),
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        locale: (__VLS_ctx.epLocale),
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {};
__VLS_3.slots.default;
if (__VLS_ctx.authPopup) {
    var __VLS_5 = {}.AuthPanel;
    /** @type {[typeof __VLS_components.AuthPanel, typeof __VLS_components.authPanel, ]} */ ;
    // @ts-ignore
    var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({}));
    var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_6), false));
}
var __VLS_9 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ]} */ ;
// @ts-ignore
var __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({}));
var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_10), false));
if (__VLS_ctx.isTest) {
    var __VLS_13 = {}.ElTag;
    /** @type {[typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ]} */ ;
    // @ts-ignore
    var __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13(__assign(__assign({ size: "large" }, { class: "fixed bottom-4 right-4 z-50" }), { type: "warning" })));
    var __VLS_15 = __VLS_14.apply(void 0, __spreadArray([__assign(__assign({ size: "large" }, { class: "fixed bottom-4 right-4 z-50" }), { type: "warning" })], __VLS_functionalComponentArgsRest(__VLS_14), false));
    __VLS_16.slots.default;
    (__VLS_ctx.$t('index.button.testEnv'));
    var __VLS_16;
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-4']} */ ;
/** @type {__VLS_StyleScopedClasses['right-4']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
var __VLS_dollars;
var __VLS_self;
