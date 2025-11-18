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
var vue_1 = require("vue");
// @ts-ignore
var vue_plyr_1 = require("@skjnldsv/vue-plyr");
require("@skjnldsv/vue-plyr/dist/vue-plyr.css");
exports.default = (0, vue_1.defineComponent)({
    name: 'VideoPlayer',
    components: { VuePlyr: vue_plyr_1.default },
    props: {
        modelValue: {
            type: Object,
            required: true
        }
    },
    data: function () {
        return {
            options: { quality: { default: '1080p' } }
        };
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = { VuePlyr: vue_plyr_1.default };
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
var __VLS_0 = {}.VuePlyr;
/** @type {[typeof __VLS_components.VuePlyr, typeof __VLS_components.vuePlyr, typeof __VLS_components.VuePlyr, typeof __VLS_components.vuePlyr, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ options: (__VLS_ctx.options) }, { class: "video" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ options: (__VLS_ctx.options) }, { class: "video" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.video, __VLS_intrinsicElements.video)({
    controls: true,
    crossorigin: "",
    playsinline: true,
    'data-poster': ((_a = __VLS_ctx.modelValue) === null || _a === void 0 ? void 0 : _a.image_url),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.source)({
    size: "1080",
    src: ((_b = __VLS_ctx.modelValue) === null || _b === void 0 ? void 0 : _b.video_url),
    type: "video/mp4",
});
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['video']} */ ;
var __VLS_dollars;
var __VLS_self;
