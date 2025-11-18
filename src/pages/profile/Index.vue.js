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
var router_1 = require("@/router");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var utils_1 = require("@/utils");
var HelpDialog_vue_1 = require("@/components/common/HelpDialog.vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'ProfileIndex',
    components: {
        ElImage: element_plus_1.ElImage,
        HelpDialog: HelpDialog_vue_1.default,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon
    },
    data: function () {
        return {
            operating: {
                locale: false,
                dark: false,
                help: false
            }
        };
    },
    computed: {
        user: function () {
            return this.$store.getters.user;
        },
        showSupport: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
            return (((_e = (_d = (_c = (_b = (_a = this.$store) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.site) === null || _c === void 0 ? void 0 : _c.features) === null || _d === void 0 ? void 0 : _d.support) === null || _e === void 0 ? void 0 : _e.enabled) &&
                (((_l = (_k = (_j = (_h = (_g = (_f = this.$store) === null || _f === void 0 ? void 0 : _f.state) === null || _g === void 0 ? void 0 : _g.site) === null || _h === void 0 ? void 0 : _h.features) === null || _j === void 0 ? void 0 : _j.support) === null || _k === void 0 ? void 0 : _k.discord) === null || _l === void 0 ? void 0 : _l.enabled) ||
                    ((_s = (_r = (_q = (_p = (_o = (_m = this.$store) === null || _m === void 0 ? void 0 : _m.state) === null || _o === void 0 ? void 0 : _o.site) === null || _p === void 0 ? void 0 : _p.features) === null || _q === void 0 ? void 0 : _q.support) === null || _r === void 0 ? void 0 : _r.wechat) === null || _s === void 0 ? void 0 : _s.enabled)));
        },
        showSite: function () {
            var _a, _b, _c, _d, _e;
            return (_d = (_c = (_b = (_a = this.$store) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.site) === null || _c === void 0 ? void 0 : _c.admins) === null || _d === void 0 ? void 0 : _d.includes((_e = this.$store.getters.user) === null || _e === void 0 ? void 0 : _e.id);
        },
        links: function () {
            var _this = this;
            var links = __spreadArray(__spreadArray(__spreadArray(__spreadArray([
                {
                    key: 'profile',
                    text: this.$t('console.menu.userProfile'),
                    href: "".concat((0, utils_1.getBaseUrlAuth)(), "/user/profile"),
                    icon: 'fa-regular fa-user'
                },
                {
                    key: 'application-list',
                    text: this.$t('console.menu.applicationList'),
                    name: router_1.ROUTE_CONSOLE_APPLICATION_LIST,
                    icon: 'fa-solid fa-cube'
                },
                {
                    key: 'order-list',
                    text: this.$t('console.menu.orderList'),
                    name: router_1.ROUTE_CONSOLE_ORDER_LIST,
                    icon: 'fa-solid fa-store'
                },
                {
                    key: 'usage-list',
                    text: this.$t('console.menu.usageList'),
                    name: router_1.ROUTE_CONSOLE_USAGE_LIST,
                    icon: 'fa-solid fa-rotate-left'
                },
                {
                    key: 'distribution-index',
                    text: this.$t('console.menu.distributionIndex'),
                    name: router_1.ROUTE_DISTRIBUTION_INDEX,
                    icon: 'fa-solid fa-coins'
                }
            ], (this.showSite
                ? [
                    {
                        key: 'site-index',
                        text: this.$t('common.nav.site'),
                        name: router_1.ROUTE_SITE_INDEX,
                        icon: 'fa-solid fa-gear'
                    }
                ]
                : []), true), [
                {
                    key: 'dark-setting',
                    text: this.$t('common.nav.darkMode'),
                    icon: 'fa-solid fa-moon',
                    callback: function () {
                        _this.operating.dark = true;
                    }
                },
                {
                    key: 'locale-setting',
                    text: this.$t('common.nav.locale'),
                    icon: 'fa-solid fa-language',
                    callback: function () {
                        _this.operating.locale = true;
                    }
                },
                {
                    key: 'developerPlatform',
                    text: this.$t('console.menu.developerPlatform'),
                    href: (0, utils_1.getBaseUrlPlatform)(),
                    icon: 'fa-solid fa-laptop-code'
                }
            ], false), (this.showSupport
                ? [
                    {
                        key: 'support',
                        text: this.$t('common.nav.support'),
                        callback: function () {
                            _this.operating.help = true;
                        },
                        icon: 'fa-solid fa-question'
                    }
                ]
                : []), true), [
                {
                    key: 'logout',
                    text: this.$t('common.nav.logOut'),
                    icon: 'fa-solid fa-arrow-right-from-bracket',
                    callback: function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.$store.dispatch('resetAll')];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, this.$store.dispatch('chat/resetAll')];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, this.$store.dispatch('midjourney/resetAll')];
                                case 3:
                                    _a.sent();
                                    return [4 /*yield*/, this.$store.dispatch('qrart/resetAll')];
                                case 4:
                                    _a.sent();
                                    return [4 /*yield*/, this.$store.dispatch('flux/resetAll')];
                                case 5:
                                    _a.sent();
                                    return [4 /*yield*/, this.$store.dispatch('hailuo/resetAll')];
                                case 6:
                                    _a.sent();
                                    return [4 /*yield*/, this.$store.dispatch('headshots/resetAll')];
                                case 7:
                                    _a.sent();
                                    return [4 /*yield*/, this.$store.dispatch('kling/resetAll')];
                                case 8:
                                    _a.sent();
                                    return [4 /*yield*/, this.$store.dispatch('luma/resetAll')];
                                case 9:
                                    _a.sent();
                                    return [4 /*yield*/, this.$store.dispatch('pika/resetAll')];
                                case 10:
                                    _a.sent();
                                    return [4 /*yield*/, this.$store.dispatch('suno/resetAll')];
                                case 11:
                                    _a.sent();
                                    return [4 /*yield*/, this.$store.dispatch('login')];
                                case 12:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }
                }
            ], false);
            return links;
        }
    },
    methods: {
        onHome: function () {
            this.$router.push({
                name: router_1.ROUTE_INDEX
            });
        },
        onNavigate: function (link) {
            if (link.name) {
                this.$router.push({
                    name: link.name
                });
            }
            else if (link.href) {
                window.open(link.href, '_blank');
            }
            else if (link.callback) {
                link.callback();
            }
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElImage: element_plus_1.ElImage,
    HelpDialog: HelpDialog_vue_1.default,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "profile" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "info" }));
