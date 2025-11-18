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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71, _72, _73, _74, _75, _76, _77, _78, _79, _80, _81, _82, _83, _84, _85, _86, _87, _88, _89, _90, _91, _92, _93, _94, _95, _96, _97, _98, _99, _100, _101, _102, _103, _104, _105, _106, _107, _108, _109, _110, _111, _112, _113, _114, _115, _116, _117, _118, _119, _120, _121, _122, _123, _124, _125, _126, _127, _128, _129, _130, _131, _132, _133, _134, _135, _136, _137, _138, _139, _140, _141, _142, _143, _144, _145, _146, _147, _148, _149, _150, _151, _152, _153, _154, _155, _156, _157, _158, _159, _160, _161, _162, _163, _164, _165, _166, _167, _168, _169, _170, _171, _172, _173;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var models_1 = require("@/models");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var CopyToClipboard_vue_1 = require("@/components/common/CopyToClipboard.vue");
var ImageWrapper_vue_1 = require("@/components/common/ImageWrapper.vue");
var VideoPlayer_vue_1 = require("@/components/common/VideoPlayer.vue");
var utils_1 = require("@/utils");
exports.default = (0, vue_1.defineComponent)({
    name: 'TaskPreview',
    components: {
        ElImage: element_plus_1.ElImage,
        ImageWrapper: ImageWrapper_vue_1.default,
        ElButton: element_plus_1.ElButton,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
        ElTooltip: element_plus_1.ElTooltip,
        ElAlert: element_plus_1.ElAlert,
        ElTag: element_plus_1.ElTag,
        CopyToClipboard: CopyToClipboard_vue_1.default,
        VideoPlayer: VideoPlayer_vue_1.default
    },
    props: {
        modelValue: {
            type: Object,
            required: true
        },
        full: {
            type: Boolean,
            default: false
        }
    },
    emits: ['custom'],
    data: function () {
        var _a, _b;
        return {
            midjourneyImagineState: models_1.MidjourneyImagineState,
            actionMapping: (_a = {},
                _a[models_1.MidjourneyImagineAction.GENERATE] = 'Generate',
                _a[models_1.MidjourneyImagineAction.UPSCALE1] = 'U1',
                _a[models_1.MidjourneyImagineAction.UPSCALE2] = 'U2',
                _a[models_1.MidjourneyImagineAction.UPSCALE3] = 'U3',
                _a[models_1.MidjourneyImagineAction.UPSCALE4] = 'U4',
                _a[models_1.MidjourneyImagineAction.VARIATION1] = 'V1',
                _a[models_1.MidjourneyImagineAction.VARIATION2] = 'V2',
                _a[models_1.MidjourneyImagineAction.VARIATION3] = 'V3',
                _a[models_1.MidjourneyImagineAction.VARIATION4] = 'V4',
                _a[models_1.MidjourneyImagineAction.VARIATION_STRONG] = 'Vary (Strong)',
                _a[models_1.MidjourneyImagineAction.VARIATION_SUBTLE] = 'Vary (Subtle)',
                _a[models_1.MidjourneyImagineAction.UPSCALE_CREATIVE] = 'Upscale (Creative)',
                _a[models_1.MidjourneyImagineAction.UPSCALE_SUBTLE] = 'Upscale (Subtle)',
                _a[models_1.MidjourneyImagineAction.ZOOM_OUT_2X] = 'Zoom Out 2x',
                _a[models_1.MidjourneyImagineAction.ZOOM_OUT_1_5X] = 'Zoom Out 1.5x',
                _a[models_1.MidjourneyImagineAction.UPSCALE_2X] = 'Upscale 2x',
                _a[models_1.MidjourneyImagineAction.UPSCALE_4X] = 'Upscale 4x',
                _a[models_1.MidjourneyImagineAction.REDO_UPSCALE_2X] = 'Redo Upscale 2x',
                _a[models_1.MidjourneyImagineAction.REDO_UPSCALE_4X] = 'Redo Upscale 4x',
                _a[models_1.MidjourneyImagineAction.REDO_UPSCALE_SUBTLE] = 'Redo Upscale (Subtle)',
                _a[models_1.MidjourneyImagineAction.REDO_UPSCALE_CREATIVE] = 'Redo Upscale (Creative)',
                _a[models_1.MidjourneyImagineAction.SQUARE] = 'Make Square',
                _a[models_1.MidjourneyImagineAction.PAN_LEFT] = '⬅️',
                _a[models_1.MidjourneyImagineAction.PAN_UP] = '⬆️',
                _a[models_1.MidjourneyImagineAction.PAN_DOWN] = '⬇️',
                _a[models_1.MidjourneyImagineAction.PAN_RIGHT] = '➡️',
                _a[models_1.MidjourneyImagineAction.REROLL] = '🔄',
                _a),
            descriptionMapping: (_b = {},
                _b[models_1.MidjourneyImagineAction.GENERATE] = this.$t('midjourney.action.generate'),
                _b[models_1.MidjourneyImagineAction.UPSCALE1] = this.$t('midjourney.action.upscale1'),
                _b[models_1.MidjourneyImagineAction.UPSCALE2] = this.$t('midjourney.action.upscale2'),
                _b[models_1.MidjourneyImagineAction.UPSCALE3] = this.$t('midjourney.action.upscale3'),
                _b[models_1.MidjourneyImagineAction.UPSCALE4] = this.$t('midjourney.action.upscale4'),
                _b[models_1.MidjourneyImagineAction.VARIATION1] = this.$t('midjourney.action.variation1'),
                _b[models_1.MidjourneyImagineAction.VARIATION2] = this.$t('midjourney.action.variation2'),
                _b[models_1.MidjourneyImagineAction.VARIATION3] = this.$t('midjourney.action.variation3'),
                _b[models_1.MidjourneyImagineAction.VARIATION4] = this.$t('midjourney.action.variation4'),
                _b[models_1.MidjourneyImagineAction.VARIATION_STRONG] = this.$t('midjourney.action.variation_strong'),
                _b[models_1.MidjourneyImagineAction.VARIATION_SUBTLE] = this.$t('midjourney.action.variation_subtle'),
                _b[models_1.MidjourneyImagineAction.ZOOM_OUT_2X] = this.$t('midjourney.action.zoom_out_2x'),
                _b[models_1.MidjourneyImagineAction.ZOOM_OUT_1_5X] = this.$t('midjourney.action.zoom_out_1_5x'),
                _b[models_1.MidjourneyImagineAction.UPSCALE_2X] = this.$t('midjourney.action.upscale_2x'),
                _b[models_1.MidjourneyImagineAction.UPSCALE_4X] = this.$t('midjourney.action.upscale_4x'),
                _b[models_1.MidjourneyImagineAction.UPSCALE_SUBTLE] = this.$t('midjourney.action.upscale_subtle'),
                _b[models_1.MidjourneyImagineAction.UPSCALE_CREATIVE] = this.$t('midjourney.action.upscale_creative'),
                _b[models_1.MidjourneyImagineAction.REDO_UPSCALE_2X] = this.$t('midjourney.action.redo_upscale_2x'),
                _b[models_1.MidjourneyImagineAction.REDO_UPSCALE_4X] = this.$t('midjourney.action.redo_upscale_4x'),
                _b[models_1.MidjourneyImagineAction.REDO_UPSCALE_SUBTLE] = this.$t('midjourney.action.redo_upscale_subtle'),
                _b[models_1.MidjourneyImagineAction.REDO_UPSCALE_CREATIVE] = this.$t('midjourney.action.redo_upscale_creative'),
                _b[models_1.MidjourneyImagineAction.SQUARE] = this.$t('midjourney.action.square'),
                _b[models_1.MidjourneyImagineAction.PAN_LEFT] = this.$t('midjourney.action.pan_left'),
                _b[models_1.MidjourneyImagineAction.PAN_UP] = this.$t('midjourney.action.pan_up'),
                _b[models_1.MidjourneyImagineAction.PAN_DOWN] = this.$t('midjourney.action.pan_down'),
                _b[models_1.MidjourneyImagineAction.PAN_RIGHT] = this.$t('midjourney.action.pan_right'),
                _b[models_1.MidjourneyImagineAction.REROLL] = this.$t('midjourney.action.reroll'),
                _b)
        };
    },
    computed: {
        application: function () {
            return this.$store.state.midjourney.application;
        },
        config: function () {
            var _a;
            return (_a = this.$store.state.midjourney) === null || _a === void 0 ? void 0 : _a.config;
        },
        service: function () {
            var _a;
            return (_a = this.$store.state.midjourney) === null || _a === void 0 ? void 0 : _a.service;
        }
    },
    methods: {
        getActionDescriptionWithPrice: function (action, mode) {
            var _a, _b, _c;
            // @ts-ignore
            var baseDescription = this.descriptionMapping[action];
            var price = (0, utils_1.getConsumption)(__assign(__assign({}, this.config), { action: action, mode: mode }), (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.metadata) === null || _b === void 0 ? void 0 : _b.price);
            var unit = this.$t("service.unit.".concat(((_c = this.service) === null || _c === void 0 ? void 0 : _c.unit) || 'credits'));
            return "".concat(baseDescription, " (").concat(price, " ").concat(unit, ")");
        },
        onCustom: function (action) {
            var _a, _b, _c;
            if (((_a = this.modelValue) === null || _a === void 0 ? void 0 : _a.type) === 'imagine') {
                this.$emit('custom', {
                    action: action,
                    image_id: (_c = (_b = this.modelValue) === null || _b === void 0 ? void 0 : _b.response) === null || _c === void 0 ? void 0 : _c.image_id
                });
            }
        },
        onExtend: function (_event, response) {
            var _a, _b;
            // extend url here
            console.debug('set config', response);
            this.$store.commit('midjourney/setConfig', __assign(__assign({}, (_a = this.$store.state.midjourney) === null || _a === void 0 ? void 0 : _a.config), { video_id: response.video_id, 
                // @ts-ignore
                video_url: (_b = response.video_urls) === null || _b === void 0 ? void 0 : _b[0], action: 'extend', active_tab: 'video', is_videos: true }));
        },
        onDownload: function (url) {
            // download image using javascript
            var link = document.createElement('a');
            link.href = url;
            link.download = url.split('/').pop();
            link.click();
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElImage: element_plus_1.ElImage,
    ImageWrapper: ImageWrapper_vue_1.default,
    ElButton: element_plus_1.ElButton,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
    ElTooltip: element_plus_1.ElTooltip,
    ElAlert: element_plus_1.ElAlert,
    ElTag: element_plus_1.ElTag,
    CopyToClipboard: CopyToClipboard_vue_1.default,
    VideoPlayer: VideoPlayer_vue_1.default
};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['full']} */ ;
// CSS variable injection 
// CSS variable injection end 
if (((_a = __VLS_ctx.modelValue) === null || _a === void 0 ? void 0 : _a.type) === 'imagine') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "item" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "left" }));
    var __VLS_0 = {}.ElImage;
    /** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ src: "https://cdn.acedata.cloud/wto43b.png" }, { class: "avatar" })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ src: "https://cdn.acedata.cloud/wto43b.png" }, { class: "avatar" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "preview" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "bot" }));
    (__VLS_ctx.$t('midjourney.name.midjourneyBot'));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "datetime" }));
    (__VLS_ctx.$dayjs.format('' + new Date(parseFloat((((_b = __VLS_ctx.modelValue) === null || _b === void 0 ? void 0 : _b.created_at) || '').toString()) * 1000)));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "info" }));
    if ((_d = (_c = __VLS_ctx.modelValue) === null || _c === void 0 ? void 0 : _c.request) === null || _d === void 0 ? void 0 : _d.prompt) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "prompt" }));
        ((_f = (_e = __VLS_ctx.modelValue) === null || _e === void 0 ? void 0 : _e.request) === null || _f === void 0 ? void 0 : _f.prompt);
        if (!((_g = __VLS_ctx.modelValue) === null || _g === void 0 ? void 0 : _g.response)) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (__VLS_ctx.$t('midjourney.status.pending'));
        }
        if (((_j = (_h = __VLS_ctx.modelValue) === null || _h === void 0 ? void 0 : _h.response) === null || _j === void 0 ? void 0 : _j.progress) !== undefined && ((_l = (_k = __VLS_ctx.modelValue) === null || _k === void 0 ? void 0 : _k.response) === null || _l === void 0 ? void 0 : _l.progress) !== 100) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            ((_o = (_m = __VLS_ctx.modelValue) === null || _m === void 0 ? void 0 : _m.response) === null || _o === void 0 ? void 0 : _o.progress);
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        ((_q = (_p = __VLS_ctx.modelValue) === null || _p === void 0 ? void 0 : _p.request) === null || _q === void 0 ? void 0 : _q.mode);
    }
    if ((_s = (_r = __VLS_ctx.modelValue) === null || _r === void 0 ? void 0 : _r.request) === null || _s === void 0 ? void 0 : _s.image_id) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "prompt" }));
        ((_u = (_t = __VLS_ctx.modelValue) === null || _t === void 0 ? void 0 : _t.request) === null || _u === void 0 ? void 0 : _u.image_id);
        ((_w = (_v = __VLS_ctx.modelValue) === null || _v === void 0 ? void 0 : _v.request) === null || _w === void 0 ? void 0 : _w.action);
        if (!((_x = __VLS_ctx.modelValue) === null || _x === void 0 ? void 0 : _x.response)) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (__VLS_ctx.$t('midjourney.status.pending'));
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        ((_z = (_y = __VLS_ctx.modelValue) === null || _y === void 0 ? void 0 : _y.request) === null || _z === void 0 ? void 0 : _z.mode);
    }
    if (((_1 = (_0 = __VLS_ctx.modelValue) === null || _0 === void 0 ? void 0 : _0.response) === null || _1 === void 0 ? void 0 : _1.success) === false) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ content: true, full: __VLS_ctx.full, failed: true }) }));
        var __VLS_4 = {}.ElAlert;
        /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
        // @ts-ignore
        var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ closable: (false) }, { class: "failure" })));
        var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "failure" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
        __VLS_7.slots.default;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-2" }));
        var __VLS_8 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
        var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
        (__VLS_ctx.$t('midjourney.field.taskId'));
        ((_2 = __VLS_ctx.modelValue) === null || _2 === void 0 ? void 0 : _2.id);
        var __VLS_12 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
            content: ((_3 = __VLS_ctx.modelValue) === null || _3 === void 0 ? void 0 : _3.id),
        }));
        var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{
                content: ((_4 = __VLS_ctx.modelValue) === null || _4 === void 0 ? void 0 : _4.id),
            }], __VLS_functionalComponentArgsRest(__VLS_13), false));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-2" }));
        var __VLS_16 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign({ icon: "fa-solid fa-circle-info" }, { class: "mr-1" })));
        var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-circle-info" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_17), false));
        (__VLS_ctx.$t('midjourney.field.failureReason'));
        ((_7 = (_6 = (_5 = __VLS_ctx.modelValue) === null || _5 === void 0 ? void 0 : _5.response) === null || _6 === void 0 ? void 0 : _6.error) === null || _7 === void 0 ? void 0 : _7.message);
        var __VLS_20 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
            content: ((_10 = (_9 = (_8 = __VLS_ctx.modelValue) === null || _8 === void 0 ? void 0 : _8.response) === null || _9 === void 0 ? void 0 : _9.error) === null || _10 === void 0 ? void 0 : _10.message),
        }));
        var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([{
                content: ((_13 = (_12 = (_11 = __VLS_ctx.modelValue) === null || _11 === void 0 ? void 0 : _11.response) === null || _12 === void 0 ? void 0 : _12.error) === null || _13 === void 0 ? void 0 : _13.message),
            }], __VLS_functionalComponentArgsRest(__VLS_21), false));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-0" }));
        var __VLS_24 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24(__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })));
        var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_25), false));
        (__VLS_ctx.$t('midjourney.field.traceId'));
        ((_15 = (_14 = __VLS_ctx.modelValue) === null || _14 === void 0 ? void 0 : _14.response) === null || _15 === void 0 ? void 0 : _15.trace_id);
        var __VLS_28 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
            content: ((_17 = (_16 = __VLS_ctx.modelValue) === null || _16 === void 0 ? void 0 : _16.response) === null || _17 === void 0 ? void 0 : _17.trace_id),
        }));
        var __VLS_30 = __VLS_29.apply(void 0, __spreadArray([{
                content: ((_19 = (_18 = __VLS_ctx.modelValue) === null || _18 === void 0 ? void 0 : _18.response) === null || _19 === void 0 ? void 0 : _19.trace_id),
            }], __VLS_functionalComponentArgsRest(__VLS_29), false));
        var __VLS_7;
    }
    if (((_21 = (_20 = __VLS_ctx.modelValue) === null || _20 === void 0 ? void 0 : _20.response) === null || _21 === void 0 ? void 0 : _21.success) === true) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ content: true, full: __VLS_ctx.full }) }));
        if ((_23 = (_22 = __VLS_ctx.modelValue) === null || _22 === void 0 ? void 0 : _22.response) === null || _23 === void 0 ? void 0 : _23.raw_image_url) {
            var __VLS_32 = {}.ImageWrapper;
            /** @type {[typeof __VLS_components.ImageWrapper, typeof __VLS_components.imageWrapper, ]} */ ;
            // @ts-ignore
            var __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
                src: ((_25 = (_24 = __VLS_ctx.modelValue) === null || _24 === void 0 ? void 0 : _24.response) === null || _25 === void 0 ? void 0 : _25.image_url),
                rawSrc: ((_27 = (_26 = __VLS_ctx.modelValue) === null || _26 === void 0 ? void 0 : _26.response) === null || _27 === void 0 ? void 0 : _27.raw_image_url),
            }));
            var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([{
                    src: ((_29 = (_28 = __VLS_ctx.modelValue) === null || _28 === void 0 ? void 0 : _28.response) === null || _29 === void 0 ? void 0 : _29.image_url),
                    rawSrc: ((_31 = (_30 = __VLS_ctx.modelValue) === null || _30 === void 0 ? void 0 : _30.response) === null || _31 === void 0 ? void 0 : _31.raw_image_url),
                }], __VLS_functionalComponentArgsRest(__VLS_33), false));
        }
        if ((_33 = (_32 = __VLS_ctx.modelValue) === null || _32 === void 0 ? void 0 : _32.response) === null || _33 === void 0 ? void 0 : _33.actions) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ operations: true, full: __VLS_ctx.full }) }));
            var _loop_1 = function (action, actionKey) {
                var __VLS_36 = {}.ElTooltip;
                /** @type {[typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ]} */ ;
                // @ts-ignore
                var __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36(__assign(__assign({ key: (actionKey) }, { class: "box-item" }), { effect: "dark", content: (__VLS_ctx.getActionDescriptionWithPrice(action, (_37 = (_36 = __VLS_ctx.modelValue) === null || _36 === void 0 ? void 0 : _36.request) === null || _37 === void 0 ? void 0 : _37.mode)), placement: "top-start" })));
                var __VLS_38 = __VLS_37.apply(void 0, __spreadArray([__assign(__assign({ key: (actionKey) }, { class: "box-item" }), { effect: "dark", content: (__VLS_ctx.getActionDescriptionWithPrice(action, (_39 = (_38 = __VLS_ctx.modelValue) === null || _38 === void 0 ? void 0 : _38.request) === null || _39 === void 0 ? void 0 : _39.mode)), placement: "top-start" })], __VLS_functionalComponentArgsRest(__VLS_37), false));
                __VLS_39.slots.default;
                var __VLS_40 = {}.ElButton;
                /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
                // @ts-ignore
                var __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40(__assign(__assign({ 'onClick': {} }, { type: "info", size: "small" }), { class: "btn-action" })));
                var __VLS_42 = __VLS_41.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { type: "info", size: "small" }), { class: "btn-action" })], __VLS_functionalComponentArgsRest(__VLS_41), false));
                var __VLS_44 = void 0;
                var __VLS_45 = void 0;
                var __VLS_46 = void 0;
                var __VLS_47 = {
                    onClick: function () {
                        var _a, _b, _c, _d, _e;
                        var _f = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            _f[_i] = arguments[_i];
                        }
                        var $event = _f[0];
                        if (!(((_a = __VLS_ctx.modelValue) === null || _a === void 0 ? void 0 : _a.type) === 'imagine'))
                            return;
                        if (!(((_c = (_b = __VLS_ctx.modelValue) === null || _b === void 0 ? void 0 : _b.response) === null || _c === void 0 ? void 0 : _c.success) === true))
                            return;
                        if (!((_e = (_d = __VLS_ctx.modelValue) === null || _d === void 0 ? void 0 : _d.response) === null || _e === void 0 ? void 0 : _e.actions))
                            return;
                        __VLS_ctx.onCustom(action);
                    }
                };
                __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.actionMapping[action]) }), null, null);
                __VLS_43.slots.default;
                (__VLS_ctx.actionMapping[action]);
            };
            var __VLS_43, __VLS_39;
            for (var _i = 0, _174 = __VLS_getVForSourceType(((_35 = (_34 = __VLS_ctx.modelValue) === null || _34 === void 0 ? void 0 : _34.response) === null || _35 === void 0 ? void 0 : _35.actions)); _i < _174.length; _i++) {
                var _175 = _174[_i], action = _175[0], actionKey = _175[1];
                _loop_1(action, actionKey);
            }
        }
        var __VLS_48 = {}.ElAlert;
        /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
        // @ts-ignore
        var __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48(__assign({ closable: (false) }, { class: "mt-2 success" })));
        var __VLS_50 = __VLS_49.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "mt-2 success" })], __VLS_functionalComponentArgsRest(__VLS_49), false));
        __VLS_51.slots.default;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-2" }));
        var __VLS_52 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
        var __VLS_54 = __VLS_53.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_53), false));
        (__VLS_ctx.$t('midjourney.field.taskId'));
        ((_40 = __VLS_ctx.modelValue) === null || _40 === void 0 ? void 0 : _40.id);
        var __VLS_56 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
            content: ((_41 = __VLS_ctx.modelValue) === null || _41 === void 0 ? void 0 : _41.id),
        }));
        var __VLS_58 = __VLS_57.apply(void 0, __spreadArray([{
                content: ((_42 = __VLS_ctx.modelValue) === null || _42 === void 0 ? void 0 : _42.id),
            }], __VLS_functionalComponentArgsRest(__VLS_57), false));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-2" }));
        var __VLS_60 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60(__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })));
        var __VLS_62 = __VLS_61.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_61), false));
        (__VLS_ctx.$t('midjourney.field.traceId'));
        ((_43 = __VLS_ctx.modelValue) === null || _43 === void 0 ? void 0 : _43.trace_id);
        var __VLS_64 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({
            content: ((_44 = __VLS_ctx.modelValue) === null || _44 === void 0 ? void 0 : _44.trace_id),
        }));
        var __VLS_66 = __VLS_65.apply(void 0, __spreadArray([{
                content: ((_45 = __VLS_ctx.modelValue) === null || _45 === void 0 ? void 0 : _45.trace_id),
            }], __VLS_functionalComponentArgsRest(__VLS_65), false));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-0" }));
        var __VLS_68 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68(__assign({ icon: "fa-solid fa-image" }, { class: "mr-1" })));
        var __VLS_70 = __VLS_69.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-image" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_69), false));
        (__VLS_ctx.$t('midjourney.field.imageId'));
        ((_47 = (_46 = __VLS_ctx.modelValue) === null || _46 === void 0 ? void 0 : _46.response) === null || _47 === void 0 ? void 0 : _47.image_id);
        var __VLS_72 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
            content: ((_49 = (_48 = __VLS_ctx.modelValue) === null || _48 === void 0 ? void 0 : _48.response) === null || _49 === void 0 ? void 0 : _49.image_id),
        }));
        var __VLS_74 = __VLS_73.apply(void 0, __spreadArray([{
                content: ((_51 = (_50 = __VLS_ctx.modelValue) === null || _50 === void 0 ? void 0 : _50.response) === null || _51 === void 0 ? void 0 : _51.image_id),
            }], __VLS_functionalComponentArgsRest(__VLS_73), false));
        var __VLS_51;
    }
    if (!((_52 = __VLS_ctx.modelValue) === null || _52 === void 0 ? void 0 : _52.response)) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        var __VLS_76 = {}.ElAlert;
        /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
        // @ts-ignore
        var __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76(__assign({ closable: (false) }, { class: "mt-2 info" })));
        var __VLS_78 = __VLS_77.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "mt-2 info" })], __VLS_functionalComponentArgsRest(__VLS_77), false));
        __VLS_79.slots.default;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-0" }));
        var __VLS_80 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
        var __VLS_82 = __VLS_81.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_81), false));
        (__VLS_ctx.$t('midjourney.field.taskId'));
        ((_53 = __VLS_ctx.modelValue) === null || _53 === void 0 ? void 0 : _53.id);
        var __VLS_84 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({
            content: ((_54 = __VLS_ctx.modelValue) === null || _54 === void 0 ? void 0 : _54.id),
        }));
        var __VLS_86 = __VLS_85.apply(void 0, __spreadArray([{
                content: ((_55 = __VLS_ctx.modelValue) === null || _55 === void 0 ? void 0 : _55.id),
            }], __VLS_functionalComponentArgsRest(__VLS_85), false));
        var __VLS_79;
    }
}
if (((_56 = __VLS_ctx.modelValue) === null || _56 === void 0 ? void 0 : _56.type) === 'videos') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "item" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "left" }));
    var __VLS_88 = {}.ElImage;
    /** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
    // @ts-ignore
    var __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88(__assign({ src: "https://cdn.acedata.cloud/wto43b.png" }, { class: "avatar" })));
    var __VLS_90 = __VLS_89.apply(void 0, __spreadArray([__assign({ src: "https://cdn.acedata.cloud/wto43b.png" }, { class: "avatar" })], __VLS_functionalComponentArgsRest(__VLS_89), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "preview" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "bot" }));
    (__VLS_ctx.$t('midjourney.name.midjourneyBot'));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "datetime" }));
    (__VLS_ctx.$dayjs.format('' + new Date(parseFloat((((_57 = __VLS_ctx.modelValue) === null || _57 === void 0 ? void 0 : _57.created_at) || '').toString()) * 1000)));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "info" }));
    if ((_59 = (_58 = __VLS_ctx.modelValue) === null || _58 === void 0 ? void 0 : _58.request) === null || _59 === void 0 ? void 0 : _59.prompt) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "prompt" }));
        ((_61 = (_60 = __VLS_ctx.modelValue) === null || _60 === void 0 ? void 0 : _60.request) === null || _61 === void 0 ? void 0 : _61.prompt);
        if (!((_62 = __VLS_ctx.modelValue) === null || _62 === void 0 ? void 0 : _62.response)) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (__VLS_ctx.$t('midjourney.status.pending'));
        }
        if (((_64 = (_63 = __VLS_ctx.modelValue) === null || _63 === void 0 ? void 0 : _63.response) === null || _64 === void 0 ? void 0 : _64.progress) !== undefined && ((_66 = (_65 = __VLS_ctx.modelValue) === null || _65 === void 0 ? void 0 : _65.response) === null || _66 === void 0 ? void 0 : _66.progress) !== 100) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            ((_68 = (_67 = __VLS_ctx.modelValue) === null || _67 === void 0 ? void 0 : _67.response) === null || _68 === void 0 ? void 0 : _68.progress);
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        ((_70 = (_69 = __VLS_ctx.modelValue) === null || _69 === void 0 ? void 0 : _69.request) === null || _70 === void 0 ? void 0 : _70.mode);
    }
    if ((_72 = (_71 = __VLS_ctx.modelValue) === null || _71 === void 0 ? void 0 : _71.request) === null || _72 === void 0 ? void 0 : _72.video_id) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "prompt" }));
        ((_74 = (_73 = __VLS_ctx.modelValue) === null || _73 === void 0 ? void 0 : _73.request) === null || _74 === void 0 ? void 0 : _74.video_id);
        ((_76 = (_75 = __VLS_ctx.modelValue) === null || _75 === void 0 ? void 0 : _75.request) === null || _76 === void 0 ? void 0 : _76.action);
        if (!((_77 = __VLS_ctx.modelValue) === null || _77 === void 0 ? void 0 : _77.response)) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (__VLS_ctx.$t('midjourney.status.pending'));
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        ((_79 = (_78 = __VLS_ctx.modelValue) === null || _78 === void 0 ? void 0 : _78.request) === null || _79 === void 0 ? void 0 : _79.mode);
    }
    if (((_81 = (_80 = __VLS_ctx.modelValue) === null || _80 === void 0 ? void 0 : _80.response) === null || _81 === void 0 ? void 0 : _81.success) === false) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ content: true, full: __VLS_ctx.full, failed: true }) }));
        var __VLS_92 = {}.ElAlert;
        /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
        // @ts-ignore
        var __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92(__assign({ closable: (false) }, { class: "failure" })));
        var __VLS_94 = __VLS_93.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "failure" })], __VLS_functionalComponentArgsRest(__VLS_93), false));
        __VLS_95.slots.default;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-2" }));
        var __VLS_96 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
        var __VLS_98 = __VLS_97.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_97), false));
        (__VLS_ctx.$t('midjourney.field.taskId'));
        ((_82 = __VLS_ctx.modelValue) === null || _82 === void 0 ? void 0 : _82.id);
        var __VLS_100 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({
            content: ((_83 = __VLS_ctx.modelValue) === null || _83 === void 0 ? void 0 : _83.id),
        }));
        var __VLS_102 = __VLS_101.apply(void 0, __spreadArray([{
                content: ((_84 = __VLS_ctx.modelValue) === null || _84 === void 0 ? void 0 : _84.id),
            }], __VLS_functionalComponentArgsRest(__VLS_101), false));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-2" }));
        var __VLS_104 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104(__assign({ icon: "fa-solid fa-circle-info" }, { class: "mr-1" })));
        var __VLS_106 = __VLS_105.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-circle-info" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_105), false));
        (__VLS_ctx.$t('midjourney.field.failureReason'));
        ((_87 = (_86 = (_85 = __VLS_ctx.modelValue) === null || _85 === void 0 ? void 0 : _85.response) === null || _86 === void 0 ? void 0 : _86.error) === null || _87 === void 0 ? void 0 : _87.message);
        var __VLS_108 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({
            content: ((_90 = (_89 = (_88 = __VLS_ctx.modelValue) === null || _88 === void 0 ? void 0 : _88.response) === null || _89 === void 0 ? void 0 : _89.error) === null || _90 === void 0 ? void 0 : _90.message),
        }));
        var __VLS_110 = __VLS_109.apply(void 0, __spreadArray([{
                content: ((_93 = (_92 = (_91 = __VLS_ctx.modelValue) === null || _91 === void 0 ? void 0 : _91.response) === null || _92 === void 0 ? void 0 : _92.error) === null || _93 === void 0 ? void 0 : _93.message),
            }], __VLS_functionalComponentArgsRest(__VLS_109), false));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-0" }));
        var __VLS_112 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112(__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })));
        var __VLS_114 = __VLS_113.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_113), false));
        (__VLS_ctx.$t('midjourney.field.traceId'));
        ((_95 = (_94 = __VLS_ctx.modelValue) === null || _94 === void 0 ? void 0 : _94.response) === null || _95 === void 0 ? void 0 : _95.trace_id);
        var __VLS_116 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({
            content: ((_97 = (_96 = __VLS_ctx.modelValue) === null || _96 === void 0 ? void 0 : _96.response) === null || _97 === void 0 ? void 0 : _97.trace_id),
        }));
        var __VLS_118 = __VLS_117.apply(void 0, __spreadArray([{
                content: ((_99 = (_98 = __VLS_ctx.modelValue) === null || _98 === void 0 ? void 0 : _98.response) === null || _99 === void 0 ? void 0 : _99.trace_id),
            }], __VLS_functionalComponentArgsRest(__VLS_117), false));
        var __VLS_95;
    }
    if (((_101 = (_100 = __VLS_ctx.modelValue) === null || _100 === void 0 ? void 0 : _100.response) === null || _101 === void 0 ? void 0 : _101.success) === true) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ content: true, full: __VLS_ctx.full }) }));
        if ((_102 = __VLS_ctx.modelValue) === null || _102 === void 0 ? void 0 : _102.response.video_urls) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "mb-4" }));
            var __VLS_120 = {}.VideoPlayer;
            /** @type {[typeof __VLS_components.VideoPlayer, typeof __VLS_components.videoPlayer, ]} */ ;
            // @ts-ignore
            var __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({
                src: ((_103 = __VLS_ctx.modelValue) === null || _103 === void 0 ? void 0 : _103.response.video_urls[0]),
            }));
            var __VLS_122 = __VLS_121.apply(void 0, __spreadArray([{
                    src: ((_104 = __VLS_ctx.modelValue) === null || _104 === void 0 ? void 0 : _104.response.video_urls[0]),
                }], __VLS_functionalComponentArgsRest(__VLS_121), false));
        }
        if (((_105 = __VLS_ctx.modelValue) === null || _105 === void 0 ? void 0 : _105.response) && ((_107 = (_106 = __VLS_ctx.modelValue) === null || _106 === void 0 ? void 0 : _106.response) === null || _107 === void 0 ? void 0 : _107.video_urls)) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ operations: true, 'mt-2': true, 'mb-4': true }) }));
            var __VLS_124 = {}.ElTooltip;
            /** @type {[typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ]} */ ;
            // @ts-ignore
            var __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124(__assign({ class: "box-item" }, { effect: "dark", content: (__VLS_ctx.$t('luma.message.extendVideo')), placement: "top-start" })));
            var __VLS_126 = __VLS_125.apply(void 0, __spreadArray([__assign({ class: "box-item" }, { effect: "dark", content: (__VLS_ctx.$t('luma.message.extendVideo')), placement: "top-start" })], __VLS_functionalComponentArgsRest(__VLS_125), false));
            __VLS_127.slots.default;
            var __VLS_128 = {}.ElButton;
            /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
            // @ts-ignore
            var __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128(__assign(__assign({ 'onClick': {} }, { type: "info", size: "small" }), { class: "btn-action" })));
            var __VLS_130 = __VLS_129.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { type: "info", size: "small" }), { class: "btn-action" })], __VLS_functionalComponentArgsRest(__VLS_129), false));
            var __VLS_132 = void 0;
            var __VLS_133 = void 0;
            var __VLS_134 = void 0;
            var __VLS_135 = {
                onClick: function () {
                    var _a, _b, _c, _d, _e, _f, _g;
                    var _h = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _h[_i] = arguments[_i];
                    }
                    var $event = _h[0];
                    if (!(((_a = __VLS_ctx.modelValue) === null || _a === void 0 ? void 0 : _a.type) === 'videos'))
                        return;
                    if (!(((_c = (_b = __VLS_ctx.modelValue) === null || _b === void 0 ? void 0 : _b.response) === null || _c === void 0 ? void 0 : _c.success) === true))
                        return;
                    if (!(((_d = __VLS_ctx.modelValue) === null || _d === void 0 ? void 0 : _d.response) && ((_f = (_e = __VLS_ctx.modelValue) === null || _e === void 0 ? void 0 : _e.response) === null || _f === void 0 ? void 0 : _f.video_urls)))
                        return;
                    __VLS_ctx.onExtend($event, (_g = __VLS_ctx.modelValue) === null || _g === void 0 ? void 0 : _g.response);
                }
            };
            __VLS_131.slots.default;
            (__VLS_ctx.$t('midjourney.button.extend'));
            var __VLS_131;
            var __VLS_127;
            var __VLS_136 = {}.ElTooltip;
            /** @type {[typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ]} */ ;
            // @ts-ignore
            var __VLS_137 = __VLS_asFunctionalComponent(__VLS_136, new __VLS_136(__assign({ class: "box-item" }, { effect: "dark", content: (__VLS_ctx.$t('luma.message.downloadVideo')), placement: "top-start" })));
            var __VLS_138 = __VLS_137.apply(void 0, __spreadArray([__assign({ class: "box-item" }, { effect: "dark", content: (__VLS_ctx.$t('luma.message.downloadVideo')), placement: "top-start" })], __VLS_functionalComponentArgsRest(__VLS_137), false));
            __VLS_139.slots.default;
            var __VLS_140 = {}.ElButton;
            /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
            // @ts-ignore
            var __VLS_141 = __VLS_asFunctionalComponent(__VLS_140, new __VLS_140(__assign(__assign({ 'onClick': {} }, { type: "info", size: "small" }), { class: "btn-action" })));
            var __VLS_142 = __VLS_141.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { type: "info", size: "small" }), { class: "btn-action" })], __VLS_functionalComponentArgsRest(__VLS_141), false));
            var __VLS_144 = void 0;
            var __VLS_145 = void 0;
            var __VLS_146 = void 0;
            var __VLS_147 = {
                onClick: function () {
                    var _a, _b, _c, _d, _e, _f;
                    var _g = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _g[_i] = arguments[_i];
                    }
                    var $event = _g[0];
                    if (!(((_a = __VLS_ctx.modelValue) === null || _a === void 0 ? void 0 : _a.type) === 'videos'))
                        return;
                    if (!(((_c = (_b = __VLS_ctx.modelValue) === null || _b === void 0 ? void 0 : _b.response) === null || _c === void 0 ? void 0 : _c.success) === true))
                        return;
                    if (!(((_d = __VLS_ctx.modelValue) === null || _d === void 0 ? void 0 : _d.response) && ((_f = (_e = __VLS_ctx.modelValue) === null || _e === void 0 ? void 0 : _e.response) === null || _f === void 0 ? void 0 : _f.video_urls)))
                        return;
                    __VLS_ctx.onDownload(__VLS_ctx.modelValue.response.video_urls[0]);
                }
            };
            __VLS_143.slots.default;
            (__VLS_ctx.$t('midjourney.button.download'));
            var __VLS_143;
            var __VLS_139;
        }
        var __VLS_148 = {}.ElAlert;
        /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
        // @ts-ignore
        var __VLS_149 = __VLS_asFunctionalComponent(__VLS_148, new __VLS_148(__assign({ closable: (false) }, { class: "mt-2 success" })));
        var __VLS_150 = __VLS_149.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "mt-2 success" })], __VLS_functionalComponentArgsRest(__VLS_149), false));
        __VLS_151.slots.default;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-2" }));
        var __VLS_152 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
        var __VLS_154 = __VLS_153.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_153), false));
        (__VLS_ctx.$t('midjourney.field.taskId'));
        ((_108 = __VLS_ctx.modelValue) === null || _108 === void 0 ? void 0 : _108.id);
        var __VLS_156 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_157 = __VLS_asFunctionalComponent(__VLS_156, new __VLS_156({
            content: ((_109 = __VLS_ctx.modelValue) === null || _109 === void 0 ? void 0 : _109.id),
        }));
        var __VLS_158 = __VLS_157.apply(void 0, __spreadArray([{
                content: ((_110 = __VLS_ctx.modelValue) === null || _110 === void 0 ? void 0 : _110.id),
            }], __VLS_functionalComponentArgsRest(__VLS_157), false));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-2" }));
        var __VLS_160 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_161 = __VLS_asFunctionalComponent(__VLS_160, new __VLS_160(__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })));
        var __VLS_162 = __VLS_161.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_161), false));
        (__VLS_ctx.$t('midjourney.field.traceId'));
        ((_111 = __VLS_ctx.modelValue) === null || _111 === void 0 ? void 0 : _111.trace_id);
        var __VLS_164 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_165 = __VLS_asFunctionalComponent(__VLS_164, new __VLS_164({
            content: ((_112 = __VLS_ctx.modelValue) === null || _112 === void 0 ? void 0 : _112.trace_id),
        }));
        var __VLS_166 = __VLS_165.apply(void 0, __spreadArray([{
                content: ((_113 = __VLS_ctx.modelValue) === null || _113 === void 0 ? void 0 : _113.trace_id),
            }], __VLS_functionalComponentArgsRest(__VLS_165), false));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-0" }));
        var __VLS_168 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168(__assign({ icon: "fa-solid fa-image" }, { class: "mr-1" })));
        var __VLS_170 = __VLS_169.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-image" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_169), false));
        (__VLS_ctx.$t('midjourney.field.videoId'));
        ((_115 = (_114 = __VLS_ctx.modelValue) === null || _114 === void 0 ? void 0 : _114.response) === null || _115 === void 0 ? void 0 : _115.video_id);
        var __VLS_172 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_173 = __VLS_asFunctionalComponent(__VLS_172, new __VLS_172({
            content: ((_117 = (_116 = __VLS_ctx.modelValue) === null || _116 === void 0 ? void 0 : _116.response) === null || _117 === void 0 ? void 0 : _117.video_id),
        }));
        var __VLS_174 = __VLS_173.apply(void 0, __spreadArray([{
                content: ((_119 = (_118 = __VLS_ctx.modelValue) === null || _118 === void 0 ? void 0 : _118.response) === null || _119 === void 0 ? void 0 : _119.video_id),
            }], __VLS_functionalComponentArgsRest(__VLS_173), false));
        var __VLS_151;
    }
    if (!((_120 = __VLS_ctx.modelValue) === null || _120 === void 0 ? void 0 : _120.response)) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        var __VLS_176 = {}.ElAlert;
        /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
        // @ts-ignore
        var __VLS_177 = __VLS_asFunctionalComponent(__VLS_176, new __VLS_176(__assign({ closable: (false) }, { class: "info" })));
        var __VLS_178 = __VLS_177.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "info" })], __VLS_functionalComponentArgsRest(__VLS_177), false));
        __VLS_179.slots.default;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-0" }));
        var __VLS_180 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_181 = __VLS_asFunctionalComponent(__VLS_180, new __VLS_180(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
        var __VLS_182 = __VLS_181.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_181), false));
        (__VLS_ctx.$t('midjourney.field.taskId'));
        ((_121 = __VLS_ctx.modelValue) === null || _121 === void 0 ? void 0 : _121.id);
        var __VLS_184 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_185 = __VLS_asFunctionalComponent(__VLS_184, new __VLS_184({
            content: ((_122 = __VLS_ctx.modelValue) === null || _122 === void 0 ? void 0 : _122.id),
        }));
        var __VLS_186 = __VLS_185.apply(void 0, __spreadArray([{
                content: ((_123 = __VLS_ctx.modelValue) === null || _123 === void 0 ? void 0 : _123.id),
            }], __VLS_functionalComponentArgsRest(__VLS_185), false));
        var __VLS_179;
    }
}
if (((_124 = __VLS_ctx.modelValue) === null || _124 === void 0 ? void 0 : _124.type) === 'describe') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "item" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "left" }));
    var __VLS_188 = {}.ElImage;
    /** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
    // @ts-ignore
    var __VLS_189 = __VLS_asFunctionalComponent(__VLS_188, new __VLS_188(__assign({ src: "https://cdn.acedata.cloud/wto43b.png" }, { class: "avatar" })));
    var __VLS_190 = __VLS_189.apply(void 0, __spreadArray([__assign({ src: "https://cdn.acedata.cloud/wto43b.png" }, { class: "avatar" })], __VLS_functionalComponentArgsRest(__VLS_189), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "preview" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "bot" }));
    (__VLS_ctx.$t('midjourney.name.midjourneyBot'));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "datetime" }));
    (__VLS_ctx.$dayjs.format('' + new Date(parseFloat((((_125 = __VLS_ctx.modelValue) === null || _125 === void 0 ? void 0 : _125.created_at) || '').toString()) * 1000)));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "info" }));
    if ((_127 = (_126 = __VLS_ctx.modelValue) === null || _126 === void 0 ? void 0 : _126.request) === null || _127 === void 0 ? void 0 : _127.image_url) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "prompt" }));
        ((_129 = (_128 = __VLS_ctx.modelValue) === null || _128 === void 0 ? void 0 : _128.request) === null || _129 === void 0 ? void 0 : _129.image_url);
        if (!((_131 = (_130 = __VLS_ctx.modelValue) === null || _130 === void 0 ? void 0 : _130.response) === null || _131 === void 0 ? void 0 : _131.descriptions)) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (__VLS_ctx.$t('midjourney.status.describePending'));
        }
        if ((_133 = (_132 = __VLS_ctx.modelValue) === null || _132 === void 0 ? void 0 : _132.response) === null || _133 === void 0 ? void 0 : _133.descriptions) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (__VLS_ctx.$t('midjourney.status.describeComplete'));
        }
    }
    if (((_134 = __VLS_ctx.modelValue) === null || _134 === void 0 ? void 0 : _134.response) && !((_136 = (_135 = __VLS_ctx.modelValue) === null || _135 === void 0 ? void 0 : _135.response) === null || _136 === void 0 ? void 0 : _136.descriptions)) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ content: true, full: __VLS_ctx.full, failed: true }) }));
        var __VLS_192 = {}.ElAlert;
        /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
        // @ts-ignore
        var __VLS_193 = __VLS_asFunctionalComponent(__VLS_192, new __VLS_192(__assign({ closable: (false) }, { class: "failure" })));
        var __VLS_194 = __VLS_193.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "failure" })], __VLS_functionalComponentArgsRest(__VLS_193), false));
        __VLS_195.slots.default;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-2" }));
        var __VLS_196 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_197 = __VLS_asFunctionalComponent(__VLS_196, new __VLS_196(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
        var __VLS_198 = __VLS_197.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_197), false));
        (__VLS_ctx.$t('midjourney.field.taskId'));
        ((_137 = __VLS_ctx.modelValue) === null || _137 === void 0 ? void 0 : _137.id);
        var __VLS_200 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_201 = __VLS_asFunctionalComponent(__VLS_200, new __VLS_200({
            content: ((_138 = __VLS_ctx.modelValue) === null || _138 === void 0 ? void 0 : _138.id),
        }));
        var __VLS_202 = __VLS_201.apply(void 0, __spreadArray([{
                content: ((_139 = __VLS_ctx.modelValue) === null || _139 === void 0 ? void 0 : _139.id),
            }], __VLS_functionalComponentArgsRest(__VLS_201), false));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-2" }));
        var __VLS_204 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_205 = __VLS_asFunctionalComponent(__VLS_204, new __VLS_204(__assign({ icon: "fa-solid fa-circle-info" }, { class: "mr-1" })));
        var __VLS_206 = __VLS_205.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-circle-info" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_205), false));
        (__VLS_ctx.$t('midjourney.field.failureReason'));
        ((_142 = (_141 = (_140 = __VLS_ctx.modelValue) === null || _140 === void 0 ? void 0 : _140.response) === null || _141 === void 0 ? void 0 : _141.error) === null || _142 === void 0 ? void 0 : _142.message);
        var __VLS_208 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_209 = __VLS_asFunctionalComponent(__VLS_208, new __VLS_208({
            content: ((_145 = (_144 = (_143 = __VLS_ctx.modelValue) === null || _143 === void 0 ? void 0 : _143.response) === null || _144 === void 0 ? void 0 : _144.error) === null || _145 === void 0 ? void 0 : _145.message),
        }));
        var __VLS_210 = __VLS_209.apply(void 0, __spreadArray([{
                content: ((_148 = (_147 = (_146 = __VLS_ctx.modelValue) === null || _146 === void 0 ? void 0 : _146.response) === null || _147 === void 0 ? void 0 : _147.error) === null || _148 === void 0 ? void 0 : _148.message),
            }], __VLS_functionalComponentArgsRest(__VLS_209), false));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-0" }));
        var __VLS_212 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_213 = __VLS_asFunctionalComponent(__VLS_212, new __VLS_212(__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })));
        var __VLS_214 = __VLS_213.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_213), false));
        (__VLS_ctx.$t('midjourney.field.traceId'));
        ((_149 = __VLS_ctx.modelValue) === null || _149 === void 0 ? void 0 : _149.trace_id);
        var __VLS_216 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_217 = __VLS_asFunctionalComponent(__VLS_216, new __VLS_216({
            content: ((_150 = __VLS_ctx.modelValue) === null || _150 === void 0 ? void 0 : _150.trace_id),
        }));
        var __VLS_218 = __VLS_217.apply(void 0, __spreadArray([{
                content: ((_151 = __VLS_ctx.modelValue) === null || _151 === void 0 ? void 0 : _151.trace_id),
            }], __VLS_functionalComponentArgsRest(__VLS_217), false));
        var __VLS_195;
    }
    if ((_153 = (_152 = __VLS_ctx.modelValue) === null || _152 === void 0 ? void 0 : _152.response) === null || _153 === void 0 ? void 0 : _153.descriptions) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ content: true, full: __VLS_ctx.full }) }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "mb-2" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "mb-2" }));
        for (var _176 = 0, _177 = __VLS_getVForSourceType((__VLS_ctx.modelValue.response.descriptions)); _176 < _177.length; _176++) {
            var _178 = _177[_176], description = _178[0], index = _178[1];
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: (index) }, { class: "flex items-start" }));
            if (description !== '') {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
                var __VLS_220 = {}.ElTag;
                /** @type {[typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ]} */ ;
                // @ts-ignore
                var __VLS_221 = __VLS_asFunctionalComponent(__VLS_220, new __VLS_220(__assign({ effect: "dark", size: "small", type: "primary", round: true }, { class: "mr-1" })));
                var __VLS_222 = __VLS_221.apply(void 0, __spreadArray([__assign({ effect: "dark", size: "small", type: "primary", round: true }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_221), false));
                __VLS_223.slots.default;
                (index + 1);
                var __VLS_223;
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "text-sm text-[var(--el-text-color-primary)]" }));
                (description);
                var __VLS_224 = {}.CopyToClipboard;
                /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
                // @ts-ignore
                var __VLS_225 = __VLS_asFunctionalComponent(__VLS_224, new __VLS_224({
                    content: (description),
                }));
                var __VLS_226 = __VLS_225.apply(void 0, __spreadArray([{
                        content: (description),
                    }], __VLS_functionalComponentArgsRest(__VLS_225), false));
            }
        }
        if ((_155 = (_154 = __VLS_ctx.modelValue) === null || _154 === void 0 ? void 0 : _154.request) === null || _155 === void 0 ? void 0 : _155.image_url) {
            var __VLS_228 = {}.ImageWrapper;
            /** @type {[typeof __VLS_components.ImageWrapper, typeof __VLS_components.imageWrapper, ]} */ ;
            // @ts-ignore
            var __VLS_229 = __VLS_asFunctionalComponent(__VLS_228, new __VLS_228(__assign({ src: ((_157 = (_156 = __VLS_ctx.modelValue) === null || _156 === void 0 ? void 0 : _156.request) === null || _157 === void 0 ? void 0 : _157.image_url), rawSrc: ((_159 = (_158 = __VLS_ctx.modelValue) === null || _158 === void 0 ? void 0 : _158.request) === null || _159 === void 0 ? void 0 : _159.image_url) }, { class: "image w-full rounded-lg" })));
            var __VLS_230 = __VLS_229.apply(void 0, __spreadArray([__assign({ src: ((_161 = (_160 = __VLS_ctx.modelValue) === null || _160 === void 0 ? void 0 : _160.request) === null || _161 === void 0 ? void 0 : _161.image_url), rawSrc: ((_163 = (_162 = __VLS_ctx.modelValue) === null || _162 === void 0 ? void 0 : _162.request) === null || _163 === void 0 ? void 0 : _163.image_url) }, { class: "image w-full rounded-lg" })], __VLS_functionalComponentArgsRest(__VLS_229), false));
        }
        var __VLS_232 = {}.ElAlert;
        /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
        // @ts-ignore
        var __VLS_233 = __VLS_asFunctionalComponent(__VLS_232, new __VLS_232(__assign({ closable: (false) }, { class: "success" })));
        var __VLS_234 = __VLS_233.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "success" })], __VLS_functionalComponentArgsRest(__VLS_233), false));
        __VLS_235.slots.default;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-2" }));
        var __VLS_236 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_237 = __VLS_asFunctionalComponent(__VLS_236, new __VLS_236(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
        var __VLS_238 = __VLS_237.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_237), false));
        (__VLS_ctx.$t('midjourney.field.taskId'));
        ((_164 = __VLS_ctx.modelValue) === null || _164 === void 0 ? void 0 : _164.id);
        var __VLS_240 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_241 = __VLS_asFunctionalComponent(__VLS_240, new __VLS_240({
            content: ((_165 = __VLS_ctx.modelValue) === null || _165 === void 0 ? void 0 : _165.id),
        }));
        var __VLS_242 = __VLS_241.apply(void 0, __spreadArray([{
                content: ((_166 = __VLS_ctx.modelValue) === null || _166 === void 0 ? void 0 : _166.id),
            }], __VLS_functionalComponentArgsRest(__VLS_241), false));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-2" }));
        var __VLS_244 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_245 = __VLS_asFunctionalComponent(__VLS_244, new __VLS_244(__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })));
        var __VLS_246 = __VLS_245.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_245), false));
        (__VLS_ctx.$t('midjourney.field.traceId'));
        ((_167 = __VLS_ctx.modelValue) === null || _167 === void 0 ? void 0 : _167.trace_id);
        var __VLS_248 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_249 = __VLS_asFunctionalComponent(__VLS_248, new __VLS_248({
            content: ((_168 = __VLS_ctx.modelValue) === null || _168 === void 0 ? void 0 : _168.trace_id),
        }));
        var __VLS_250 = __VLS_249.apply(void 0, __spreadArray([{
                content: ((_169 = __VLS_ctx.modelValue) === null || _169 === void 0 ? void 0 : _169.trace_id),
            }], __VLS_functionalComponentArgsRest(__VLS_249), false));
        var __VLS_235;
    }
    if (!((_170 = __VLS_ctx.modelValue) === null || _170 === void 0 ? void 0 : _170.response)) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        var __VLS_252 = {}.ElAlert;
        /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
        // @ts-ignore
        var __VLS_253 = __VLS_asFunctionalComponent(__VLS_252, new __VLS_252(__assign({ closable: (false) }, { class: "info" })));
        var __VLS_254 = __VLS_253.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "info" })], __VLS_functionalComponentArgsRest(__VLS_253), false));
        __VLS_255.slots.default;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-0" }));
        var __VLS_256 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_257 = __VLS_asFunctionalComponent(__VLS_256, new __VLS_256(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
        var __VLS_258 = __VLS_257.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_257), false));
        (__VLS_ctx.$t('midjourney.field.taskId'));
        ((_171 = __VLS_ctx.modelValue) === null || _171 === void 0 ? void 0 : _171.id);
        var __VLS_260 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_261 = __VLS_asFunctionalComponent(__VLS_260, new __VLS_260({
            content: ((_172 = __VLS_ctx.modelValue) === null || _172 === void 0 ? void 0 : _172.id),
        }));
        var __VLS_262 = __VLS_261.apply(void 0, __spreadArray([{
                content: ((_173 = __VLS_ctx.modelValue) === null || _173 === void 0 ? void 0 : _173.id),
            }], __VLS_functionalComponentArgsRest(__VLS_261), false));
        var __VLS_255;
    }
}
/** @type {__VLS_StyleScopedClasses['item']} */ ;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['preview']} */ ;
/** @type {__VLS_StyleScopedClasses['bot']} */ ;
/** @type {__VLS_StyleScopedClasses['datetime']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['prompt']} */ ;
/** @type {__VLS_StyleScopedClasses['prompt']} */ ;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['full']} */ ;
/** @type {__VLS_StyleScopedClasses['failed']} */ ;
/** @type {__VLS_StyleScopedClasses['failure']} */ ;
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
/** @type {__VLS_StyleScopedClasses['full']} */ ;
/** @type {__VLS_StyleScopedClasses['operations']} */ ;
/** @type {__VLS_StyleScopedClasses['full']} */ ;
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
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[var(--el-text-color-regular)]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[var(--el-text-color-regular)]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['preview']} */ ;
/** @type {__VLS_StyleScopedClasses['bot']} */ ;
/** @type {__VLS_StyleScopedClasses['datetime']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['prompt']} */ ;
/** @type {__VLS_StyleScopedClasses['prompt']} */ ;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['full']} */ ;
/** @type {__VLS_StyleScopedClasses['failed']} */ ;
/** @type {__VLS_StyleScopedClasses['failure']} */ ;
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
/** @type {__VLS_StyleScopedClasses['full']} */ ;
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
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[var(--el-text-color-regular)]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['preview']} */ ;
/** @type {__VLS_StyleScopedClasses['bot']} */ ;
/** @type {__VLS_StyleScopedClasses['datetime']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['prompt']} */ ;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['full']} */ ;
/** @type {__VLS_StyleScopedClasses['failed']} */ ;
/** @type {__VLS_StyleScopedClasses['failure']} */ ;
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
/** @type {__VLS_StyleScopedClasses['full']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[var(--el-text-color-primary)]']} */ ;
/** @type {__VLS_StyleScopedClasses['image']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['success']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[var(--el-text-color-regular)]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[var(--el-text-color-regular)]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[var(--el-text-color-regular)]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
var __VLS_dollars;
var __VLS_self;
