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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var utils_1 = require("@/utils");
exports.default = (0, vue_1.defineComponent)({
    name: 'ServiceEstimation',
    components: {},
    props: {
        service: {
            type: Object,
            required: true
        },
        package: {
            type: Object,
            required: true
        }
    },
    methods: {
        getPriceString: utils_1.getPriceString
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "estimation" }));
for (var _i = 0, _f = __VLS_getVForSourceType(((_a = __VLS_ctx.service) === null || _a === void 0 ? void 0 : _a.apis)); _i < _f.length; _i++) {
    var _g = _f[_i], api = _g[0], apiIndex = _g[1];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: (apiIndex),
    });
    for (var _h = 0, _j = __VLS_getVForSourceType((api === null || api === void 0 ? void 0 : api.estimation)); _h < _j.length; _h++) {
        var _k = _j[_h], item = _k[0], itemIndex = _k[1];
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: (itemIndex) }, { class: "items" }));
        if (((_b = __VLS_ctx.package) === null || _b === void 0 ? void 0 : _b.amount) && (item === null || item === void 0 ? void 0 : item.cost)) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "item" }));
            (item.name);
            (Math.round(__VLS_ctx.package.amount / item.cost));
            (__VLS_ctx.$t('api.unit.count'));
            if (__VLS_ctx.package.price > 0) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                (__VLS_ctx.getPriceString({ value: __VLS_ctx.package.price / (__VLS_ctx.package.amount / item.cost), fractionDigits: 3 }) +
                    ' / ' +
                    __VLS_ctx.$t("api.unit.count"));
            }
            if (item.remark) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                (item.remark);
            }
            if (((_c = item === null || item === void 0 ? void 0 : item.comparisons) === null || _c === void 0 ? void 0 : _c.length) > 0) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            }
            for (var _l = 0, _m = __VLS_getVForSourceType((item === null || item === void 0 ? void 0 : item.comparisons)); _l < _m.length; _l++) {
                var _o = _m[_l], comparison = _o[0], comparisonIndex = _o[1];
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ key: (comparisonIndex) }, { class: "comparison" }));
                if ((comparison === null || comparison === void 0 ? void 0 : comparison.value) < 0) {
                    __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({});
                    (__VLS_ctx.$t('api.message.cheaperThan').replace('$[[value]]', (_d = comparison === null || comparison === void 0 ? void 0 : comparison.target) === null || _d === void 0 ? void 0 : _d.toString()));
                    (Math.abs(comparison === null || comparison === void 0 ? void 0 : comparison.value) * 100);
                }
                if ((comparison === null || comparison === void 0 ? void 0 : comparison.value) > 0) {
                    __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({});
                    (__VLS_ctx.$t('api.message.moreExpensiveThan').replace('$[[value]]', (_e = comparison === null || comparison === void 0 ? void 0 : comparison.target) === null || _e === void 0 ? void 0 : _e.toString()));
                    (Math.abs(comparison === null || comparison === void 0 ? void 0 : comparison.value) * 100);
                }
            }
        }
    }
}
/** @type {__VLS_StyleScopedClasses['estimation']} */ ;
/** @type {__VLS_StyleScopedClasses['items']} */ ;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
/** @type {__VLS_StyleScopedClasses['comparison']} */ ;
var __VLS_dollars;
var __VLS_self;
