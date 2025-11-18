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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var Avatar_vue_1 = require("@/components/user/Avatar.vue");
var Setting_vue_1 = require("@/components/user/Setting.vue");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var router_1 = require("@/router");
var element_plus_1 = require("element-plus");
var element_plus_2 = require("element-plus");
exports.default = (0, vue_1.defineComponent)({
    name: 'UserCenter',
    components: {
        UserAvatar: Avatar_vue_1.default,
        UserSetting: Setting_vue_1.default,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
        ElDivider: element_plus_1.ElDivider,
        ElDropdownMenu: element_plus_2.ElDropdownMenu,
        ElDropdownItem: element_plus_2.ElDropdownItem,
        ElDropdown: element_plus_2.ElDropdown
    },
    data: function () {
        return {
            showMenu: false,
            showSetting: false
        };
    },
    computed: {
        user: function () {
            var _a;
            return (_a = this.$store.getters) === null || _a === void 0 ? void 0 : _a.user;
        }
    },
    mounted: function () {
        document.addEventListener('click', this.closeMenu);
    },
    unmounted: function () {
        document.removeEventListener('click', this.closeMenu);
    },
    methods: {
        toggleMenu: function () {
            this.showMenu = !this.showMenu;
        },
        closeMenu: function (event) {
            var target = event.target;
            if (!this.$el.contains(target)) {
                this.showMenu = false;
            }
        },
        onLogout: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.$store.dispatch('logout')];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        },
        onConsole: function () {
            this.$router.push({ name: router_1.ROUTE_CONSOLE_ROOT });
        },
        onDistribution: function () {
            this.$router.push({
                name: router_1.ROUTE_DISTRIBUTION_INDEX
            });
        },
        onSettings: function () {
            this.showSetting = true;
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    UserAvatar: Avatar_vue_1.default,
    UserSetting: Setting_vue_1.default,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
    ElDivider: element_plus_1.ElDivider,
    ElDropdownMenu: element_plus_2.ElDropdownMenu,
    ElDropdownItem: element_plus_2.ElDropdownItem,
    ElDropdown: element_plus_2.ElDropdown
};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "center" }));
var __VLS_0 = {}.ElDropdown;
/** @type {[typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    trigger: "click",
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        trigger: "click",
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
var __VLS_4 = {}.UserAvatar;
/** @type {[typeof __VLS_components.UserAvatar, typeof __VLS_components.userAvatar, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ class: "cursor-pointer" })));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ class: "cursor-pointer" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
{
    var __VLS_thisSlot = __VLS_3.slots.dropdown;
    if (__VLS_ctx.user.email) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "px-4 py-4 text-sm font-medium" }));
        ((_a = __VLS_ctx.user) === null || _a === void 0 ? void 0 : _a.email);
    }
    if (__VLS_ctx.user.email) {
        var __VLS_8 = {}.ElDivider;
        /** @type {[typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, ]} */ ;
        // @ts-ignore
        var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ class: "mb-1 mt-1" })));
        var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ class: "mb-1 mt-1" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
    }
    var __VLS_12 = {}.ElDropdownMenu;
    /** @type {[typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, ]} */ ;
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_13), false));
    __VLS_15.slots.default;
    var __VLS_16 = {}.ElDropdownItem;
    /** @type {[typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ]} */ ;
    // @ts-ignore
    var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign({ 'onClick': {} }, { class: "py-2" })));
    var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { class: "py-2" })], __VLS_functionalComponentArgsRest(__VLS_17), false));
    var __VLS_20 = void 0;
    var __VLS_21 = void 0;
    var __VLS_22 = void 0;
    var __VLS_23 = {
        onClick: (__VLS_ctx.onSettings)
    };
    __VLS_19.slots.default;
    var __VLS_24 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24(__assign({ icon: "fa-solid fa-cog" }, { class: "mr-2" })));
    var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-cog" }, { class: "mr-2" })], __VLS_functionalComponentArgsRest(__VLS_25), false));
    (__VLS_ctx.$t('common.nav.setting'));
    var __VLS_19;
    var __VLS_28 = {}.ElDropdownItem;
    /** @type {[typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ]} */ ;
    // @ts-ignore
    var __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28(__assign({ 'onClick': {} }, { class: "py-2" })));
    var __VLS_30 = __VLS_29.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { class: "py-2" })], __VLS_functionalComponentArgsRest(__VLS_29), false));
    var __VLS_32 = void 0;
    var __VLS_33 = void 0;
    var __VLS_34 = void 0;
    var __VLS_35 = {
        onClick: (__VLS_ctx.onDistribution)
    };
    __VLS_31.slots.default;
    var __VLS_36 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36(__assign({ icon: "fa-solid fa-coins" }, { class: "mr-2" })));
    var __VLS_38 = __VLS_37.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-coins" }, { class: "mr-2" })], __VLS_functionalComponentArgsRest(__VLS_37), false));
    (__VLS_ctx.$t('common.nav.distribution'));
    var __VLS_31;
    var __VLS_40 = {}.ElDropdownItem;
    /** @type {[typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ]} */ ;
    // @ts-ignore
    var __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40(__assign({ 'onClick': {} }, { class: "py-2" })));
    var __VLS_42 = __VLS_41.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { class: "py-2" })], __VLS_functionalComponentArgsRest(__VLS_41), false));
    var __VLS_44 = void 0;
    var __VLS_45 = void 0;
    var __VLS_46 = void 0;
    var __VLS_47 = {
        onClick: (__VLS_ctx.onConsole)
    };
    __VLS_43.slots.default;
    var __VLS_48 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48(__assign({ icon: "fa-solid fa-compass" }, { class: "mr-2" })));
    var __VLS_50 = __VLS_49.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-compass" }, { class: "mr-2" })], __VLS_functionalComponentArgsRest(__VLS_49), false));
    (__VLS_ctx.$t('common.nav.console'));
    var __VLS_43;
    var __VLS_52 = {}.ElDropdownItem;
    /** @type {[typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ]} */ ;
    // @ts-ignore
    var __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52(__assign({ 'onClick': {} }, { class: "py-2" })));
    var __VLS_54 = __VLS_53.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { class: "py-2" })], __VLS_functionalComponentArgsRest(__VLS_53), false));
    var __VLS_56 = void 0;
    var __VLS_57 = void 0;
    var __VLS_58 = void 0;
    var __VLS_59 = {
        onClick: (__VLS_ctx.onLogout)
    };
    __VLS_55.slots.default;
    var __VLS_60 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60(__assign({ icon: "fa-solid fa-arrow-right-from-bracket" }, { class: "mr-2" })));
    var __VLS_62 = __VLS_61.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-arrow-right-from-bracket" }, { class: "mr-2" })], __VLS_functionalComponentArgsRest(__VLS_61), false));
    (__VLS_ctx.$t('common.nav.logOut'));
    var __VLS_55;
    var __VLS_15;
}
var __VLS_3;
var __VLS_64 = {}.UserSetting;
/** @type {[typeof __VLS_components.UserSetting, typeof __VLS_components.userSetting, ]} */ ;
// @ts-ignore
var __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({
    visible: (__VLS_ctx.showSetting),
}));
var __VLS_66 = __VLS_65.apply(void 0, __spreadArray([{
        visible: (__VLS_ctx.showSetting),
    }], __VLS_functionalComponentArgsRest(__VLS_65), false));
/** @type {__VLS_StyleScopedClasses['center']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
var __VLS_dollars;
var __VLS_self;
