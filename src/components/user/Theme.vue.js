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
var utils_1 = require("@/utils");
var typescript_cookie_1 = require("typescript-cookie");
var icons_vue_1 = require("@element-plus/icons-vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'ThemeSelector',
    components: {
        ArrowDown: icons_vue_1.ArrowDown,
        ElDropdown: element_plus_1.ElDropdown,
        ElDropdownMenu: element_plus_1.ElDropdownMenu,
        ElDropdownItem: element_plus_1.ElDropdownItem,
        ElIcon: element_plus_1.ElIcon
    },
    data: function () {
        return {
            theme: 'light'
        };
    },
    computed: {
        currentLabel: function () {
            return this.theme === 'dark'
                ? this.$t('common.theme.dark')
                : this.$t('common.theme.light');
        }
    },
    mounted: function () {
        this.theme = this.loadFromCookie();
        this.applyTheme();
    },
    methods: {
        onSelect: function (command) {
            this.theme = command;
            this.applyTheme();
        },
        applyTheme: function () {
            (0, typescript_cookie_1.setCookie)('THEME', this.theme, {
                path: '/',
                domain: (0, utils_1.getDomain)()
            });
            if (this.theme === 'dark') {
                document.documentElement.classList.add('dark');
            }
            else {
                document.documentElement.classList.remove('dark');
            }
        },
        loadFromCookie: function () {
            var saved = (0, typescript_cookie_1.getCookie)('THEME');
            return saved === 'dark' ? 'dark' : 'light';
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ArrowDown: icons_vue_1.ArrowDown,
    ElDropdown: element_plus_1.ElDropdown,
    ElDropdownMenu: element_plus_1.ElDropdownMenu,
    ElDropdownItem: element_plus_1.ElDropdownItem,
    ElIcon: element_plus_1.ElIcon
};
var __VLS_components;
var __VLS_directives;
var __VLS_0 = {}.ElDropdown;
/** @type {[typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ 'onCommand': {} }, { trigger: "click" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ 'onCommand': {} }, { trigger: "click" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4;
var __VLS_5;
var __VLS_6;
var __VLS_7 = {
    onCommand: (__VLS_ctx.onSelect)
};
var __VLS_8 = {};
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "el-dropdown-link" }));
(__VLS_ctx.currentLabel);
var __VLS_9 = {}.ElIcon;
/** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
// @ts-ignore
var __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9(__assign({ class: "el-icon--right" })));
var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([__assign({ class: "el-icon--right" })], __VLS_functionalComponentArgsRest(__VLS_10), false));
__VLS_12.slots.default;
var __VLS_13 = {}.ArrowDown;
/** @type {[typeof __VLS_components.ArrowDown, typeof __VLS_components.arrowDown, ]} */ ;
// @ts-ignore
var __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
var __VLS_15 = __VLS_14.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_14), false));
var __VLS_12;
{
    var __VLS_thisSlot = __VLS_3.slots.dropdown;
    var __VLS_17 = {}.ElDropdownMenu;
    /** @type {[typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, ]} */ ;
    // @ts-ignore
    var __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({}));
    var __VLS_19 = __VLS_18.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_18), false));
    __VLS_20.slots.default;
    var __VLS_21 = {}.ElDropdownItem;
    /** @type {[typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ]} */ ;
    // @ts-ignore
    var __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
        command: "light",
    }));
    var __VLS_23 = __VLS_22.apply(void 0, __spreadArray([{
            command: "light",
        }], __VLS_functionalComponentArgsRest(__VLS_22), false));
    __VLS_24.slots.default;
    (__VLS_ctx.$t('common.theme.light'));
    var __VLS_24;
    var __VLS_25 = {}.ElDropdownItem;
    /** @type {[typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ]} */ ;
    // @ts-ignore
    var __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
        command: "dark",
    }));
    var __VLS_27 = __VLS_26.apply(void 0, __spreadArray([{
            command: "dark",
        }], __VLS_functionalComponentArgsRest(__VLS_26), false));
    __VLS_28.slots.default;
    (__VLS_ctx.$t('common.theme.dark'));
    var __VLS_28;
    var __VLS_20;
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['el-dropdown-link']} */ ;
/** @type {__VLS_StyleScopedClasses['el-icon--right']} */ ;
var __VLS_dollars;
var __VLS_self;
