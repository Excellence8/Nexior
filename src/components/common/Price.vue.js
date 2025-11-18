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
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var utils_1 = require("@/utils");
exports.default = (0, vue_1.defineComponent)({
    name: 'ApiPrice',
    props: {
        price: {
            type: Number,
            required: false,
            default: 0
        },
        unit: {
            type: String,
            required: false,
            default: undefined
        },
        start: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    methods: {
        getPriceString: utils_1.getPriceString
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "price-text" }));
if (__VLS_ctx.price > 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "unfree" }));
    (__VLS_ctx.getPriceString({ value: __VLS_ctx.price }));
    (__VLS_ctx.unit ? " / ".concat(__VLS_ctx.unit) : '');
    (__VLS_ctx.start ? __VLS_ctx.$t('common.message.startPrice') : '');
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "free" }));
    (__VLS_ctx.$t('common.message.free'));
}
/** @type {__VLS_StyleScopedClasses['price-text']} */ ;
/** @type {__VLS_StyleScopedClasses['unfree']} */ ;
/** @type {__VLS_StyleScopedClasses['free']} */ ;
var __VLS_dollars;
var __VLS_self;
