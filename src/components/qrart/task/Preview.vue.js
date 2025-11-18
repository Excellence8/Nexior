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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var CopyToClipboard_vue_1 = require("@/components/common/CopyToClipboard.vue");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var ImageWrapper_vue_1 = require("@/components/common/ImageWrapper.vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'TaskPreview',
    components: {
        ElImage: element_plus_1.ElImage,
        CopyToClipboard: CopyToClipboard_vue_1.default,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
        ElAlert: element_plus_1.ElAlert,
        ImageWrapper: ImageWrapper_vue_1.default
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
            return (_a = this.$store.state.qrart) === null || _a === void 0 ? void 0 : _a.application;
        }
    },
    methods: {
        onOpenLink: function (url) {
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
        },
        onOpenUrl: function (url) {
            window.open(url, '_blank');
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
    CopyToClipboard: CopyToClipboard_vue_1.default,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
    ElAlert: element_plus_1.ElAlert,
    ImageWrapper: ImageWrapper_vue_1.default
};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "preview w-full h-fit text-left flex flex-row mb-[15px]" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "left" }));
var __VLS_0 = {}.ElImage;
/** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ src: "https://cdn.acedata.cloud/bcml67.png" }, { class: "avatar bg-white p-[2px] w-[50px] h-[50px] m-[10px] rounded-full" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ src: "https://cdn.acedata.cloud/bcml67.png" }, { class: "avatar bg-white p-[2px] w-[50px] h-[50px] m-[10px] rounded-full" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "main flex-1 w-[calc(100%-70px)] pt-[10px] pr-[10px] pb-0 pl-[10px]" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "bot text-[16px] font-bold text-[rgb(46,204,113)]" }));
(__VLS_ctx.$t('qrart.name.qrartBot'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "datetime text-[12px] font-normal text-[var(--el-text-color-secondary)] ml-[10px]" }));
(__VLS_ctx.$dayjs.format('' + new Date(parseFloat((((_a = __VLS_ctx.modelValue) === null || _a === void 0 ? void 0 : _a.created_at) || '').toString()) * 1000)));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "info" }));
if ((_c = (_b = __VLS_ctx.modelValue) === null || _b === void 0 ? void 0 : _b.request) === null || _c === void 0 ? void 0 : _c.prompt) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "prompt mt-2 text-[14px] font-bold text-[var(--el-text-color-regular)] mb-[10px]" }));
    ((_e = (_d = __VLS_ctx.modelValue) === null || _d === void 0 ? void 0 : _d.request) === null || _e === void 0 ? void 0 : _e.prompt);
    if (!((_f = __VLS_ctx.modelValue) === null || _f === void 0 ? void 0 : _f.response)) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.$t('qrart.status.pending'));
    }
}
if (((_h = (_g = __VLS_ctx.modelValue) === null || _g === void 0 ? void 0 : _g.response) === null || _h === void 0 ? void 0 : _h.success) === true) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ content: true, failed: true }) }));
    if ((_k = (_j = __VLS_ctx.modelValue) === null || _j === void 0 ? void 0 : _j.response) === null || _k === void 0 ? void 0 : _k.image_url) {
        var __VLS_4 = {}.ImageWrapper;
        /** @type {[typeof __VLS_components.ImageWrapper, typeof __VLS_components.imageWrapper, ]} */ ;
        // @ts-ignore
        var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
            src: ((_m = (_l = __VLS_ctx.modelValue) === null || _l === void 0 ? void 0 : _l.response) === null || _m === void 0 ? void 0 : _m.image_url),
            rawSrc: ((_p = (_o = __VLS_ctx.modelValue) === null || _o === void 0 ? void 0 : _o.response) === null || _p === void 0 ? void 0 : _p.image_url),
        }));
        var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{
                src: ((_r = (_q = __VLS_ctx.modelValue) === null || _q === void 0 ? void 0 : _q.response) === null || _r === void 0 ? void 0 : _r.image_url),
                rawSrc: ((_t = (_s = __VLS_ctx.modelValue) === null || _s === void 0 ? void 0 : _s.response) === null || _t === void 0 ? void 0 : _t.image_url),
            }], __VLS_functionalComponentArgsRest(__VLS_5), false));
    }
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
    (__VLS_ctx.$t('qrart.name.taskId'));
    ((_u = __VLS_ctx.modelValue) === null || _u === void 0 ? void 0 : _u.id);
    var __VLS_16 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign({ content: ((_v = __VLS_ctx.modelValue) === null || _v === void 0 ? void 0 : _v.id) }, { class: "btn-copy" })));
    var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign({ content: ((_w = __VLS_ctx.modelValue) === null || _w === void 0 ? void 0 : _w.id) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_17), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
    var __VLS_20 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20(__assign({ icon: "fa-solid fa-diamond" }, { class: "mr-1" })));
    var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-diamond" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_21), false));
    (__VLS_ctx.$t('qrart.name.type'));
    (__VLS_ctx.$t('qrart.type.' + ((_y = (_x = __VLS_ctx.modelValue) === null || _x === void 0 ? void 0 : _x.request) === null || _y === void 0 ? void 0 : _y.type)));
    var __VLS_24 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24(__assign({ content: ((_0 = (_z = __VLS_ctx.modelValue) === null || _z === void 0 ? void 0 : _z.request) === null || _0 === void 0 ? void 0 : _0.type) }, { class: "btn-copy" })));
    var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([__assign({ content: ((_2 = (_1 = __VLS_ctx.modelValue) === null || _1 === void 0 ? void 0 : _1.request) === null || _2 === void 0 ? void 0 : _2.type) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_25), false));
    if ((_4 = (_3 = __VLS_ctx.modelValue) === null || _3 === void 0 ? void 0 : _3.request) === null || _4 === void 0 ? void 0 : _4.content) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
        var __VLS_28 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28(__assign({ icon: "fa-regular fa-message" }, { class: "mr-1" })));
        var __VLS_30 = __VLS_29.apply(void 0, __spreadArray([__assign({ icon: "fa-regular fa-message" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_29), false));
        (__VLS_ctx.$t('qrart.name.content'));
        ((_6 = (_5 = __VLS_ctx.modelValue) === null || _5 === void 0 ? void 0 : _5.request) === null || _6 === void 0 ? void 0 : _6.content);
        var __VLS_32 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32(__assign({ content: ((_8 = (_7 = __VLS_ctx.modelValue) === null || _7 === void 0 ? void 0 : _7.request) === null || _8 === void 0 ? void 0 : _8.content) }, { class: "btn-copy" })));
        var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([__assign({ content: ((_10 = (_9 = __VLS_ctx.modelValue) === null || _9 === void 0 ? void 0 : _9.request) === null || _10 === void 0 ? void 0 : _10.content) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_33), false));
    }
    if ((_12 = (_11 = __VLS_ctx.modelValue) === null || _11 === void 0 ? void 0 : _11.request) === null || _12 === void 0 ? void 0 : _12.content_image_url) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
        var __VLS_36 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36(__assign({ icon: "fa-regular fa-message" }, { class: "mr-1" })));
        var __VLS_38 = __VLS_37.apply(void 0, __spreadArray([__assign({ icon: "fa-regular fa-message" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_37), false));
        (__VLS_ctx.$t('qrart.name.contentImageUrl'));
        var __VLS_40 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40(__assign(__assign({ 'onClick': {} }, { icon: "fa-solid fa-up-right-from-square" }), { class: "mr-1 cursor-pointer" })));
        var __VLS_42 = __VLS_41.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { icon: "fa-solid fa-up-right-from-square" }), { class: "mr-1 cursor-pointer" })], __VLS_functionalComponentArgsRest(__VLS_41), false));
        var __VLS_44 = void 0;
        var __VLS_45 = void 0;
        var __VLS_46 = void 0;
        var __VLS_47 = {
            onClick: function () {
                var _a, _b, _c, _d, _e, _f;
                var _g = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _g[_i] = arguments[_i];
                }
                var $event = _g[0];
                if (!(((_b = (_a = __VLS_ctx.modelValue) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.success) === true))
                    return;
                if (!((_d = (_c = __VLS_ctx.modelValue) === null || _c === void 0 ? void 0 : _c.request) === null || _d === void 0 ? void 0 : _d.content_image_url))
                    return;
                __VLS_ctx.onOpenLink((_f = (_e = __VLS_ctx.modelValue) === null || _e === void 0 ? void 0 : _e.request) === null || _f === void 0 ? void 0 : _f.content_image_url);
            }
        };
        var __VLS_43;
    }
    if (((_14 = (_13 = __VLS_ctx.modelValue) === null || _13 === void 0 ? void 0 : _13.request) === null || _14 === void 0 ? void 0 : _14.seed) || ((_16 = (_15 = __VLS_ctx.modelValue) === null || _15 === void 0 ? void 0 : _15.response) === null || _16 === void 0 ? void 0 : _16.seed)) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
        var __VLS_48 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48(__assign({ icon: "fa-solid fa-seedling" }, { class: "mr-1" })));
        var __VLS_50 = __VLS_49.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-seedling" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_49), false));
        (__VLS_ctx.$t('qrart.name.seed'));
        (((_18 = (_17 = __VLS_ctx.modelValue) === null || _17 === void 0 ? void 0 : _17.request) === null || _18 === void 0 ? void 0 : _18.seed) || ((_20 = (_19 = __VLS_ctx.modelValue) === null || _19 === void 0 ? void 0 : _19.response) === null || _20 === void 0 ? void 0 : _20.seed));
        var __VLS_52 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52(__assign({ content: ((((_22 = (_21 = __VLS_ctx.modelValue) === null || _21 === void 0 ? void 0 : _21.request) === null || _22 === void 0 ? void 0 : _22.seed) || ((_24 = (_23 = __VLS_ctx.modelValue) === null || _23 === void 0 ? void 0 : _23.response) === null || _24 === void 0 ? void 0 : _24.seed)).toString()) }, { class: "btn-copy" })));
        var __VLS_54 = __VLS_53.apply(void 0, __spreadArray([__assign({ content: ((((_26 = (_25 = __VLS_ctx.modelValue) === null || _25 === void 0 ? void 0 : _25.request) === null || _26 === void 0 ? void 0 : _26.seed) || ((_28 = (_27 = __VLS_ctx.modelValue) === null || _27 === void 0 ? void 0 : _27.response) === null || _28 === void 0 ? void 0 : _28.seed)).toString()) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_53), false));
    }
    var __VLS_11;
}
if (((_30 = (_29 = __VLS_ctx.modelValue) === null || _29 === void 0 ? void 0 : _29.response) === null || _30 === void 0 ? void 0 : _30.success) === false) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ content: true }) }));
    var __VLS_56 = {}.ElAlert;
    /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
    // @ts-ignore
    var __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56(__assign({ closable: (false) }, { class: "failure" })));
    var __VLS_58 = __VLS_57.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "failure" })], __VLS_functionalComponentArgsRest(__VLS_57), false));
    __VLS_59.slots.default;
    {
        var __VLS_thisSlot = __VLS_59.slots.template;
        var __VLS_60 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60(__assign({ icon: "fa-solid fa-exclamation-triangle" }, { class: "mr-1" })));
        var __VLS_62 = __VLS_61.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-exclamation-triangle" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_61), false));
        (__VLS_ctx.$t('qrart.name.failure'));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
    var __VLS_64 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
    var __VLS_66 = __VLS_65.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_65), false));
    (__VLS_ctx.$t('qrart.name.taskId'));
    ((_31 = __VLS_ctx.modelValue) === null || _31 === void 0 ? void 0 : _31.id);
    var __VLS_68 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68(__assign({ content: ((_32 = __VLS_ctx.modelValue) === null || _32 === void 0 ? void 0 : _32.id) }, { class: "btn-copy" })));
    var __VLS_70 = __VLS_69.apply(void 0, __spreadArray([__assign({ content: ((_33 = __VLS_ctx.modelValue) === null || _33 === void 0 ? void 0 : _33.id) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_69), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
    var __VLS_72 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72(__assign({ icon: "fa-solid fa-circle-info" }, { class: "mr-1" })));
    var __VLS_74 = __VLS_73.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-circle-info" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_73), false));
    (__VLS_ctx.$t('qrart.name.failureReason'));
    ((_36 = (_35 = (_34 = __VLS_ctx.modelValue) === null || _34 === void 0 ? void 0 : _34.response) === null || _35 === void 0 ? void 0 : _35.error) === null || _36 === void 0 ? void 0 : _36.message);
    var __VLS_76 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76(__assign({ content: ((_39 = (_38 = (_37 = __VLS_ctx.modelValue) === null || _37 === void 0 ? void 0 : _37.response) === null || _38 === void 0 ? void 0 : _38.error) === null || _39 === void 0 ? void 0 : _39.message) }, { class: "btn-copy" })));
    var __VLS_78 = __VLS_77.apply(void 0, __spreadArray([__assign({ content: ((_42 = (_41 = (_40 = __VLS_ctx.modelValue) === null || _40 === void 0 ? void 0 : _40.response) === null || _41 === void 0 ? void 0 : _41.error) === null || _42 === void 0 ? void 0 : _42.message) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_77), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
    var __VLS_80 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80(__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })));
    var __VLS_82 = __VLS_81.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_81), false));
    (__VLS_ctx.$t('qrart.name.traceId'));
    ((_44 = (_43 = __VLS_ctx.modelValue) === null || _43 === void 0 ? void 0 : _43.response) === null || _44 === void 0 ? void 0 : _44.trace_id);
    var __VLS_84 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84(__assign({ content: ((_46 = (_45 = __VLS_ctx.modelValue) === null || _45 === void 0 ? void 0 : _45.response) === null || _46 === void 0 ? void 0 : _46.trace_id) }, { class: "btn-copy" })));
    var __VLS_86 = __VLS_85.apply(void 0, __spreadArray([__assign({ content: ((_48 = (_47 = __VLS_ctx.modelValue) === null || _47 === void 0 ? void 0 : _47.response) === null || _48 === void 0 ? void 0 : _48.trace_id) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_85), false));
    var __VLS_59;
}
if (!((_49 = __VLS_ctx.modelValue) === null || _49 === void 0 ? void 0 : _49.response)) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ content: true }) }));
    var __VLS_88 = {}.ElAlert;
    /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
    // @ts-ignore
    var __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88(__assign({ closable: (false) }, { class: "info" })));
    var __VLS_90 = __VLS_89.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "info" })], __VLS_functionalComponentArgsRest(__VLS_89), false));
    __VLS_91.slots.default;
    {
        var __VLS_thisSlot = __VLS_91.slots.template;
        var __VLS_92 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92(__assign({ icon: "fa-solid fa-exclamation-triangle" }, { class: "mr-1" })));
        var __VLS_94 = __VLS_93.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-exclamation-triangle" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_93), false));
        (__VLS_ctx.$t('qrart.name.failure'));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
    var __VLS_96 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
    var __VLS_98 = __VLS_97.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_97), false));
    (__VLS_ctx.$t('qrart.name.taskId'));
    ((_50 = __VLS_ctx.modelValue) === null || _50 === void 0 ? void 0 : _50.id);
    var __VLS_100 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100(__assign({ content: ((_51 = __VLS_ctx.modelValue) === null || _51 === void 0 ? void 0 : _51.id) }, { class: "btn-copy" })));
    var __VLS_102 = __VLS_101.apply(void 0, __spreadArray([__assign({ content: ((_52 = __VLS_ctx.modelValue) === null || _52 === void 0 ? void 0 : _52.id) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_101), false));
    var __VLS_91;
}
/** @type {__VLS_StyleScopedClasses['preview']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-fit']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-[15px]']} */ ;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['p-[2px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[50px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[50px]']} */ ;
/** @type {__VLS_StyleScopedClasses['m-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['main']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[calc(100%-70px)]']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['pr-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['pl-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['bot']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[16px]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[rgb(46,204,113)]']} */ ;
/** @type {__VLS_StyleScopedClasses['datetime']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[12px]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-normal']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[var(--el-text-color-secondary)]']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['prompt']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[14px]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[var(--el-text-color-regular)]']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['failed']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['success']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-copy']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-copy']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-copy']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
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
