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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var VideoPlayer_vue_1 = require("@/components/common/VideoPlayer.vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'ExtendFromInput',
    components: { VideoPlayer: VideoPlayer_vue_1.default },
    props: {
        modelValue: {
            type: Object,
            required: false,
            default: undefined
        }
    },
    data: function () {
        return {
            options: { quality: { default: '1080p' } }
        };
    },
    computed: {
        config: function () {
            var _a;
            return (_a = this.$store.state.luma) === null || _a === void 0 ? void 0 : _a.config;
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = { VideoPlayer: VideoPlayer_vue_1.default };
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "relative" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex mb-2" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "text-sm font-bold" }));
(__VLS_ctx.$t('luma.name.extend'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
if ((_a = __VLS_ctx.config) === null || _a === void 0 ? void 0 : _a.video_url) {
    var __VLS_0 = {}.VideoPlayer;
    /** @type {[typeof __VLS_components.VideoPlayer, typeof __VLS_components.videoPlayer, ]} */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        src: ((_b = __VLS_ctx.config) === null || _b === void 0 ? void 0 : _b.video_url),
    }));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
            src: ((_c = __VLS_ctx.config) === null || _c === void 0 ? void 0 : _c.video_url),
        }], __VLS_functionalComponentArgsRest(__VLS_1), false));
}
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
var __VLS_dollars;
var __VLS_self;
