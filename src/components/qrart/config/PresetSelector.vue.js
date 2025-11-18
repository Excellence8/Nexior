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
var constants_1 = require("@/constants");
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
exports.default = (0, vue_1.defineComponent)({
    name: 'PresetSelector',
    components: {
        ElSelect: element_plus_1.ElSelect,
        ElOption: element_plus_1.ElOption
    },
    data: function () {
        return {
            options: [
                {
                    value: 'sunset',
                    label: this.$t('qrart.preset.sunset')
                },
                {
                    value: 'floral',
                    label: this.$t('qrart.preset.floral')
                },
                {
                    value: 'snowflakes',
                    label: this.$t('qrart.preset.snowflakes')
                },
                {
                    value: 'feathers',
                    label: this.$t('qrart.preset.feathers')
                },
                {
                    value: 'raindrops',
                    label: this.$t('qrart.preset.raindrops')
                },
                {
                    value: 'ultra-realism',
                    label: this.$t('qrart.preset.ultraRealism')
                },
                {
                    value: 'epic-realms',
                    label: this.$t('qrart.preset.epicRealms')
                },
                {
                    value: 'intricate-studio',
                    label: this.$t('qrart.preset.intricateStudio')
                },
                {
                    value: 'symmetric-masterpiece',
                    label: this.$t('qrart.preset.symmetricMasterpiece')
                },
                {
                    value: 'luminous-highway',
                    label: this.$t('qrart.preset.luminousHighway')
                },
                {
                    value: 'celestial-journey',
                    label: this.$t('qrart.preset.celestialJourney')
                },
                {
                    value: 'neon-mech',
                    label: this.$t('qrart.preset.neonMech')
                },
                {
                    value: 'ethereal-low-poly',
                    label: this.$t('qrart.preset.etherealLowPoly')
                },
                {
                    value: 'golden-vista',
                    label: this.$t('qrart.preset.goldenVista')
                },
                {
                    value: 'cinematic-expanse',
                    label: this.$t('qrart.preset.cinematicExpanse')
                },
                {
                    value: 'cinematic-warm',
                    label: this.$t('qrart.preset.cinematicWarm')
                },
                {
                    value: 'desolate-wilderness',
                    label: this.$t('qrart.preset.desolateWilderness')
                },
                {
                    value: 'vibrant-palette',
                    label: this.$t('qrart.preset.vibrantPalette')
                },
                {
                    value: 'enigmatic-journey',
                    label: this.$t('qrart.preset.enigmaticJourney')
                },
                {
                    value: 'timeless-cinematic',
                    label: this.$t('qrart.preset.timelessCinematic')
                },
                {
                    value: 'regal-galaxy',
                    label: this.$t('qrart.preset.regalGalaxy')
                },
                {
                    value: 'illustrious-canvas',
                    label: this.$t('qrart.preset.illustriousCanvas')
                },
                {
                    value: 'expressive-mural',
                    label: this.$t('qrart.preset.expressiveMural')
                },
                {
                    value: 'serene-haze',
                    label: this.$t('qrart.preset.sereneHaze')
                }
            ]
        };
    },
    computed: {
        value: {
            get: function () {
                var _a, _b;
                return (_b = (_a = this.$store.state.qrart) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.preset;
            },
            set: function (val) {
                var _a;
                console.debug('set qrart preset', val);
                this.$store.commit('qrart/setConfig', __assign(__assign({}, (_a = this.$store.state.qrart) === null || _a === void 0 ? void 0 : _a.config), { preset: val }));
            }
        }
    },
    mounted: function () {
        if (!this.value) {
            this.value = constants_1.QRART_DEFAULT_PRESET;
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElSelect: element_plus_1.ElSelect,
    ElOption: element_plus_1.ElOption
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "field" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "text-sm font-bold block mb-2" }));
(__VLS_ctx.$t('qrart.name.preset'));
var __VLS_0 = {}.ElSelect;
/** @type {[typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({ modelValue: (__VLS_ctx.value), clearable: true }, { class: "value" }), { placeholder: (__VLS_ctx.$t('qrart.placeholder.preset')) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ modelValue: (__VLS_ctx.value), clearable: true }, { class: "value" }), { placeholder: (__VLS_ctx.$t('qrart.placeholder.preset')) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.options)); _i < _a.length; _i++) {
    var item = _a[_i][0];
    var __VLS_4 = {}.ElOption;
    /** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        key: (item.value),
        label: (item.label),
        value: (item.value),
    }));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{
            key: (item.value),
            label: (item.label),
            value: (item.value),
        }], __VLS_functionalComponentArgsRest(__VLS_5), false));
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['field']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['value']} */ ;
var __VLS_dollars;
var __VLS_self;
