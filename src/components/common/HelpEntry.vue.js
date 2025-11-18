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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var router_1 = require("@/router");
exports.default = (0, vue_1.defineComponent)({
    name: 'HelpEntry',
    components: {
        ElImage: element_plus_1.ElImage,
        ElPopover: element_plus_1.ElPopover,
        ElMenu: element_plus_1.ElMenu,
        ElMenuItem: element_plus_1.ElMenuItem,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon
    },
    computed: {
        site: function () {
            return this.$store.state.site;
        }
    },
    methods: {
        onJoin: function () {
            var _a, _b, _c, _d;
            window.open((_d = (_c = (_b = (_a = this.$store.state.site) === null || _a === void 0 ? void 0 : _a.features) === null || _b === void 0 ? void 0 : _b.support) === null || _c === void 0 ? void 0 : _c.discord) === null || _d === void 0 ? void 0 : _d.url, '_blank');
        },
        onProfit: function () {
            this.$router.push({
                name: router_1.ROUTE_DISTRIBUTION_INDEX
            });
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElImage: element_plus_1.ElImage,
    ElPopover: element_plus_1.ElPopover,
    ElMenu: element_plus_1.ElMenu,
    ElMenuItem: element_plus_1.ElMenuItem,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
var __VLS_0 = {}.ElPopover;
/** @type {[typeof __VLS_components.ElPopover, typeof __VLS_components.elPopover, typeof __VLS_components.ElPopover, typeof __VLS_components.elPopover, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    placement: "bottom",
    width: (200),
    trigger: "hover",
    popperStyle: ({
        padding: '10px'
    }),
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        placement: "bottom",
        width: (200),
        trigger: "hover",
        popperStyle: ({
            padding: '10px'
        }),
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {};
__VLS_3.slots.default;
{
    var __VLS_thisSlot = __VLS_3.slots.reference;
    var __VLS_5 = {};
}
var __VLS_7 = {}.ElMenu;
/** @type {[typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, ]} */ ;
// @ts-ignore
var __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7(__assign({ collapse: (false) }, { class: "menu" })));
var __VLS_9 = __VLS_8.apply(void 0, __spreadArray([__assign({ collapse: (false) }, { class: "menu" })], __VLS_functionalComponentArgsRest(__VLS_8), false));
__VLS_10.slots.default;
var __VLS_11 = {}.ElPopover;
/** @type {[typeof __VLS_components.ElPopover, typeof __VLS_components.elPopover, typeof __VLS_components.ElPopover, typeof __VLS_components.elPopover, ]} */ ;
// @ts-ignore
var __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({
    width: (350),
    trigger: "hover",
}));
var __VLS_13 = __VLS_12.apply(void 0, __spreadArray([{
        width: (350),
        trigger: "hover",
    }], __VLS_functionalComponentArgsRest(__VLS_12), false));
__VLS_14.slots.default;
{
    var __VLS_thisSlot = __VLS_14.slots.reference;
    if (((_d = (_c = (_b = (_a = __VLS_ctx.site) === null || _a === void 0 ? void 0 : _a.features) === null || _b === void 0 ? void 0 : _b.support) === null || _c === void 0 ? void 0 : _c.wechat) === null || _d === void 0 ? void 0 : _d.enabled) && ((_h = (_g = (_f = (_e = __VLS_ctx.site) === null || _e === void 0 ? void 0 : _e.features) === null || _f === void 0 ? void 0 : _f.support) === null || _g === void 0 ? void 0 : _g.wechat) === null || _h === void 0 ? void 0 : _h.qr)) {
        var __VLS_15 = {}.ElMenuItem;
        /** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
        // @ts-ignore
        var __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
            index: "1",
        }));
        var __VLS_17 = __VLS_16.apply(void 0, __spreadArray([{
                index: "1",
            }], __VLS_functionalComponentArgsRest(__VLS_16), false));
        __VLS_18.slots.default;
        var __VLS_19 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19(__assign({ icon: "fa-brands fa-weixin" }, { class: "mr-2" })));
        var __VLS_21 = __VLS_20.apply(void 0, __spreadArray([__assign({ icon: "fa-brands fa-weixin" }, { class: "mr-2" })], __VLS_functionalComponentArgsRest(__VLS_20), false));
        {
            var __VLS_thisSlot_1 = __VLS_18.slots.title;
            (__VLS_ctx.$t('common.message.addWeChat'));
        }
        var __VLS_18;
    }
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex-1 text-center" }));
var __VLS_23 = {}.ElImage;
/** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
// @ts-ignore
var __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({
    src: ((_m = (_l = (_k = (_j = __VLS_ctx.site) === null || _j === void 0 ? void 0 : _j.features) === null || _k === void 0 ? void 0 : _k.support) === null || _l === void 0 ? void 0 : _l.wechat) === null || _m === void 0 ? void 0 : _m.qr),
}));
var __VLS_25 = __VLS_24.apply(void 0, __spreadArray([{
        src: ((_r = (_q = (_p = (_o = __VLS_ctx.site) === null || _o === void 0 ? void 0 : _o.features) === null || _p === void 0 ? void 0 : _p.support) === null || _q === void 0 ? void 0 : _q.wechat) === null || _r === void 0 ? void 0 : _r.qr),
    }], __VLS_functionalComponentArgsRest(__VLS_24), false));
var __VLS_14;
if ((_v = (_u = (_t = (_s = __VLS_ctx.site) === null || _s === void 0 ? void 0 : _s.features) === null || _t === void 0 ? void 0 : _t.support) === null || _u === void 0 ? void 0 : _u.discord) === null || _v === void 0 ? void 0 : _v.enabled) {
    var __VLS_27 = {}.ElMenuItem;
    /** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
    // @ts-ignore
    var __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27(__assign({ 'onClick': {} }, { index: "2" })));
    var __VLS_29 = __VLS_28.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { index: "2" })], __VLS_functionalComponentArgsRest(__VLS_28), false));
    var __VLS_31 = void 0;
    var __VLS_32 = void 0;
    var __VLS_33 = void 0;
    var __VLS_34 = {
        onClick: (__VLS_ctx.onJoin)
    };
    __VLS_30.slots.default;
    var __VLS_35 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35(__assign({ icon: "fa-brands fa-discord" }, { class: "mr-2" })));
    var __VLS_37 = __VLS_36.apply(void 0, __spreadArray([__assign({ icon: "fa-brands fa-discord" }, { class: "mr-2" })], __VLS_functionalComponentArgsRest(__VLS_36), false));
    {
        var __VLS_thisSlot = __VLS_30.slots.title;
        (__VLS_ctx.$t('common.message.joinDiscord'));
    }
    var __VLS_30;
}
var __VLS_10;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['menu']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
// @ts-ignore
var __VLS_6 = __VLS_5;
var __VLS_dollars;
var __VLS_self;
