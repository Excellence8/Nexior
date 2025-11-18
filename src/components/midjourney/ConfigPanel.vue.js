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
var RatioSelector_vue_1 = require("./config/RatioSelector.vue");
var AdvancedSelector_vue_1 = require("./config/AdvancedSelector.vue");
var LoopSelector_vue_1 = require("./config/LoopSelector.vue");
var VersionSelector_vue_1 = require("./config/VersionSelector.vue");
var ImageUrlInput_vue_1 = require("./config/ImageUrlInput.vue");
var EndImageUrlInput_vue_1 = require("./config/EndImageUrlInput.vue");
var ImageUrlInput2_vue_1 = require("./config/ImageUrlInput2.vue");
var StylizeSelector_vue_1 = require("./config/StylizeSelector.vue");
var ChaosSelector_vue_1 = require("./config/ChaosSelector.vue");
var ModelSelector_vue_1 = require("./config/ModelSelector.vue");
var QualitySelector_vue_1 = require("./config/QualitySelector.vue");
var ResolutionSelector_vue_1 = require("./config/ResolutionSelector.vue");
var ImageWeightSelector_vue_1 = require("./config/ImageWeightSelector.vue");
var WeirdSelector_vue_1 = require("./config/WeirdSelector.vue");
var VideoFromInput_vue_1 = require("./config/VideoFromInput.vue");
var StyleSelector_vue_1 = require("./config/StyleSelector.vue");
var ElementsSelector_vue_1 = require("./config/ElementsSelector.vue");
var ModeSelector2_vue_1 = require("./config/ModeSelector2.vue");
var PromptInput_vue_1 = require("./config/PromptInput.vue");
var ReferenceImage_vue_1 = require("./config/ReferenceImage.vue");
var element_plus_1 = require("element-plus");
var Consumption_vue_1 = require("../common/Consumption.vue");
var utils_1 = require("@/utils");
var constants_1 = require("@/constants");
exports.default = (0, vue_1.defineComponent)({
    name: 'ConfigPanel',
    components: {
        ElButton: element_plus_1.ElButton,
        PromptInput: PromptInput_vue_1.default,
        ModeSelector: ModeSelector2_vue_1.default,
        ModelSelector: ModelSelector_vue_1.default,
        ElementsSelector: ElementsSelector_vue_1.default,
        StyleSelector: StyleSelector_vue_1.default,
        QualitySelector: QualitySelector_vue_1.default,
        RatioSelector: RatioSelector_vue_1.default,
        VersionSelector: VersionSelector_vue_1.default,
        StylizeSelector: StylizeSelector_vue_1.default,
        AdvancedSelector: AdvancedSelector_vue_1.default,
        ChaosSelector: ChaosSelector_vue_1.default,
        WeirdSelector: WeirdSelector_vue_1.default,
        ImageWeightSelector: ImageWeightSelector_vue_1.default,
        ReferenceImage: ReferenceImage_vue_1.default,
        ImageUrlInput: ImageUrlInput_vue_1.default,
        EndImageUrlInput: EndImageUrlInput_vue_1.default,
        LoopSelector: LoopSelector_vue_1.default,
        ResolutionSelector: ResolutionSelector_vue_1.default,
        ImageUrlInput2: ImageUrlInput2_vue_1.default,
        Consumption: Consumption_vue_1.default,
        VideoFromInput: VideoFromInput_vue_1.default,
        ElTabs: element_plus_1.ElTabs,
        ElTabPane: element_plus_1.ElTabPane
    },
    emits: ['generate'],
    computed: {
        config: function () {
            return this.$store.state.midjourney.config;
        },
        type: {
            get: function () {
                return this.$store.state.midjourney.config.type || constants_1.MIDJOURNEY_DEFAULT_TYPE;
            },
            set: function (val) {
                console.debug('set type', val);
                this.$store.commit('midjourney/setConfig', __assign(__assign({}, this.$store.state.midjourney.config), { type: val }));
            }
        },
        consumption: function () {
            var _a, _b;
            return (0, utils_1.getConsumption)(this.config, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.metadata) === null || _b === void 0 ? void 0 : _b.price);
        },
        service: function () {
            var _a;
            return (_a = this.$store.state.midjourney) === null || _a === void 0 ? void 0 : _a.service;
        }
    },
    mounted: function () {
        if (!this.config.type) {
            this.type = constants_1.MIDJOURNEY_DEFAULT_TYPE;
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElButton: element_plus_1.ElButton,
    PromptInput: PromptInput_vue_1.default,
    ModeSelector: ModeSelector2_vue_1.default,
    ModelSelector: ModelSelector_vue_1.default,
    ElementsSelector: ElementsSelector_vue_1.default,
    StyleSelector: StyleSelector_vue_1.default,
    QualitySelector: QualitySelector_vue_1.default,
    RatioSelector: RatioSelector_vue_1.default,
    VersionSelector: VersionSelector_vue_1.default,
    StylizeSelector: StylizeSelector_vue_1.default,
    AdvancedSelector: AdvancedSelector_vue_1.default,
    ChaosSelector: ChaosSelector_vue_1.default,
    WeirdSelector: WeirdSelector_vue_1.default,
    ImageWeightSelector: ImageWeightSelector_vue_1.default,
    ReferenceImage: ReferenceImage_vue_1.default,
    ImageUrlInput: ImageUrlInput_vue_1.default,
    EndImageUrlInput: EndImageUrlInput_vue_1.default,
    LoopSelector: LoopSelector_vue_1.default,
    ResolutionSelector: ResolutionSelector_vue_1.default,
    ImageUrlInput2: ImageUrlInput2_vue_1.default,
    Consumption: Consumption_vue_1.default,
    VideoFromInput: VideoFromInput_vue_1.default,
    ElTabs: element_plus_1.ElTabs,
    ElTabPane: element_plus_1.ElTabPane
};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex flex-col h-full" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex-1 overflow-y-auto p-[15px]" }));
var __VLS_0 = {}.ElTabs;
/** @type {[typeof __VLS_components.ElTabs, typeof __VLS_components.elTabs, typeof __VLS_components.ElTabs, typeof __VLS_components.elTabs, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({ modelValue: (__VLS_ctx.type) }, { class: "demo-tabs" }), { stretch: true })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ modelValue: (__VLS_ctx.type) }, { class: "demo-tabs" }), { stretch: true })], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
var __VLS_4 = {}.ElTabPane;
/** @type {[typeof __VLS_components.ElTabPane, typeof __VLS_components.elTabPane, typeof __VLS_components.ElTabPane, typeof __VLS_components.elTabPane, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    label: (__VLS_ctx.$t('midjourney.tab.images')),
    name: "imagine",
}));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('midjourney.tab.images')),
        name: "imagine",
    }], __VLS_functionalComponentArgsRest(__VLS_5), false));
__VLS_7.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "pt-2" }));
var __VLS_8 = {}.ModelSelector;
/** @type {[typeof __VLS_components.ModelSelector, typeof __VLS_components.modelSelector, ]} */ ;
// @ts-ignore
var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ class: "mb-2" })));
var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ class: "mb-2" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
var __VLS_12 = {}.PromptInput;
/** @type {[typeof __VLS_components.PromptInput, typeof __VLS_components.promptInput, ]} */ ;
// @ts-ignore
var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ class: "mb-4" })));
var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_13), false));
var __VLS_16 = {}.ReferenceImage;
/** @type {[typeof __VLS_components.ReferenceImage, typeof __VLS_components.referenceImage, ]} */ ;
// @ts-ignore
var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign({ class: "mb-2" })));
var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign({ class: "mb-2" })], __VLS_functionalComponentArgsRest(__VLS_17), false));
var __VLS_20 = {}.RatioSelector;
/** @type {[typeof __VLS_components.RatioSelector, typeof __VLS_components.ratioSelector, ]} */ ;
// @ts-ignore
var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20(__assign({ class: "mb-4" })));
var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_21), false));
var __VLS_24 = {}.QualitySelector;
/** @type {[typeof __VLS_components.QualitySelector, typeof __VLS_components.qualitySelector, ]} */ ;
// @ts-ignore
var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24(__assign({ class: "mb-4" })));
var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_25), false));
var __VLS_28 = {}.VersionSelector;
/** @type {[typeof __VLS_components.VersionSelector, typeof __VLS_components.versionSelector, ]} */ ;
// @ts-ignore
var __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28(__assign({ class: "mb-4" })));
var __VLS_30 = __VLS_29.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_29), false));
var __VLS_32 = {}.ElementsSelector;
/** @type {[typeof __VLS_components.ElementsSelector, typeof __VLS_components.elementsSelector, ]} */ ;
// @ts-ignore
var __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32(__assign({ class: "mb-2" })));
var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([__assign({ class: "mb-2" })], __VLS_functionalComponentArgsRest(__VLS_33), false));
var __VLS_36 = {}.AdvancedSelector;
/** @type {[typeof __VLS_components.AdvancedSelector, typeof __VLS_components.advancedSelector, ]} */ ;
// @ts-ignore
var __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36(__assign({ class: "mb-2" })));
var __VLS_38 = __VLS_37.apply(void 0, __spreadArray([__assign({ class: "mb-2" })], __VLS_functionalComponentArgsRest(__VLS_37), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: ((_a = __VLS_ctx.config) === null || _a === void 0 ? void 0 : _a.advanced) }), null, null);
var __VLS_40 = {}.StylizeSelector;
/** @type {[typeof __VLS_components.StylizeSelector, typeof __VLS_components.stylizeSelector, ]} */ ;
// @ts-ignore
var __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40(__assign({ class: "mb-2" })));
var __VLS_42 = __VLS_41.apply(void 0, __spreadArray([__assign({ class: "mb-2" })], __VLS_functionalComponentArgsRest(__VLS_41), false));
var __VLS_44 = {}.WeirdSelector;
/** @type {[typeof __VLS_components.WeirdSelector, typeof __VLS_components.weirdSelector, ]} */ ;
// @ts-ignore
var __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44(__assign({ class: "mb-2" })));
var __VLS_46 = __VLS_45.apply(void 0, __spreadArray([__assign({ class: "mb-2" })], __VLS_functionalComponentArgsRest(__VLS_45), false));
var __VLS_48 = {}.ChaosSelector;
/** @type {[typeof __VLS_components.ChaosSelector, typeof __VLS_components.chaosSelector, ]} */ ;
// @ts-ignore
var __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48(__assign({ class: "mb-2" })));
var __VLS_50 = __VLS_49.apply(void 0, __spreadArray([__assign({ class: "mb-2" })], __VLS_functionalComponentArgsRest(__VLS_49), false));
var __VLS_52 = {}.ImageWeightSelector;
/** @type {[typeof __VLS_components.ImageWeightSelector, typeof __VLS_components.imageWeightSelector, ]} */ ;
// @ts-ignore
var __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52(__assign({ class: "mb-2" })));
var __VLS_54 = __VLS_53.apply(void 0, __spreadArray([__assign({ class: "mb-2" })], __VLS_functionalComponentArgsRest(__VLS_53), false));
var __VLS_56 = {}.StyleSelector;
/** @type {[typeof __VLS_components.StyleSelector, typeof __VLS_components.styleSelector, ]} */ ;
// @ts-ignore
var __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56(__assign({ class: "mb-2" })));
var __VLS_58 = __VLS_57.apply(void 0, __spreadArray([__assign({ class: "mb-2" })], __VLS_functionalComponentArgsRest(__VLS_57), false));
var __VLS_7;
var __VLS_60 = {}.ElTabPane;
/** @type {[typeof __VLS_components.ElTabPane, typeof __VLS_components.elTabPane, typeof __VLS_components.ElTabPane, typeof __VLS_components.elTabPane, ]} */ ;
// @ts-ignore
var __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
    label: (__VLS_ctx.$t('midjourney.tab.videos')),
    name: "videos",
}));
var __VLS_62 = __VLS_61.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('midjourney.tab.videos')),
        name: "videos",
    }], __VLS_functionalComponentArgsRest(__VLS_61), false));
