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
var vue_1 = require("vue");
exports.default = (0, vue_1.defineComponent)({
    components: {
        ElBreadcrumb: element_plus_1.ElBreadcrumb,
        ElBreadcrumbItem: element_plus_1.ElBreadcrumbItem
    },
    data: function () {
        return {
            items: this.$route.matched
        };
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElBreadcrumb: element_plus_1.ElBreadcrumb,
    ElBreadcrumbItem: element_plus_1.ElBreadcrumbItem
};
var __VLS_components;
var __VLS_directives;
var __VLS_0 = {}.ElBreadcrumb;
/** @type {[typeof __VLS_components.ElBreadcrumb, typeof __VLS_components.elBreadcrumb, typeof __VLS_components.ElBreadcrumb, typeof __VLS_components.elBreadcrumb, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ separator: "/" }, { class: "breadcrumb p-[10px]" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ separator: "/" }, { class: "breadcrumb p-[10px]" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {};
__VLS_3.slots.default;
var __VLS_5 = {}.ElBreadcrumbItem;
/** @type {[typeof __VLS_components.ElBreadcrumbItem, typeof __VLS_components.elBreadcrumbItem, typeof __VLS_components.ElBreadcrumbItem, typeof __VLS_components.elBreadcrumbItem, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    to: ({ path: '/' }),
}));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{
        to: ({ path: '/' }),
    }], __VLS_functionalComponentArgsRest(__VLS_6), false));
__VLS_8.slots.default;
(__VLS_ctx.$t('common.nav.home'));
var __VLS_8;
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.items)); _i < _a.length; _i++) {
    var _b = _a[_i], item = _b[0], itemIndex = _b[1];
    var __VLS_9 = {}.ElBreadcrumbItem;
    /** @type {[typeof __VLS_components.ElBreadcrumbItem, typeof __VLS_components.elBreadcrumbItem, typeof __VLS_components.ElBreadcrumbItem, typeof __VLS_components.elBreadcrumbItem, ]} */ ;
    // @ts-ignore
    var __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
        key: (itemIndex),
        to: ({ name: item.name }),
    }));
    var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([{
            key: (itemIndex),
            to: ({ name: item.name }),
        }], __VLS_functionalComponentArgsRest(__VLS_10), false));
    __VLS_12.slots.default;
    (item.meta.title);
    var __VLS_12;
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['breadcrumb']} */ ;
/** @type {__VLS_StyleScopedClasses['p-[10px]']} */ ;
var __VLS_dollars;
var __VLS_self;
