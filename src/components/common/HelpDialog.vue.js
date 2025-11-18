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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var router_1 = require("@/router");
exports.default = (0, vue_1.defineComponent)({
    name: 'HelpEntry',
    components: {
        ElImage: element_plus_1.ElImage,
        ElDialog: element_plus_1.ElDialog,
        ElPopover: element_plus_1.ElPopover,
        ElMenu: element_plus_1.ElMenu,
        ElMenuItem: element_plus_1.ElMenuItem,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon
    },
    props: {
        visible: {
            type: Boolean,
            default: true
        }
    },
    emits: ['close'],
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
    ElDialog: element_plus_1.ElDialog,
    ElPopover: element_plus_1.ElPopover,
    ElMenu: element_plus_1.ElMenu,
    ElMenuItem: element_plus_1.ElMenuItem,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
var __VLS_0 = {}.ElDialog;
/** @type {[typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({ 'onClose': {} }, { modelValue: (__VLS_ctx.visible), width: (200) }), { class: "text-center" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ 'onClose': {} }, { modelValue: (__VLS_ctx.visible), width: (200) }), { class: "text-center" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4;
var __VLS_5;
var __VLS_6;
var __VLS_7 = {
    onClose: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.$emit('close');
    }
};
var __VLS_8 = {};
__VLS_3.slots.default;
var __VLS_9 = {}.ElMenu;
/** @type {[typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, ]} */ ;
// @ts-ignore
var __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9(__assign({ collapse: (false) }, { class: "menu" })));
var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([__assign({ collapse: (false) }, { class: "menu" })], __VLS_functionalComponentArgsRest(__VLS_10), false));
__VLS_12.slots.default;
if ((_d = (_c = (_b = (_a = __VLS_ctx.site) === null || _a === void 0 ? void 0 : _a.features) === null || _b === void 0 ? void 0 : _b.support) === null || _c === void 0 ? void 0 : _c.discord) === null || _d === void 0 ? void 0 : _d.enabled) {
    var __VLS_13 = {}.ElMenuItem;
    /** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
    // @ts-ignore
    var __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13(__assign({ 'onClick': {} }, { index: "1" })));
    var __VLS_15 = __VLS_14.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { index: "1" })], __VLS_functionalComponentArgsRest(__VLS_14), false));
    var __VLS_17 = void 0;
    var __VLS_18 = void 0;
    var __VLS_19 = void 0;
    var __VLS_20 = {
        onClick: (__VLS_ctx.onJoin)
    };
    __VLS_16.slots.default;
    var __VLS_21 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21(__assign({ icon: "fa-brands fa-discord" }, { class: "mr-2" })));
    var __VLS_23 = __VLS_22.apply(void 0, __spreadArray([__assign({ icon: "fa-brands fa-discord" }, { class: "mr-2" })], __VLS_functionalComponentArgsRest(__VLS_22), false));
    {
        var __VLS_thisSlot = __VLS_16.slots.title;
        (__VLS_ctx.$t('common.message.joinDiscord'));
    }
    var __VLS_16;
}
var __VLS_25 = {}.ElPopover;
/** @type {[typeof __VLS_components.ElPopover, typeof __VLS_components.elPopover, typeof __VLS_components.ElPopover, typeof __VLS_components.elPopover, ]} */ ;
// @ts-ignore
var __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
    width: (350),
    trigger: "hover",
}));
var __VLS_27 = __VLS_26.apply(void 0, __spreadArray([{
        width: (350),
        trigger: "hover",
    }], __VLS_functionalComponentArgsRest(__VLS_26), false));
__VLS_28.slots.default;
{
    var __VLS_thisSlot = __VLS_28.slots.reference;
    if ((_h = (_g = (_f = (_e = __VLS_ctx.site) === null || _e === void 0 ? void 0 : _e.features) === null || _f === void 0 ? void 0 : _f.support) === null || _g === void 0 ? void 0 : _g.wechat) === null || _h === void 0 ? void 0 : _h.enabled) {
        var __VLS_29 = {}.ElMenuItem;
        /** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
        // @ts-ignore
        var __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({
            index: "2",
        }));
        var __VLS_31 = __VLS_30.apply(void 0, __spreadArray([{
                index: "2",
            }], __VLS_functionalComponentArgsRest(__VLS_30), false));
        __VLS_32.slots.default;
        var __VLS_33 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33(__assign({ icon: "fa-brands fa-weixin" }, { class: "mr-2" })));
        var __VLS_35 = __VLS_34.apply(void 0, __spreadArray([__assign({ icon: "fa-brands fa-weixin" }, { class: "mr-2" })], __VLS_functionalComponentArgsRest(__VLS_34), false));
        {
            var __VLS_thisSlot_1 = __VLS_32.slots.title;
            (__VLS_ctx.$t('common.message.addWeChat'));
        }
        var __VLS_32;
    }
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex-1 text-center" }));
var __VLS_37 = {}.ElImage;
/** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
// @ts-ignore
var __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
    src: ((_m = (_l = (_k = (_j = __VLS_ctx.site) === null || _j === void 0 ? void 0 : _j.features) === null || _k === void 0 ? void 0 : _k.support) === null || _l === void 0 ? void 0 : _l.wechat) === null || _m === void 0 ? void 0 : _m.qr),
}));
var __VLS_39 = __VLS_38.apply(void 0, __spreadArray([{
        src: ((_r = (_q = (_p = (_o = __VLS_ctx.site) === null || _o === void 0 ? void 0 : _o.features) === null || _p === void 0 ? void 0 : _p.support) === null || _q === void 0 ? void 0 : _q.wechat) === null || _r === void 0 ? void 0 : _r.qr),
    }], __VLS_functionalComponentArgsRest(__VLS_38), false));
var __VLS_28;
var __VLS_12;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['menu']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
var __VLS_dollars;
var __VLS_self;
