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
exports.default = (0, vue_1.defineComponent)({
    name: 'BotPlaceholder',
    components: {
        ElSkeleton: element_plus_1.ElSkeleton,
        ElSkeletonItem: element_plus_1.ElSkeletonItem
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElSkeleton: element_plus_1.ElSkeleton,
    ElSkeletonItem: element_plus_1.ElSkeletonItem
};
var __VLS_components;
var __VLS_directives;
for (var _i = 0, _a = __VLS_getVForSourceType((3)); _i < _a.length; _i++) {
    var _1 = _a[_i][0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: (_1) }, { class: "flex mb-[10px]" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "w-[70px] p-[10px]" }));
    var __VLS_0 = {}.ElSkeleton;
    /** @type {[typeof __VLS_components.ElSkeleton, typeof __VLS_components.elSkeleton, typeof __VLS_components.ElSkeleton, typeof __VLS_components.elSkeleton, ]} */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        animated: true,
    }));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
            animated: true,
        }], __VLS_functionalComponentArgsRest(__VLS_1), false));
    __VLS_3.slots.default;
    {
        var __VLS_thisSlot = __VLS_3.slots.template;
        var __VLS_4 = {}.ElSkeletonItem;
        /** @type {[typeof __VLS_components.ElSkeletonItem, typeof __VLS_components.elSkeletonItem, ]} */ ;
        // @ts-ignore
        var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ variant: "image" }, { class: "w-[50px] h-[50px] rounded-full" })));
        var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ variant: "image" }, { class: "w-[50px] h-[50px] rounded-full" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
    }
    var __VLS_3;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex-1 p-[10px]" }));
    var __VLS_8 = {}.ElSkeleton;
    /** @type {[typeof __VLS_components.ElSkeleton, typeof __VLS_components.elSkeleton, typeof __VLS_components.ElSkeleton, typeof __VLS_components.elSkeleton, ]} */ ;
    // @ts-ignore
    var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        animated: true,
    }));
    var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([{
            animated: true,
        }], __VLS_functionalComponentArgsRest(__VLS_9), false));
    __VLS_11.slots.default;
    {
        var __VLS_thisSlot = __VLS_11.slots.template;
        var __VLS_12 = {}.ElSkeletonItem;
        /** @type {[typeof __VLS_components.ElSkeletonItem, typeof __VLS_components.elSkeletonItem, ]} */ ;
        // @ts-ignore
        var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ variant: "p" }, { class: "w-[200px] h-[20px] mb-[15px] block" })));
        var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ variant: "p" }, { class: "w-[200px] h-[20px] mb-[15px] block" })], __VLS_functionalComponentArgsRest(__VLS_13), false));
        var __VLS_16 = {}.ElSkeletonItem;
        /** @type {[typeof __VLS_components.ElSkeletonItem, typeof __VLS_components.elSkeletonItem, ]} */ ;
        // @ts-ignore
        var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign({ variant: "p" }, { class: "w-full h-[200px] max-w-[300px] block" })));
        var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign({ variant: "p" }, { class: "w-full h-[200px] max-w-[300px] block" })], __VLS_functionalComponentArgsRest(__VLS_17), false));
    }
    var __VLS_11;
}
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[70px]']} */ ;
/** @type {__VLS_StyleScopedClasses['p-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[50px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[50px]']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['p-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[200px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[20px]']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-[15px]']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[200px]']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-[300px]']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
var __VLS_dollars;
var __VLS_self;
