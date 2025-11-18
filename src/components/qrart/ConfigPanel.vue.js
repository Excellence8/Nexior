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
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var TypeSelector_vue_1 = require("./config/TypeSelector.vue");
var AspectRatioSelector_vue_1 = require("./config/AspectRatioSelector.vue");
var QrwSelector_vue_1 = require("./config/QrwSelector.vue");
var StepsSelector_vue_1 = require("./config/StepsSelector.vue");
var AdvancedSelector_vue_1 = require("./config/AdvancedSelector.vue");
var MarkerShapeSelector_vue_1 = require("./config/MarkerShapeSelector.vue");
var SubMarkerSelector_vue_1 = require("./config/SubMarkerSelector.vue");
var RotateSelector_vue_1 = require("./config/RotateSelector.vue");
var EclSelector_vue_1 = require("./config/EclSelector.vue");
var PositionSelector_vue_1 = require("./config/PositionSelector.vue");
var PaddingLevelSelector_vue_1 = require("./config/PaddingLevelSelector.vue");
var PaddingNoiseSelector_vue_1 = require("./config/PaddingNoiseSelector.vue");
var PixelStyleSelector_vue_1 = require("./config/PixelStyleSelector.vue");
var SeedInput_vue_1 = require("./config/SeedInput.vue");
var PresetSelector2_vue_1 = require("./config/PresetSelector2.vue");
var ContentInput_vue_1 = require("./config/ContentInput.vue");
var PromptInput_vue_1 = require("./config/PromptInput.vue");
var element_plus_1 = require("element-plus");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var Consumption_vue_1 = require("../common/Consumption.vue");
var utils_1 = require("@/utils");
exports.default = (0, vue_1.defineComponent)({
    name: 'ConfigPanel',
    components: {
        ElButton: element_plus_1.ElButton,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
        Consumption: Consumption_vue_1.default,
        TypeSelector: TypeSelector_vue_1.default,
        PositionSelector: PositionSelector_vue_1.default,
        PixelStyleSelector: PixelStyleSelector_vue_1.default,
        PaddingLevelSelector: PaddingLevelSelector_vue_1.default,
        SeedInput: SeedInput_vue_1.default,
        AspectRatioSelector: AspectRatioSelector_vue_1.default,
        QrwSelector: QrwSelector_vue_1.default,
        EclSelector: EclSelector_vue_1.default,
        StepsSelector: StepsSelector_vue_1.default,
        PaddingNoiseSelector: PaddingNoiseSelector_vue_1.default,
        AdvancedSelector: AdvancedSelector_vue_1.default,
        MarkerShapeSelector: MarkerShapeSelector_vue_1.default,
        SubMarkerSelector: SubMarkerSelector_vue_1.default,
        RotateSelector: RotateSelector_vue_1.default,
        PresetSelector: PresetSelector2_vue_1.default,
        ContentInput: ContentInput_vue_1.default,
        PromptInput: PromptInput_vue_1.default
    },
    emits: ['generate'],
    computed: {
        config: function () {
            var _a;
            return (_a = this.$store.state.qrart) === null || _a === void 0 ? void 0 : _a.config;
        },
        consumption: function () {
            var _a, _b;
            return (0, utils_1.getConsumption)(this.config, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.metadata) === null || _b === void 0 ? void 0 : _b.price);
        },
        service: function () {
            var _a;
            return (_a = this.$store.state.qrart) === null || _a === void 0 ? void 0 : _a.service;
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElButton: element_plus_1.ElButton,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
    Consumption: Consumption_vue_1.default,
    TypeSelector: TypeSelector_vue_1.default,
    PositionSelector: PositionSelector_vue_1.default,
    PixelStyleSelector: PixelStyleSelector_vue_1.default,
    PaddingLevelSelector: PaddingLevelSelector_vue_1.default,
    SeedInput: SeedInput_vue_1.default,
    AspectRatioSelector: AspectRatioSelector_vue_1.default,
    QrwSelector: QrwSelector_vue_1.default,
    EclSelector: EclSelector_vue_1.default,
    StepsSelector: StepsSelector_vue_1.default,
    PaddingNoiseSelector: PaddingNoiseSelector_vue_1.default,
    AdvancedSelector: AdvancedSelector_vue_1.default,
    MarkerShapeSelector: MarkerShapeSelector_vue_1.default,
    SubMarkerSelector: SubMarkerSelector_vue_1.default,
    RotateSelector: RotateSelector_vue_1.default,
    PresetSelector: PresetSelector2_vue_1.default,
    ContentInput: ContentInput_vue_1.default,
    PromptInput: PromptInput_vue_1.default
};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex flex-col h-full" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex-1 overflow-y-auto p-[15px]" }));
var __VLS_0 = {}.TypeSelector;
/** @type {[typeof __VLS_components.TypeSelector, typeof __VLS_components.typeSelector, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ class: "mb-4" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {}.ContentInput;
/** @type {[typeof __VLS_components.ContentInput, typeof __VLS_components.contentInput, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ class: "mb-4" })));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
var __VLS_8 = {}.PromptInput;
/** @type {[typeof __VLS_components.PromptInput, typeof __VLS_components.promptInput, ]} */ ;
// @ts-ignore
var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ class: "mb-4" })));
var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
var __VLS_12 = {}.AspectRatioSelector;
/** @type {[typeof __VLS_components.AspectRatioSelector, typeof __VLS_components.aspectRatioSelector, ]} */ ;
// @ts-ignore
var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ class: "mb-4" })));
var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_13), false));
var __VLS_16 = {}.QrwSelector;
/** @type {[typeof __VLS_components.QrwSelector, typeof __VLS_components.qrwSelector, ]} */ ;
// @ts-ignore
var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign({ class: "mb-4" })));
var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_17), false));
var __VLS_20 = {}.PresetSelector;
/** @type {[typeof __VLS_components.PresetSelector, typeof __VLS_components.presetSelector, ]} */ ;
// @ts-ignore
var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20(__assign({ class: "mb-4" })));
var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_21), false));
var __VLS_24 = {}.PositionSelector;
/** @type {[typeof __VLS_components.PositionSelector, typeof __VLS_components.positionSelector, ]} */ ;
// @ts-ignore
var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24(__assign({ class: "mb-4" })));
var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_25), false));
var __VLS_28 = {}.AdvancedSelector;
/** @type {[typeof __VLS_components.AdvancedSelector, typeof __VLS_components.advancedSelector, ]} */ ;
// @ts-ignore
var __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28(__assign({ class: "mb-4" })));
var __VLS_30 = __VLS_29.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_29), false));
if ((_a = __VLS_ctx.config) === null || _a === void 0 ? void 0 : _a.advanced) {
    var __VLS_32 = {}.StepsSelector;
    /** @type {[typeof __VLS_components.StepsSelector, typeof __VLS_components.stepsSelector, ]} */ ;
    // @ts-ignore
    var __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32(__assign({ class: "mb-4" })));
    var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_33), false));
}
if ((_b = __VLS_ctx.config) === null || _b === void 0 ? void 0 : _b.advanced) {
    var __VLS_36 = {}.SeedInput;
    /** @type {[typeof __VLS_components.SeedInput, typeof __VLS_components.seedInput, ]} */ ;
    // @ts-ignore
    var __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36(__assign({ class: "mb-4" })));
    var __VLS_38 = __VLS_37.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_37), false));
}
if ((_c = __VLS_ctx.config) === null || _c === void 0 ? void 0 : _c.advanced) {
    var __VLS_40 = {}.PixelStyleSelector;
    /** @type {[typeof __VLS_components.PixelStyleSelector, typeof __VLS_components.pixelStyleSelector, ]} */ ;
    // @ts-ignore
    var __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40(__assign({ class: "mb-4" })));
    var __VLS_42 = __VLS_41.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_41), false));
}
if ((_d = __VLS_ctx.config) === null || _d === void 0 ? void 0 : _d.advanced) {
    var __VLS_44 = {}.MarkerShapeSelector;
    /** @type {[typeof __VLS_components.MarkerShapeSelector, typeof __VLS_components.markerShapeSelector, ]} */ ;
    // @ts-ignore
    var __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44(__assign({ class: "mb-4" })));
    var __VLS_46 = __VLS_45.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_45), false));
}
if ((_e = __VLS_ctx.config) === null || _e === void 0 ? void 0 : _e.advanced) {
    var __VLS_48 = {}.SubMarkerSelector;
    /** @type {[typeof __VLS_components.SubMarkerSelector, typeof __VLS_components.subMarkerSelector, ]} */ ;
    // @ts-ignore
    var __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48(__assign({ class: "mb-4" })));
    var __VLS_50 = __VLS_49.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_49), false));
}
if ((_f = __VLS_ctx.config) === null || _f === void 0 ? void 0 : _f.advanced) {
    var __VLS_52 = {}.RotateSelector;
    /** @type {[typeof __VLS_components.RotateSelector, typeof __VLS_components.rotateSelector, ]} */ ;
    // @ts-ignore
    var __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52(__assign({ class: "mb-4" })));
    var __VLS_54 = __VLS_53.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_53), false));
}
if ((_g = __VLS_ctx.config) === null || _g === void 0 ? void 0 : _g.advanced) {
    var __VLS_56 = {}.EclSelector;
    /** @type {[typeof __VLS_components.EclSelector, typeof __VLS_components.eclSelector, ]} */ ;
    // @ts-ignore
    var __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56(__assign({ class: "mb-4" })));
    var __VLS_58 = __VLS_57.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_57), false));
}
if ((_h = __VLS_ctx.config) === null || _h === void 0 ? void 0 : _h.advanced) {
    var __VLS_60 = {}.PaddingLevelSelector;
    /** @type {[typeof __VLS_components.PaddingLevelSelector, typeof __VLS_components.paddingLevelSelector, ]} */ ;
    // @ts-ignore
    var __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60(__assign({ class: "mb-4" })));
    var __VLS_62 = __VLS_61.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_61), false));
}
if ((_j = __VLS_ctx.config) === null || _j === void 0 ? void 0 : _j.advanced) {
    var __VLS_64 = {}.PaddingNoiseSelector;
    /** @type {[typeof __VLS_components.PaddingNoiseSelector, typeof __VLS_components.paddingNoiseSelector, ]} */ ;
    // @ts-ignore
    var __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64(__assign({ class: "mb-4" })));
    var __VLS_66 = __VLS_65.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_65), false));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex flex-col items-center justify-center px-[15px] pb-[15px]" }));
