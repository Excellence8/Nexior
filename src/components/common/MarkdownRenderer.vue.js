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
var VueMarkdown_vue_1 = require("./VueMarkdown.vue");
var utils_1 = require("@/utils");
require("highlight.js/styles/night-owl.css");
exports.default = (0, vue_1.defineComponent)({
    name: 'MarkdownRenderer',
    directives: {
        highlight: utils_1.highlight
    },
    components: {
        VueMarkdown: VueMarkdown_vue_1.default
    },
    props: {
        content: {
            type: String,
            required: false,
            default: ''
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    VueMarkdown: VueMarkdown_vue_1.default
};
var __VLS_components;
var __VLS_directivesOption = {
    highlight: utils_1.highlight
};
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
var __VLS_0 = {}.VueMarkdown;
/** @type {[typeof __VLS_components.VueMarkdown, typeof __VLS_components.vueMarkdown, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ source: (__VLS_ctx.content) }, { class: "markdown-body bg-transparent pt-[3px] text-[inherit]" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ source: (__VLS_ctx.content) }, { class: "markdown-body bg-transparent pt-[3px] text-[inherit]" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_asFunctionalDirective(__VLS_directives.vHighlight)(null, __assign({}, __VLS_directiveBindingRestFields), null, null);
var __VLS_4 = {};
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['markdown-body']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-transparent']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-[3px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[inherit]']} */ ;
var __VLS_dollars;
var __VLS_self;
