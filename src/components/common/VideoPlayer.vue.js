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
// @ts-ignore
var vue_plyr_1 = require("@skjnldsv/vue-plyr");
// @ts-ignore
require("@skjnldsv/vue-plyr/dist/vue-plyr.css");
exports.default = (0, vue_1.defineComponent)({
    name: 'VideoPlayer',
    components: { VuePlyr: vue_plyr_1.default },
    props: {
        src: {
            type: String,
            required: true
        },
        options: {
            type: Object,
            required: false,
            default: function () { return ({}); }
        }
    },
    data: function () {
        return {
            mergedOptions: __assign({ controls: [
                    'play-large',
                    'play',
                    'progress',
                    'current-time',
                    'mute',
                    'volume',
                    'captions',
                    'settings',
                    'pip',
                    'fullscreen'
                ], iconUrl: 'https://cdn.acedata.cloud/7jq4t0.svg', quality: __assign({ default: '1080p' }, this.options.quality) }, this.options)
        };
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = { VuePlyr: vue_plyr_1.default };
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "video max-w-[800px] max-h-[450px] rounded-[15px] overflow-hidden" }));
var __VLS_0 = {}.VuePlyr;
/** @type {[typeof __VLS_components.VuePlyr, typeof __VLS_components.vuePlyr, typeof __VLS_components.VuePlyr, typeof __VLS_components.vuePlyr, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    options: (__VLS_ctx.mergedOptions),
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        options: (__VLS_ctx.mergedOptions),
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.video, __VLS_intrinsicElements.video)(__assign({ controls: true, crossorigin: "anonymous", playsinline: true }, { class: "w-full h-full aspect-[16/9]" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.source)({
    size: "1080",
    src: (__VLS_ctx.src),
    type: "video/mp4",
});
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['video']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-[800px]']} */ ;
/** @type {__VLS_StyleScopedClasses['max-h-[450px]']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-[15px]']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['aspect-[16/9]']} */ ;
var __VLS_dollars;
var __VLS_self;
