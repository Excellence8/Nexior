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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_LYRIC = void 0;
var vue_1 = require("vue");
var number_1 = require("@/utils/number");
var element_plus_1 = require("element-plus");
var icons_vue_1 = require("@element-plus/icons-vue");
exports.DEFAULT_LYRIC = '';
exports.default = (0, vue_1.defineComponent)({
    name: 'ExtendFromInput',
    components: {
        ElImage: element_plus_1.ElImage,
        ElIcon: element_plus_1.ElIcon,
        ElInputNumber: element_plus_1.ElInputNumber,
        VideoPlay: icons_vue_1.VideoPlay,
        VideoPause: icons_vue_1.VideoPause
    },
    data: function () {
        return {};
    },
    computed: {
        // @ts-ignore
        audio: function () {
            var _a, _b;
            // @ts-ignore
            return (_b = (_a = this.$store.state.suno) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.audio;
        },
        value: {
            get: function () {
                var _a, _b;
                return (_b = (_a = this.$store.state.suno) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.continue_at;
            },
            set: function (val) {
                var _a;
                console.debug('set continue_at', val);
                this.$store.commit('suno/setConfig', __assign(__assign({}, (_a = this.$store.state.suno) === null || _a === void 0 ? void 0 : _a.config), { continue_at: val ? parseInt(val) : undefined }));
            }
        }
    },
    mounted: function () {
        if (!this.value) {
            this.value = undefined;
        }
    },
    methods: {
        handleChange: function (val) {
            var _a, _b;
            if (val === undefined) {
                this.value = undefined;
                return;
            }
            if (val < 0) {
                this.value = 0;
                // @ts-ignore
            }
            else if (val > ((_a = this.audio) === null || _a === void 0 ? void 0 : _a.duration)) {
                this.value = (_b = this.audio) === null || _b === void 0 ? void 0 : _b.duration;
            }
            else {
                this.value = val;
            }
        },
        useFormatDuring: number_1.useFormatDuring,
        onPlay: function (audio) {
            this.$store.dispatch('suno/setAudio', __assign(__assign(__assign({}, this.$store.state.suno.audio), audio), { state: 'playing' }));
            console.log('on play');
        },
        onPause: function (audio) {
            this.$store.dispatch('suno/setAudio', __assign(__assign(__assign({}, this.$store.state.suno.audio), audio), { state: 'paused' }));
            console.log('on pause');
        },
        onClick: function (audio) {
            var _a, _b, _c;
            if (((_c = (_b = (_a = this.$store.state) === null || _a === void 0 ? void 0 : _a.suno) === null || _b === void 0 ? void 0 : _b.audio) === null || _c === void 0 ? void 0 : _c.id) !== audio.id) {
                this.onPlay(__assign(__assign({}, audio), { progress: 0 }));
            }
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElImage: element_plus_1.ElImage,
    ElIcon: element_plus_1.ElIcon,
    ElInputNumber: element_plus_1.ElInputNumber,
    VideoPlay: icons_vue_1.VideoPlay,
    VideoPause: icons_vue_1.VideoPause
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "field" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "box" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "title font-bold" }));
(__VLS_ctx.$t('suno.name.extend'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-wrapper" }));
var __VLS_0 = {}.ElInputNumber;
/** @type {[typeof __VLS_components.ElInputNumber, typeof __VLS_components.elInputNumber, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign(__assign({ 'onChange': {} }, { modelValue: (__VLS_ctx.value) }), { class: "value" }), { min: (0), max: ((_a = __VLS_ctx.audio) === null || _a === void 0 ? void 0 : _a.duration), controls: (false), placeholder: (__VLS_ctx.$t('suno.placeholder.extend.continue_at')) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onChange': {} }, { modelValue: (__VLS_ctx.value) }), { class: "value" }), { min: (0), max: ((_b = __VLS_ctx.audio) === null || _b === void 0 ? void 0 : _b.duration), controls: (false), placeholder: (__VLS_ctx.$t('suno.placeholder.extend.continue_at')) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4;
var __VLS_5;
var __VLS_6;
var __VLS_7 = {
    onChange: (__VLS_ctx.handleChange)
};
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "task" }));
if (__VLS_ctx.audio) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!(__VLS_ctx.audio))
                return;
            __VLS_ctx.onClick(__VLS_ctx.audio);
        } }, { class: "audio" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "left" }));
    __VLS_asFunctionalDirective(__VLS_directives.vLoading)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (!((_c = __VLS_ctx.audio) === null || _c === void 0 ? void 0 : _c.audio_url)) }), null, null);
    var __VLS_8 = {}.ElImage;
    /** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
    // @ts-ignore
    var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign(__assign({ src: ((_d = __VLS_ctx.audio) === null || _d === void 0 ? void 0 : _d.image_url) }, { class: "cover" }), { fit: "cover" })));
    var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign(__assign({ src: ((_e = __VLS_ctx.audio) === null || _e === void 0 ? void 0 : _e.image_url) }, { class: "cover" }), { fit: "cover" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
    if (((_f = __VLS_ctx.audio) === null || _f === void 0 ? void 0 : _f.audio_url) &&
        ((_j = (_h = (_g = __VLS_ctx.$store.state) === null || _g === void 0 ? void 0 : _g.suno) === null || _h === void 0 ? void 0 : _h.audio) === null || _j === void 0 ? void 0 : _j.id) === __VLS_ctx.audio.id &&
        ((_m = (_l = (_k = __VLS_ctx.$store.state) === null || _k === void 0 ? void 0 : _k.suno) === null || _l === void 0 ? void 0 : _l.audio) === null || _m === void 0 ? void 0 : _m.state) === 'playing') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: function () {
                var _a, _b, _c, _d, _e, _f, _g;
                var _h = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _h[_i] = arguments[_i];
                }
                var $event = _h[0];
                if (!(__VLS_ctx.audio))
                    return;
                if (!(((_a = __VLS_ctx.audio) === null || _a === void 0 ? void 0 : _a.audio_url) &&
                    ((_d = (_c = (_b = __VLS_ctx.$store.state) === null || _b === void 0 ? void 0 : _b.suno) === null || _c === void 0 ? void 0 : _c.audio) === null || _d === void 0 ? void 0 : _d.id) === __VLS_ctx.audio.id &&
                    ((_g = (_f = (_e = __VLS_ctx.$store.state) === null || _e === void 0 ? void 0 : _e.suno) === null || _f === void 0 ? void 0 : _f.audio) === null || _g === void 0 ? void 0 : _g.state) === 'playing'))
                    return;
                __VLS_ctx.onPause(__VLS_ctx.audio);
            } }, { class: "overlay" }));
        var __VLS_12 = {}.ElIcon;
        /** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
        // @ts-ignore
        var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
        var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_13), false));
        __VLS_15.slots.default;
        var __VLS_16 = {}.VideoPause;
        /** @type {[typeof __VLS_components.VideoPause, typeof __VLS_components.videoPause, ]} */ ;
        // @ts-ignore
        var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({}));
        var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_17), false));
        var __VLS_15;
    }
    if (((_o = __VLS_ctx.audio) === null || _o === void 0 ? void 0 : _o.audio_url) &&
        (((_r = (_q = (_p = __VLS_ctx.$store.state) === null || _p === void 0 ? void 0 : _p.suno) === null || _q === void 0 ? void 0 : _q.audio) === null || _r === void 0 ? void 0 : _r.id) !== __VLS_ctx.audio.id ||
            (((_u = (_t = (_s = __VLS_ctx.$store.state) === null || _s === void 0 ? void 0 : _s.suno) === null || _t === void 0 ? void 0 : _t.audio) === null || _u === void 0 ? void 0 : _u.id) === __VLS_ctx.audio.id && ((_x = (_w = (_v = __VLS_ctx.$store.state) === null || _v === void 0 ? void 0 : _v.suno) === null || _w === void 0 ? void 0 : _w.audio) === null || _x === void 0 ? void 0 : _x.state) === 'paused'))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: function () {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                var _l = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _l[_i] = arguments[_i];
                }
                var $event = _l[0];
                if (!(__VLS_ctx.audio))
                    return;
                if (!(((_a = __VLS_ctx.audio) === null || _a === void 0 ? void 0 : _a.audio_url) &&
                    (((_d = (_c = (_b = __VLS_ctx.$store.state) === null || _b === void 0 ? void 0 : _b.suno) === null || _c === void 0 ? void 0 : _c.audio) === null || _d === void 0 ? void 0 : _d.id) !== __VLS_ctx.audio.id ||
                        (((_g = (_f = (_e = __VLS_ctx.$store.state) === null || _e === void 0 ? void 0 : _e.suno) === null || _f === void 0 ? void 0 : _f.audio) === null || _g === void 0 ? void 0 : _g.id) === __VLS_ctx.audio.id && ((_k = (_j = (_h = __VLS_ctx.$store.state) === null || _h === void 0 ? void 0 : _h.suno) === null || _j === void 0 ? void 0 : _j.audio) === null || _k === void 0 ? void 0 : _k.state) === 'paused'))))
                    return;
                __VLS_ctx.onPlay(__VLS_ctx.audio);
            } }, { class: "overlay" }));
        var __VLS_20 = {}.ElIcon;
        /** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
        // @ts-ignore
        var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
        var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_21), false));
        __VLS_23.slots.default;
        var __VLS_24 = {}.VideoPlay;
        /** @type {[typeof __VLS_components.VideoPlay, typeof __VLS_components.videoPlay, ]} */ ;
        // @ts-ignore
        var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
        var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_25), false));
        var __VLS_23;
    }
    if ((_y = __VLS_ctx.audio) === null || _y === void 0 ? void 0 : _y.duration) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "duration" }));
        (__VLS_ctx.useFormatDuring((_z = __VLS_ctx.audio) === null || _z === void 0 ? void 0 : _z.duration));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "info" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "title" }));
    ((_0 = __VLS_ctx.audio) === null || _0 === void 0 ? void 0 : _0.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "style" }));
    ((_1 = __VLS_ctx.audio) === null || _1 === void 0 ? void 0 : _1.style);
}
/** @type {__VLS_StyleScopedClasses['field']} */ ;
/** @type {__VLS_StyleScopedClasses['box']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['input-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['value']} */ ;
/** @type {__VLS_StyleScopedClasses['task']} */ ;
/** @type {__VLS_StyleScopedClasses['audio']} */ ;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['cover']} */ ;
/** @type {__VLS_StyleScopedClasses['overlay']} */ ;
/** @type {__VLS_StyleScopedClasses['overlay']} */ ;
/** @type {__VLS_StyleScopedClasses['duration']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['style']} */ ;
var __VLS_dollars;
var __VLS_self;