__VLS_63.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "pt-2" }));
var __VLS_64 = {}.VideoFromInput;
/** @type {[typeof __VLS_components.VideoFromInput, typeof __VLS_components.videoFromInput, ]} */ ;
// @ts-ignore
var __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64(__assign({ class: "mb-4" })));
var __VLS_66 = __VLS_65.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_65), false));
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (((_b = __VLS_ctx.config) === null || _b === void 0 ? void 0 : _b.action) === 'extend') }), null, null);
var __VLS_68 = {}.ImageUrlInput;
/** @type {[typeof __VLS_components.ImageUrlInput, typeof __VLS_components.imageUrlInput, ]} */ ;
// @ts-ignore
var __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68(__assign({ class: "mb-2" })));
var __VLS_70 = __VLS_69.apply(void 0, __spreadArray([__assign({ class: "mb-2" })], __VLS_functionalComponentArgsRest(__VLS_69), false));
var __VLS_72 = {}.EndImageUrlInput;
/** @type {[typeof __VLS_components.EndImageUrlInput, typeof __VLS_components.endImageUrlInput, ]} */ ;
// @ts-ignore
var __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72(__assign({ class: "mb-2" })));
var __VLS_74 = __VLS_73.apply(void 0, __spreadArray([__assign({ class: "mb-2" })], __VLS_functionalComponentArgsRest(__VLS_73), false));
var __VLS_76 = {}.LoopSelector;
/** @type {[typeof __VLS_components.LoopSelector, typeof __VLS_components.loopSelector, ]} */ ;
// @ts-ignore
var __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76(__assign({ class: "mb-2" })));
var __VLS_78 = __VLS_77.apply(void 0, __spreadArray([__assign({ class: "mb-2" })], __VLS_functionalComponentArgsRest(__VLS_77), false));
var __VLS_80 = {}.ResolutionSelector;
/** @type {[typeof __VLS_components.ResolutionSelector, typeof __VLS_components.resolutionSelector, ]} */ ;
// @ts-ignore
var __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80(__assign({ class: "mb-4" })));
var __VLS_82 = __VLS_81.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_81), false));
var __VLS_84 = {}.PromptInput;
/** @type {[typeof __VLS_components.PromptInput, typeof __VLS_components.promptInput, ]} */ ;
// @ts-ignore
var __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84(__assign({ class: "mb-4" })));
var __VLS_86 = __VLS_85.apply(void 0, __spreadArray([__assign({ class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_85), false));
var __VLS_63;
var __VLS_88 = {}.ElTabPane;
/** @type {[typeof __VLS_components.ElTabPane, typeof __VLS_components.elTabPane, typeof __VLS_components.ElTabPane, typeof __VLS_components.elTabPane, ]} */ ;
// @ts-ignore
var __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({
    label: (__VLS_ctx.$t('midjourney.tab.describe')),
    name: "describe",
}));
var __VLS_90 = __VLS_89.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('midjourney.tab.describe')),
        name: "describe",
    }], __VLS_functionalComponentArgsRest(__VLS_89), false));
