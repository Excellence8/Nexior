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
var typescript_cookie_1 = require("typescript-cookie");
var vue_1 = require("vue");
exports.default = (0, vue_1.defineComponent)({
    emits: ['click'],
    computed: {
        dark: function () {
            return (0, typescript_cookie_1.getCookie)('THEME') === 'dark';
        },
        url: function () {
            var _a;
            return (_a = this.$store.state.site) === null || _a === void 0 ? void 0 : _a.favicon;
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.$emit('click');
    } }, { src: (__VLS_ctx.url) }), { class: "logo" }));
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
var __VLS_dollars;
var __VLS_self;
