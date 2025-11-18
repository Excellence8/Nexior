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
var ImageUrlsInput_vue_1 = require("./config/ImageUrlsInput.vue");
// @ts-ignore
var ModeSelector_vue_1 = require("./config/ModeSelector.vue");
var ElementsSelector_vue_1 = require("./config/ElementsSelector.vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'PresetPanel',
    components: {
        ModeSelector: ModeSelector_vue_1.default,
        ImageUrlsInput: ImageUrlsInput_vue_1.default,
        ElButton: element_plus_1.ElButton,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
        ElementsSelector: ElementsSelector_vue_1.default
    },
    emits: ['generate'],
    computed: {
        config: function () {
            var _a;
            return (_a = this.$store.state.headshots) === null || _a === void 0 ? void 0 : _a.config;
        }
    },
    methods: {
        onGenerate: function () {
            this.$emit('generate');
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ModeSelector: ModeSelector_vue_1.default,
    ImageUrlsInput: ImageUrlsInput_vue_1.default,
    ElButton: element_plus_1.ElButton,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
    ElementsSelector: ElementsSelector_vue_1.default
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "panel" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "config" }));
var __VLS_0 = {}.ElementsSelector;
/** @type {[typeof __VLS_components.ElementsSelector, typeof __VLS_components.elementsSelector, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ class: "mb-4" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {}.ModeSelector;
/** @type {[typeof __VLS_components.ModeSelector, typeof __VLS_components.modeSelector, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ class: "mb-4" })));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
var __VLS_8 = {}.ImageUrlsInput;
/** @type {[typeof __VLS_components.ImageUrlsInput, typeof __VLS_components.imageUrlsInput, ]} */ ;
// @ts-ignore
var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ class: "mb-4" })));
var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "actions" }));
var __VLS_12 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign(__assign(__assign({ 'onClick': {} }, { type: "primary" }), { class: "btn w-full" }), { round: true })));
var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onClick': {} }, { type: "primary" }), { class: "btn w-full" }), { round: true })], __VLS_functionalComponentArgsRest(__VLS_13), false));
var __VLS_16;
var __VLS_17;
var __VLS_18;
var __VLS_19 = {
    onClick: (__VLS_ctx.onGenerate)
};
__VLS_15.slots.default;
var __VLS_20 = {}.FontAwesomeIcon;
/** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
// @ts-ignore
var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-2" })));
var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-2" })], __VLS_functionalComponentArgsRest(__VLS_21), false));
(__VLS_ctx.$t('headshots.button.generate'));
var __VLS_15;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['config']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['actions']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
var __VLS_dollars;
var __VLS_self;
