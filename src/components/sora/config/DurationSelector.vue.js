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
    name: 'DurationSelector',
    components: {
        ElSelect: element_plus_1.ElSelect,
        ElOption: element_plus_1.ElOption
    },
    computed: {
        model: function () {
            var _a, _b;
            return ((_b = (_a = this.$store.state.sora) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.model) || constants_1.SORA_DEFAULT_MODEL;
        },
        allowedDurations: function () {
            return constants_1.SORA_ALLOWED_DURATIONS_BY_MODEL[this.model] || [constants_1.SORA_DEFAULT_DURATION];
        },
        optionsForModel: function () {
            return this.allowedDurations.map(function (duration) { return ({
                value: duration,
                label: "".concat(duration, "s")
            }); });
        },
        value: {
            get: function () {
                var _a, _b;
                return (_b = (_a = this.$store.state.sora) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.duration;
            },
            set: function (val) {
                var _a;
                var currentConfig = ((_a = this.$store.state.sora) === null || _a === void 0 ? void 0 : _a.config) || {};
                this.$store.commit('sora/setConfig', __assign(__assign({}, currentConfig), { duration: val }));
            }
        }
    },
    watch: {
        allowedDurations: function () {
            var durations = this.allowedDurations;
            if (!durations.includes(this.value)) {
                var fallback = durations.includes(constants_1.SORA_DEFAULT_DURATION) ? constants_1.SORA_DEFAULT_DURATION : durations[0];
                this.value = fallback;
            }
        }
    },
    mounted: function () {
        if (!this.value) {
            this.value = constants_1.SORA_DEFAULT_DURATION;
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "control" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "title font-bold" }));
(__VLS_ctx.$t('sora.name.duration'));
var __VLS_0 = {}.ElSelect;
/** @type {[typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({ modelValue: (__VLS_ctx.value) }, { class: "value" }), { placeholder: (__VLS_ctx.$t('sora.placeholder.select')) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ modelValue: (__VLS_ctx.value) }, { class: "value" }), { placeholder: (__VLS_ctx.$t('sora.placeholder.select')) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.optionsForModel)); _i < _a.length; _i++) {
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
/** @type {__VLS_StyleScopedClasses['control']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['value']} */ ;
var __VLS_dollars;
var __VLS_self;
