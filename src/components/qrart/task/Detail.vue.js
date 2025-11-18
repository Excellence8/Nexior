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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var CopyToClipboard_vue_1 = require("@/components/common/CopyToClipboard.vue");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
exports.default = (0, vue_1.defineComponent)({
    name: 'TaskDetail',
    components: {
        ElImage: element_plus_1.ElImage,
        ElAlert: element_plus_1.ElAlert,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
        CopyToClipboard: CopyToClipboard_vue_1.default,
        ElDescriptions: element_plus_1.ElDescriptions,
        ElDescriptionsItem: element_plus_1.ElDescriptionsItem,
        ElRow: element_plus_1.ElRow,
        ElCol: element_plus_1.ElCol
    },
    data: function () {
        return {};
    },
    computed: {
        application: function () {
            var _a;
            return (_a = this.$store.state.qrart) === null || _a === void 0 ? void 0 : _a.application;
        },
        task: function () {
            var _a, _b;
            return (_b = (_a = this.$store.state.qrart) === null || _a === void 0 ? void 0 : _a.tasks) === null || _b === void 0 ? void 0 : _b.active;
        }
    },
    methods: {
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
    ElImage: element_plus_1.ElImage,
    ElAlert: element_plus_1.ElAlert,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
    CopyToClipboard: CopyToClipboard_vue_1.default,
    ElDescriptions: element_plus_1.ElDescriptions,
    ElDescriptionsItem: element_plus_1.ElDescriptionsItem,
    ElRow: element_plus_1.ElRow,
    ElCol: element_plus_1.ElCol
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
if (__VLS_ctx.task) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "detail" }));
    var __VLS_0 = {}.ElRow;
    /** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ class: "h-full" })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "h-full" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    __VLS_3.slots.default;
    var __VLS_4 = {}.ElCol;
    /** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ span: (24) }, { class: "h-full" })));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ span: (24) }, { class: "h-full" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
    __VLS_7.slots.default;
    var __VLS_8 = {}.ElRow;
    /** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
    // @ts-ignore
    var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ class: "h-full main" })));
    var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ class: "h-full main" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
    __VLS_11.slots.default;
    var __VLS_12 = {}.ElCol;
    /** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ span: (12) }, { class: "h-full p-4" })));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ span: (12) }, { class: "h-full p-4" })], __VLS_functionalComponentArgsRest(__VLS_13), false));
    __VLS_15.slots.default;
    if ((_b = (_a = __VLS_ctx.task) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.image_url) {
        var __VLS_16 = {}.ElImage;
        /** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
        // @ts-ignore
        var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign(__assign(__assign({ 'onError': {} }, { src: ((_d = (_c = __VLS_ctx.task) === null || _c === void 0 ? void 0 : _c.response) === null || _d === void 0 ? void 0 : _d.image_url), previewSrcList: ([(_f = (_e = __VLS_ctx.task) === null || _e === void 0 ? void 0 : _e.response) === null || _f === void 0 ? void 0 : _f.image_url]) }), { class: "image" }), { fit: "contain" })));
        var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onError': {} }, { src: ((_h = (_g = __VLS_ctx.task) === null || _g === void 0 ? void 0 : _g.response) === null || _h === void 0 ? void 0 : _h.image_url), previewSrcList: ([(_k = (_j = __VLS_ctx.task) === null || _j === void 0 ? void 0 : _j.response) === null || _k === void 0 ? void 0 : _k.image_url]) }), { class: "image" }), { fit: "contain" })], __VLS_functionalComponentArgsRest(__VLS_17), false));
        var __VLS_20 = void 0;
        var __VLS_21 = void 0;
        var __VLS_22 = void 0;
        var __VLS_23 = {
            onError: function () {
                var _a, _b;
                var _c = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _c[_i] = arguments[_i];
                }
                var $event = _c[0];
                if (!(__VLS_ctx.task))
                    return;
                if (!((_b = (_a = __VLS_ctx.task) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.image_url))
                    return;
                __VLS_ctx.onReload($event);
            }
        };
        var __VLS_19;
    }
    else if (((_m = (_l = __VLS_ctx.task) === null || _l === void 0 ? void 0 : _l.response) === null || _m === void 0 ? void 0 : _m.success) === false) {
        var __VLS_24 = {}.ElAlert;
        /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
        // @ts-ignore
        var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24(__assign({ closable: (false) }, { class: "failure" })));
        var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([__assign({ closable: (false) }, { class: "failure" })], __VLS_functionalComponentArgsRest(__VLS_25), false));
        __VLS_27.slots.default;
        {
            var __VLS_thisSlot = __VLS_27.slots.template;
            var __VLS_28 = {}.FontAwesomeIcon;
            /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
            // @ts-ignore
            var __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28(__assign({ icon: "fa-solid fa-exclamation-triangle" }, { class: "mr-1" })));
            var __VLS_30 = __VLS_29.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-exclamation-triangle" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_29), false));
            (__VLS_ctx.$t('qrart.name.failure'));
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
        var __VLS_32 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32(__assign({ icon: "fa-solid fa-circle-info" }, { class: "mr-1" })));
        var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-circle-info" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_33), false));
        (__VLS_ctx.$t('qrart.name.failureReason'));
        ((_q = (_p = (_o = __VLS_ctx.task) === null || _o === void 0 ? void 0 : _o.response) === null || _p === void 0 ? void 0 : _p.error) === null || _q === void 0 ? void 0 : _q.message);
        var __VLS_36 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36(__assign({ content: ((_t = (_s = (_r = __VLS_ctx.task) === null || _r === void 0 ? void 0 : _r.response) === null || _s === void 0 ? void 0 : _s.error) === null || _t === void 0 ? void 0 : _t.message) }, { class: "btn-copy" })));
        var __VLS_38 = __VLS_37.apply(void 0, __spreadArray([__assign({ content: ((_w = (_v = (_u = __VLS_ctx.task) === null || _u === void 0 ? void 0 : _u.response) === null || _v === void 0 ? void 0 : _v.error) === null || _w === void 0 ? void 0 : _w.message) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_37), false));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
        var __VLS_40 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40(__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })));
        var __VLS_42 = __VLS_41.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-hashtag" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_41), false));
        (__VLS_ctx.$t('qrart.name.traceId'));
        ((_y = (_x = __VLS_ctx.task) === null || _x === void 0 ? void 0 : _x.response) === null || _y === void 0 ? void 0 : _y.trace_id);
        var __VLS_44 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44(__assign({ content: ((_0 = (_z = __VLS_ctx.task) === null || _z === void 0 ? void 0 : _z.response) === null || _0 === void 0 ? void 0 : _0.trace_id) }, { class: "btn-copy" })));
        var __VLS_46 = __VLS_45.apply(void 0, __spreadArray([__assign({ content: ((_2 = (_1 = __VLS_ctx.task) === null || _1 === void 0 ? void 0 : _1.response) === null || _2 === void 0 ? void 0 : _2.trace_id) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_45), false));
        var __VLS_27;
    }
    else {
        var __VLS_48 = {}.ElImage;
        /** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
        // @ts-ignore
        var __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48(__assign({ class: "image error" })));
        var __VLS_50 = __VLS_49.apply(void 0, __spreadArray([__assign({ class: "image error" })], __VLS_functionalComponentArgsRest(__VLS_49), false));
        __VLS_51.slots.default;
        {
            var __VLS_thisSlot = __VLS_51.slots.error;
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "image-slot" }));
            (__VLS_ctx.$t('qrart.message.generating'));
        }
        var __VLS_51;
    }
    var __VLS_15;
    var __VLS_52 = {}.ElCol;
    /** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
    // @ts-ignore
    var __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52(__assign({ span: (12) }, { class: "h-full overflow-scroll" })));
    var __VLS_54 = __VLS_53.apply(void 0, __spreadArray([__assign({ span: (12) }, { class: "h-full overflow-scroll" })], __VLS_functionalComponentArgsRest(__VLS_53), false));
    __VLS_55.slots.default;
    var __VLS_56 = {}.ElDescriptions;
    /** @type {[typeof __VLS_components.ElDescriptions, typeof __VLS_components.elDescriptions, typeof __VLS_components.ElDescriptions, typeof __VLS_components.elDescriptions, ]} */ ;
    // @ts-ignore
    var __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
        title: "",
        column: (1),
    }));
    var __VLS_58 = __VLS_57.apply(void 0, __spreadArray([{
            title: "",
            column: (1),
        }], __VLS_functionalComponentArgsRest(__VLS_57), false));
    __VLS_59.slots.default;
    var __VLS_60 = {}.ElDescriptionsItem;
    /** @type {[typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, ]} */ ;
    // @ts-ignore
    var __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
        label: (__VLS_ctx.$t('qrart.name.taskId')),
    }));
    var __VLS_62 = __VLS_61.apply(void 0, __spreadArray([{
            label: (__VLS_ctx.$t('qrart.name.taskId')),
        }], __VLS_functionalComponentArgsRest(__VLS_61), false));
    __VLS_63.slots.default;
    ((_3 = __VLS_ctx.task) === null || _3 === void 0 ? void 0 : _3.id);
    var __VLS_64 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64(__assign({ content: ((_4 = __VLS_ctx.task) === null || _4 === void 0 ? void 0 : _4.id) }, { class: "btn-copy" })));
    var __VLS_66 = __VLS_65.apply(void 0, __spreadArray([__assign({ content: ((_5 = __VLS_ctx.task) === null || _5 === void 0 ? void 0 : _5.id) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_65), false));
    var __VLS_63;
    var __VLS_68 = {}.ElDescriptionsItem;
    /** @type {[typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, ]} */ ;
    // @ts-ignore
    var __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
        label: (__VLS_ctx.$t('qrart.name.type')),
    }));
    var __VLS_70 = __VLS_69.apply(void 0, __spreadArray([{
            label: (__VLS_ctx.$t('qrart.name.type')),
        }], __VLS_functionalComponentArgsRest(__VLS_69), false));
    __VLS_71.slots.default;
    ((_7 = (_6 = __VLS_ctx.task) === null || _6 === void 0 ? void 0 : _6.request) === null || _7 === void 0 ? void 0 : _7.type);
    var __VLS_71;
    var __VLS_72 = {}.ElDescriptionsItem;
    /** @type {[typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, ]} */ ;
    // @ts-ignore
    var __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
        label: (__VLS_ctx.$t('qrart.name.content')),
    }));
    var __VLS_74 = __VLS_73.apply(void 0, __spreadArray([{
            label: (__VLS_ctx.$t('qrart.name.content')),
        }], __VLS_functionalComponentArgsRest(__VLS_73), false));
    __VLS_75.slots.default;
    ((_9 = (_8 = __VLS_ctx.task) === null || _8 === void 0 ? void 0 : _8.request) === null || _9 === void 0 ? void 0 : _9.content);
    var __VLS_76 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76(__assign({ content: ((_11 = (_10 = __VLS_ctx.task) === null || _10 === void 0 ? void 0 : _10.request) === null || _11 === void 0 ? void 0 : _11.content) }, { class: "btn-copy" })));
    var __VLS_78 = __VLS_77.apply(void 0, __spreadArray([__assign({ content: ((_13 = (_12 = __VLS_ctx.task) === null || _12 === void 0 ? void 0 : _12.request) === null || _13 === void 0 ? void 0 : _13.content) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_77), false));
    var __VLS_75;
    var __VLS_80 = {}.ElDescriptionsItem;
    /** @type {[typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, ]} */ ;
    // @ts-ignore
    var __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({
        label: (__VLS_ctx.$t('qrart.name.prompt')),
    }));
    var __VLS_82 = __VLS_81.apply(void 0, __spreadArray([{
            label: (__VLS_ctx.$t('qrart.name.prompt')),
        }], __VLS_functionalComponentArgsRest(__VLS_81), false));
    __VLS_83.slots.default;
    ((_15 = (_14 = __VLS_ctx.task) === null || _14 === void 0 ? void 0 : _14.request) === null || _15 === void 0 ? void 0 : _15.prompt);
    if ((_17 = (_16 = __VLS_ctx.task) === null || _16 === void 0 ? void 0 : _16.request) === null || _17 === void 0 ? void 0 : _17.prompt) {
        var __VLS_84 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84(__assign({ content: ((_19 = (_18 = __VLS_ctx.task) === null || _18 === void 0 ? void 0 : _18.request) === null || _19 === void 0 ? void 0 : _19.prompt) }, { class: "btn-copy" })));
        var __VLS_86 = __VLS_85.apply(void 0, __spreadArray([__assign({ content: ((_21 = (_20 = __VLS_ctx.task) === null || _20 === void 0 ? void 0 : _20.request) === null || _21 === void 0 ? void 0 : _21.prompt) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_85), false));
    }
    var __VLS_83;
    var __VLS_88 = {}.ElDescriptionsItem;
    /** @type {[typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, ]} */ ;
    // @ts-ignore
    var __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({
        label: (__VLS_ctx.$t('qrart.name.size')),
    }));
    var __VLS_90 = __VLS_89.apply(void 0, __spreadArray([{
            label: (__VLS_ctx.$t('qrart.name.size')),
        }], __VLS_functionalComponentArgsRest(__VLS_89), false));
    __VLS_91.slots.default;
    ((_23 = (_22 = __VLS_ctx.task) === null || _22 === void 0 ? void 0 : _22.response) === null || _23 === void 0 ? void 0 : _23.image_width);
    ((_25 = (_24 = __VLS_ctx.task) === null || _24 === void 0 ? void 0 : _24.response) === null || _25 === void 0 ? void 0 : _25.image_height);
    var __VLS_91;
    if ((_26 = __VLS_ctx.task) === null || _26 === void 0 ? void 0 : _26.created_at) {
        var __VLS_92 = {}.ElDescriptionsItem;
        /** @type {[typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, ]} */ ;
        // @ts-ignore
        var __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({
            label: (__VLS_ctx.$t('qrart.name.createdAt')),
        }));
        var __VLS_94 = __VLS_93.apply(void 0, __spreadArray([{
                label: (__VLS_ctx.$t('qrart.name.createdAt')),
            }], __VLS_functionalComponentArgsRest(__VLS_93), false));
        __VLS_95.slots.default;
        (__VLS_ctx.$dayjs.format('' + new Date(parseFloat((_27 = __VLS_ctx.task) === null || _27 === void 0 ? void 0 : _27.created_at.toString()) * 1000)));
        var __VLS_95;
    }
    var __VLS_96 = {}.ElDescriptionsItem;
    /** @type {[typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, ]} */ ;
    // @ts-ignore
    var __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({
        label: (__VLS_ctx.$t('qrart.name.seed')),
    }));
    var __VLS_98 = __VLS_97.apply(void 0, __spreadArray([{
            label: (__VLS_ctx.$t('qrart.name.seed')),
        }], __VLS_functionalComponentArgsRest(__VLS_97), false));
    __VLS_99.slots.default;
    (((_29 = (_28 = __VLS_ctx.task) === null || _28 === void 0 ? void 0 : _28.request) === null || _29 === void 0 ? void 0 : _29.seed) || ((_31 = (_30 = __VLS_ctx.task) === null || _30 === void 0 ? void 0 : _30.response) === null || _31 === void 0 ? void 0 : _31.seed));
    if (((_33 = (_32 = __VLS_ctx.task) === null || _32 === void 0 ? void 0 : _32.request) === null || _33 === void 0 ? void 0 : _33.seed) || ((_35 = (_34 = __VLS_ctx.task) === null || _34 === void 0 ? void 0 : _34.response) === null || _35 === void 0 ? void 0 : _35.seed)) {
        var __VLS_100 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100(__assign({ content: (((_37 = (_36 = __VLS_ctx.task) === null || _36 === void 0 ? void 0 : _36.request) === null || _37 === void 0 ? void 0 : _37.seed) || ((_39 = (_38 = __VLS_ctx.task) === null || _38 === void 0 ? void 0 : _38.response) === null || _39 === void 0 ? void 0 : _39.seed)) }, { class: "btn-copy" })));
        var __VLS_102 = __VLS_101.apply(void 0, __spreadArray([__assign({ content: (((_41 = (_40 = __VLS_ctx.task) === null || _40 === void 0 ? void 0 : _40.request) === null || _41 === void 0 ? void 0 : _41.seed) || ((_43 = (_42 = __VLS_ctx.task) === null || _42 === void 0 ? void 0 : _42.response) === null || _43 === void 0 ? void 0 : _43.seed)) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_101), false));
    }
    var __VLS_99;
    var __VLS_104 = {}.ElDescriptionsItem;
    /** @type {[typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, ]} */ ;
    // @ts-ignore
    var __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({
        label: (__VLS_ctx.$t('qrart.name.steps')),
    }));
    var __VLS_106 = __VLS_105.apply(void 0, __spreadArray([{
            label: (__VLS_ctx.$t('qrart.name.steps')),
        }], __VLS_functionalComponentArgsRest(__VLS_105), false));
    __VLS_107.slots.default;
    ((_45 = (_44 = __VLS_ctx.task) === null || _44 === void 0 ? void 0 : _44.request) === null || _45 === void 0 ? void 0 : _45.steps);
    var __VLS_107;
    var __VLS_108 = {}.ElDescriptionsItem;
    /** @type {[typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, ]} */ ;
    // @ts-ignore
    var __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({
        label: (__VLS_ctx.$t('qrart.name.qrw')),
    }));
    var __VLS_110 = __VLS_109.apply(void 0, __spreadArray([{
            label: (__VLS_ctx.$t('qrart.name.qrw')),
        }], __VLS_functionalComponentArgsRest(__VLS_109), false));
    __VLS_111.slots.default;
    ((_47 = (_46 = __VLS_ctx.task) === null || _46 === void 0 ? void 0 : _46.request) === null || _47 === void 0 ? void 0 : _47.qrw);
    var __VLS_111;
    var __VLS_112 = {}.ElDescriptionsItem;
    /** @type {[typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, ]} */ ;
    // @ts-ignore
    var __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({
        label: (__VLS_ctx.$t('qrart.name.preset')),
    }));
    var __VLS_114 = __VLS_113.apply(void 0, __spreadArray([{
            label: (__VLS_ctx.$t('qrart.name.preset')),
        }], __VLS_functionalComponentArgsRest(__VLS_113), false));
    __VLS_115.slots.default;
    ((_49 = (_48 = __VLS_ctx.task) === null || _48 === void 0 ? void 0 : _48.request) === null || _49 === void 0 ? void 0 : _49.preset);
    var __VLS_115;
    var __VLS_59;
    var __VLS_55;
    var __VLS_11;
    var __VLS_7;
    var __VLS_3;
}
/** @type {__VLS_StyleScopedClasses['detail']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['main']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['image']} */ ;
/** @type {__VLS_StyleScopedClasses['failure']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-copy']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-copy']} */ ;
/** @type {__VLS_StyleScopedClasses['image']} */ ;
/** @type {__VLS_StyleScopedClasses['error']} */ ;
/** @type {__VLS_StyleScopedClasses['image-slot']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-scroll']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-copy']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-copy']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-copy']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-copy']} */ ;
var __VLS_dollars;
var __VLS_self;
