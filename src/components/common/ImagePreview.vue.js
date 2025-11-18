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
    name: 'ImagePreview',
    components: {
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
        ElProgress: element_plus_1.ElProgress
    },
    props: {
        url: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        percentage: {
            type: Number,
            required: false,
            default: undefined
        },
        closable: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    emits: ['remove']
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
    ElProgress: element_plus_1.ElProgress
};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "image w-[50px] h-[50px] relative rounded-[var(--el-border-radius-base)] overflow-hidden border border-[var(--el-border-color)] bg-[var(--el-fill-color-lighter)]" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ class: "w-full h-full object-cover" }, { src: (__VLS_ctx.url), alt: (__VLS_ctx.name) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "overlay absolute inset-0 bg-white/50 backdrop-blur-[1px]" }));
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.percentage && __VLS_ctx.percentage < 100) }), null, null);
var __VLS_0 = {}.ElProgress;
/** @type {[typeof __VLS_components.ElProgress, typeof __VLS_components.elProgress, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ type: "circle", strokeWidth: (4), percentage: (__VLS_ctx.percentage), width: (34) }, { class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34px] h-[34px] z-[10] m-auto text-[12px]" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ type: "circle", strokeWidth: (4), percentage: (__VLS_ctx.percentage), width: (34) }, { class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34px] h-[34px] z-[10] m-auto text-[12px]" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.percentage && __VLS_ctx.percentage < 100) }), null, null);
if (__VLS_ctx.closable) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "close absolute cursor-pointer top-[4px] right-[4px] bg-[rgba(0,0,0,0.65)] text-white w-[16px] h-[16px] rounded-full flex text-[10px] text-center items-center justify-center hover:bg-[rgba(0,0,0,0.8)]" }));
    var __VLS_4 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign(__assign({ 'onClick': {} }, { icon: "fa-solid fa-xmark" }), { class: "icon icon-close" })));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { icon: "fa-solid fa-xmark" }), { class: "icon icon-close" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
    var __VLS_8 = void 0;
    var __VLS_9 = void 0;
    var __VLS_10 = void 0;
    var __VLS_11 = {
        onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!(__VLS_ctx.closable))
                return;
            __VLS_ctx.$emit('remove');
        }
    };
    var __VLS_7;
}
/** @type {__VLS_StyleScopedClasses['image']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[50px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[50px]']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-[var(--el-border-radius-base)]']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-[var(--el-border-color)]']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[var(--el-fill-color-lighter)]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['overlay']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white/50']} */ ;
/** @type {__VLS_StyleScopedClasses['backdrop-blur-[1px]']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['top-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['left-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-x-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-y-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[34px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[34px]']} */ ;
/** @type {__VLS_StyleScopedClasses['z-[10]']} */ ;
/** @type {__VLS_StyleScopedClasses['m-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[12px]']} */ ;
/** @type {__VLS_StyleScopedClasses['close']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['top-[4px]']} */ ;
/** @type {__VLS_StyleScopedClasses['right-[4px]']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[rgba(0,0,0,0.65)]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[16px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[16px]']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-[rgba(0,0,0,0.8)]']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-close']} */ ;
var __VLS_dollars;
var __VLS_self;
