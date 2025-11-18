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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var avatar_png_1 = require("@/assets/images/avatar.png");
var utils_1 = require("@/utils");
var router_1 = require("@/router");
var element_plus_1 = require("element-plus");
var Logo_vue_1 = require("./Logo.vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'TopHeader',
    components: {
        ElCol: element_plus_1.ElCol,
        Logo: Logo_vue_1.default,
        ElRow: element_plus_1.ElRow,
        ElDropdown: element_plus_1.ElDropdown,
        ElMenu: element_plus_1.ElMenu,
        ElMenuItem: element_plus_1.ElMenuItem,
        ElDropdownItem: element_plus_1.ElDropdownItem,
        ElButton: element_plus_1.ElButton,
        ElSubMenu: element_plus_1.ElSubMenu
    },
    data: function () {
        return {
            defaultAvatar: avatar_png_1.default,
            products: 'chat'
        };
    },
    computed: {
        site: function () {
            var _a;
            return (_a = this.$store.state) === null || _a === void 0 ? void 0 : _a.site;
        },
        dark: function () {
            var _a;
            return (_a = this.$store.getters) === null || _a === void 0 ? void 0 : _a.dark;
        },
        active: function () {
            var _a, _b;
            return (_b = (_a = this.$route.matched) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.path;
        },
        user: function () {
            var _a;
            return (_a = this.$store.getters) === null || _a === void 0 ? void 0 : _a.user;
        },
        authenticated: function () {
            var _a;
            return (_a = this.$store.getters) === null || _a === void 0 ? void 0 : _a.authenticated;
        }
    },
    methods: {
        openTab: function (url) {
            window.open(url, '_blank');
        },
        onSelect: function (val) {
            if (val) {
                this.$router.push(val);
            }
        },
        onHome: function () {
            this.$router.push({
                name: router_1.ROUTE_INDEX
            });
        },
        onLogin: function () {
            this.$router.push({
                name: router_1.ROUTE_AUTH_LOGIN
            });
        },
        onProfile: function () {
            var baseUrlAuth = (0, utils_1.getBaseUrlAuth)();
            window.open("".concat(baseUrlAuth, "/user/profile"), '_blank');
        },
        onVerify: function () {
            var baseUrlAuth = (0, utils_1.getBaseUrlAuth)();
            window.open("".concat(baseUrlAuth, "/user/verify"), '_blank');
        },
        onConsole: function () {
            this.$router.push({
                name: router_1.ROUTE_CONSOLE_ROOT
            });
        },
        onLogout: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.$store.dispatch('logout');
                    return [2 /*return*/];
                });
            });
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElCol: element_plus_1.ElCol,
    Logo: Logo_vue_1.default,
    ElRow: element_plus_1.ElRow,
    ElDropdown: element_plus_1.ElDropdown,
    ElMenu: element_plus_1.ElMenu,
    ElMenuItem: element_plus_1.ElMenuItem,
    ElDropdownItem: element_plus_1.ElDropdownItem,
    ElButton: element_plus_1.ElButton,
    ElSubMenu: element_plus_1.ElSubMenu
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
var __VLS_0 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ class: "header" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "header" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {};
__VLS_3.slots.default;
var __VLS_5 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    md: (4),
    xs: (24),
}));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{
        md: (4),
        xs: (24),
    }], __VLS_functionalComponentArgsRest(__VLS_6), false));
__VLS_8.slots.default;
var __VLS_9 = {}.logo;
/** @type {[typeof __VLS_components.Logo, typeof __VLS_components.logo, ]} */ ;
// @ts-ignore
var __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9(__assign({ 'onClick': {} })));
var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([__assign({ 'onClick': {} })], __VLS_functionalComponentArgsRest(__VLS_10), false));
var __VLS_13;
var __VLS_14;
var __VLS_15;
var __VLS_16 = {
    onClick: (__VLS_ctx.onHome)
};
var __VLS_12;
var __VLS_8;
var __VLS_17 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
    md: (16),
    xs: (13),
}));
var __VLS_19 = __VLS_18.apply(void 0, __spreadArray([{
        md: (16),
        xs: (13),
    }], __VLS_functionalComponentArgsRest(__VLS_18), false));
