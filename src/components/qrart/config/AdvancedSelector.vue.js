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
    name: 'AdvancedSelector',
    components: {
        ElSwitch: element_plus_1.ElSwitch
    },
    computed: {
        value: {
            get: function () {
                var _a, _b;
                return (_b = (_a = this.$store.state.qrart) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.advanced;
            },
            set: function (val) {
                var _a;
                console.debug('set advanced', val);
                this.$store.commit('qrart/setConfig', __assign(__assign({}, (_a = this.$store.state.qrart) === null || _a === void 0 ? void 0 : _a.config), { advanced: val }));
            }
        }
    },
    mounted: function () {
        if (this.value === undefined) {
            this.value = constants_1.QRART_DEFAULT_ADVANCED;
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElSwitch: element_plus_1.ElSwitch
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "field" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "title font-bold" }));
(__VLS_ctx.$t('qrart.name.advanced'));
var __VLS_0 = {}.ElSwitch;
/** @type {[typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ modelValue: (__VLS_ctx.value) }, { class: "value" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ modelValue: (__VLS_ctx.value) }, { class: "value" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
/** @type {__VLS_StyleScopedClasses['field']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['value']} */ ;
var __VLS_dollars;
var __VLS_self;
