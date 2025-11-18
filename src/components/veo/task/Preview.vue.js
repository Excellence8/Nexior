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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var CopyToClipboard_vue_1 = require("@/components/common/CopyToClipboard.vue");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var VideoPlayer_vue_1 = require("@/components/common/VideoPlayer.vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'TaskPreview',
    components: {
        ElImage: element_plus_1.ElImage,
        CopyToClipboard: CopyToClipboard_vue_1.default,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
        ElAlert: element_plus_1.ElAlert,
        VideoPlayer: VideoPlayer_vue_1.default,
        ElTooltip: element_plus_1.ElTooltip,
        ElButton: element_plus_1.ElButton
    },
    props: {
        modelValue: {
            type: Object,
            required: true
        }
    },
    data: function () {
        return {};
    },
    computed: {
        application: function () {
            var _a;
            return (_a = this.$store.state.veo) === null || _a === void 0 ? void 0 : _a.application;
        },
        config: function () {
            var _a;
            return (_a = this.$store.state.veo) === null || _a === void 0 ? void 0 : _a.config;
        }
    },
    methods: {
        onGet1080p: function (_event, response) {
            var _a, _b, _c, _d;
            // extend url here
            console.debug('set config', response);
            this.$store.commit('veo/setConfig', __assign(__assign({}, (_a = this.$store.state.veo) === null || _a === void 0 ? void 0 : _a.config), { 
                // @ts-ignore
                video_id: (_c = (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.id, 
                // @ts-ignore
                video_url: (_d = response === null || response === void 0 ? void 0 : response.data[0]) === null || _d === void 0 ? void 0 : _d.video_url, action: 'get1080p' }));
        },
        onDownload: function (event, video_url) {
            event.stopPropagation();
            console.log('on download');
            // download url here
            window.open(video_url, '_blank');
        },
        onOpenVideo: function (url) {
            window.open(url, '_blank');
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElImage: element_plus_1.ElImage,
    CopyToClipboard: CopyToClipboard_vue_1.default,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
    ElAlert: element_plus_1.ElAlert,
    VideoPlayer: VideoPlayer_vue_1.default,
    ElTooltip: element_plus_1.ElTooltip,
    ElButton: element_plus_1.ElButton
};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "preview" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "left" }));
var __VLS_0 = {}.ElImage;
/** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ src: "https://cdn.acedata.cloud/8nxyy9.jpg" }, { class: "avatar" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ src: "https://cdn.acedata.cloud/8nxyy9.jpg" }, { class: "avatar" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "main" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "bot" }));
(__VLS_ctx.$t('veo.name.veoBot'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "datetime" }));
(__VLS_ctx.$dayjs.format('' + new Date(parseFloat((((_a = __VLS_ctx.modelValue) === null || _a === void 0 ? void 0 : _a.created_at) || '').toString()) * 1000)));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "info" }));
if ((_c = (_b = __VLS_ctx.modelValue) === null || _b === void 0 ? void 0 : _b.request) === null || _c === void 0 ? void 0 : _c.prompt) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "prompt mt-2" }));
    ((_e = (_d = __VLS_ctx.modelValue) === null || _d === void 0 ? void 0 : _d.request) === null || _e === void 0 ? void 0 : _e.prompt);
    if (!((_f = __VLS_ctx.modelValue) === null || _f === void 0 ? void 0 : _f.response)) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.$t('veo.status.pending'));
    }
    if (Array.isArray((_h = (_g = __VLS_ctx.modelValue) === null || _g === void 0 ? void 0 : _g.response) === null || _h === void 0 ? void 0 : _h.data) && ((_l = (_k = (_j = __VLS_ctx.modelValue) === null || _j === void 0 ? void 0 : _j.response) === null || _k === void 0 ? void 0 : _k.data[0]) === null || _l === void 0 ? void 0 : _l.state) === 'running') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.$t('veo.status.processing'));
    }
}
if (((_o = (_m = __VLS_ctx.modelValue) === null || _m === void 0 ? void 0 : _m.response) === null || _o === void 0 ? void 0 : _o.success) === true && ((_q = (_p = __VLS_ctx.modelValue) === null || _p === void 0 ? void 0 : _p.response) === null || _q === void 0 ? void 0 : _q.data)) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ content: true, failed: true }) }));
    if ((_t = (_s = (_r = __VLS_ctx.modelValue) === null || _r === void 0 ? void 0 : _r.response) === null || _s === void 0 ? void 0 : _s.data[0]) === null || _t === void 0 ? void 0 : _t.video_url) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "mb-4" }));
        var __VLS_4 = {}.VideoPlayer;
        /** @type {[typeof __VLS_components.VideoPlayer, typeof __VLS_components.videoPlayer, ]} */ ;
        // @ts-ignore
        var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
            src: ((_w = (_v = (_u = __VLS_ctx.modelValue) === null || _u === void 0 ? void 0 : _u.response) === null || _v === void 0 ? void 0 : _v.data[0]) === null || _w === void 0 ? void 0 : _w.video_url),
        }));
        var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{
                src: ((_z = (_y = (_x = __VLS_ctx.modelValue) === null || _x === void 0 ? void 0 : _x.response) === null || _y === void 0 ? void 0 : _y.data[0]) === null || _z === void 0 ? void 0 : _z.video_url),
            }], __VLS_functionalComponentArgsRest(__VLS_5), false));
    }
    if ((_0 = __VLS_ctx.modelValue) === null || _0 === void 0 ? void 0 : _0.response.success) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ operations: true, 'mt-2': true }) }));
        var __VLS_8 = {}.ElTooltip;
        /** @type {[typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ]} */ ;
        // @ts-ignore
        var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ class: "box-item" }, { effect: "dark", content: (__VLS_ctx.$t('veo.message.downloadVideo')), placement: "top-start" })));
        var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ class: "box-item" }, { effect: "dark", content: (__VLS_ctx.$t('veo.message.downloadVideo')), placement: "top-start" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
        __VLS_11.slots.default;
        if ((_3 = (_2 = (_1 = __VLS_ctx.modelValue) === null || _1 === void 0 ? void 0 : _1.response) === null || _2 === void 0 ? void 0 : _2.data[0]) === null || _3 === void 0 ? void 0 : _3.video_url) {
            var __VLS_12 = {}.ElButton;
            /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
            // @ts-ignore
            var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign(__assign({ 'onClick': {} }, { type: "info", size: "small" }), { class: "btn-action" })));
            var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { type: "info", size: "small" }), { class: "btn-action" })], __VLS_functionalComponentArgsRest(__VLS_13), false));
            var __VLS_16 = void 0;
            var __VLS_17 = void 0;
            var __VLS_18 = void 0;
            var __VLS_19 = {
                onClick: function () {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                    var _k = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _k[_i] = arguments[_i];
                    }
                    var $event = _k[0];
                    if (!(((_b = (_a = __VLS_ctx.modelValue) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.success) === true && ((_d = (_c = __VLS_ctx.modelValue) === null || _c === void 0 ? void 0 : _c.response) === null || _d === void 0 ? void 0 : _d.data)))
                        return;
                    if (!((_e = __VLS_ctx.modelValue) === null || _e === void 0 ? void 0 : _e.response.success))
                        return;
                    if (!((_h = (_g = (_f = __VLS_ctx.modelValue) === null || _f === void 0 ? void 0 : _f.response) === null || _g === void 0 ? void 0 : _g.data[0]) === null || _h === void 0 ? void 0 : _h.video_url))
                        return;
                    __VLS_ctx.onGet1080p($event, (_j = __VLS_ctx.modelValue) === null || _j === void 0 ? void 0 : _j.response);
                }
            };
            __VLS_15.slots.default;
            (__VLS_ctx.$t('veo.button.action3'));
            var __VLS_15;
        }
        var __VLS_11;
        var __VLS_20 = {}.ElTooltip;
        /** @type {[typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ]} */ ;
        // @ts-ignore
        var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20(__assign({ class: "box-item" }, { effect: "dark", content: (__VLS_ctx.$t('veo.message.downloadVideo')), placement: "top-start" })));
        var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([__assign({ class: "box-item" }, { effect: "dark", content: (__VLS_ctx.$t('veo.message.downloadVideo')), placement: "top-start" })], __VLS_functionalComponentArgsRest(__VLS_21), false));
        __VLS_23.slots.default;
        if ((_6 = (_5 = (_4 = __VLS_ctx.modelValue) === null || _4 === void 0 ? void 0 : _4.response) === null || _5 === void 0 ? void 0 : _5.data[0]) === null || _6 === void 0 ? void 0 : _6.video_url) {
            var __VLS_24 = {}.ElButton;
            /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
            // @ts-ignore
            var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24(__assign(__assign({ 'onClick': {} }, { type: "info", size: "small" }), { class: "btn-action" })));
            var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { type: "info", size: "small" }), { class: "btn-action" })], __VLS_functionalComponentArgsRest(__VLS_25), false));
            var __VLS_28 = void 0;
            var __VLS_29 = void 0;
            var __VLS_30 = void 0;
            var __VLS_31 = {
                onClick: function () {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                    var _m = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _m[_i] = arguments[_i];
                    }
                    var $event = _m[0];
                    if (!(((_b = (_a = __VLS_ctx.modelValue) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.success) === true && ((_d = (_c = __VLS_ctx.modelValue) === null || _c === void 0 ? void 0 : _c.response) === null || _d === void 0 ? void 0 : _d.data)))
                        return;
                    if (!((_e = __VLS_ctx.modelValue) === null || _e === void 0 ? void 0 : _e.response.success))
                        return;
                    if (!((_h = (_g = (_f = __VLS_ctx.modelValue) === null || _f === void 0 ? void 0 : _f.response) === null || _g === void 0 ? void 0 : _g.data[0]) === null || _h === void 0 ? void 0 : _h.video_url))
                        return;
                    __VLS_ctx.onDownload($event, (_l = (_k = (_j = __VLS_ctx.modelValue) === null || _j === void 0 ? void 0 : _j.response) === null || _k === void 0 ? void 0 : _k.data[0]) === null || _l === void 0 ? void 0 : _l.video_url);
                }
            };
            __VLS_27.slots.default;
            (__VLS_ctx.$t('veo.button.download'));
            var __VLS_27;
        }
        var __VLS_23;
    }
    var __VLS_32 = {}.ElAlert;
    /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
    // @ts-ignore
    var __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32(__assign({ closable: (false) }, { class: "mt-2 success" })));
    var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "mt-2 success" })], __VLS_functionalComponentArgsRest(__VLS_33), false));
    __VLS_35.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-2" }));
    var __VLS_36 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36(__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })));
    var __VLS_38 = __VLS_37.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_37), false));
    (__VLS_ctx.$t('veo.name.model'));
    ((_8 = (_7 = __VLS_ctx.modelValue) === null || _7 === void 0 ? void 0 : _7.request) === null || _8 === void 0 ? void 0 : _8.model);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-0" }));
    var __VLS_40 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
    var __VLS_42 = __VLS_41.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_41), false));
    (__VLS_ctx.$t('veo.name.taskId'));
    ((_9 = __VLS_ctx.modelValue) === null || _9 === void 0 ? void 0 : _9.id);
    var __VLS_44 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
        content: ((_10 = __VLS_ctx.modelValue) === null || _10 === void 0 ? void 0 : _10.id),
    }));
    var __VLS_46 = __VLS_45.apply(void 0, __spreadArray([{
            content: ((_11 = __VLS_ctx.modelValue) === null || _11 === void 0 ? void 0 : _11.id),
        }], __VLS_functionalComponentArgsRest(__VLS_45), false));
    var __VLS_35;
}
if (((_13 = (_12 = __VLS_ctx.modelValue) === null || _12 === void 0 ? void 0 : _12.response) === null || _13 === void 0 ? void 0 : _13.success) === false) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ content: true }) }));
    var __VLS_48 = {}.ElAlert;
    /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
    // @ts-ignore
    var __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48(__assign({ closable: (false) }, { class: "failure" })));
    var __VLS_50 = __VLS_49.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "failure" })], __VLS_functionalComponentArgsRest(__VLS_49), false));
    __VLS_51.slots.default;
    {
        var __VLS_thisSlot = __VLS_51.slots.template;
        var __VLS_52 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52(__assign({ icon: "fa-solid fa-exclamation-triangle" }, { class: "mr-1" })));
        var __VLS_54 = __VLS_53.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-exclamation-triangle" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_53), false));
        (__VLS_ctx.$t('veo.name.failure'));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-2" }));
    var __VLS_56 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
    var __VLS_58 = __VLS_57.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_57), false));
    (__VLS_ctx.$t('veo.name.taskId'));
    ((_14 = __VLS_ctx.modelValue) === null || _14 === void 0 ? void 0 : _14.id);
    var __VLS_60 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
        content: ((_15 = __VLS_ctx.modelValue) === null || _15 === void 0 ? void 0 : _15.id),
    }));
    var __VLS_62 = __VLS_61.apply(void 0, __spreadArray([{
            content: ((_16 = __VLS_ctx.modelValue) === null || _16 === void 0 ? void 0 : _16.id),
        }], __VLS_functionalComponentArgsRest(__VLS_61), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-2" }));
    var __VLS_64 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64(__assign({ icon: "fa-solid fa-circle-info" }, { class: "mr-1" })));
    var __VLS_66 = __VLS_65.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-circle-info" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_65), false));
    (__VLS_ctx.$t('veo.name.failureReason'));
    ((_19 = (_18 = (_17 = __VLS_ctx.modelValue) === null || _17 === void 0 ? void 0 : _17.response) === null || _18 === void 0 ? void 0 : _18.error) === null || _19 === void 0 ? void 0 : _19.message);
    var __VLS_68 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
        content: ((_22 = (_21 = (_20 = __VLS_ctx.modelValue) === null || _20 === void 0 ? void 0 : _20.response) === null || _21 === void 0 ? void 0 : _21.error) === null || _22 === void 0 ? void 0 : _22.message),
    }));
    var __VLS_70 = __VLS_69.apply(void 0, __spreadArray([{
            content: ((_25 = (_24 = (_23 = __VLS_ctx.modelValue) === null || _23 === void 0 ? void 0 : _23.response) === null || _24 === void 0 ? void 0 : _24.error) === null || _25 === void 0 ? void 0 : _25.message),
        }], __VLS_functionalComponentArgsRest(__VLS_69), false));
    if ((_27 = (_26 = __VLS_ctx.modelValue) === null || _26 === void 0 ? void 0 : _26.response) === null || _27 === void 0 ? void 0 : _27.trace_id) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-0" }));
        var __VLS_72 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72(__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })));
        var __VLS_74 = __VLS_73.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_73), false));
        (__VLS_ctx.$t('veo.name.traceId'));
        ((_29 = (_28 = __VLS_ctx.modelValue) === null || _28 === void 0 ? void 0 : _28.response) === null || _29 === void 0 ? void 0 : _29.trace_id);
        var __VLS_76 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({
            content: ((_31 = (_30 = __VLS_ctx.modelValue) === null || _30 === void 0 ? void 0 : _30.response) === null || _31 === void 0 ? void 0 : _31.trace_id),
        }));
        var __VLS_78 = __VLS_77.apply(void 0, __spreadArray([{
                content: ((_33 = (_32 = __VLS_ctx.modelValue) === null || _32 === void 0 ? void 0 : _32.response) === null || _33 === void 0 ? void 0 : _33.trace_id),
            }], __VLS_functionalComponentArgsRest(__VLS_77), false));
    }
    var __VLS_51;
}
if (((_35 = (_34 = __VLS_ctx.modelValue) === null || _34 === void 0 ? void 0 : _34.response) === null || _35 === void 0 ? void 0 : _35.success) === undefined) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ content: true }) }));
    var __VLS_80 = {}.ElAlert;
    /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
    // @ts-ignore
    var __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80(__assign({ closable: (false) }, { class: "info" })));
    var __VLS_82 = __VLS_81.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "info" })], __VLS_functionalComponentArgsRest(__VLS_81), false));
    __VLS_83.slots.default;
    {
        var __VLS_thisSlot = __VLS_83.slots.template;
        var __VLS_84 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84(__assign({ icon: "fa-solid fa-exclamation-triangle" }, { class: "mr-1" })));
        var __VLS_86 = __VLS_85.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-exclamation-triangle" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_85), false));
        (__VLS_ctx.$t('veo.name.failure'));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-2" }));
    var __VLS_88 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
    var __VLS_90 = __VLS_89.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_89), false));
    (__VLS_ctx.$t('veo.name.taskId'));
    ((_36 = __VLS_ctx.modelValue) === null || _36 === void 0 ? void 0 : _36.id);
    var __VLS_92 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({
        content: ((_37 = __VLS_ctx.modelValue) === null || _37 === void 0 ? void 0 : _37.id),
    }));
    var __VLS_94 = __VLS_93.apply(void 0, __spreadArray([{
            content: ((_38 = __VLS_ctx.modelValue) === null || _38 === void 0 ? void 0 : _38.id),
        }], __VLS_functionalComponentArgsRest(__VLS_93), false));
    if ((_40 = (_39 = __VLS_ctx.modelValue) === null || _39 === void 0 ? void 0 : _39.response) === null || _40 === void 0 ? void 0 : _40.trace_id) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-0" }));
        var __VLS_96 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96(__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })));
        var __VLS_98 = __VLS_97.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_97), false));
        (__VLS_ctx.$t('veo.name.traceId'));
        ((_42 = (_41 = __VLS_ctx.modelValue) === null || _41 === void 0 ? void 0 : _41.response) === null || _42 === void 0 ? void 0 : _42.trace_id);
        var __VLS_100 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({
            content: ((_44 = (_43 = __VLS_ctx.modelValue) === null || _43 === void 0 ? void 0 : _43.response) === null || _44 === void 0 ? void 0 : _44.trace_id),
        }));
        var __VLS_102 = __VLS_101.apply(void 0, __spreadArray([{
                content: ((_46 = (_45 = __VLS_ctx.modelValue) === null || _45 === void 0 ? void 0 : _45.response) === null || _46 === void 0 ? void 0 : _46.trace_id),
            }], __VLS_functionalComponentArgsRest(__VLS_101), false));
    }
    var __VLS_83;
}
/** @type {__VLS_StyleScopedClasses['preview']} */ ;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['main']} */ ;
/** @type {__VLS_StyleScopedClasses['bot']} */ ;
/** @type {__VLS_StyleScopedClasses['datetime']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['prompt']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['failed']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['operations']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['box-item']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-action']} */ ;
/** @type {__VLS_StyleScopedClasses['box-item']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-action']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['success']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[var(--el-text-color-regular)]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[var(--el-text-color-regular)]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['failure']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[var(--el-text-color-regular)]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[var(--el-text-color-regular)]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[var(--el-text-color-regular)]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[var(--el-text-color-regular)]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[var(--el-text-color-regular)]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
var __VLS_dollars;
var __VLS_self;