var __VLS_0 = {}.ElImage;
/** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ src: (__VLS_ctx.user.avatar), fit: "cover" }, { class: "avatar" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ src: (__VLS_ctx.user.avatar), fit: "cover" }, { class: "avatar" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
(__VLS_ctx.user.username);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div)(__assign({ style: ({ backgroundImage: 'url(' + __VLS_ctx.user.avatar + ')' }) }, { class: "background" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "links" }));
var _loop_1 = function (link, linkIndex) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.onNavigate(link);
        } }, { key: (linkIndex) }), { class: ({ link: true, active: __VLS_ctx.$route.name === link.name }) }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "icon" }));
    var __VLS_4 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ icon: (link.icon) }, { class: "text-sm" })));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ icon: (link.icon) }, { class: "text-sm" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "text" }));
    (link.text);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "suffix" }));
    var __VLS_8 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ icon: "fa-solid fa-chevron-right" }, { class: "text-sm" })));
    var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-chevron-right" }, { class: "text-sm" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
};
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.links)); _i < _a.length; _i++) {
    var _b = _a[_i], link = _b[0], linkIndex = _b[1];
    _loop_1(link, linkIndex);
}
var __VLS_12 = {}.LocaleSelector;
/** @type {[typeof __VLS_components.LocaleSelector, typeof __VLS_components.localeSelector, ]} */ ;
// @ts-ignore
var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ 'onClose': {} }, { visible: (__VLS_ctx.operating.locale == true) })));
var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ 'onClose': {} }, { visible: (__VLS_ctx.operating.locale == true) })], __VLS_functionalComponentArgsRest(__VLS_13), false));
var __VLS_16;
var __VLS_17;
var __VLS_18;
var __VLS_19 = {
    onClose: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.operating.locale = false;
    }
};
var __VLS_15;
var __VLS_20 = {}.HelpDialog;
/** @type {[typeof __VLS_components.HelpDialog, typeof __VLS_components.helpDialog, ]} */ ;
// @ts-ignore
var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20(__assign({ 'onClose': {} }, { visible: (__VLS_ctx.operating.help == true) })));
var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([__assign({ 'onClose': {} }, { visible: (__VLS_ctx.operating.help == true) })], __VLS_functionalComponentArgsRest(__VLS_21), false));
var __VLS_24;
var __VLS_25;
var __VLS_26;
var __VLS_27 = {
    onClose: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.operating.help = false;
    }
};
var __VLS_23;
/** @type {__VLS_StyleScopedClasses['profile']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['background']} */ ;
/** @type {__VLS_StyleScopedClasses['links']} */ ;
/** @type {__VLS_StyleScopedClasses['link']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text']} */ ;
/** @type {__VLS_StyleScopedClasses['suffix']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
var __VLS_dollars;
var __VLS_self;
