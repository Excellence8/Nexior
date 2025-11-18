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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var CopyToClipboard_vue_1 = require("@/components/common/CopyToClipboard.vue");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var ImageWrapper_vue_1 = require("@/components/common/ImageWrapper.vue");
var ImagePreview_vue_1 = require("@/components/common/ImagePreview.vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'TaskPreview',
    components: {
        ElImage: element_plus_1.ElImage,
        CopyToClipboard: CopyToClipboard_vue_1.default,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
        ElAlert: element_plus_1.ElAlert,
        ImageWrapper: ImageWrapper_vue_1.default,
        ElButton: element_plus_1.ElButton,
        ElTooltip: element_plus_1.ElTooltip,
        ImagePreview: ImagePreview_vue_1.default
    },
    props: {
        modelValue: {
            type: Object,
            required: true
        }
    },
    computed: {
        images: function () {
            var _a, _b, _c, _d, _e;
            var result = [];
            // @ts-ignore
            if (Array.isArray((_b = (_a = this.modelValue) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.data)) {
                (_e = (_d = (_c = this.modelValue) === null || _c === void 0 ? void 0 : _c.response) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.forEach(function (item) {
                    result.push(item);
                });
            }
            return result;
        }
    },
    methods: {
        onEdit: function (imageUrl) {
            var _a;
            if (!imageUrl)
                return;
            console.debug('Edit image:', imageUrl);
            // Switch to edit mode and preload image into uploader list
            this.$store.commit('nanobanana/setConfig', __assign(__assign({}, (_a = this.$store.state.nanobanana) === null || _a === void 0 ? void 0 : _a.config), { action: 'edit', image_urls: [imageUrl] }));
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
    ImageWrapper: ImageWrapper_vue_1.default,
    ElButton: element_plus_1.ElButton,
    ElTooltip: element_plus_1.ElTooltip,
    ImagePreview: ImagePreview_vue_1.default
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
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ src: "https://cdn.acedata.cloud/859plc.jpg" }, { class: "avatar" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ src: "https://cdn.acedata.cloud/859plc.jpg" }, { class: "avatar" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "main" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "bot" }));
(__VLS_ctx.$t('nanobanana.name.nanobananaBot'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "datetime" }));
(__VLS_ctx.$dayjs.format('' + new Date(parseFloat((((_a = __VLS_ctx.modelValue) === null || _a === void 0 ? void 0 : _a.created_at) || '').toString()) * 1000)));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "info" }));
if (((_c = (_b = __VLS_ctx.modelValue) === null || _b === void 0 ? void 0 : _b.request) === null || _c === void 0 ? void 0 : _c.image_urls) && ((_e = (_d = __VLS_ctx.modelValue) === null || _d === void 0 ? void 0 : _d.request) === null || _e === void 0 ? void 0 : _e.image_urls.length) > 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex justify-start items-center gap-2 mt-2 w-full overflow-x-auto" }));
    for (var _i = 0, _19 = __VLS_getVForSourceType(((_g = (_f = __VLS_ctx.modelValue) === null || _f === void 0 ? void 0 : _f.request) === null || _g === void 0 ? void 0 : _g.image_urls)); _i < _19.length; _i++) {
        var _20 = _19[_i], url = _20[0], idx = _20[1];
        var __VLS_4 = {}.ImagePreview;
        /** @type {[typeof __VLS_components.ImagePreview, typeof __VLS_components.imagePreview, ]} */ ;
        // @ts-ignore
        var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
            key: (idx),
            url: (url),
            name: ("image-".concat(idx + 1)),
            closable: (false),
        }));
        var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{
                key: (idx),
                url: (url),
                name: ("image-".concat(idx + 1)),
                closable: (false),
            }], __VLS_functionalComponentArgsRest(__VLS_5), false));
    }
}
if ((_j = (_h = __VLS_ctx.modelValue) === null || _h === void 0 ? void 0 : _h.request) === null || _j === void 0 ? void 0 : _j.prompt) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "prompt mt-2" }));
    ((_l = (_k = __VLS_ctx.modelValue) === null || _k === void 0 ? void 0 : _k.request) === null || _l === void 0 ? void 0 : _l.prompt);
    if (!((_m = __VLS_ctx.modelValue) === null || _m === void 0 ? void 0 : _m.response)) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.$t('nanobanana.status.pending'));
    }
}
if (((_p = (_o = __VLS_ctx.modelValue) === null || _o === void 0 ? void 0 : _o.response) === null || _p === void 0 ? void 0 : _p.success) === true) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ content: true, failed: true }) }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex justify-start items-center gap-4 w-full overflow-x-auto" }));
    for (var _21 = 0, _22 = __VLS_getVForSourceType((__VLS_ctx.images)); _21 < _22.length; _21++) {
        var _23 = _22[_21], image = _23[0], imageIndex = _23[1];
        var __VLS_8 = {}.ImageWrapper;
        /** @type {[typeof __VLS_components.ImageWrapper, typeof __VLS_components.imageWrapper, ]} */ ;
        // @ts-ignore
        var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
            key: (imageIndex),
            src: (image === null || image === void 0 ? void 0 : image.image_url),
            rawSrc: (image === null || image === void 0 ? void 0 : image.image_url),
        }));
        var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([{
                key: (imageIndex),
                src: (image === null || image === void 0 ? void 0 : image.image_url),
                rawSrc: (image === null || image === void 0 ? void 0 : image.image_url),
            }], __VLS_functionalComponentArgsRest(__VLS_9), false));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ({ operations: true, 'mt-2': true, 'mb-2': true }) }));
    var __VLS_12 = {}.ElTooltip;
    /** @type {[typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ]} */ ;
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ class: "box-item" }, { effect: "dark", content: (__VLS_ctx.$t('common.button.edit')), placement: "top-start" })));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ class: "box-item" }, { effect: "dark", content: (__VLS_ctx.$t('common.button.edit')), placement: "top-start" })], __VLS_functionalComponentArgsRest(__VLS_13), false));
    __VLS_15.slots.default;
    var __VLS_16 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign(__assign({ 'onClick': {} }, { type: "info", size: "small" }), { class: "btn-action" })));
    var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { type: "info", size: "small" }), { class: "btn-action" })], __VLS_functionalComponentArgsRest(__VLS_17), false));
    var __VLS_20 = void 0;
    var __VLS_21 = void 0;
    var __VLS_22 = void 0;
    var __VLS_23 = {
        onClick: function () {
            var _a, _b, _c, _d;
            var _e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _e[_i] = arguments[_i];
            }
            var $event = _e[0];
            if (!(((_b = (_a = __VLS_ctx.modelValue) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.success) === true))
                return;
            __VLS_ctx.onEdit((_d = (_c = __VLS_ctx.images) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.image_url);
        }
    };
    __VLS_19.slots.default;
    (__VLS_ctx.$t('common.button.edit'));
    var __VLS_19;
    var __VLS_15;
    var __VLS_24 = {}.ElAlert;
    /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
    // @ts-ignore
    var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24(__assign({ closable: (false) }, { class: "mt-2 success" })));
    var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "mt-2 success" })], __VLS_functionalComponentArgsRest(__VLS_25), false));
    __VLS_27.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-0" }));
    var __VLS_28 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
    var __VLS_30 = __VLS_29.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_29), false));
    (__VLS_ctx.$t('nanobanana.name.taskId'));
    ((_q = __VLS_ctx.modelValue) === null || _q === void 0 ? void 0 : _q.id);
    var __VLS_32 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32(__assign({ content: ((_r = __VLS_ctx.modelValue) === null || _r === void 0 ? void 0 : _r.id) }, { class: "btn-copy inline-block" })));
    var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([__assign({ content: ((_s = __VLS_ctx.modelValue) === null || _s === void 0 ? void 0 : _s.id) }, { class: "btn-copy inline-block" })], __VLS_functionalComponentArgsRest(__VLS_33), false));
    var __VLS_27;
}
if (((_u = (_t = __VLS_ctx.modelValue) === null || _t === void 0 ? void 0 : _t.response) === null || _u === void 0 ? void 0 : _u.success) === false) {
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
        (__VLS_ctx.$t('nanobanana.name.failure'));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-2" }));
    var __VLS_44 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
    var __VLS_46 = __VLS_45.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_45), false));
    (__VLS_ctx.$t('nanobanana.name.taskId'));
    ((_v = __VLS_ctx.modelValue) === null || _v === void 0 ? void 0 : _v.id);
    var __VLS_48 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48(__assign({ content: ((_w = __VLS_ctx.modelValue) === null || _w === void 0 ? void 0 : _w.id) }, { class: "btn-copy" })));
    var __VLS_50 = __VLS_49.apply(void 0, __spreadArray([__assign({ content: ((_x = __VLS_ctx.modelValue) === null || _x === void 0 ? void 0 : _x.id) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_49), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-2" }));
    var __VLS_52 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52(__assign({ icon: "fa-solid fa-circle-info" }, { class: "mr-1" })));
    var __VLS_54 = __VLS_53.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-circle-info" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_53), false));
    (__VLS_ctx.$t('nanobanana.name.failureReason'));
    ((_0 = (_z = (_y = __VLS_ctx.modelValue) === null || _y === void 0 ? void 0 : _y.response) === null || _z === void 0 ? void 0 : _z.error) === null || _0 === void 0 ? void 0 : _0.message);
    var __VLS_56 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56(__assign({ content: ((_3 = (_2 = (_1 = __VLS_ctx.modelValue) === null || _1 === void 0 ? void 0 : _1.response) === null || _2 === void 0 ? void 0 : _2.error) === null || _3 === void 0 ? void 0 : _3.message) }, { class: "btn-copy" })));
    var __VLS_58 = __VLS_57.apply(void 0, __spreadArray([__assign({ content: ((_6 = (_5 = (_4 = __VLS_ctx.modelValue) === null || _4 === void 0 ? void 0 : _4.response) === null || _5 === void 0 ? void 0 : _5.error) === null || _6 === void 0 ? void 0 : _6.message) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_57), false));
    if ((_8 = (_7 = __VLS_ctx.modelValue) === null || _7 === void 0 ? void 0 : _7.response) === null || _8 === void 0 ? void 0 : _8.trace_id) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-0" }));
        var __VLS_60 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60(__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })));
        var __VLS_62 = __VLS_61.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_61), false));
        (__VLS_ctx.$t('nanobanana.name.traceId'));
        ((_10 = (_9 = __VLS_ctx.modelValue) === null || _9 === void 0 ? void 0 : _9.response) === null || _10 === void 0 ? void 0 : _10.trace_id);
        var __VLS_64 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64(__assign({ content: ((_12 = (_11 = __VLS_ctx.modelValue) === null || _11 === void 0 ? void 0 : _11.response) === null || _12 === void 0 ? void 0 : _12.trace_id) }, { class: "btn-copy" })));
        var __VLS_66 = __VLS_65.apply(void 0, __spreadArray([__assign({ content: ((_14 = (_13 = __VLS_ctx.modelValue) === null || _13 === void 0 ? void 0 : _13.response) === null || _14 === void 0 ? void 0 : _14.trace_id) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_65), false));
    }
    var __VLS_39;
}
if (!((_15 = __VLS_ctx.modelValue) === null || _15 === void 0 ? void 0 : _15.response)) {
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
        (__VLS_ctx.$t('nanobanana.name.failure'));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[var(--el-text-color-regular)] text-xs mb-0" }));
    var __VLS_76 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76(__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })));
    var __VLS_78 = __VLS_77.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-magic" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_77), false));
    (__VLS_ctx.$t('nanobanana.name.taskId'));
    ((_16 = __VLS_ctx.modelValue) === null || _16 === void 0 ? void 0 : _16.id);
    var __VLS_80 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80(__assign({ content: ((_17 = __VLS_ctx.modelValue) === null || _17 === void 0 ? void 0 : _17.id) }, { class: "btn-copy" })));
    var __VLS_82 = __VLS_81.apply(void 0, __spreadArray([__assign({ content: ((_18 = __VLS_ctx.modelValue) === null || _18 === void 0 ? void 0 : _18.id) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_81), false));
    var __VLS_71;
}
/** @type {__VLS_StyleScopedClasses['preview']} */ ;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['main']} */ ;
/** @type {__VLS_StyleScopedClasses['bot']} */ ;
/** @type {__VLS_StyleScopedClasses['datetime']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-start']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-x-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['prompt']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['failed']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-start']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-x-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['operations']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['box-item']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-action']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['success']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[var(--el-text-color-regular)]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-copy']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-block']} */ ;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['failure']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[var(--el-text-color-regular)]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-copy']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[var(--el-text-color-regular)]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-copy']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[var(--el-text-color-regular)]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-copy']} */ ;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[var(--el-text-color-regular)]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-copy']} */ ;
var __VLS_dollars;
var __VLS_self;