var __VLS_68 = {}.consumption;
/** @type {[typeof __VLS_components.Consumption, typeof __VLS_components.consumption, ]} */ ;
// @ts-ignore
var __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
    value: (__VLS_ctx.consumption),
    service: (__VLS_ctx.service),
}));
var __VLS_70 = __VLS_69.apply(void 0, __spreadArray([{
        value: (__VLS_ctx.consumption),
        service: (__VLS_ctx.service),
    }], __VLS_functionalComponentArgsRest(__VLS_69), false));
var __VLS_72 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
var __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72(__assign(__assign(__assign({ 'onClick': {} }, { type: "primary" }), { class: "btn w-full" }), { round: true })));
var __VLS_74 = __VLS_73.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onClick': {} }, { type: "primary" }), { class: "btn w-full" }), { round: true })], __VLS_functionalComponentArgsRest(__VLS_73), false));
var __VLS_76;
var __VLS_77;
var __VLS_78;
var __VLS_79 = {
    onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.$emit('generate');
    }
};
__VLS_75.slots.default;
var __VLS_80 = {}.FontAwesomeIcon;
/** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
// @ts-ignore
var __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-2" })));
var __VLS_82 = __VLS_81.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-2" })], __VLS_functionalComponentArgsRest(__VLS_81), false));
(__VLS_ctx.$t('qrart.button.generate'));
var __VLS_75;
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
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
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
