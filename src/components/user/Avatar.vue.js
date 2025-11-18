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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var avatar_png_1 = require("@/assets/images/avatar.png");
exports.default = (0, vue_1.defineComponent)({
    name: 'UserAvatar',
    data: function () {
        return {
            defaultAvatar: avatar_png_1.default
        };
    },
    computed: {
        user: function () {
            var _a;
            return (_a = this.$store.getters) === null || _a === void 0 ? void 0 : _a.user;
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: (((_a = __VLS_ctx.user) === null || _a === void 0 ? void 0 : _a.avatar) || __VLS_ctx.defaultAvatar) }, { class: "avatar" }));
/** @type {__VLS_StyleScopedClasses['avatar']} */ ;
var __VLS_dollars;
var __VLS_self;
