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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21;
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
    emits: ['extend'],
    data: function () {
        return {};
    },
    computed: {
        application: function () {
            var _a;
            return (_a = this.$store.state.luma) === null || _a === void 0 ? void 0 : _a.application;
        },
        config: function () {
            var _a;
            return (_a = this.$store.state.luma) === null || _a === void 0 ? void 0 : _a.config;
        }
    },
    methods: {
        onExtend: function (_event, response) {
            var _a;
            // extend url here
            console.debug('set config', response);
            this.$store.commit('luma/setConfig', __assign(__assign({}, (_a = this.$store.state.luma) === null || _a === void 0 ? void 0 : _a.config), { video_id: response.video_id, prompt: response.prompt, action: 'extend', thumbnail_url: response.thumbnail_url, video_url: response.video_url }));
            this.$emit('extend');
        },
        onDownload: function (video_url) {
            // download url here
            window.open(video_url, '_blank');
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
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ src: "https://cdn.acedata.cloud/ahjfwi.png" }, { class: "avatar" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ src: "https://cdn.acedata.cloud/ahjfwi.png" }, { class: "avatar" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "main" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "bot" }));
(__VLS_ctx.$t('luma.name.lumaBot'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "datetime" }));
(__VLS_ctx.$dayjs.format('' + new Date(parseFloat((((_a = __VLS_ctx.modelValue) === null || _a === void 0 ? void 0 : _a.created_at) || '').toString()) * 1000)));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "info" }));
if ((_c = (_b = __VLS_ctx.modelValue) === null || _b === void 0 ? void 0 : _b.request) === null || _c === void 0 ? void 0 : _c.prompt) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "prompt mt-2" }));
    ((_e = (_d = __VLS_ctx.modelValue) === null || _d === void 0 ? void 0 : _d.request) === null || _e === void 0 ? void 0 : _e.prompt);
    if (!((_f = __VLS_ctx.modelValue) === null || _f === void 0 ? void 0 : _f.response)) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.$t('luma.status.pending'));
    }
    if (((_h = (_g = __VLS_ctx.modelValue) === null || _g === void 0 ? void 0 : _g.response) === null || _h === void 0 ? void 0 : _h.state) === 'processing' || ((_k = (_j = __VLS_ctx.modelValue) === null || _j === void 0 ? void 0 : _j.response) === null || _k === void 0 ? void 0 : _k.state) === 'pending') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.$t('luma.status.processing'));
    }
}
if (((_m = (_l = __VLS_ctx.modelValue) === null || _l === void 0 ? void 0 : _l.response) === null || _m === void 0 ? void 0 : _m.success) === true) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ content: true, failed: true }) }));
    if (__VLS_ctx.modelValue.response.video_url) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "mb-4" }));
        var __VLS_4 = {}.VideoPlayer;
        /** @type {[typeof __VLS_components.VideoPlayer, typeof __VLS_components.videoPlayer, ]} */ ;
        // @ts-ignore
        var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
            src: (__VLS_ctx.modelValue.response.video_url),
        }));
        var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{
                src: (__VLS_ctx.modelValue.response.video_url),
            }], __VLS_functionalComponentArgsRest(__VLS_5), false));
    }
    if (((_o = __VLS_ctx.modelValue) === null || _o === void 0 ? void 0 : _o.response) && !((_p = __VLS_ctx.config) === null || _p === void 0 ? void 0 : _p.custom)) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ operations: true, 'mt-2': true, 'mb-4': true }) }));
        var __VLS_8 = {}.ElTooltip;
        /** @type {[typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ]} */ ;
        // @ts-ignore
        var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ class: "box-item" }, { effect: "dark", content: (__VLS_ctx.$t('luma.message.extendVideo')), placement: "top-start" })));
        var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ class: "box-item" }, { effect: "dark", content: (__VLS_ctx.$t('luma.message.extendVideo')), placement: "top-start" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
        __VLS_11.slots.default;
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
                var _a, _b, _c, _d, _e;
                var _f = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _f[_i] = arguments[_i];
                }
                var $event = _f[0];
                if (!(((_b = (_a = __VLS_ctx.modelValue) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.success) === true))
                    return;
                if (!(((_c = __VLS_ctx.modelValue) === null || _c === void 0 ? void 0 : _c.response) && !((_d = __VLS_ctx.config) === null || _d === void 0 ? void 0 : _d.custom)))
                    return;
                __VLS_ctx.onExtend($event, (_e = __VLS_ctx.modelValue) === null || _e === void 0 ? void 0 : _e.response);
            }
        };
        __VLS_15.slots.default;
        (__VLS_ctx.$t('luma.button.extend'));
        var __VLS_15;
        var __VLS_11;
        var __VLS_20 = {}.ElTooltip;
        /** @type {[typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ]} */ ;
        // @ts-ignore
        var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20(__assign({ class: "box-item" }, { effect: "dark", content: (__VLS_ctx.$t('luma.message.downloadVideo')), placement: "top-start" })));
        var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([__assign({ class: "box-item" }, { effect: "dark", content: (__VLS_ctx.$t('luma.message.downloadVideo')), placement: "top-start" })], __VLS_functionalComponentArgsRest(__VLS_21), false));
        __VLS_23.slots.default;
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
                var _a, _b, _c, _d, _e, _f;
                var _g = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _g[_i] = arguments[_i];
                }
                var $event = _g[0];
                if (!(((_b = (_a = __VLS_ctx.modelValue) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.success) === true))
                    return;
                if (!(((_c = __VLS_ctx.modelValue) === null || _c === void 0 ? void 0 : _c.response) && !((_d = __VLS_ctx.config) === null || _d === void 0 ? void 0 : _d.custom)))
                    return;
                __VLS_ctx.onDownload((_f = (_e = __VLS_ctx.modelValue) === null || _e === void 0 ? void 0 : _e.response) === null || _f === void 0 ? void 0 : _f.video_url);
            }
        };
        __VLS_27.slots.default;
        (__VLS_ctx.$t('luma.button.download'));
        var __VLS_27;
        var __VLS_23;
    }
    var __VLS_32 = {}.ElAlert;
    /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
    // @ts-ignore
    var __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32(__assign({ closable: (false) }, { class: "mt-2 success" })));
    var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "mt-2 success" })], __VLS_functionalComponentArgsRest(__VLS_33), false));
    __VLS_35.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-0" }));
    var __VLS_36 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
    var __VLS_38 = __VLS_37.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_37), false));
    (__VLS_ctx.$t('luma.name.taskId'));
    ((_q = __VLS_ctx.modelValue) === null || _q === void 0 ? void 0 : _q.id);
    var __VLS_40 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
        content: ((_r = __VLS_ctx.modelValue) === null || _r === void 0 ? void 0 : _r.id),
    }));
    var __VLS_42 = __VLS_41.apply(void 0, __spreadArray([{
            content: ((_s = __VLS_ctx.modelValue) === null || _s === void 0 ? void 0 : _s.id),
        }], __VLS_functionalComponentArgsRest(__VLS_41), false));
    var __VLS_35;
}
if (((_u = (_t = __VLS_ctx.modelValue) === null || _t === void 0 ? void 0 : _t.response) === null || _u === void 0 ? void 0 : _u.state) === 'failed' || ((_w = (_v = __VLS_ctx.modelValue) === null || _v === void 0 ? void 0 : _v.response) === null || _w === void 0 ? void 0 : _w.success) === false) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ content: true }) }));
    var __VLS_44 = {}.ElAlert;
    /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
    // @ts-ignore
    var __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44(__assign({ closable: (false) }, { class: "failure" })));
    var __VLS_46 = __VLS_45.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "failure" })], __VLS_functionalComponentArgsRest(__VLS_45), false));
    __VLS_47.slots.default;
    {
        var __VLS_thisSlot = __VLS_47.slots.template;
        var __VLS_48 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48(__assign({ icon: "fa-solid fa-exclamation-triangle" }, { class: "mr-1" })));
        var __VLS_50 = __VLS_49.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-exclamation-triangle" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_49), false));
        (__VLS_ctx.$t('luma.name.failure'));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-2" }));
    var __VLS_52 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
    var __VLS_54 = __VLS_53.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_53), false));
    (__VLS_ctx.$t('luma.name.taskId'));
    ((_x = __VLS_ctx.modelValue) === null || _x === void 0 ? void 0 : _x.id);
    var __VLS_56 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
        content: ((_y = __VLS_ctx.modelValue) === null || _y === void 0 ? void 0 : _y.id),
    }));
    var __VLS_58 = __VLS_57.apply(void 0, __spreadArray([{
            content: ((_z = __VLS_ctx.modelValue) === null || _z === void 0 ? void 0 : _z.id),
        }], __VLS_functionalComponentArgsRest(__VLS_57), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-2" }));
    var __VLS_60 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60(__assign({ icon: "fa-solid fa-circle-info" }, { class: "mr-1" })));
    var __VLS_62 = __VLS_61.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-circle-info" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_61), false));
    (__VLS_ctx.$t('luma.name.failureReason'));
    ((_2 = (_1 = (_0 = __VLS_ctx.modelValue) === null || _0 === void 0 ? void 0 : _0.response) === null || _1 === void 0 ? void 0 : _1.error) === null || _2 === void 0 ? void 0 : _2.message);
    var __VLS_64 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({
        content: ((_5 = (_4 = (_3 = __VLS_ctx.modelValue) === null || _3 === void 0 ? void 0 : _3.response) === null || _4 === void 0 ? void 0 : _4.error) === null || _5 === void 0 ? void 0 : _5.message),
    }));
    var __VLS_66 = __VLS_65.apply(void 0, __spreadArray([{
            content: ((_8 = (_7 = (_6 = __VLS_ctx.modelValue) === null || _6 === void 0 ? void 0 : _6.response) === null || _7 === void 0 ? void 0 : _7.error) === null || _8 === void 0 ? void 0 : _8.message),
        }], __VLS_functionalComponentArgsRest(__VLS_65), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-0" }));
    var __VLS_68 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68(__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })));
    var __VLS_70 = __VLS_69.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_69), false));
    (__VLS_ctx.$t('luma.name.traceId'));
    ((_9 = __VLS_ctx.modelValue) === null || _9 === void 0 ? void 0 : _9.trace_id);
    var __VLS_72 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
        content: ((_11 = (_10 = __VLS_ctx.modelValue) === null || _10 === void 0 ? void 0 : _10.response) === null || _11 === void 0 ? void 0 : _11.trace_id),
    }));
    var __VLS_74 = __VLS_73.apply(void 0, __spreadArray([{
            content: ((_13 = (_12 = __VLS_ctx.modelValue) === null || _12 === void 0 ? void 0 : _12.response) === null || _13 === void 0 ? void 0 : _13.trace_id),
        }], __VLS_functionalComponentArgsRest(__VLS_73), false));
    var __VLS_47;
}
if (!((_14 = __VLS_ctx.modelValue) === null || _14 === void 0 ? void 0 : _14.response) ||
    ((_16 = (_15 = __VLS_ctx.modelValue) === null || _15 === void 0 ? void 0 : _15.response) === null || _16 === void 0 ? void 0 : _16.state) === 'processing' ||
    ((_18 = (_17 = __VLS_ctx.modelValue) === null || _17 === void 0 ? void 0 : _17.response) === null || _18 === void 0 ? void 0 : _18.state) === 'pending') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ content: true }) }));
    var __VLS_76 = {}.ElAlert;
    /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
    // @ts-ignore
    var __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76(__assign({ closable: (false) }, { class: "info" })));
    var __VLS_78 = __VLS_77.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "info" })], __VLS_functionalComponentArgsRest(__VLS_77), false));
    __VLS_79.slots.default;
    {
        var __VLS_thisSlot = __VLS_79.slots.template;
        var __VLS_80 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80(__assign({ icon: "fa-solid fa-exclamation-triangle" }, { class: "mr-1" })));
        var __VLS_82 = __VLS_81.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-exclamation-triangle" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_81), false));
        (__VLS_ctx.$t('luma.name.failure'));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-0" }));
    var __VLS_84 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
    var __VLS_86 = __VLS_85.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_85), false));
    (__VLS_ctx.$t('luma.name.taskId'));
    ((_19 = __VLS_ctx.modelValue) === null || _19 === void 0 ? void 0 : _19.id);
    var __VLS_88 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({
        content: ((_20 = __VLS_ctx.modelValue) === null || _20 === void 0 ? void 0 : _20.id),
    }));
    var __VLS_90 = __VLS_89.apply(void 0, __spreadArray([{
            content: ((_21 = __VLS_ctx.modelValue) === null || _21 === void 0 ? void 0 : _21.id),
        }], __VLS_functionalComponentArgsRest(__VLS_89), false));
    var __VLS_79;
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
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['box-item']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-action']} */ ;
/** @type {__VLS_StyleScopedClasses['box-item']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-action']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['success']} */ ;
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
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
var __VLS_dollars;
var __VLS_self;