__VLS_20.slots.default;
var __VLS_21 = {}.ElMenu;
/** @type {[typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, ]} */ ;
// @ts-ignore
var __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21(__assign(__assign(__assign({ 'onSelect': {} }, { defaultActive: (__VLS_ctx.active), mode: "horizontal" }), { class: "menu" }), { ellipsis: (true) })));
var __VLS_23 = __VLS_22.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onSelect': {} }, { defaultActive: (__VLS_ctx.active), mode: "horizontal" }), { class: "menu" }), { ellipsis: (true) })], __VLS_functionalComponentArgsRest(__VLS_22), false));
var __VLS_25;
var __VLS_26;
var __VLS_27;
var __VLS_28 = {
    onSelect: (__VLS_ctx.onSelect)
};
__VLS_24.slots.default;
var __VLS_29 = {}.ElSubMenu;
/** @type {[typeof __VLS_components.ElSubMenu, typeof __VLS_components.elSubMenu, typeof __VLS_components.ElSubMenu, typeof __VLS_components.elSubMenu, ]} */ ;
// @ts-ignore
var __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({
    index: (__VLS_ctx.products),
}));
var __VLS_31 = __VLS_30.apply(void 0, __spreadArray([{
        index: (__VLS_ctx.products),
    }], __VLS_functionalComponentArgsRest(__VLS_30), false));
