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
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
exports.default = (0, vue_1.defineComponent)({
    name: 'LayoutFlux',
    components: {
        ElDrawer: element_plus_1.ElDrawer,
        ElButton: element_plus_1.ElButton,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon
    },
    data: function () {
        return {
            drawer: false
        };
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElDrawer: element_plus_1.ElDrawer,
    ElButton: element_plus_1.ElButton,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon
};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['menu']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "main flex flex-row flex-1" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "config w-[300px] h-full overflow-y-scroll border-r border-[var(--el-border-color)]" }));
var __VLS_0 = {};
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "result h-full p-[15px] flex-1 flex flex-col" }));
var __VLS_2 = {};
var __VLS_4 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign(__assign({ 'onClick': {} }, { circle: true }), { class: "menu" })));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { circle: true }), { class: "menu" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
var __VLS_8;
var __VLS_9;
var __VLS_10;
var __VLS_11 = {
    onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.drawer = true;
    }
};
__VLS_7.slots.default;
var __VLS_12 = {}.FontAwesomeIcon;
/** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
// @ts-ignore
var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    icon: "fa-solid fa-magic",
}));
var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{
        icon: "fa-solid fa-magic",
    }], __VLS_functionalComponentArgsRest(__VLS_13), false));
var __VLS_7;
var __VLS_16 = {}.ElDrawer;
/** @type {[typeof __VLS_components.ElDrawer, typeof __VLS_components.elDrawer, typeof __VLS_components.ElDrawer, typeof __VLS_components.elDrawer, ]} */ ;
// @ts-ignore
var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign({ modelValue: (__VLS_ctx.drawer), direction: "ltr", withHeader: (false), size: "340px" }, { class: "drawer" })));
var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign({ modelValue: (__VLS_ctx.drawer), direction: "ltr", withHeader: (false), size: "340px" }, { class: "drawer" })], __VLS_functionalComponentArgsRest(__VLS_17), false));
__VLS_19.slots.default;
var __VLS_20 = {};
var __VLS_19;
/** @type {__VLS_StyleScopedClasses['main']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['config']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[300px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-y-scroll']} */ ;
/** @type {__VLS_StyleScopedClasses['border-r']} */ ;
/** @type {__VLS_StyleScopedClasses['border-[var(--el-border-color)]']} */ ;
/** @type {__VLS_StyleScopedClasses['result']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['p-[15px]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['menu']} */ ;
/** @type {__VLS_StyleScopedClasses['drawer']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0, __VLS_3 = __VLS_2, __VLS_21 = __VLS_20;
var __VLS_dollars;
var __VLS_self;