__VLS_91.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "pt-2" }));
var __VLS_92 = {}.ImageUrlInput2;
/** @type {[typeof __VLS_components.ImageUrlInput2, typeof __VLS_components.imageUrlInput2, ]} */ ;
// @ts-ignore
var __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92(__assign({ class: "mb-2" })));
var __VLS_94 = __VLS_93.apply(void 0, __spreadArray([__assign({ class: "mb-2" })], __VLS_functionalComponentArgsRest(__VLS_93), false));
var __VLS_91;
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex flex-col px-[15px] pb-[15px]" }));
var __VLS_96 = {}.consumption;
/** @type {[typeof __VLS_components.Consumption, typeof __VLS_components.consumption, ]} */ ;
// @ts-ignore
var __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({
    value: (__VLS_ctx.consumption),
    service: (__VLS_ctx.service),
}));
var __VLS_98 = __VLS_97.apply(void 0, __spreadArray([{
        value: (__VLS_ctx.consumption),
        service: (__VLS_ctx.service),
    }], __VLS_functionalComponentArgsRest(__VLS_97), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex gap-1" }));
if (__VLS_ctx.type !== 'describe') {
    var __VLS_100 = {}.ModeSelector;
    /** @type {[typeof __VLS_components.ModeSelector, typeof __VLS_components.modeSelector, ]} */ ;
    // @ts-ignore
    var __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({}));
    var __VLS_102 = __VLS_101.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_101), false));
}
if (__VLS_ctx.config.action === 'extend') {
    var __VLS_104 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    var __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104(__assign(__assign(__assign({ 'onClick': {} }, { type: "primary" }), { class: "btn w-full" }), { round: true })));
    var __VLS_106 = __VLS_105.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onClick': {} }, { type: "primary" }), { class: "btn w-full" }), { round: true })], __VLS_functionalComponentArgsRest(__VLS_105), false));
    var __VLS_108 = void 0;
    var __VLS_109 = void 0;
    var __VLS_110 = void 0;
    var __VLS_111 = {
        onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!(__VLS_ctx.config.action === 'extend'))
                return;
            __VLS_ctx.$emit('generate');
        }
    };
    __VLS_107.slots.default;
    (__VLS_ctx.$t('midjourney.button.extend'));
    var __VLS_107;
}
else {
    var __VLS_112 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    var __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112(__assign(__assign(__assign({ 'onClick': {} }, { type: "primary" }), { class: "btn w-full" }), { round: true })));
    var __VLS_114 = __VLS_113.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onClick': {} }, { type: "primary" }), { class: "btn w-full" }), { round: true })], __VLS_functionalComponentArgsRest(__VLS_113), false));
    var __VLS_116 = void 0;
    var __VLS_117 = void 0;
    var __VLS_118 = void 0;
    var __VLS_119 = {
        onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!!(__VLS_ctx.config.action === 'extend'))
                return;
            __VLS_ctx.$emit('generate');
        }
    };
    __VLS_115.slots.default;
    (__VLS_ctx.$t('midjourney.button.generate'));
    var __VLS_115;
}
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-y-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['p-[15px]']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-tabs']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['px-[15px]']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-[15px]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
var __VLS_dollars;
var __VLS_self;
