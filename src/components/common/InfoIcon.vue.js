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
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var element_plus_1 = require("element-plus");
exports.default = (0, vue_1.defineComponent)({
    name: 'InfoIcon',
    components: {
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
        ElTooltip: element_plus_1.ElTooltip
    },
    props: {
        content: {
            type: String,
            required: true
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
    ElTooltip: element_plus_1.ElTooltip
};
var __VLS_components;
var __VLS_directives;
var __VLS_0 = {}.ElTooltip;
/** @type {[typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    effect: "dark",
    content: (__VLS_ctx.content),
    placement: "top",
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        effect: "dark",
        content: (__VLS_ctx.content),
        placement: "top",
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {};
__VLS_3.slots.default;
var __VLS_5 = {}.FontAwesomeIcon;
/** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5(__assign({ icon: "fa-solid fa-info" }, { class: "icon icon-rotate inline-block w-[20px] h-[20px] border-[3px] border-solid border-[#aaa] rounded-full text-[10px] p-[5px] scale-[0.4] cursor-pointer text-[#aaa] -mr-[5px]" })));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-info" }, { class: "icon icon-rotate inline-block w-[20px] h-[20px] border-[3px] border-solid border-[#aaa] rounded-full text-[10px] p-[5px] scale-[0.4] cursor-pointer text-[#aaa] -mr-[5px]" })], __VLS_functionalComponentArgsRest(__VLS_6), false));
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-rotate']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[20px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[20px]']} */ ;
/** @type {__VLS_StyleScopedClasses['border-[3px]']} */ ;
/** @type {__VLS_StyleScopedClasses['border-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['border-[#aaa]']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['p-[5px]']} */ ;
/** @type {__VLS_StyleScopedClasses['scale-[0.4]']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#aaa]']} */ ;
/** @type {__VLS_StyleScopedClasses['-mr-[5px]']} */ ;
var __VLS_dollars;
var __VLS_self;
