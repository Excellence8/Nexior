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
var element_plus_1 = require("element-plus");
exports.default = (0, vue_1.defineComponent)({
    name: 'ImageWrapper',
    components: {
        ElButton: element_plus_1.ElButton
    },
    props: {
        src: {
            type: String,
            required: true
        },
        rawSrc: {
            type: String,
            required: false,
            default: undefined
        }
    },
    methods: {
        onOpenUrl: function (url) {
            window.open(url, '_blank');
        },
        onReload: function (event) {
            var target = event.target;
            // append a random url query to existing url query, to force reload the image
            // extract exiting url query
            var url = new URL(target.src);
            // extract `retry` query
            var retry = url.searchParams.get('retry');
            if (!retry) {
                // if no retry query, set it as random string
                url.searchParams.set('retry', '1');
            }
            else if (parseInt(retry) < 2) {
                // if retry < 3, increase it by 1
                url.searchParams.set('retry', (parseInt(retry) + 1).toString());
            }
            else {
                return;
            }
            // set the new url
            target.src = url.toString();
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElButton: element_plus_1.ElButton
};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['image']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-raw']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "image-wrapper" }));
if (__VLS_ctx.src) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign(__assign({ onError: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!(__VLS_ctx.src))
                return;
            __VLS_ctx.onReload($event);
        } }, { src: (__VLS_ctx.src) }), { class: "image" }));
}
if (__VLS_ctx.rawSrc) {
    var __VLS_0 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({ 'onClick': {} }, { type: "info", round: true }), { class: "btn-raw" })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { type: "info", round: true }), { class: "btn-raw" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    var __VLS_4 = void 0;
    var __VLS_5 = void 0;
    var __VLS_6 = void 0;
    var __VLS_7 = {
        onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!(__VLS_ctx.rawSrc))
                return;
            __VLS_ctx.onOpenUrl(__VLS_ctx.rawSrc);
        }
    };
    __VLS_3.slots.default;
    (__VLS_ctx.$t('common.button.seeRawImage'));
    var __VLS_3;
}
/** @type {__VLS_StyleScopedClasses['image-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['image']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-raw']} */ ;
var __VLS_dollars;
var __VLS_self;
