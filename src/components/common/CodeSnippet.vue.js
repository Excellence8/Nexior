"use strict";
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
var vue_codemirror_1 = require("vue-codemirror");
var lang_json_1 = require("@codemirror/lang-json");
var lang_python_1 = require("@codemirror/lang-python");
var lang_javascript_1 = require("@codemirror/lang-javascript");
var lang_php_1 = require("@codemirror/lang-php");
var lang_java_1 = require("@codemirror/lang-java");
var theme_one_dark_1 = require("@codemirror/theme-one-dark");
var vue_1 = require("vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'CodeSnippet',
    components: {
        Codemirror: vue_codemirror_1.Codemirror
    },
    props: {
        code: {
            type: String,
            required: true
        },
        editable: {
            type: Boolean,
            required: false
        },
        lang: {
            type: String,
            required: false,
            default: 'JSON'
        }
    },
    computed: {
        extensions: function () {
            var result = [];
            result.push(theme_one_dark_1.oneDark);
            if (this.lang === 'JSON') {
                result.push((0, lang_json_1.json)());
            }
            if (this.lang === 'Python') {
                result.push((0, lang_python_1.python)());
            }
            if (this.lang === 'Java') {
                result.push((0, lang_java_1.java)());
            }
            if (this.lang === 'JavaScript') {
                result.push((0, lang_javascript_1.javascript)());
            }
            if (this.lang === 'PHP') {
                result.push((0, lang_php_1.php)());
            }
            return result;
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    Codemirror: vue_codemirror_1.Codemirror
};
var __VLS_components;
var __VLS_directives;
var __VLS_0 = {}.codemirror;
/** @type {[typeof __VLS_components.Codemirror, typeof __VLS_components.codemirror, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.code),
    disabled: (!__VLS_ctx.editable),
    extensions: (__VLS_ctx.extensions),
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.code),
        disabled: (!__VLS_ctx.editable),
        extensions: (__VLS_ctx.extensions),
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {};
var __VLS_3;
var __VLS_dollars;
var __VLS_self;
