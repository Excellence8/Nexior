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
var markdown_it_1 = require("markdown-it");
require("katex/dist/katex.min.css");
var plugin_katex_1 = require("@mdit/plugin-katex");
exports.default = (0, vue_1.defineComponent)({
    name: 'VueMarkdown',
    props: {
        source: {
            type: String,
            required: true
        },
        options: {
            type: Object,
            default: function () { return ({}); },
            required: false
        }
    },
    setup: function (props, _a) {
        var attrs = _a.attrs;
        var md = new markdown_it_1.default(__assign(__assign({}, props.options), { html: true })).use(plugin_katex_1.katex, {
            delimiters: 'all',
            throwOnError: false,
            errorColor: '#cc0000',
            mathFence: true
        });
        var content = (0, vue_1.computed)(function () {
            var src = props.source;
            return md === null || md === void 0 ? void 0 : md.render(src).replace(/<think>/g, "<div class=\"think\">").replace(/<\/think>/g, "</div>");
        });
        return function () {
            return (0, vue_1.h)('div', __assign(__assign({}, attrs), { innerHTML: content.value }));
        };
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
var __VLS_self;
