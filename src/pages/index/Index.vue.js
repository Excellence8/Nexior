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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
exports.default = (0, vue_1.defineComponent)({
    name: 'Index',
    components: {
        ElButton: element_plus_1.ElButton,
        ElRow: element_plus_1.ElRow,
        ElCol: element_plus_1.ElCol,
        ElCard: element_plus_1.ElCard,
        ElImage: element_plus_1.ElImage,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon
    },
    data: function () {
        return {
            comments: [
                {
                    avatar: 'https://cdn.acedata.cloud/avatar1.png',
                    name: this.$t('index.customers.name1'),
                    job: this.$t('index.customers.job1'),
                    content: this.$t('index.customers.comment1')
                },
                {
                    avatar: 'https://cdn.acedata.cloud/avatar2.png',
                    name: this.$t('index.customers.name2'),
                    job: this.$t('index.customers.job2'),
                    content: this.$t('index.customers.comment2')
                },
                {
                    avatar: 'https://cdn.acedata.cloud/avatar3.png',
                    name: this.$t('index.customers.name3'),
                    job: this.$t('index.customers.job3'),
                    content: this.$t('index.customers.comment3')
                }
            ]
        };
    },
    computed: {
        site: function () {
            return this.$store.state.site;
        },
        capabilities: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
            return __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], (((_c = (_b = (_a = this.site) === null || _a === void 0 ? void 0 : _a.features) === null || _b === void 0 ? void 0 : _b.chatgpt) === null || _c === void 0 ? void 0 : _c.enabled)
                ? [
                    {
                        title: this.$t('index.title.chat'),
                        subtitle: this.$t('index.subtitle.chat'),
                        icon: 'fa-regular fa-comment',
                        path: '/chat'
                    }
                ]
                : []), true), (((_f = (_e = (_d = this.site) === null || _d === void 0 ? void 0 : _d.features) === null || _e === void 0 ? void 0 : _e.midjourney) === null || _f === void 0 ? void 0 : _f.enabled)
                ? [
                    {
                        title: this.$t('index.title.midjourney'),
                        subtitle: this.$t('index.subtitle.midjourney'),
                        icon: 'fa-solid fa-palette',
                        path: '/midjourney'
                    }
                ]
                : []), true), (((_j = (_h = (_g = this.site) === null || _g === void 0 ? void 0 : _g.features) === null || _h === void 0 ? void 0 : _h.qrart) === null || _j === void 0 ? void 0 : _j.enabled)
                ? [
                    {
                        title: this.$t('index.title.qrart'),
                        subtitle: this.$t('index.subtitle.qrart'),
                        icon: 'fa-solid fa-qrcode',
                        path: '/qrart'
                    }
                ]
                : []), true), (((_m = (_l = (_k = this.site) === null || _k === void 0 ? void 0 : _k.features) === null || _l === void 0 ? void 0 : _l.suno) === null || _m === void 0 ? void 0 : _m.enabled)
                ? [
                    {
                        title: this.$t('index.title.suno'),
                        subtitle: this.$t('index.subtitle.suno'),
                        icon: 'fa-solid fa-music',
                        path: '/suno'
                    }
                ]
                : []), true), (((_q = (_p = (_o = this.site) === null || _o === void 0 ? void 0 : _o.features) === null || _p === void 0 ? void 0 : _p.luma) === null || _q === void 0 ? void 0 : _q.enabled)
                ? [
                    {
                        title: this.$t('index.title.luma'),
                        subtitle: this.$t('index.subtitle.luma'),
                        icon: 'fa-solid fa-film',
                        path: '/luma'
                    }
                ]
                : []), true), (((_t = (_s = (_r = this.site) === null || _r === void 0 ? void 0 : _r.features) === null || _s === void 0 ? void 0 : _s.headshots) === null || _t === void 0 ? void 0 : _t.enabled)
                ? [
                    {
                        title: this.$t('index.title.headshots'),
                        subtitle: this.$t('index.subtitle.headshots'),
                        icon: 'fa-solid fa-id-card',
                        path: '/headshots'
                    }
                ]
                : []), true);
        }
    },
    mounted: function () { },
    methods: {
        onClickCapability: function (capability) {
            this.$router.push(capability.path);
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElButton: element_plus_1.ElButton,
    ElRow: element_plus_1.ElRow,
    ElCol: element_plus_1.ElCol,
    ElCard: element_plus_1.ElCard,
    ElImage: element_plus_1.ElImage,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon
};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['right']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "wrapper" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    id: "banner",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "container" }));
var __VLS_0 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
var __VLS_4 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ md: (12), xs: (24) }, { class: "left" })));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ md: (12), xs: (24) }, { class: "left" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
__VLS_7.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "info" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: "title" }));
((_a = __VLS_ctx.site) === null || _a === void 0 ? void 0 : _a.title);
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: "subtitle" }));
(__VLS_ctx.$t('index.subtitle.banner'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "operations" }));
var __VLS_8 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign(__assign({ 'onClick': {} }, { type: "primary", round: true }), { class: "btn-apply" })));
var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { type: "primary", round: true }), { class: "btn-apply" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
var __VLS_12;
var __VLS_13;
var __VLS_14;
var __VLS_15 = {
    onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.$router.push({
            path: '/chat'
        });
    }
};
__VLS_11.slots.default;
(__VLS_ctx.$t('common.button.startForFree'));
var __VLS_11;
var __VLS_7;
var __VLS_16 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign({ md: (12), xs: (24) }, { class: "right" })));
var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign({ md: (12), xs: (24) }, { class: "right" })], __VLS_functionalComponentArgsRest(__VLS_17), false));
__VLS_19.slots.default;
var __VLS_20 = {}.ElImage;
/** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
// @ts-ignore
var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20(__assign({ src: "https://cdn.acedata.cloud/illustration1.png" }, { class: "brand" })));
var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([__assign({ src: "https://cdn.acedata.cloud/illustration1.png" }, { class: "brand" })], __VLS_functionalComponentArgsRest(__VLS_21), false));
var __VLS_19;
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    id: "introduction",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "container" }));
var __VLS_24 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24(__assign({ class: "mb-6" })));
var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([__assign({ class: "mb-6" })], __VLS_functionalComponentArgsRest(__VLS_25), false));
__VLS_27.slots.default;
var __VLS_28 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    span: (24),
}));
var __VLS_30 = __VLS_29.apply(void 0, __spreadArray([{
        span: (24),
    }], __VLS_functionalComponentArgsRest(__VLS_29), false));
__VLS_31.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "title" }));
(__VLS_ctx.$t('index.title.introduction'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)(__assign({ class: "subtitle" }));
(__VLS_ctx.$t('index.subtitle.introduction'));
var __VLS_31;
var __VLS_27;
var __VLS_32 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
var __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    gutter: (15),
}));
var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([{
        gutter: (15),
    }], __VLS_functionalComponentArgsRest(__VLS_33), false));
__VLS_35.slots.default;
var _loop_1 = function (capability, capabilityIndex) {
    var __VLS_36 = {}.ElCol;
    /** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
    // @ts-ignore
    var __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36(__assign({ key: (capabilityIndex), md: (6), xs: (24) }, { class: "mb-4" })));
    var __VLS_38 = __VLS_37.apply(void 0, __spreadArray([__assign({ key: (capabilityIndex), md: (6), xs: (24) }, { class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_37), false));
    __VLS_39.slots.default;
    var __VLS_40 = {}.ElCard;
    /** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
    // @ts-ignore
    var __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40(__assign(__assign({ 'onClick': {} }, { class: "info text-center" }), { shadow: "hover" })));
    var __VLS_42 = __VLS_41.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { class: "info text-center" }), { shadow: "hover" })], __VLS_functionalComponentArgsRest(__VLS_41), false));
    var __VLS_44 = void 0;
    var __VLS_45 = void 0;
    var __VLS_46 = void 0;
    var __VLS_47 = {
        onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.onClickCapability(capability);
        }
    };
    __VLS_43.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "icon-wrapper" }));
    var __VLS_48 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48(__assign({ icon: (capability.icon) }, { class: "icon" })));
    var __VLS_50 = __VLS_49.apply(void 0, __spreadArray([__assign({ icon: (capability.icon) }, { class: "icon" })], __VLS_functionalComponentArgsRest(__VLS_49), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "title" }));
    (capability.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "subtitle" }));
    (capability.subtitle);
};
var __VLS_43, __VLS_39;
for (var _i = 0, _v = __VLS_getVForSourceType((__VLS_ctx.capabilities)); _i < _v.length; _i++) {
    var _w = _v[_i], capability = _w[0], capabilityIndex = _w[1];
    _loop_1(capability, capabilityIndex);
}
var __VLS_35;
if ((_d = (_c = (_b = __VLS_ctx.site) === null || _b === void 0 ? void 0 : _b.features) === null || _c === void 0 ? void 0 : _c.chatgpt) === null || _d === void 0 ? void 0 : _d.enabled) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ id: "chat" }, { class: "block" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "container" }));
    var __VLS_52 = {}.ElRow;
    /** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
    // @ts-ignore
    var __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({}));
    var __VLS_54 = __VLS_53.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_53), false));
    __VLS_55.slots.default;
    var __VLS_56 = {}.ElCol;
    /** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
    // @ts-ignore
    var __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56(__assign({ md: (16), xs: (24) }, { class: "preview" })));
    var __VLS_58 = __VLS_57.apply(void 0, __spreadArray([__assign({ md: (16), xs: (24) }, { class: "preview" })], __VLS_functionalComponentArgsRest(__VLS_57), false));
    __VLS_59.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: "https://cdn.acedata.cloud/axynds.png" }, { class: "image desktop" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: "https://cdn.acedata.cloud/vds4i3.png" }, { class: "image mobile" }));
    var __VLS_59;
    var __VLS_60 = {}.ElCol;
    /** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
    // @ts-ignore
    var __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60(__assign({ md: (8), xs: (24) }, { class: "info" })));
    var __VLS_62 = __VLS_61.apply(void 0, __spreadArray([__assign({ md: (8), xs: (24) }, { class: "info" })], __VLS_functionalComponentArgsRest(__VLS_61), false));
    __VLS_63.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "title" }));
    (__VLS_ctx.$t('index.title.chat'));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "subtitle" }));
    (__VLS_ctx.$t('index.subtitle.chat'));
    var __VLS_64 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    var __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64(__assign(__assign({ 'onClick': {} }, { type: "primary", round: true }), { class: "btn-try" })));
    var __VLS_66 = __VLS_65.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { type: "primary", round: true }), { class: "btn-try" })], __VLS_functionalComponentArgsRest(__VLS_65), false));
    var __VLS_68 = void 0;
    var __VLS_69 = void 0;
    var __VLS_70 = void 0;
    var __VLS_71 = {
        onClick: function () {
            var _a, _b, _c;
            var _d = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _d[_i] = arguments[_i];
            }
            var $event = _d[0];
            if (!((_c = (_b = (_a = __VLS_ctx.site) === null || _a === void 0 ? void 0 : _a.features) === null || _b === void 0 ? void 0 : _b.chatgpt) === null || _c === void 0 ? void 0 : _c.enabled))
                return;
            __VLS_ctx.$router.push({
                path: '/chat'
            });
        }
    };
    __VLS_67.slots.default;
    (__VLS_ctx.$t('index.button.try'));
    var __VLS_67;
    var __VLS_63;
    var __VLS_55;
}
if ((_g = (_f = (_e = __VLS_ctx.site) === null || _e === void 0 ? void 0 : _e.features) === null || _f === void 0 ? void 0 : _f.midjourney) === null || _g === void 0 ? void 0 : _g.enabled) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ id: "midjourney" }, { class: "block" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "container" }));
    var __VLS_72 = {}.ElRow;
    /** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
    // @ts-ignore
    var __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({}));
    var __VLS_74 = __VLS_73.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_73), false));
    __VLS_75.slots.default;
    var __VLS_76 = {}.ElCol;
    /** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
    // @ts-ignore
    var __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76(__assign({ md: (8), xs: (24) }, { class: "info" })));
    var __VLS_78 = __VLS_77.apply(void 0, __spreadArray([__assign({ md: (8), xs: (24) }, { class: "info" })], __VLS_functionalComponentArgsRest(__VLS_77), false));
    __VLS_79.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "title" }));
    (__VLS_ctx.$t('index.title.midjourney'));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "subtitle" }));
    (__VLS_ctx.$t('index.subtitle.midjourney'));
    var __VLS_80 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    var __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80(__assign(__assign({ 'onClick': {} }, { type: "primary", round: true }), { class: "btn-try" })));
    var __VLS_82 = __VLS_81.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { type: "primary", round: true }), { class: "btn-try" })], __VLS_functionalComponentArgsRest(__VLS_81), false));
    var __VLS_84 = void 0;
    var __VLS_85 = void 0;
    var __VLS_86 = void 0;
    var __VLS_87 = {
        onClick: function () {
            var _a, _b, _c;
            var _d = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _d[_i] = arguments[_i];
            }
            var $event = _d[0];
            if (!((_c = (_b = (_a = __VLS_ctx.site) === null || _a === void 0 ? void 0 : _a.features) === null || _b === void 0 ? void 0 : _b.midjourney) === null || _c === void 0 ? void 0 : _c.enabled))
                return;
            __VLS_ctx.$router.push({
                path: '/midjourney'
            });
        }
    };
    __VLS_83.slots.default;
    (__VLS_ctx.$t('index.button.try'));
    var __VLS_83;
    var __VLS_79;
    var __VLS_88 = {}.ElCol;
    /** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
    // @ts-ignore
    var __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88(__assign({ md: (16), xs: (24) }, { class: "preview" })));
    var __VLS_90 = __VLS_89.apply(void 0, __spreadArray([__assign({ md: (16), xs: (24) }, { class: "preview" })], __VLS_functionalComponentArgsRest(__VLS_89), false));
    __VLS_91.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: "https://cdn.acedata.cloud/uk86mz.png" }, { class: "image desktop" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: "https://cdn.acedata.cloud/rvelwm.png" }, { class: "image mobile" }));
    var __VLS_91;
    var __VLS_75;
}
if ((_k = (_j = (_h = __VLS_ctx.site) === null || _h === void 0 ? void 0 : _h.features) === null || _j === void 0 ? void 0 : _j.qrart) === null || _k === void 0 ? void 0 : _k.enabled) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ id: "qrart" }, { class: "block" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "container" }));
    var __VLS_92 = {}.ElRow;
    /** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
    // @ts-ignore
    var __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({}));
    var __VLS_94 = __VLS_93.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_93), false));
    __VLS_95.slots.default;
    var __VLS_96 = {}.ElCol;
    /** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
    // @ts-ignore
    var __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96(__assign({ md: (16), xs: (24) }, { class: "preview" })));
    var __VLS_98 = __VLS_97.apply(void 0, __spreadArray([__assign({ md: (16), xs: (24) }, { class: "preview" })], __VLS_functionalComponentArgsRest(__VLS_97), false));
    __VLS_99.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: "https://cdn.acedata.cloud/gyogar.png" }, { class: "image desktop" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: "https://cdn.acedata.cloud/5kunm0.png" }, { class: "image mobile" }));
    var __VLS_99;
    var __VLS_100 = {}.ElCol;
    /** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
    // @ts-ignore
    var __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100(__assign({ md: (8), xs: (24) }, { class: "info" })));
    var __VLS_102 = __VLS_101.apply(void 0, __spreadArray([__assign({ md: (8), xs: (24) }, { class: "info" })], __VLS_functionalComponentArgsRest(__VLS_101), false));
    __VLS_103.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "title" }));
    (__VLS_ctx.$t('index.title.qrart'));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "subtitle" }));
    (__VLS_ctx.$t('index.subtitle.qrart'));
    var __VLS_104 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    var __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104(__assign(__assign({ 'onClick': {} }, { type: "primary", round: true }), { class: "btn-try" })));
    var __VLS_106 = __VLS_105.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { type: "primary", round: true }), { class: "btn-try" })], __VLS_functionalComponentArgsRest(__VLS_105), false));
    var __VLS_108 = void 0;
    var __VLS_109 = void 0;
    var __VLS_110 = void 0;
    var __VLS_111 = {
        onClick: function () {
            var _a, _b, _c;
            var _d = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _d[_i] = arguments[_i];
            }
            var $event = _d[0];
            if (!((_c = (_b = (_a = __VLS_ctx.site) === null || _a === void 0 ? void 0 : _a.features) === null || _b === void 0 ? void 0 : _b.qrart) === null || _c === void 0 ? void 0 : _c.enabled))
                return;
            __VLS_ctx.$router.push({
                path: '/qrart'
            });
        }
    };
    __VLS_107.slots.default;
    (__VLS_ctx.$t('index.button.try'));
    var __VLS_107;
    var __VLS_103;
    var __VLS_95;
}
if ((_o = (_m = (_l = __VLS_ctx.site) === null || _l === void 0 ? void 0 : _l.features) === null || _m === void 0 ? void 0 : _m.suno) === null || _o === void 0 ? void 0 : _o.enabled) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ id: "suno" }, { class: "block" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "container" }));
    var __VLS_112 = {}.ElRow;
    /** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
    // @ts-ignore
    var __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({}));
    var __VLS_114 = __VLS_113.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_113), false));
    __VLS_115.slots.default;
    var __VLS_116 = {}.ElCol;
    /** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
    // @ts-ignore
    var __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116(__assign({ md: (8), xs: (24) }, { class: "info" })));
    var __VLS_118 = __VLS_117.apply(void 0, __spreadArray([__assign({ md: (8), xs: (24) }, { class: "info" })], __VLS_functionalComponentArgsRest(__VLS_117), false));
    __VLS_119.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "title" }));
    (__VLS_ctx.$t('index.title.suno'));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "subtitle" }));
    (__VLS_ctx.$t('index.subtitle.suno'));
    var __VLS_120 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    var __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120(__assign(__assign({ 'onClick': {} }, { type: "primary", round: true }), { class: "btn-try" })));
    var __VLS_122 = __VLS_121.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { type: "primary", round: true }), { class: "btn-try" })], __VLS_functionalComponentArgsRest(__VLS_121), false));
    var __VLS_124 = void 0;
    var __VLS_125 = void 0;
    var __VLS_126 = void 0;
    var __VLS_127 = {
        onClick: function () {
            var _a, _b, _c;
            var _d = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _d[_i] = arguments[_i];
            }
            var $event = _d[0];
            if (!((_c = (_b = (_a = __VLS_ctx.site) === null || _a === void 0 ? void 0 : _a.features) === null || _b === void 0 ? void 0 : _b.suno) === null || _c === void 0 ? void 0 : _c.enabled))
                return;
            __VLS_ctx.$router.push({
                path: '/suno'
            });
        }
    };
    __VLS_123.slots.default;
    (__VLS_ctx.$t('index.button.try'));
    var __VLS_123;
    var __VLS_119;
    var __VLS_128 = {}.ElCol;
    /** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
    // @ts-ignore
    var __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128(__assign({ md: (16), xs: (24) }, { class: "preview" })));
    var __VLS_130 = __VLS_129.apply(void 0, __spreadArray([__assign({ md: (16), xs: (24) }, { class: "preview" })], __VLS_functionalComponentArgsRest(__VLS_129), false));
    __VLS_131.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: "https://cdn.acedata.cloud/2m8fn.png" }, { class: "image desktop" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: "https://cdn.acedata.cloud/23knvs.png" }, { class: "image mobile" }));
    var __VLS_131;
    var __VLS_115;
}
if ((_r = (_q = (_p = __VLS_ctx.site) === null || _p === void 0 ? void 0 : _p.features) === null || _q === void 0 ? void 0 : _q.luma) === null || _r === void 0 ? void 0 : _r.enabled) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ id: "luma" }, { class: "block" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "container" }));
    var __VLS_132 = {}.ElRow;
    /** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
    // @ts-ignore
    var __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({}));
    var __VLS_134 = __VLS_133.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_133), false));
    __VLS_135.slots.default;
    var __VLS_136 = {}.ElCol;
    /** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
    // @ts-ignore
    var __VLS_137 = __VLS_asFunctionalComponent(__VLS_136, new __VLS_136(__assign({ md: (16), xs: (24) }, { class: "preview" })));
    var __VLS_138 = __VLS_137.apply(void 0, __spreadArray([__assign({ md: (16), xs: (24) }, { class: "preview" })], __VLS_functionalComponentArgsRest(__VLS_137), false));
    __VLS_139.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: "https://cdn.acedata.cloud/6kop1g.png" }, { class: "image desktop" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: "https://cdn.acedata.cloud/3kcjny.png" }, { class: "image mobile" }));
    var __VLS_139;
    var __VLS_140 = {}.ElCol;
    /** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
    // @ts-ignore
    var __VLS_141 = __VLS_asFunctionalComponent(__VLS_140, new __VLS_140(__assign({ md: (8), xs: (24) }, { class: "info" })));
    var __VLS_142 = __VLS_141.apply(void 0, __spreadArray([__assign({ md: (8), xs: (24) }, { class: "info" })], __VLS_functionalComponentArgsRest(__VLS_141), false));
    __VLS_143.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "title" }));
    (__VLS_ctx.$t('index.title.luma'));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "subtitle" }));
    (__VLS_ctx.$t('index.subtitle.luma'));
    var __VLS_144 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    var __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144(__assign(__assign({ 'onClick': {} }, { type: "primary", round: true }), { class: "btn-try" })));
    var __VLS_146 = __VLS_145.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { type: "primary", round: true }), { class: "btn-try" })], __VLS_functionalComponentArgsRest(__VLS_145), false));
    var __VLS_148 = void 0;
    var __VLS_149 = void 0;
    var __VLS_150 = void 0;
    var __VLS_151 = {
        onClick: function () {
            var _a, _b, _c;
            var _d = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _d[_i] = arguments[_i];
            }
            var $event = _d[0];
            if (!((_c = (_b = (_a = __VLS_ctx.site) === null || _a === void 0 ? void 0 : _a.features) === null || _b === void 0 ? void 0 : _b.luma) === null || _c === void 0 ? void 0 : _c.enabled))
                return;
            __VLS_ctx.$router.push({
                path: '/luma'
            });
        }
    };
    __VLS_147.slots.default;
    (__VLS_ctx.$t('index.button.try'));
    var __VLS_147;
    var __VLS_143;
    var __VLS_135;
}
if ((_u = (_t = (_s = __VLS_ctx.site) === null || _s === void 0 ? void 0 : _s.features) === null || _t === void 0 ? void 0 : _t.headshots) === null || _u === void 0 ? void 0 : _u.enabled) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ id: "headshots" }, { class: "block" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "container" }));
    var __VLS_152 = {}.ElRow;
    /** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
    // @ts-ignore
    var __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152({}));
    var __VLS_154 = __VLS_153.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_153), false));
    __VLS_155.slots.default;
    var __VLS_156 = {}.ElCol;
    /** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
    // @ts-ignore
    var __VLS_157 = __VLS_asFunctionalComponent(__VLS_156, new __VLS_156(__assign({ md: (8), xs: (24) }, { class: "info" })));
    var __VLS_158 = __VLS_157.apply(void 0, __spreadArray([__assign({ md: (8), xs: (24) }, { class: "info" })], __VLS_functionalComponentArgsRest(__VLS_157), false));
    __VLS_159.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "title" }));
    (__VLS_ctx.$t('index.title.headshots'));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "subtitle" }));
    (__VLS_ctx.$t('index.subtitle.headshots'));
    var __VLS_160 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    var __VLS_161 = __VLS_asFunctionalComponent(__VLS_160, new __VLS_160(__assign(__assign({ 'onClick': {} }, { type: "primary", round: true }), { class: "btn-try" })));
    var __VLS_162 = __VLS_161.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { type: "primary", round: true }), { class: "btn-try" })], __VLS_functionalComponentArgsRest(__VLS_161), false));
    var __VLS_164 = void 0;
    var __VLS_165 = void 0;
    var __VLS_166 = void 0;
    var __VLS_167 = {
        onClick: function () {
            var _a, _b, _c;
            var _d = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _d[_i] = arguments[_i];
            }
            var $event = _d[0];
            if (!((_c = (_b = (_a = __VLS_ctx.site) === null || _a === void 0 ? void 0 : _a.features) === null || _b === void 0 ? void 0 : _b.headshots) === null || _c === void 0 ? void 0 : _c.enabled))
                return;
            __VLS_ctx.$router.push({
                path: '/headshots'
            });
        }
    };
    __VLS_163.slots.default;
    (__VLS_ctx.$t('index.button.try'));
    var __VLS_163;
    var __VLS_159;
    var __VLS_168 = {}.ElCol;
    /** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
    // @ts-ignore
    var __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168(__assign({ md: (16), xs: (24) }, { class: "preview" })));
    var __VLS_170 = __VLS_169.apply(void 0, __spreadArray([__assign({ md: (16), xs: (24) }, { class: "preview" })], __VLS_functionalComponentArgsRest(__VLS_169), false));
    __VLS_171.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: "https://cdn.acedata.cloud/zlyshj.png" }, { class: "image desktop" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: "https://cdn.acedata.cloud/8as0cx.png" }, { class: "image mobile" }));
    var __VLS_171;
    var __VLS_155;
}
if (false) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        id: "comments",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "container" }));
    var __VLS_172 = {}.ElRow;
    /** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
    // @ts-ignore
    var __VLS_173 = __VLS_asFunctionalComponent(__VLS_172, new __VLS_172(__assign({ class: "mb-6" })));
    var __VLS_174 = __VLS_173.apply(void 0, __spreadArray([__assign({ class: "mb-6" })], __VLS_functionalComponentArgsRest(__VLS_173), false));
    __VLS_175.slots.default;
    var __VLS_176 = {}.ElCol;
    /** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
    // @ts-ignore
    var __VLS_177 = __VLS_asFunctionalComponent(__VLS_176, new __VLS_176({
        span: (24),
    }));
    var __VLS_178 = __VLS_177.apply(void 0, __spreadArray([{
            span: (24),
        }], __VLS_functionalComponentArgsRest(__VLS_177), false));
    __VLS_179.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "title" }));
    (__VLS_ctx.$t('index.title.comments'));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)(__assign({ class: "subtitle" }));
    (__VLS_ctx.$t('index.subtitle.comments'));
    var __VLS_179;
    var __VLS_175;
    var __VLS_180 = {}.ElRow;
    /** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
    // @ts-ignore
    var __VLS_181 = __VLS_asFunctionalComponent(__VLS_180, new __VLS_180(__assign({ gutter: (20) }, { class: "main" })));
    var __VLS_182 = __VLS_181.apply(void 0, __spreadArray([__assign({ gutter: (20) }, { class: "main" })], __VLS_functionalComponentArgsRest(__VLS_181), false));
    __VLS_183.slots.default;
    for (var _x = 0, _y = __VLS_getVForSourceType((__VLS_ctx.comments)); _x < _y.length; _x++) {
        var _z = _y[_x], comment = _z[0], commentIndex = _z[1];
        var __VLS_184 = {}.ElCol;
        /** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
        // @ts-ignore
        var __VLS_185 = __VLS_asFunctionalComponent(__VLS_184, new __VLS_184({
            key: (commentIndex),
            md: (8),
            xs: (24),
        }));
        var __VLS_186 = __VLS_185.apply(void 0, __spreadArray([{
                key: (commentIndex),
                md: (8),
                xs: (24),
            }], __VLS_functionalComponentArgsRest(__VLS_185), false));
        __VLS_187.slots.default;
        var __VLS_188 = {}.ElCard;
        /** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
        // @ts-ignore
        var __VLS_189 = __VLS_asFunctionalComponent(__VLS_188, new __VLS_188(__assign(__assign({ shadow: "hover" }, { class: "service" }), { bodyStyle: ({ padding: 0 }) })));
        var __VLS_190 = __VLS_189.apply(void 0, __spreadArray([__assign(__assign({ shadow: "hover" }, { class: "service" }), { bodyStyle: ({ padding: 0 }) })], __VLS_functionalComponentArgsRest(__VLS_189), false));
        __VLS_191.slots.default;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "content" }));
        (comment.content);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "info" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "left" }));
        var __VLS_192 = {}.ElImage;
        /** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
        // @ts-ignore
        var __VLS_193 = __VLS_asFunctionalComponent(__VLS_192, new __VLS_192(__assign({ class: "avatar" }, { src: (comment.avatar) })));
        var __VLS_194 = __VLS_193.apply(void 0, __spreadArray([__assign({ class: "avatar" }, { src: (comment.avatar) })], __VLS_functionalComponentArgsRest(__VLS_193), false));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "right" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "name" }));
        (comment.name);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "job" }));
        (comment.job);
        var __VLS_191;
        var __VLS_187;
    }
    var __VLS_183;
}
/** @type {__VLS_StyleScopedClasses['wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['operations']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-apply']} */ ;
/** @type {__VLS_StyleScopedClasses['right']} */ ;
/** @type {__VLS_StyleScopedClasses['brand']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['preview']} */ ;
/** @type {__VLS_StyleScopedClasses['image']} */ ;
/** @type {__VLS_StyleScopedClasses['desktop']} */ ;
/** @type {__VLS_StyleScopedClasses['image']} */ ;
/** @type {__VLS_StyleScopedClasses['mobile']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-try']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-try']} */ ;
/** @type {__VLS_StyleScopedClasses['preview']} */ ;
/** @type {__VLS_StyleScopedClasses['image']} */ ;
/** @type {__VLS_StyleScopedClasses['desktop']} */ ;
/** @type {__VLS_StyleScopedClasses['image']} */ ;
/** @type {__VLS_StyleScopedClasses['mobile']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['preview']} */ ;
/** @type {__VLS_StyleScopedClasses['image']} */ ;
/** @type {__VLS_StyleScopedClasses['desktop']} */ ;
/** @type {__VLS_StyleScopedClasses['image']} */ ;
/** @type {__VLS_StyleScopedClasses['mobile']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-try']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-try']} */ ;
/** @type {__VLS_StyleScopedClasses['preview']} */ ;
/** @type {__VLS_StyleScopedClasses['image']} */ ;
/** @type {__VLS_StyleScopedClasses['desktop']} */ ;
/** @type {__VLS_StyleScopedClasses['image']} */ ;
/** @type {__VLS_StyleScopedClasses['mobile']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['preview']} */ ;
/** @type {__VLS_StyleScopedClasses['image']} */ ;
/** @type {__VLS_StyleScopedClasses['desktop']} */ ;
/** @type {__VLS_StyleScopedClasses['image']} */ ;
/** @type {__VLS_StyleScopedClasses['mobile']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-try']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-try']} */ ;
/** @type {__VLS_StyleScopedClasses['preview']} */ ;
/** @type {__VLS_StyleScopedClasses['image']} */ ;
/** @type {__VLS_StyleScopedClasses['desktop']} */ ;
/** @type {__VLS_StyleScopedClasses['image']} */ ;
/** @type {__VLS_StyleScopedClasses['mobile']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['main']} */ ;
/** @type {__VLS_StyleScopedClasses['service']} */ ;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['right']} */ ;
/** @type {__VLS_StyleScopedClasses['name']} */ ;
/** @type {__VLS_StyleScopedClasses['job']} */ ;
var __VLS_dollars;
var __VLS_self;
