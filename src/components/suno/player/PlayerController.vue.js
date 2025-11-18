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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_next_1 = require("@icon-park/vue-next");
var IconPark_vue_1 = require("@/components/common/IconPark.vue");
var PlayerVolumeSlider_vue_1 = require("./PlayerVolumeSlider.vue");
var element_plus_1 = require("element-plus");
var vue_1 = require("vue");
var vuex_1 = require("vuex");
var store = (0, vuex_1.useStore)();
var togglePlay = function () {
    return store.dispatch('suno/setAudio', __assign(__assign({}, store.state.suno.audio), { state: store.state.suno.audio.state === 'playing' ? 'paused' : 'playing' }));
};
var audio = (0, vue_1.computed)(function () { return store.state.suno.audio; });
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex items-center justify-center gap-x-3" }));
/** @type {[typeof IconPark, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(IconPark_vue_1.default, new IconPark_vue_1.default(__assign(__assign({ 'onClick': {} }, { icon: (((_a = __VLS_ctx.audio) === null || _a === void 0 ? void 0 : _a.state) === 'playing' ? __VLS_ctx.PauseOne : __VLS_ctx.Play), size: "45", theme: "filled" }), { class: "text-[var(--el-color-primary)] cursor-pointer" })));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { icon: (((_b = __VLS_ctx.audio) === null || _b === void 0 ? void 0 : _b.state) === 'playing' ? __VLS_ctx.PauseOne : __VLS_ctx.Play), size: "45", theme: "filled" }), { class: "text-[var(--el-color-primary)] cursor-pointer" })], __VLS_functionalComponentArgsRest(__VLS_0), false));
var __VLS_3;
var __VLS_4;
var __VLS_5;
var __VLS_6 = {
    onClick: (__VLS_ctx.togglePlay)
};
var __VLS_2;
var __VLS_7 = {}.ElPopover;
/** @type {[typeof __VLS_components.ElPopover, typeof __VLS_components.elPopover, typeof __VLS_components.ElPopover, typeof __VLS_components.elPopover, ]} */ ;
// @ts-ignore
var __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
    placement: "top",
    width: "50px",
    trigger: "click",
}));
var __VLS_9 = __VLS_8.apply(void 0, __spreadArray([{
        placement: "top",
        width: "50px",
        trigger: "click",
    }], __VLS_functionalComponentArgsRest(__VLS_8), false));
__VLS_10.slots.default;
{
    var __VLS_thisSlot = __VLS_10.slots.reference;
    /** @type {[typeof IconPark, ]} */ ;
    // @ts-ignore
    var __VLS_11 = __VLS_asFunctionalComponent(IconPark_vue_1.default, new IconPark_vue_1.default(__assign({ icon: (__VLS_ctx.VolumeSmall), size: "20", strokeWidth: (2) }, { class: "cursor-pointer" })));
    var __VLS_12 = __VLS_11.apply(void 0, __spreadArray([__assign({ icon: (__VLS_ctx.VolumeSmall), size: "20", strokeWidth: (2) }, { class: "cursor-pointer" })], __VLS_functionalComponentArgsRest(__VLS_11), false));
}
/** @type {[typeof PlayerVolumeSlider, ]} */ ;
// @ts-ignore
var __VLS_14 = __VLS_asFunctionalComponent(PlayerVolumeSlider_vue_1.default, new PlayerVolumeSlider_vue_1.default({}));
var __VLS_15 = __VLS_14.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_14), false));
var __VLS_10;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-x-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[var(--el-color-primary)]']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            Play: vue_next_1.Play,
            PauseOne: vue_next_1.PauseOne,
            VolumeSmall: vue_next_1.VolumeSmall,
            IconPark: IconPark_vue_1.default,
            PlayerVolumeSlider: PlayerVolumeSlider_vue_1.default,
            ElPopover: element_plus_1.ElPopover,
            togglePlay: togglePlay,
            audio: audio,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
