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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var CopyToClipboard_vue_1 = require("@/components/common/CopyToClipboard.vue");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var ImageGallery_vue_1 = require("../ImageGallery.vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'TaskPreview',
    components: {
        ElImage: element_plus_1.ElImage,
        CopyToClipboard: CopyToClipboard_vue_1.default,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
        ElAlert: element_plus_1.ElAlert,
        ImageGallery: ImageGallery_vue_1.default
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
            return (_a = this.$store.state.headshots) === null || _a === void 0 ? void 0 : _a.application;
        },
        config: function () {
            var _a;
            return (_a = this.$store.state.headshots) === null || _a === void 0 ? void 0 : _a.config;
        }
    },
    methods: {
        onDownload: function (event, video_url) {
            event.stopPropagation();
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
    ImageGallery: ImageGallery_vue_1.default
};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['image']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-raw']} */ ;
/** @type {__VLS_StyleScopedClasses['play-icon']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "preview" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "left" }));
var __VLS_0 = {}.ElImage;
/** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ src: "https://cdn.acedata.cloud/isxyfw.png" }, { class: "avatar" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ src: "https://cdn.acedata.cloud/isxyfw.png" }, { class: "avatar" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "main" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "bot" }));
(__VLS_ctx.$t('headshots.name.headshotsBot'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "datetime" }));
(__VLS_ctx.$dayjs.format('' + new Date(parseFloat((((_a = __VLS_ctx.modelValue) === null || _a === void 0 ? void 0 : _a.created_at) || '').toString()) * 1000)));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "info" }));
if ((_c = (_b = __VLS_ctx.modelValue) === null || _b === void 0 ? void 0 : _b.request) === null || _c === void 0 ? void 0 : _c.template) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "prompt mt-2" }));
    ((_e = (_d = __VLS_ctx.modelValue) === null || _d === void 0 ? void 0 : _d.request) === null || _e === void 0 ? void 0 : _e.template);
    if (!((_f = __VLS_ctx.modelValue) === null || _f === void 0 ? void 0 : _f.response)) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.$t('headshots.status.pending'));
    }
    if (((_h = (_g = __VLS_ctx.modelValue) === null || _g === void 0 ? void 0 : _g.response) === null || _h === void 0 ? void 0 : _h.status) === 'unknown') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.$t('headshots.status.processing'));
    }
}
if (((_k = (_j = __VLS_ctx.modelValue) === null || _j === void 0 ? void 0 : _j.response) === null || _k === void 0 ? void 0 : _k.success) === true) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ content: true, failed: true }) }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "image-wrapper" }));
    var __VLS_4 = {}.ImageGallery;
    /** @type {[typeof __VLS_components.ImageGallery, typeof __VLS_components.imageGallery, ]} */ ;
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        modelValue: (__VLS_ctx.modelValue),
    }));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{
            modelValue: (__VLS_ctx.modelValue),
        }], __VLS_functionalComponentArgsRest(__VLS_5), false));
    var __VLS_8 = {}.ElAlert;
    /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
    // @ts-ignore
    var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ closable: (false) }, { class: "mt-2 success" })));
    var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "mt-2 success" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
    __VLS_11.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
    var __VLS_12 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_13), false));
    (__VLS_ctx.$t('headshots.name.taskId'));
    ((_l = __VLS_ctx.modelValue) === null || _l === void 0 ? void 0 : _l.id);
    var __VLS_16 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign({ content: ((_m = __VLS_ctx.modelValue) === null || _m === void 0 ? void 0 : _m.id) }, { class: "btn-copy" })));
    var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign({ content: ((_o = __VLS_ctx.modelValue) === null || _o === void 0 ? void 0 : _o.id) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_17), false));
    var __VLS_11;
}
if (((_q = (_p = __VLS_ctx.modelValue) === null || _p === void 0 ? void 0 : _p.response) === null || _q === void 0 ? void 0 : _q.success) === false) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ content: true }) }));
    var __VLS_20 = {}.ElAlert;
    /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
    // @ts-ignore
    var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20(__assign({ closable: (false) }, { class: "failure" })));
    var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "failure" })], __VLS_functionalComponentArgsRest(__VLS_21), false));
    __VLS_23.slots.default;
    {
        var __VLS_thisSlot = __VLS_23.slots.template;
        var __VLS_24 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24(__assign({ icon: "fa-solid fa-exclamation-triangle" }, { class: "mr-1" })));
        var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-exclamation-triangle" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_25), false));
        (__VLS_ctx.$t('headshots.name.failure'));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
    var __VLS_28 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
    var __VLS_30 = __VLS_29.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_29), false));
    (__VLS_ctx.$t('headshots.name.taskId'));
    ((_r = __VLS_ctx.modelValue) === null || _r === void 0 ? void 0 : _r.id);
    var __VLS_32 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32(__assign({ content: ((_s = __VLS_ctx.modelValue) === null || _s === void 0 ? void 0 : _s.id) }, { class: "btn-copy" })));
    var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([__assign({ content: ((_t = __VLS_ctx.modelValue) === null || _t === void 0 ? void 0 : _t.id) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_33), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
    var __VLS_36 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36(__assign({ icon: "fa-solid fa-circle-info" }, { class: "mr-1" })));
    var __VLS_38 = __VLS_37.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-circle-info" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_37), false));
    (__VLS_ctx.$t('headshots.name.failureReason'));
    ((_w = (_v = (_u = __VLS_ctx.modelValue) === null || _u === void 0 ? void 0 : _u.response) === null || _v === void 0 ? void 0 : _v.error) === null || _w === void 0 ? void 0 : _w.message);
    var __VLS_40 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40(__assign({ content: ((_z = (_y = (_x = __VLS_ctx.modelValue) === null || _x === void 0 ? void 0 : _x.response) === null || _y === void 0 ? void 0 : _y.error) === null || _z === void 0 ? void 0 : _z.message) }, { class: "btn-copy" })));
    var __VLS_42 = __VLS_41.apply(void 0, __spreadArray([__assign({ content: ((_2 = (_1 = (_0 = __VLS_ctx.modelValue) === null || _0 === void 0 ? void 0 : _0.response) === null || _1 === void 0 ? void 0 : _1.error) === null || _2 === void 0 ? void 0 : _2.message) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_41), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
    var __VLS_44 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44(__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })));
    var __VLS_46 = __VLS_45.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_45), false));
    (__VLS_ctx.$t('headshots.name.traceId'));
    ((_4 = (_3 = __VLS_ctx.modelValue) === null || _3 === void 0 ? void 0 : _3.response) === null || _4 === void 0 ? void 0 : _4.trace_id);
    var __VLS_48 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48(__assign({ content: ((_6 = (_5 = __VLS_ctx.modelValue) === null || _5 === void 0 ? void 0 : _5.response) === null || _6 === void 0 ? void 0 : _6.trace_id) }, { class: "btn-copy" })));
    var __VLS_50 = __VLS_49.apply(void 0, __spreadArray([__assign({ content: ((_8 = (_7 = __VLS_ctx.modelValue) === null || _7 === void 0 ? void 0 : _7.response) === null || _8 === void 0 ? void 0 : _8.trace_id) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_49), false));
    var __VLS_23;
}
if (!((_9 = __VLS_ctx.modelValue) === null || _9 === void 0 ? void 0 : _9.response)) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ content: true }) }));
    var __VLS_52 = {}.ElAlert;
    /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
    // @ts-ignore
    var __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52(__assign({ closable: (false) }, { class: "info" })));
    var __VLS_54 = __VLS_53.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "info" })], __VLS_functionalComponentArgsRest(__VLS_53), false));
    __VLS_55.slots.default;
    {
        var __VLS_thisSlot = __VLS_55.slots.template;
        var __VLS_56 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56(__assign({ icon: "fa-solid fa-exclamation-triangle" }, { class: "mr-1" })));
        var __VLS_58 = __VLS_57.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-exclamation-triangle" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_57), false));
        (__VLS_ctx.$t('headshots.name.failure'));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
    var __VLS_60 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
    var __VLS_62 = __VLS_61.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_61), false));
    (__VLS_ctx.$t('headshots.name.taskId'));
    ((_10 = __VLS_ctx.modelValue) === null || _10 === void 0 ? void 0 : _10.id);
    var __VLS_64 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64(__assign({ content: ((_11 = __VLS_ctx.modelValue) === null || _11 === void 0 ? void 0 : _11.id) }, { class: "btn-copy" })));
    var __VLS_66 = __VLS_65.apply(void 0, __spreadArray([__assign({ content: ((_12 = __VLS_ctx.modelValue) === null || _12 === void 0 ? void 0 : _12.id) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_65), false));
    var __VLS_55;
}
if (((_14 = (_13 = __VLS_ctx.modelValue) === null || _13 === void 0 ? void 0 : _13.response) === null || _14 === void 0 ? void 0 : _14.status) === 'unknown') {
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
        (__VLS_ctx.$t('headshots.name.failure'));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
    var __VLS_76 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
    var __VLS_78 = __VLS_77.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_77), false));
    (__VLS_ctx.$t('headshots.name.taskId'));
    ((_15 = __VLS_ctx.modelValue) === null || _15 === void 0 ? void 0 : _15.id);
    var __VLS_80 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80(__assign({ content: ((_16 = __VLS_ctx.modelValue) === null || _16 === void 0 ? void 0 : _16.id) }, { class: "btn-copy" })));
    var __VLS_82 = __VLS_81.apply(void 0, __spreadArray([__assign({ content: ((_17 = __VLS_ctx.modelValue) === null || _17 === void 0 ? void 0 : _17.id) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_81), false));
    var __VLS_71;
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
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['success']} */ ;
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
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-copy']} */ ;
var __VLS_dollars;
var __VLS_self;