__VLS_32.slots.default;
{
    var __VLS_thisSlot = __VLS_32.slots.title;
    (__VLS_ctx.$t('common.nav.products'));
}
if ((_c = (_b = (_a = __VLS_ctx.site) === null || _a === void 0 ? void 0 : _a.features) === null || _b === void 0 ? void 0 : _b.chatgpt) === null || _c === void 0 ? void 0 : _c.enabled) {
    var __VLS_33 = {}.ElMenuItem;
    /** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
    // @ts-ignore
    var __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
        index: "/chat",
    }));
    var __VLS_35 = __VLS_34.apply(void 0, __spreadArray([{
            index: "/chat",
        }], __VLS_functionalComponentArgsRest(__VLS_34), false));
    __VLS_asFunctionalDirective(__VLS_directives.vT)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: ('index.title.chat') }), null, null);
}
if ((_f = (_e = (_d = __VLS_ctx.site) === null || _d === void 0 ? void 0 : _d.features) === null || _e === void 0 ? void 0 : _e.midjourney) === null || _f === void 0 ? void 0 : _f.enabled) {
    var __VLS_37 = {}.ElMenuItem;
    /** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
    // @ts-ignore
    var __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
        index: "/midjourney",
    }));
    var __VLS_39 = __VLS_38.apply(void 0, __spreadArray([{
            index: "/midjourney",
        }], __VLS_functionalComponentArgsRest(__VLS_38), false));
    __VLS_asFunctionalDirective(__VLS_directives.vT)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: ('index.title.midjourney') }), null, null);
}
if ((_j = (_h = (_g = __VLS_ctx.site) === null || _g === void 0 ? void 0 : _g.features) === null || _h === void 0 ? void 0 : _h.qrart) === null || _j === void 0 ? void 0 : _j.enabled) {
    var __VLS_41 = {}.ElMenuItem;
    /** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
    // @ts-ignore
    var __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({
        index: "/qrart",
    }));
    var __VLS_43 = __VLS_42.apply(void 0, __spreadArray([{
            index: "/qrart",
        }], __VLS_functionalComponentArgsRest(__VLS_42), false));
    __VLS_asFunctionalDirective(__VLS_directives.vT)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: ('index.title.qrart') }), null, null);
}
if ((_m = (_l = (_k = __VLS_ctx.site) === null || _k === void 0 ? void 0 : _k.features) === null || _l === void 0 ? void 0 : _l.suno) === null || _m === void 0 ? void 0 : _m.enabled) {
    var __VLS_45 = {}.ElMenuItem;
    /** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
    // @ts-ignore
    var __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
        index: "/suno",
    }));
    var __VLS_47 = __VLS_46.apply(void 0, __spreadArray([{
            index: "/suno",
        }], __VLS_functionalComponentArgsRest(__VLS_46), false));
    __VLS_asFunctionalDirective(__VLS_directives.vT)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: ('index.title.suno') }), null, null);
}
if ((_q = (_p = (_o = __VLS_ctx.site) === null || _o === void 0 ? void 0 : _o.features) === null || _p === void 0 ? void 0 : _p.luma) === null || _q === void 0 ? void 0 : _q.enabled) {
    var __VLS_49 = {}.ElMenuItem;
    /** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
    // @ts-ignore
    var __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({
        index: "/luma",
    }));
    var __VLS_51 = __VLS_50.apply(void 0, __spreadArray([{
            index: "/luma",
        }], __VLS_functionalComponentArgsRest(__VLS_50), false));
    __VLS_asFunctionalDirective(__VLS_directives.vT)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: ('index.title.luma') }), null, null);
}
if ((_t = (_s = (_r = __VLS_ctx.site) === null || _r === void 0 ? void 0 : _r.features) === null || _s === void 0 ? void 0 : _s.headshots) === null || _t === void 0 ? void 0 : _t.enabled) {
    var __VLS_53 = {}.ElMenuItem;
    /** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
    // @ts-ignore
    var __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
        index: "/headshots",
    }));
    var __VLS_55 = __VLS_54.apply(void 0, __spreadArray([{
            index: "/headshots",
        }], __VLS_functionalComponentArgsRest(__VLS_54), false));
    __VLS_asFunctionalDirective(__VLS_directives.vT)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: ('index.title.headshots') }), null, null);
}
var __VLS_32;
var __VLS_57 = {}.ElMenuItem;
/** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
// @ts-ignore
var __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57(__assign({ 'onRoute': {} }, { 'onClick': {} })));
var __VLS_59 = __VLS_58.apply(void 0, __spreadArray([__assign({ 'onRoute': {} }, { 'onClick': {} })], __VLS_functionalComponentArgsRest(__VLS_58), false));
var __VLS_61;
var __VLS_62;
var __VLS_63;
var __VLS_64 = {
    onRoute: (undefined)
};
var __VLS_65 = {
    onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.openTab('https://platform.acedata.cloud');
    }
};
__VLS_asFunctionalDirective(__VLS_directives.vT)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: ('common.nav.apiPlatform') }), null, null);
var __VLS_60;
var __VLS_66 = {}.ElMenuItem;
/** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
// @ts-ignore
var __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66(__assign({ 'onRoute': {} }, { 'onClick': {} })));
var __VLS_68 = __VLS_67.apply(void 0, __spreadArray([__assign({ 'onRoute': {} }, { 'onClick': {} })], __VLS_functionalComponentArgsRest(__VLS_67), false));
var __VLS_70;
var __VLS_71;
var __VLS_72;
var __VLS_73 = {
    onRoute: (undefined)
};
var __VLS_74 = {
    onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.openTab('https://platform.acedata.cloud/support');
    }
};
__VLS_asFunctionalDirective(__VLS_directives.vT)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: ('common.nav.support') }), null, null);
var __VLS_69;
var __VLS_75 = {}.ElMenuItem;
/** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
// @ts-ignore
var __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75(__assign({ 'onRoute': {} }, { 'onClick': {} })));
var __VLS_77 = __VLS_76.apply(void 0, __spreadArray([__assign({ 'onRoute': {} }, { 'onClick': {} })], __VLS_functionalComponentArgsRest(__VLS_76), false));
var __VLS_79;
var __VLS_80;
var __VLS_81;
var __VLS_82 = {
    onRoute: (undefined)
};
var __VLS_83 = {
    onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.openTab('https://platform.acedata.cloud/earning');
    }
};
__VLS_asFunctionalDirective(__VLS_directives.vT)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: ('common.nav.referral') }), null, null);
var __VLS_78;
var __VLS_24;
var __VLS_20;
var __VLS_84 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({
    md: (4),
    xs: (11),
}));
var __VLS_86 = __VLS_85.apply(void 0, __spreadArray([{
        md: (4),
        xs: (11),
    }], __VLS_functionalComponentArgsRest(__VLS_85), false));
__VLS_87.slots.default;
if (!__VLS_ctx.authenticated) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "mt-4 pr-10" }));
    var __VLS_88 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    var __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88(__assign(__assign(__assign({ 'onClick': {} }, { type: "primary" }), { class: "float-right" }), { size: "small", round: true })));
    var __VLS_90 = __VLS_89.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onClick': {} }, { type: "primary" }), { class: "float-right" }), { size: "small", round: true })], __VLS_functionalComponentArgsRest(__VLS_89), false));
    var __VLS_92 = void 0;
    var __VLS_93 = void 0;
    var __VLS_94 = void 0;
    var __VLS_95 = {
        onClick: (__VLS_ctx.onLogin)
    };
    __VLS_91.slots.default;
    (__VLS_ctx.$t('common.button.login'));
    var __VLS_91;
    var __VLS_96 = {}.LanguageSelector;
    /** @type {[typeof __VLS_components.LanguageSelector, typeof __VLS_components.languageSelector, ]} */ ;
    // @ts-ignore
    var __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96(__assign({ class: "locale float-right mr-4" })));
    var __VLS_98 = __VLS_97.apply(void 0, __spreadArray([__assign({ class: "locale float-right mr-4" })], __VLS_functionalComponentArgsRest(__VLS_97), false));
    var __VLS_100 = {}.DarkSelector;
    /** @type {[typeof __VLS_components.DarkSelector, typeof __VLS_components.darkSelector, ]} */ ;
    // @ts-ignore
    var __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100(__assign({ class: "float-right mr-4" })));
    var __VLS_102 = __VLS_101.apply(void 0, __spreadArray([__assign({ class: "float-right mr-4" })], __VLS_functionalComponentArgsRest(__VLS_101), false));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "float-right" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: (__VLS_ctx.onConsole) }, { class: "console" }));
    (__VLS_ctx.$t('common.button.console'));
    var __VLS_104 = {}.ElDropdown;
    /** @type {[typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, ]} */ ;
    // @ts-ignore
    var __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({
        trigger: "click",
    }));
    var __VLS_106 = __VLS_105.apply(void 0, __spreadArray([{
            trigger: "click",
        }], __VLS_functionalComponentArgsRest(__VLS_105), false));
    __VLS_107.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: (((_u = __VLS_ctx.user) === null || _u === void 0 ? void 0 : _u.avatar) || __VLS_ctx.defaultAvatar) }, { class: "avatar" }));
    {
        var __VLS_thisSlot = __VLS_107.slots.dropdown;
        var __VLS_108 = {}.ElDropdownMenu;
        /** @type {[typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, ]} */ ;
        // @ts-ignore
        var __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({}));
        var __VLS_110 = __VLS_109.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_109), false));
        __VLS_111.slots.default;
        var __VLS_112 = {}.ElDropdownItem;
        /** @type {[typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ]} */ ;
        // @ts-ignore
        var __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112(__assign({ 'onClick': {} })));
        var __VLS_114 = __VLS_113.apply(void 0, __spreadArray([__assign({ 'onClick': {} })], __VLS_functionalComponentArgsRest(__VLS_113), false));
        var __VLS_116 = void 0;
        var __VLS_117 = void 0;
        var __VLS_118 = void 0;
        var __VLS_119 = {
            onClick: (__VLS_ctx.onProfile)
        };
        __VLS_115.slots.default;
        (__VLS_ctx.$t('common.button.profile'));
        var __VLS_115;
        var __VLS_120 = {}.ElDropdownItem;
        /** @type {[typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ]} */ ;
        // @ts-ignore
        var __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120(__assign({ 'onClick': {} })));
        var __VLS_122 = __VLS_121.apply(void 0, __spreadArray([__assign({ 'onClick': {} })], __VLS_functionalComponentArgsRest(__VLS_121), false));
        var __VLS_124 = void 0;
        var __VLS_125 = void 0;
        var __VLS_126 = void 0;
        var __VLS_127 = {
            onClick: (__VLS_ctx.onLogout)
        };
        __VLS_123.slots.default;
        (__VLS_ctx.$t('common.button.logout'));
        var __VLS_123;
        var __VLS_111;
    }
    var __VLS_107;
}
var __VLS_87;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['header']} */ ;
/** @type {__VLS_StyleScopedClasses['menu']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pr-10']} */ ;
/** @type {__VLS_StyleScopedClasses['float-right']} */ ;
/** @type {__VLS_StyleScopedClasses['locale']} */ ;
/** @type {__VLS_StyleScopedClasses['float-right']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-4']} */ ;
/** @type {__VLS_StyleScopedClasses['float-right']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-4']} */ ;
/** @type {__VLS_StyleScopedClasses['float-right']} */ ;
/** @type {__VLS_StyleScopedClasses['console']} */ ;
/** @type {__VLS_StyleScopedClasses['avatar']} */ ;
var __VLS_dollars;
var __VLS_self;
