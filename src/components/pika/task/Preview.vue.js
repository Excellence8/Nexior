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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var CopyToClipboard_vue_1 = require("@/components/common/CopyToClipboard.vue");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var VideoPlayer_vue_1 = require("../VideoPlayer.vue");
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
            return (_a = this.$store.state.pika) === null || _a === void 0 ? void 0 : _a.application;
        },
        config: function () {
            var _a;
            return (_a = this.$store.state.pika) === null || _a === void 0 ? void 0 : _a.config;
        },
        videos: function () {
            var _a, _b, _c, _d, _e, _f, _g;
            var result = [];
            // @ts-ignore
            var action = (_b = (_a = this.modelValue) === null || _a === void 0 ? void 0 : _a.request) === null || _b === void 0 ? void 0 : _b.action;
            if (Array.isArray((_d = (_c = this.modelValue) === null || _c === void 0 ? void 0 : _c.response) === null || _d === void 0 ? void 0 : _d.data)) {
                (_g = (_f = (_e = this.modelValue) === null || _e === void 0 ? void 0 : _e.response) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.forEach(function (item) {
                    var audio = item;
                    // Add the action field to the audio object
                    if (action) {
                        audio.action = action;
                    }
                    result.push(audio);
                });
            }
            return result;
        }
    },
    methods: {
        // onExtend(event: MouseEvent, response: IPikaGenerateResponse) {
        //   event.stopPropagation();
        //   // extend url here
        //   console.debug('set config', response);
        //   this.$store.commit('pika/setConfig', {
        //     ...this.$store.state.pika?.config,
        //     video_id: response.video_id,
        //     prompt: response.prompt,
        //     action: 'extend',
        //     thumbnail_url: response.thumbnail_url,
        //     video_url: response.video_url
        //   });
        // },
        onDownload: function (video_url) {
            console.log('on download');
            // download url here
            window.open(video_url, '_blank');
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
/** @type {__VLS_StyleScopedClasses['image']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-raw']} */ ;
/** @type {__VLS_StyleScopedClasses['play-icon']} */ ;
var _loop_1 = function (video, videoIndex) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: (videoIndex) }, { class: "preview" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "left" }));
    var __VLS_0 = {}.ElImage;
    /** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ src: "https://cdn.acedata.cloud/i80tgn.png" }, { class: "avatar" })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ src: "https://cdn.acedata.cloud/i80tgn.png" }, { class: "avatar" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "main" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "bot" }));
    (__VLS_ctx.$t('pika.name.pikaBot'));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "datetime" }));
    (__VLS_ctx.$dayjs.format('' + new Date(parseFloat((((_a = __VLS_ctx.modelValue) === null || _a === void 0 ? void 0 : _a.created_at) || '').toString()) * 1000)));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "info" }));
    if ((_c = (_b = __VLS_ctx.modelValue) === null || _b === void 0 ? void 0 : _b.request) === null || _c === void 0 ? void 0 : _c.prompt) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "prompt mt-2" }));
        ((_e = (_d = __VLS_ctx.modelValue) === null || _d === void 0 ? void 0 : _d.request) === null || _e === void 0 ? void 0 : _e.prompt);
        if (!((_f = __VLS_ctx.modelValue) === null || _f === void 0 ? void 0 : _f.response)) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (__VLS_ctx.$t('pika.status.pending'));
        }
        if ((video === null || video === void 0 ? void 0 : video.state) === 'processing' || (video === null || video === void 0 ? void 0 : video.state) === 'pending') {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (__VLS_ctx.$t('pika.status.processing'));
        }
    }
    if (((_h = (_g = __VLS_ctx.modelValue) === null || _g === void 0 ? void 0 : _g.response) === null || _h === void 0 ? void 0 : _h.success) === true) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ content: true, failed: true }) }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "image-wrapper" }));
        var __VLS_4 = {}.VideoPlayer;
        /** @type {[typeof __VLS_components.VideoPlayer, ]} */ ;
        // @ts-ignore
        var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
            modelValue: (video),
        }));
        var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{
                modelValue: (video),
            }], __VLS_functionalComponentArgsRest(__VLS_5), false));
        if (video) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ operations: true, 'mt-2': true }) }));
            var __VLS_8 = {}.ElTooltip;
            /** @type {[typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ]} */ ;
            // @ts-ignore
            var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ class: "box-item" }, { effect: "dark", content: (__VLS_ctx.$t('pika.message.downloadVideo')), placement: "top-start" })));
            var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ class: "box-item" }, { effect: "dark", content: (__VLS_ctx.$t('pika.message.downloadVideo')), placement: "top-start" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
            __VLS_11.slots.default;
            if (video === null || video === void 0 ? void 0 : video.video_url) {
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
                        var _a, _b;
                        var _c = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            _c[_i] = arguments[_i];
                        }
                        var $event = _c[0];
                        if (!(((_b = (_a = __VLS_ctx.modelValue) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.success) === true))
                            return;
                        if (!(video))
                            return;
                        if (!(video === null || video === void 0 ? void 0 : video.video_url))
                            return;
                        __VLS_ctx.onDownload(video === null || video === void 0 ? void 0 : video.video_url);
                    }
                };
                __VLS_15.slots.default;
                (__VLS_ctx.$t('pika.button.download'));
            }
        }
        var __VLS_20 = {}.ElAlert;
        /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
        // @ts-ignore
        var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20(__assign({ closable: (false) }, { class: "mt-2 success" })));
        var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "mt-2 success" })], __VLS_functionalComponentArgsRest(__VLS_21), false));
        __VLS_23.slots.default;
        if ((_k = (_j = __VLS_ctx.modelValue) === null || _j === void 0 ? void 0 : _j.request) === null || _k === void 0 ? void 0 : _k.model) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
            var __VLS_24 = {}.FontAwesomeIcon;
            /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
            // @ts-ignore
            var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24(__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })));
            var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_25), false));
            (__VLS_ctx.$t('pika.name.model'));
            ((_m = (_l = __VLS_ctx.modelValue) === null || _l === void 0 ? void 0 : _l.request) === null || _m === void 0 ? void 0 : _m.model);
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
        var __VLS_28 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
        var __VLS_30 = __VLS_29.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_29), false));
        (__VLS_ctx.$t('pika.name.taskId'));
        ((_o = __VLS_ctx.modelValue) === null || _o === void 0 ? void 0 : _o.id);
        var __VLS_32 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32(__assign({ content: ((_p = __VLS_ctx.modelValue) === null || _p === void 0 ? void 0 : _p.id) }, { class: "btn-copy" })));
        var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([__assign({ content: ((_q = __VLS_ctx.modelValue) === null || _q === void 0 ? void 0 : _q.id) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_33), false));
    }
    if (((_s = (_r = __VLS_ctx.modelValue) === null || _r === void 0 ? void 0 : _r.response) === null || _s === void 0 ? void 0 : _s.success) === false) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ content: true }) }));
        var __VLS_36 = {}.ElAlert;
        /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
        // @ts-ignore
        var __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36(__assign({ closable: (false) }, { class: "failure" })));
        var __VLS_38 = __VLS_37.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "failure" })], __VLS_functionalComponentArgsRest(__VLS_37), false));
        __VLS_39.slots.default;
        {
            var __VLS_thisSlot = __VLS_39.slots.template;
            var __VLS_40 = {}.FontAwesomeIcon;
            /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
            // @ts-ignore
            var __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40(__assign({ icon: "fa-solid fa-exclamation-triangle" }, { class: "mr-1" })));
            var __VLS_42 = __VLS_41.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-exclamation-triangle" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_41), false));
            (__VLS_ctx.$t('pika.name.failure'));
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
        var __VLS_44 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
        var __VLS_46 = __VLS_45.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_45), false));
        (__VLS_ctx.$t('pika.name.taskId'));
        ((_t = __VLS_ctx.modelValue) === null || _t === void 0 ? void 0 : _t.id);
        var __VLS_48 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48(__assign({ content: ((_u = __VLS_ctx.modelValue) === null || _u === void 0 ? void 0 : _u.id) }, { class: "btn-copy" })));
        var __VLS_50 = __VLS_49.apply(void 0, __spreadArray([__assign({ content: ((_v = __VLS_ctx.modelValue) === null || _v === void 0 ? void 0 : _v.id) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_49), false));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
        var __VLS_52 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52(__assign({ icon: "fa-solid fa-circle-info" }, { class: "mr-1" })));
        var __VLS_54 = __VLS_53.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-circle-info" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_53), false));
        (__VLS_ctx.$t('pika.name.failureReason'));
        ((_y = (_x = (_w = __VLS_ctx.modelValue) === null || _w === void 0 ? void 0 : _w.response) === null || _x === void 0 ? void 0 : _x.error) === null || _y === void 0 ? void 0 : _y.message);
        var __VLS_56 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56(__assign({ content: ((_1 = (_0 = (_z = __VLS_ctx.modelValue) === null || _z === void 0 ? void 0 : _z.response) === null || _0 === void 0 ? void 0 : _0.error) === null || _1 === void 0 ? void 0 : _1.message) }, { class: "btn-copy" })));
        var __VLS_58 = __VLS_57.apply(void 0, __spreadArray([__assign({ content: ((_4 = (_3 = (_2 = __VLS_ctx.modelValue) === null || _2 === void 0 ? void 0 : _2.response) === null || _3 === void 0 ? void 0 : _3.error) === null || _4 === void 0 ? void 0 : _4.message) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_57), false));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
        var __VLS_60 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60(__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })));
        var __VLS_62 = __VLS_61.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_61), false));
        (__VLS_ctx.$t('pika.name.traceId'));
        ((_6 = (_5 = __VLS_ctx.modelValue) === null || _5 === void 0 ? void 0 : _5.response) === null || _6 === void 0 ? void 0 : _6.trace_id);
        var __VLS_64 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64(__assign({ content: ((_8 = (_7 = __VLS_ctx.modelValue) === null || _7 === void 0 ? void 0 : _7.response) === null || _8 === void 0 ? void 0 : _8.trace_id) }, { class: "btn-copy" })));
        var __VLS_66 = __VLS_65.apply(void 0, __spreadArray([__assign({ content: ((_10 = (_9 = __VLS_ctx.modelValue) === null || _9 === void 0 ? void 0 : _9.response) === null || _10 === void 0 ? void 0 : _10.trace_id) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_65), false));
    }
    if (!((_11 = __VLS_ctx.modelValue) === null || _11 === void 0 ? void 0 : _11.response) || (video === null || video === void 0 ? void 0 : video.state) === 'processing' || (video === null || video === void 0 ? void 0 : video.state) === 'pending') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ content: true }) }));
        var __VLS_68 = {}.ElAlert;
        /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
        // @ts-ignore
        var __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68(__assign({ closable: (false) }, { class: "info" })));
        var __VLS_70 = __VLS_69.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "info" })], __VLS_functionalComponentArgsRest(__VLS_69), false));
        __VLS_71.slots.default;
        {
            var __VLS_thisSlot = __VLS_71.slots.template;
            var __VLS_72 = {}.FontAwesomeIcon;
            /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
            // @ts-ignore
            var __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72(__assign({ icon: "fa-solid fa-exclamation-triangle" }, { class: "mr-1" })));
            var __VLS_74 = __VLS_73.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-exclamation-triangle" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_73), false));
            (__VLS_ctx.$t('pika.name.failure'));
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
        var __VLS_76 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
        var __VLS_78 = __VLS_77.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_77), false));
        (__VLS_ctx.$t('pika.name.taskId'));
        ((_12 = __VLS_ctx.modelValue) === null || _12 === void 0 ? void 0 : _12.id);
        var __VLS_80 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80(__assign({ content: ((_13 = __VLS_ctx.modelValue) === null || _13 === void 0 ? void 0 : _13.id) }, { class: "btn-copy" })));
        var __VLS_82 = __VLS_81.apply(void 0, __spreadArray([__assign({ content: ((_14 = __VLS_ctx.modelValue) === null || _14 === void 0 ? void 0 : _14.id) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_81), false));
    }
};
var __VLS_15, __VLS_11, __VLS_23, __VLS_39, __VLS_71;
// CSS variable injection 
// CSS variable injection end 
for (var _i = 0, _15 = __VLS_getVForSourceType((__VLS_ctx.videos)); _i < _15.length; _i++) {
    var _16 = _15[_i], video = _16[0], videoIndex = _16[1];
    _loop_1(video, videoIndex);
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
/** @type {__VLS_StyleScopedClasses['image-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['operations']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['box-item']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-action']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['success']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-copy']} */ ;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['failure']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-copy']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-copy']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-copy']} */ ;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-copy']} */ ;
var __VLS_dollars;
var __VLS_self;
