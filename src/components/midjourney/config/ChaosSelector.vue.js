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
var InfoIcon_vue_1 = require("@/components/common/InfoIcon.vue");
var DEFAULT_CHAOS = 0;
exports.default = (0, vue_1.defineComponent)({
    name: 'ChaosSelector',
    components: {
        ElSlider: element_plus_1.ElSlider,
        InfoIcon: InfoIcon_vue_1.default,
        ElInputNumber: element_plus_1.ElInputNumber
    },
    computed: {
        value: {
            get: function () {
                return this.$store.state.midjourney.config.chaos;
            },
            set: function (val) {
                console.debug('set quality', val);
                this.$store.commit('midjourney/setConfig', __assign(__assign({}, this.$store.state.midjourney.config), { chaos: val }));
            }
        }
    },
    mounted: function () {
        if (!this.value) {
            this.value = DEFAULT_CHAOS;
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElSlider: element_plus_1.ElSlider,
    InfoIcon: InfoIcon_vue_1.default,
    ElInputNumber: element_plus_1.ElInputNumber
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex justify-between" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex justify-start items-center" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "text-sm font-bold" }));
(__VLS_ctx.$t('midjourney.name.chaos'));
var __VLS_0 = {}.InfoIcon;
/** @type {[typeof __VLS_components.InfoIcon, typeof __VLS_components.infoIcon, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    content: (__VLS_ctx.$t('midjourney.description.chaos')),
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        content: (__VLS_ctx.$t('midjourney.description.chaos')),
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex justify-end items-center" }));
var __VLS_4 = {}.ElInputNumber;
/** @type {[typeof __VLS_components.ElInputNumber, typeof __VLS_components.elInputNumber, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    modelValue: (__VLS_ctx.value),
    controlsPosition: "right",
}));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.value),
        controlsPosition: "right",
    }], __VLS_functionalComponentArgsRest(__VLS_5), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "w-full px-2" }));
var __VLS_8 = {}.ElSlider;
/** @type {[typeof __VLS_components.ElSlider, typeof __VLS_components.elSlider, ]} */ ;
// @ts-ignore
var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    modelValue: (__VLS_ctx.value),
    min: (0),
    max: (100),
    step: (1),
}));
var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.value),
        min: (0),
        max: (100),
        step: (1),
    }], __VLS_functionalComponentArgsRest(__VLS_9), false));
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-start']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
var __VLS_dollars;
var __VLS_self;
