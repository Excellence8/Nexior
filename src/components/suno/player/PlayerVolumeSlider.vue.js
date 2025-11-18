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
var vuex_1 = require("vuex");
var store = (0, vuex_1.useStore)();
var volume = (0, vue_1.computed)({
    get: function () { var _a; return (_a = store.state.suno.audio) === null || _a === void 0 ? void 0 : _a.volume; },
    set: function (value) { return store.commit('suno/setAudio', __assign(__assign({}, store.state.suno.audio), { volume: value })); }
});
var muted = (0, vue_1.computed)({
    get: function () { var _a; return (_a = store.state.suno.audio) === null || _a === void 0 ? void 0 : _a.muted; },
    set: function (value) { return store.commit('suno/setAudio', __assign(__assign({}, store.state.suno.audio), { muted: value })); }
});
var setVolume = function (value) { return store.dispatch('suno/setVolume', value); };
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "player-volume flex flex-col items-center pt-2" }));
var __VLS_0 = {}.ElSlider;
/** @type {[typeof __VLS_components.ElSlider, typeof __VLS_components.elSlider, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ 'onInput': {} }, { modelValue: (__VLS_ctx.volume), vertical: true, height: "100px", showTooltip: (false), max: (100), min: (0), size: "small", disabled: (__VLS_ctx.muted) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ 'onInput': {} }, { modelValue: (__VLS_ctx.volume), vertical: true, height: "100px", showTooltip: (false), max: (100), min: (0), size: "small", disabled: (__VLS_ctx.muted) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4;
var __VLS_5;
var __VLS_6;
var __VLS_7 = {
    onInput: (__VLS_ctx.setVolume)
};
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "text-sm mt-3" }));
(__VLS_ctx.volume);
/** @type {__VLS_StyleScopedClasses['player-volume']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            ElSlider: element_plus_1.ElSlider,
            volume: volume,
            muted: muted,
            setVolume: setVolume,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
