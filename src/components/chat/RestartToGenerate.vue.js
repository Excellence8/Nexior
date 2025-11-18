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
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var element_plus_1 = require("element-plus");
exports.default = (0, vue_1.defineComponent)({
    name: 'CopyToClipboard',
    components: {
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
        ElTooltip: element_plus_1.ElTooltip
    },
    props: {
        messages: {
            type: Array,
            required: false,
            default: function () { return []; }
        }
    },
    emits: ['restart'],
    data: function () {
        return {
            copied: false
        };
    },
    methods: {
        onRestart: function () {
            this.$emit('restart');
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
    ElTooltip: element_plus_1.ElTooltip
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
var __VLS_0 = {}.ElTooltip;
/** @type {[typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    effect: "dark",
    content: (__VLS_ctx.$t('common.button.restart')),
    placement: "bottom",
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        effect: "dark",
        content: (__VLS_ctx.$t('common.button.restart')),
        placement: "bottom",
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {};
__VLS_3.slots.default;
var __VLS_5 = {}.FontAwesomeIcon;
/** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5(__assign(__assign({ 'onClick': {} }, { icon: "fa-solid fa-sync" }), { class: "icon-sync" })));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { icon: "fa-solid fa-sync" }), { class: "icon-sync" })], __VLS_functionalComponentArgsRest(__VLS_6), false));
var __VLS_9;
var __VLS_10;
var __VLS_11;
var __VLS_12 = {
    onClick: (__VLS_ctx.onRestart)
};
var __VLS_8;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['icon-sync']} */ ;
var __VLS_dollars;
var __VLS_self;
