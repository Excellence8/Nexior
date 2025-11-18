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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var IngredientsSelector_vue_1 = require("./config/IngredientsSelector.vue");
var EffectSelector_vue_1 = require("./config/EffectSelector.vue");
var IngredientsModelSelector_vue_1 = require("./config/IngredientsModelSelector.vue");
var ModelSelector_vue_1 = require("./config/ModelSelector.vue");
var ImageUrlInput_vue_1 = require("./config/ImageUrlInput.vue");
var PromptInput_vue_1 = require("./config/PromptInput.vue");
var Consumption_vue_1 = require("../common/Consumption.vue");
var utils_1 = require("@/utils");
exports.default = (0, vue_1.defineComponent)({
    name: 'PresetPanel',
    components: {
        ImageUrlInput: ImageUrlInput_vue_1.default,
        ElButton: element_plus_1.ElButton,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
        Consumption: Consumption_vue_1.default,
        PromptInput: PromptInput_vue_1.default,
        IngredientsSelector: IngredientsSelector_vue_1.default,
        IngredientsModelSelector: IngredientsModelSelector_vue_1.default,
        ModelSelector: ModelSelector_vue_1.default,
        EffectSelector: EffectSelector_vue_1.default
    },
    emits: ['generate'],
    computed: {
        config: function () {
            var _a;
            return (_a = this.$store.state.pika) === null || _a === void 0 ? void 0 : _a.config;
        },
        consumption: function () {
            var _a, _b;
            return (0, utils_1.getConsumption)(this.config, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.metadata) === null || _b === void 0 ? void 0 : _b.price);
        },
        service: function () {
            var _a;
            return (_a = this.$store.state.pika) === null || _a === void 0 ? void 0 : _a.service;
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
    ImageUrlInput: ImageUrlInput_vue_1.default,
    ElButton: element_plus_1.ElButton,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
    Consumption: Consumption_vue_1.default,
    PromptInput: PromptInput_vue_1.default,
    IngredientsSelector: IngredientsSelector_vue_1.default,
    IngredientsModelSelector: IngredientsModelSelector_vue_1.default,
    ModelSelector: ModelSelector_vue_1.default,
    EffectSelector: EffectSelector_vue_1.default
};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex flex-col h-full" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex-1 overflow-y-auto p-[15px]" }));
var __VLS_0 = {}.PromptInput;
/** @type {[typeof __VLS_components.PromptInput, typeof __VLS_components.promptInput, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ class: "mb-4" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {}.ModelSelector;
/** @type {[typeof __VLS_components.ModelSelector, typeof __VLS_components.modelSelector, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ class: "mb-4" })));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
var __VLS_8 = {}.IngredientsSelector;
/** @type {[typeof __VLS_components.IngredientsSelector, typeof __VLS_components.ingredientsSelector, ]} */ ;
// @ts-ignore
var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ class: "mb-4" })));
var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
var __VLS_12 = {}.EffectSelector;
/** @type {[typeof __VLS_components.EffectSelector, typeof __VLS_components.effectSelector, ]} */ ;
// @ts-ignore
var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ class: "mb-4" })));
var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_13), false));
if ((_a = __VLS_ctx.config) === null || _a === void 0 ? void 0 : _a.ingredients) {
    var __VLS_16 = {}.ImageUrlInput;
    /** @type {[typeof __VLS_components.ImageUrlInput, typeof __VLS_components.imageUrlInput, ]} */ ;
    // @ts-ignore
    var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign({ class: "mb-4" })));
    var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_17), false));
}
if ((_b = __VLS_ctx.config) === null || _b === void 0 ? void 0 : _b.ingredients) {
    var __VLS_20 = {}.IngredientsModelSelector;
    /** @type {[typeof __VLS_components.IngredientsModelSelector, typeof __VLS_components.ingredientsModelSelector, ]} */ ;
    // @ts-ignore
    var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20(__assign({ class: "mb-4" })));
    var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_21), false));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex flex-col items-center justify-center px-[15px] pb-[15px]" }));
var __VLS_24 = {}.consumption;
/** @type {[typeof __VLS_components.Consumption, typeof __VLS_components.consumption, ]} */ ;
// @ts-ignore
var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    value: (__VLS_ctx.consumption),
    service: (__VLS_ctx.service),
}));
var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([{
        value: (__VLS_ctx.consumption),
        service: (__VLS_ctx.service),
    }], __VLS_functionalComponentArgsRest(__VLS_25), false));
var __VLS_28 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
var __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28(__assign(__assign(__assign({ 'onClick': {} }, { type: "primary" }), { class: "btn w-full" }), { round: true })));
var __VLS_30 = __VLS_29.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onClick': {} }, { type: "primary" }), { class: "btn w-full" }), { round: true })], __VLS_functionalComponentArgsRest(__VLS_29), false));
var __VLS_32;
var __VLS_33;
var __VLS_34;
var __VLS_35 = {
    onClick: (__VLS_ctx.onGenerate)
};
__VLS_31.slots.default;
var __VLS_36 = {}.FontAwesomeIcon;
/** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
// @ts-ignore
var __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-2" })));
var __VLS_38 = __VLS_37.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-2" })], __VLS_functionalComponentArgsRest(__VLS_37), false));
(__VLS_ctx.$t('pika.button.generate'));
var __VLS_31;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-y-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['p-[15px]']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['px-[15px]']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-[15px]']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
var __VLS_dollars;
var __VLS_self;
