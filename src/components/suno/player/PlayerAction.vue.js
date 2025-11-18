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
var number_1 = require("@/utils/number");
var vue_1 = require("vue");
var vuex_1 = require("vuex");
var store = (0, vuex_1.useStore)();
var progress = (0, vue_1.computed)({
    get: function () { var _a, _b; return (_b = (_a = store.state.suno) === null || _a === void 0 ? void 0 : _a.audio) === null || _b === void 0 ? void 0 : _b.progress; },
    set: function (value) {
        return store.commit('suno/setAudio', __assign(__assign({}, store.state.suno.audio), { progress: value }));
    }
});
var duration = (0, vue_1.computed)({
    get: function () { var _a, _b; return (_b = (_a = store.state.suno) === null || _a === void 0 ? void 0 : _a.audio) === null || _b === void 0 ? void 0 : _b.duration; },
    set: function (value) {
        return store.commit('suno/setAudio', __assign(__assign({}, store.state.suno.audio), { duration: value }));
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex justify-end items-center gap-x-2.5" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "text-xs" }));
(__VLS_ctx.useFormatDuring(__VLS_ctx.progress));
(__VLS_ctx.useFormatDuring(__VLS_ctx.duration));
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-x-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            useFormatDuring: number_1.useFormatDuring,
            progress: progress,
            duration: duration,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
