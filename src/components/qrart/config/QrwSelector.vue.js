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
var element_plus_1 = require("element-plus");
var InfoIcon_vue_1 = require("@/components/common/InfoIcon.vue");
var constants_1 = require("@/constants");
var vue_1 = require("vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'QrwSelector',
    components: {
        ElSlider: element_plus_1.ElSlider,
        InfoIcon: InfoIcon_vue_1.default
    },
    computed: {
        value: {
            get: function () {
                var _a, _b;
                return ((_b = (_a = this.$store.state.qrart) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.qrw) || constants_1.QRART_DEFAULT_QRW;
            },
            set: function (val) {
                var _a;
                console.debug('set qrw', val);
                this.$store.commit('qrart/setConfig', __assign(__assign({}, (_a = this.$store.state.qrart) === null || _a === void 0 ? void 0 : _a.config), { qrw: val }));
            }
        }
    },
    mounted: function () {
        if (!this.value) {
            console.debug('set default qrw');
            this.value = constants_1.QRART_DEFAULT_QRW;
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElSlider: element_plus_1.ElSlider,
    InfoIcon: InfoIcon_vue_1.default
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "field" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "text-sm font-bold title mb-2" }));
(__VLS_ctx.$t('qrart.name.qrw'));
var __VLS_0 = {}.ElSlider;
/** @type {[typeof __VLS_components.ElSlider, typeof __VLS_components.elSlider, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ modelValue: (__VLS_ctx.value), min: (1.5), max: (3), step: (0.1) }, { class: "value" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ modelValue: (__VLS_ctx.value), min: (1.5), max: (3), step: (0.1) }, { class: "value" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {}.InfoIcon;
/** @type {[typeof __VLS_components.InfoIcon, typeof __VLS_components.infoIcon, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ content: (__VLS_ctx.$t('qrart.description.qrw')) }, { class: "info" })));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ content: (__VLS_ctx.$t('qrart.description.qrw')) }, { class: "info" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
/** @type {__VLS_StyleScopedClasses['field']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['value']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
var __VLS_dollars;
var __VLS_self;
