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
var constants_1 = require("@/constants");
exports.default = (0, vue_1.defineComponent)({
    name: 'VersionSelector',
    components: {
        ElSelect: element_plus_1.ElSelect,
        ElOption: element_plus_1.ElOption,
        ElSwitch: element_plus_1.ElSwitch
    },
    props: {
        modelValue: {
            type: String,
            default: undefined
        }
    },
    emits: ['update:modelValue'],
    data: function () {
        return {
            options: [
                {
                    label: this.$t('suno.model.model1'),
                    value: 'chirp-v2-xxl-alpha'
                },
                {
                    label: this.$t('suno.model.model2'),
                    value: 'chirp-v3-0'
                },
                {
                    label: this.$t('suno.model.model3'),
                    value: 'chirp-v3-5'
                },
                {
                    label: this.$t('suno.model.model4'),
                    value: 'chirp-v4'
                },
                {
                    label: this.$t('suno.model.model45'),
                    value: 'chirp-v4-5'
                },
                {
                    label: this.$t('suno.model.model45plus'),
                    value: 'chirp-v4-5-plus'
                },
                {
                    label: this.$t('suno.model.model5'),
                    value: 'chirp-v5'
                }
            ]
        };
    },
    computed: {
        custom: {
            get: function () {
                var _a, _b;
                return (_b = (_a = this.$store.state.suno) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.custom;
            },
            set: function (val) {
                var _a;
                console.debug('set custom', val);
                this.$store.commit('suno/setConfig', __assign(__assign({}, (_a = this.$store.state.suno) === null || _a === void 0 ? void 0 : _a.config), { custom: val }));
            }
        },
        model: {
            get: function () {
                var _a, _b;
                return (_b = (_a = this.$store.state.suno) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.model;
            },
            set: function (val) {
                var _a;
                console.debug('set model', val);
                this.$store.commit('suno/setConfig', __assign(__assign({}, (_a = this.$store.state.suno) === null || _a === void 0 ? void 0 : _a.config), { model: val }));
            }
        }
    },
    mounted: function () {
        if (!this.model) {
            console.debug('set default type', constants_1.SUNO_DEFAULT_MODEL);
            this.model = constants_1.SUNO_DEFAULT_MODEL;
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElSelect: element_plus_1.ElSelect,
    ElOption: element_plus_1.ElOption,
    ElSwitch: element_plus_1.ElSwitch
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "field" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "title font-bold" }));
(__VLS_ctx.$t('suno.name.type'));
var __VLS_0 = {}.ElSwitch;
/** @type {[typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ modelValue: (__VLS_ctx.custom) }, { class: "value" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ modelValue: (__VLS_ctx.custom) }, { class: "value" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {}.ElSelect;
/** @type {[typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign(__assign({ modelValue: (__VLS_ctx.model) }, { class: "value" }), { placeholder: (__VLS_ctx.$t('suno.placeholder.select')) })));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign(__assign({ modelValue: (__VLS_ctx.model) }, { class: "value" }), { placeholder: (__VLS_ctx.$t('suno.placeholder.select')) })], __VLS_functionalComponentArgsRest(__VLS_5), false));
__VLS_7.slots.default;
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.options)); _i < _a.length; _i++) {
    var item = _a[_i][0];
    var __VLS_8 = {}.ElOption;
    /** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
    // @ts-ignore
    var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        key: (item.value),
        label: (item.label),
        value: (item.value),
    }));
    var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([{
            key: (item.value),
            label: (item.label),
            value: (item.value),
        }], __VLS_functionalComponentArgsRest(__VLS_9), false));
}
var __VLS_7;
/** @type {__VLS_StyleScopedClasses['field']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['value']} */ ;
/** @type {__VLS_StyleScopedClasses['value']} */ ;
var __VLS_dollars;
var __VLS_self;
