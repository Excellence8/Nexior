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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var order_1 = require("@/operators/order");
var element_plus_1 = require("element-plus");
var WechatPay_vue_1 = require("@/components/order/WechatPay.vue");
var StripePay_vue_1 = require("@/components/order/StripePay.vue");
var AliPay_vue_1 = require("@/components/order/AliPay.vue");
var models_1 = require("@/models");
var utils_1 = require("@/utils");
var CopyToClipboard_vue_1 = require("@/components/common/CopyToClipboard.vue");
var PayWay;
(function (PayWay) {
    PayWay["WechatPay"] = "WechatPay";
    PayWay["Stripe"] = "Stripe";
    PayWay["AliPay"] = "AliPay";
})(PayWay || (PayWay = {}));
exports.default = (0, vue_1.defineComponent)({
    name: 'ConsoleOrderDetail',
    components: {
        ElButton: element_plus_1.ElButton,
        CopyToClipboard: CopyToClipboard_vue_1.default,
        ElRow: element_plus_1.ElRow,
        ElCard: element_plus_1.ElCard,
        ElCol: element_plus_1.ElCol,
        ElSkeleton: element_plus_1.ElSkeleton,
        ElDivider: element_plus_1.ElDivider,
        ElAlert: element_plus_1.ElAlert,
        ElDescriptions: element_plus_1.ElDescriptions,
        ElDescriptionsItem: element_plus_1.ElDescriptionsItem,
        WechatPayOrder: WechatPay_vue_1.default,
        StripePayOrder: StripePay_vue_1.default,
        AlipayPayOrder: AliPay_vue_1.default
    },
    data: function () {
        return {
            PayWay: PayWay,
            payWay: PayWay.WechatPay,
            OrderState: models_1.OrderState,
            order: undefined,
            showPayWays: true,
            loading: false,
            paying: false,
            prepaying: false,
            applicationType: models_1.IApplicationType
        };
    },
    computed: {
        id: function () {
            var _a, _b;
            return (_b = (_a = this.$route.params) === null || _a === void 0 ? void 0 : _a.id) === null || _b === void 0 ? void 0 : _b.toString();
        },
        redirect: function () {
            var _a;
            return (_a = this.$route.query) === null || _a === void 0 ? void 0 : _a.redirect;
        }
    },
    watch: {
        order: {
            handler: function (val) {
                var _this = this;
                if ((val === null || val === void 0 ? void 0 : val.state) === models_1.OrderState.PAID) {
                    setTimeout(function () {
                        var _a;
                        if (_this.redirect) {
                            window.location.replace((_a = _this.redirect) === null || _a === void 0 ? void 0 : _a.toString());
                        }
                    }, 2000);
                    return;
                }
            },
            deep: true
        }
    },
    mounted: function () {
        this.onFetchData();
    },
    methods: {
        getPriceString: utils_1.getPriceString,
        onFetchData: function () {
            var _this = this;
            this.loading = true;
            order_1.orderOperator
                .refresh(this.id)
                .then(function (_a) {
                var data = _a.data;
                _this.order = data;
                if (data.pay_way) {
                    // @ts-ignore
                    _this.payWay = data.pay_way;
                }
                _this.loading = false;
            })
                .catch(function () {
                _this.loading = false;
            });
        },
        onRepay: function () {
            this.paying = true;
        },
        onPay: function () {
            var _this = this;
            this.prepaying = true;
            order_1.orderOperator
                .pay(this.id, {
                pay_way: this.payWay
            })
                .then(function (_a) {
                var data = _a.data;
                _this.prepaying = false;
                _this.order = data;
                if (_this.order.price && _this.order.price > 0) {
                    _this.paying = true;
                }
            })
                .catch(function () {
                _this.prepaying = false;
            });
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElButton: element_plus_1.ElButton,
    CopyToClipboard: CopyToClipboard_vue_1.default,
    ElRow: element_plus_1.ElRow,
    ElCard: element_plus_1.ElCard,
    ElCol: element_plus_1.ElCol,
    ElSkeleton: element_plus_1.ElSkeleton,
    ElDivider: element_plus_1.ElDivider,
    ElAlert: element_plus_1.ElAlert,
    ElDescriptions: element_plus_1.ElDescriptions,
    ElDescriptionsItem: element_plus_1.ElDescriptionsItem,
    WechatPayOrder: WechatPay_vue_1.default,
    StripePayOrder: StripePay_vue_1.default,
    AlipayPayOrder: AliPay_vue_1.default
};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['payway']} */ ;
// CSS variable injection 
// CSS variable injection end 
var __VLS_0 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ class: "panel" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "panel" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {};
__VLS_3.slots.default;
var __VLS_5 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    span: (24),
}));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{
        span: (24),
    }], __VLS_functionalComponentArgsRest(__VLS_6), false));
__VLS_8.slots.default;
var __VLS_9 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
var __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({}));
var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_10), false));
__VLS_12.slots.default;
var __VLS_13 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
    span: (24),
}));
var __VLS_15 = __VLS_14.apply(void 0, __spreadArray([{
        span: (24),
    }], __VLS_functionalComponentArgsRest(__VLS_14), false));
__VLS_16.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "title" }));
(__VLS_ctx.$t('order.title.info'));
var __VLS_16;
var __VLS_12;
var __VLS_17 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
var __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({}));
var __VLS_19 = __VLS_18.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_18), false));
__VLS_20.slots.default;
var __VLS_21 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
    span: (24),
}));
var __VLS_23 = __VLS_22.apply(void 0, __spreadArray([{
        span: (24),
    }], __VLS_functionalComponentArgsRest(__VLS_22), false));
__VLS_24.slots.default;
var __VLS_25 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
var __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
    shadow: "hover",
}));
var __VLS_27 = __VLS_26.apply(void 0, __spreadArray([{
        shadow: "hover",
    }], __VLS_functionalComponentArgsRest(__VLS_26), false));
__VLS_28.slots.default;
var __VLS_29 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
var __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({}));
var __VLS_31 = __VLS_30.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_30), false));
__VLS_32.slots.default;
var __VLS_33 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
    span: (16),
    offset: (4),
}));
var __VLS_35 = __VLS_34.apply(void 0, __spreadArray([{
        span: (16),
        offset: (4),
    }], __VLS_functionalComponentArgsRest(__VLS_34), false));
__VLS_36.slots.default;
if (__VLS_ctx.loading) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "pt-5" }));
    var __VLS_37 = {}.ElSkeleton;
    /** @type {[typeof __VLS_components.ElSkeleton, typeof __VLS_components.elSkeleton, ]} */ ;
    // @ts-ignore
    var __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
        animated: true,
    }));
    var __VLS_39 = __VLS_38.apply(void 0, __spreadArray([{
            animated: true,
        }], __VLS_functionalComponentArgsRest(__VLS_38), false));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "order" }));
    var __VLS_41 = {}.ElDescriptions;
    /** @type {[typeof __VLS_components.ElDescriptions, typeof __VLS_components.elDescriptions, typeof __VLS_components.ElDescriptions, typeof __VLS_components.elDescriptions, ]} */ ;
    // @ts-ignore
    var __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({
        column: (1),
    }));
    var __VLS_43 = __VLS_42.apply(void 0, __spreadArray([{
            column: (1),
        }], __VLS_functionalComponentArgsRest(__VLS_42), false));
    __VLS_44.slots.default;
    var __VLS_45 = {}.ElDescriptionsItem;
    /** @type {[typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, ]} */ ;
    // @ts-ignore
    var __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
        label: (__VLS_ctx.$t('order.field.id')),
    }));
    var __VLS_47 = __VLS_46.apply(void 0, __spreadArray([{
            label: (__VLS_ctx.$t('order.field.id')),
        }], __VLS_functionalComponentArgsRest(__VLS_46), false));
    __VLS_48.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    ((_a = __VLS_ctx.order) === null || _a === void 0 ? void 0 : _a.id);
    if ((_b = __VLS_ctx.order) === null || _b === void 0 ? void 0 : _b.id) {
        var __VLS_49 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49(__assign({ content: ((_c = __VLS_ctx.order) === null || _c === void 0 ? void 0 : _c.id) }, { class: "inline-block" })));
        var __VLS_51 = __VLS_50.apply(void 0, __spreadArray([__assign({ content: ((_d = __VLS_ctx.order) === null || _d === void 0 ? void 0 : _d.id) }, { class: "inline-block" })], __VLS_functionalComponentArgsRest(__VLS_50), false));
    }
    var __VLS_48;
    var __VLS_53 = {}.ElDescriptionsItem;
    /** @type {[typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, ]} */ ;
    // @ts-ignore
    var __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
        label: (__VLS_ctx.$t('order.field.description')),
    }));
    var __VLS_55 = __VLS_54.apply(void 0, __spreadArray([{
            label: (__VLS_ctx.$t('order.field.description')),
        }], __VLS_functionalComponentArgsRest(__VLS_54), false));
    __VLS_56.slots.default;
    ((_e = __VLS_ctx.order) === null || _e === void 0 ? void 0 : _e.description);
    var __VLS_56;
    if ((_g = (_f = __VLS_ctx.order) === null || _f === void 0 ? void 0 : _f.application) === null || _g === void 0 ? void 0 : _g.service) {
        var __VLS_57 = {}.ElDescriptionsItem;
        /** @type {[typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, ]} */ ;
        // @ts-ignore
        var __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({
            label: (__VLS_ctx.$t('order.field.api')),
        }));
        var __VLS_59 = __VLS_58.apply(void 0, __spreadArray([{
                label: (__VLS_ctx.$t('order.field.api')),
            }], __VLS_functionalComponentArgsRest(__VLS_58), false));
        __VLS_60.slots.default;
        ((_k = (_j = (_h = __VLS_ctx.order) === null || _h === void 0 ? void 0 : _h.application) === null || _j === void 0 ? void 0 : _j.service) === null || _k === void 0 ? void 0 : _k.title);
        var __VLS_60;
    }
    if ((_l = __VLS_ctx.order) === null || _l === void 0 ? void 0 : _l.pay_way) {
        var __VLS_61 = {}.ElDescriptionsItem;
        /** @type {[typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, ]} */ ;
        // @ts-ignore
        var __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({
            label: (__VLS_ctx.$t('order.field.payWay')),
        }));
        var __VLS_63 = __VLS_62.apply(void 0, __spreadArray([{
                label: (__VLS_ctx.$t('order.field.payWay')),
            }], __VLS_functionalComponentArgsRest(__VLS_62), false));
        __VLS_64.slots.default;
        if (((_m = __VLS_ctx.order) === null || _m === void 0 ? void 0 : _m.pay_way) === __VLS_ctx.PayWay.WechatPay) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (__VLS_ctx.$t('order.title.wechatPay'));
        }
        if (((_o = __VLS_ctx.order) === null || _o === void 0 ? void 0 : _o.pay_way) === __VLS_ctx.PayWay.Stripe) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (__VLS_ctx.$t('order.title.stripe'));
        }
        if (((_p = __VLS_ctx.order) === null || _p === void 0 ? void 0 : _p.pay_way) === __VLS_ctx.PayWay.AliPay) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (__VLS_ctx.$t('order.title.aliPay'));
        }
        var __VLS_64;
    }
    var __VLS_65 = {}.ElDescriptionsItem;
    /** @type {[typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, ]} */ ;
    // @ts-ignore
    var __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({
        label: (__VLS_ctx.$t('order.field.createdAt')),
    }));
    var __VLS_67 = __VLS_66.apply(void 0, __spreadArray([{
            label: (__VLS_ctx.$t('order.field.createdAt')),
        }], __VLS_functionalComponentArgsRest(__VLS_66), false));
    __VLS_68.slots.default;
    (__VLS_ctx.$dayjs.format((_q = __VLS_ctx.order) === null || _q === void 0 ? void 0 : _q.created_at));
    var __VLS_68;
    var __VLS_69 = {}.ElDescriptionsItem;
    /** @type {[typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, typeof __VLS_components.ElDescriptionsItem, typeof __VLS_components.elDescriptionsItem, ]} */ ;
    // @ts-ignore
    var __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({
        label: (__VLS_ctx.$t('order.field.price')),
    }));
    var __VLS_71 = __VLS_70.apply(void 0, __spreadArray([{
            label: (__VLS_ctx.$t('order.field.price')),
        }], __VLS_functionalComponentArgsRest(__VLS_70), false));
    __VLS_72.slots.default;
    if (((_r = __VLS_ctx.order) === null || _r === void 0 ? void 0 : _r.price) && ((_s = __VLS_ctx.order) === null || _s === void 0 ? void 0 : _s.price) > 0) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "price unfree" }));
        (__VLS_ctx.getPriceString({ value: (_t = __VLS_ctx.order) === null || _t === void 0 ? void 0 : _t.price }));
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "price free" }));
        (__VLS_ctx.$t('order.message.free'));
    }
    var __VLS_72;
    var __VLS_44;
}
var __VLS_36;
var __VLS_32;
if (((_u = __VLS_ctx.order) === null || _u === void 0 ? void 0 : _u.state) === __VLS_ctx.OrderState.PAID || ((_v = __VLS_ctx.order) === null || _v === void 0 ? void 0 : _v.state) === __VLS_ctx.OrderState.FINISHED) {
    var __VLS_73 = {}.ElRow;
    /** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
    // @ts-ignore
    var __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73(__assign({ class: "mb-5" })));
    var __VLS_75 = __VLS_74.apply(void 0, __spreadArray([__assign({ class: "mb-5" })], __VLS_functionalComponentArgsRest(__VLS_74), false));
    __VLS_76.slots.default;
    var __VLS_77 = {}.ElCol;
    /** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
    // @ts-ignore
    var __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({
        span: (16),
        offset: (4),
    }));
    var __VLS_79 = __VLS_78.apply(void 0, __spreadArray([{
            span: (16),
            offset: (4),
        }], __VLS_functionalComponentArgsRest(__VLS_78), false));
    __VLS_80.slots.default;
    var __VLS_81 = {}.ElDivider;
    /** @type {[typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, ]} */ ;
    // @ts-ignore
    var __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({
        borderStyle: "dashed",
    }));
    var __VLS_83 = __VLS_82.apply(void 0, __spreadArray([{
            borderStyle: "dashed",
        }], __VLS_functionalComponentArgsRest(__VLS_82), false));
    var __VLS_85 = {}.ElAlert;
    /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
    // @ts-ignore
    var __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({
        title: (__VLS_ctx.$t('order.message.paidSuccessfully')),
        type: "success",
        showIcon: true,
        closable: (false),
    }));
    var __VLS_87 = __VLS_86.apply(void 0, __spreadArray([{
            title: (__VLS_ctx.$t('order.message.paidSuccessfully')),
            type: "success",
            showIcon: true,
            closable: (false),
        }], __VLS_functionalComponentArgsRest(__VLS_86), false));
    var __VLS_80;
    var __VLS_76;
}
if (((_w = __VLS_ctx.order) === null || _w === void 0 ? void 0 : _w.state) === __VLS_ctx.OrderState.EXPIRED) {
    var __VLS_89 = {}.ElRow;
    /** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
    // @ts-ignore
    var __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89(__assign({ class: "mb-5" })));
    var __VLS_91 = __VLS_90.apply(void 0, __spreadArray([__assign({ class: "mb-5" })], __VLS_functionalComponentArgsRest(__VLS_90), false));
    __VLS_92.slots.default;
    var __VLS_93 = {}.ElCol;
    /** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
    // @ts-ignore
    var __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, new __VLS_93({
        span: (16),
        offset: (4),
    }));
    var __VLS_95 = __VLS_94.apply(void 0, __spreadArray([{
            span: (16),
            offset: (4),
        }], __VLS_functionalComponentArgsRest(__VLS_94), false));
    __VLS_96.slots.default;
    var __VLS_97 = {}.ElDivider;
    /** @type {[typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, ]} */ ;
    // @ts-ignore
    var __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({
        borderStyle: "dashed",
    }));
    var __VLS_99 = __VLS_98.apply(void 0, __spreadArray([{
            borderStyle: "dashed",
        }], __VLS_functionalComponentArgsRest(__VLS_98), false));
    var __VLS_101 = {}.ElAlert;
    /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
    // @ts-ignore
    var __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({
        title: (__VLS_ctx.$t('order.message.orderExpired')),
        type: "error",
        showIcon: true,
        closable: (false),
    }));
    var __VLS_103 = __VLS_102.apply(void 0, __spreadArray([{
            title: (__VLS_ctx.$t('order.message.orderExpired')),
            type: "error",
            showIcon: true,
            closable: (false),
        }], __VLS_functionalComponentArgsRest(__VLS_102), false));
    var __VLS_96;
    var __VLS_92;
}
if (((_x = __VLS_ctx.order) === null || _x === void 0 ? void 0 : _x.state) === __VLS_ctx.OrderState.PENDING || ((_y = __VLS_ctx.order) === null || _y === void 0 ? void 0 : _y.state) === __VLS_ctx.OrderState.FAILED) {
    var __VLS_105 = {}.ElRow;
    /** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
    // @ts-ignore
    var __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, new __VLS_105({}));
    var __VLS_107 = __VLS_106.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_106), false));
    __VLS_108.slots.default;
    var __VLS_109 = {}.ElCol;
    /** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
    // @ts-ignore
    var __VLS_110 = __VLS_asFunctionalComponent(__VLS_109, new __VLS_109({
        span: (16),
        offset: (4),
    }));
    var __VLS_111 = __VLS_110.apply(void 0, __spreadArray([{
            span: (16),
            offset: (4),
        }], __VLS_functionalComponentArgsRest(__VLS_110), false));
    __VLS_112.slots.default;
    var __VLS_113 = {}.ElDivider;
    /** @type {[typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, ]} */ ;
    // @ts-ignore
    var __VLS_114 = __VLS_asFunctionalComponent(__VLS_113, new __VLS_113({
        borderStyle: "dashed",
    }));
    var __VLS_115 = __VLS_114.apply(void 0, __spreadArray([{
            borderStyle: "dashed",
        }], __VLS_functionalComponentArgsRest(__VLS_114), false));
    if (__VLS_ctx.showPayWays && __VLS_ctx.order.price && __VLS_ctx.order.price > 0 && !__VLS_ctx.order.pay_way) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "payways mb-6" }));
        if (true) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: function () {
                    var _a, _b;
                    var _c = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _c[_i] = arguments[_i];
                    }
                    var $event = _c[0];
                    if (!(((_a = __VLS_ctx.order) === null || _a === void 0 ? void 0 : _a.state) === __VLS_ctx.OrderState.PENDING || ((_b = __VLS_ctx.order) === null || _b === void 0 ? void 0 : _b.state) === __VLS_ctx.OrderState.FAILED))
                        return;
                    if (!(__VLS_ctx.showPayWays && __VLS_ctx.order.price && __VLS_ctx.order.price > 0 && !__VLS_ctx.order.pay_way))
                        return;
                    if (!(true))
                        return;
                    __VLS_ctx.payWay = __VLS_ctx.PayWay.WechatPay;
                } }, { class: ({
                    payway: true,
                    wechatpay: true,
                    active: __VLS_ctx.payWay === __VLS_ctx.PayWay.WechatPay
                }) }));
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "payicon wechatpay" }));
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "payname" }));
            (__VLS_ctx.$t('order.title.wechatPay'));
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: function () {
                var _a, _b;
                var _c = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _c[_i] = arguments[_i];
                }
                var $event = _c[0];
                if (!(((_a = __VLS_ctx.order) === null || _a === void 0 ? void 0 : _a.state) === __VLS_ctx.OrderState.PENDING || ((_b = __VLS_ctx.order) === null || _b === void 0 ? void 0 : _b.state) === __VLS_ctx.OrderState.FAILED))
                    return;
                if (!(__VLS_ctx.showPayWays && __VLS_ctx.order.price && __VLS_ctx.order.price > 0 && !__VLS_ctx.order.pay_way))
                    return;
                __VLS_ctx.payWay = __VLS_ctx.PayWay.AliPay;
            } }, { class: ({
                payway: true,
                alipay: true,
                active: __VLS_ctx.payWay === __VLS_ctx.PayWay.AliPay
            }) }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "payicon alipay" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "payname" }));
        (__VLS_ctx.$t('order.title.aliPay'));
        if (true) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: function () {
                    var _a, _b;
                    var _c = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _c[_i] = arguments[_i];
                    }
                    var $event = _c[0];
                    if (!(((_a = __VLS_ctx.order) === null || _a === void 0 ? void 0 : _a.state) === __VLS_ctx.OrderState.PENDING || ((_b = __VLS_ctx.order) === null || _b === void 0 ? void 0 : _b.state) === __VLS_ctx.OrderState.FAILED))
                        return;
                    if (!(__VLS_ctx.showPayWays && __VLS_ctx.order.price && __VLS_ctx.order.price > 0 && !__VLS_ctx.order.pay_way))
                        return;
                    if (!(true))
                        return;
                    __VLS_ctx.payWay = __VLS_ctx.PayWay.Stripe;
                } }, { class: ({
                    payway: true,
                    stripe: true,
                    active: __VLS_ctx.payWay === __VLS_ctx.PayWay.Stripe
                }) }));
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "payicon stripe" }));
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "payname" }));
            (__VLS_ctx.$t('order.title.stripe'));
        }
    }
    if (!((_z = __VLS_ctx.order) === null || _z === void 0 ? void 0 : _z.pay_way)) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        var __VLS_117 = {}.ElButton;
        /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
        // @ts-ignore
        var __VLS_118 = __VLS_asFunctionalComponent(__VLS_117, new __VLS_117(__assign(__assign({ 'onClick': {} }, { loading: (__VLS_ctx.prepaying), round: true, type: "primary", size: "large" }), { class: "btn-pay" })));
        var __VLS_119 = __VLS_118.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { loading: (__VLS_ctx.prepaying), round: true, type: "primary", size: "large" }), { class: "btn-pay" })], __VLS_functionalComponentArgsRest(__VLS_118), false));
        var __VLS_121 = void 0;
        var __VLS_122 = void 0;
        var __VLS_123 = void 0;
        var __VLS_124 = {
            onClick: (__VLS_ctx.onPay)
        };
        __VLS_120.slots.default;
        (__VLS_ctx.$t('common.button.pay'));
        var __VLS_120;
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        var __VLS_125 = {}.ElButton;
        /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
        // @ts-ignore
        var __VLS_126 = __VLS_asFunctionalComponent(__VLS_125, new __VLS_125(__assign(__assign({ 'onClick': {} }, { type: "primary", round: true, size: "large" }), { class: "btn-repay" })));
        var __VLS_127 = __VLS_126.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { type: "primary", round: true, size: "large" }), { class: "btn-repay" })], __VLS_functionalComponentArgsRest(__VLS_126), false));
        var __VLS_129 = void 0;
        var __VLS_130 = void 0;
        var __VLS_131 = void 0;
        var __VLS_132 = {
            onClick: (__VLS_ctx.onRepay)
        };
        __VLS_128.slots.default;
        (__VLS_ctx.$t('common.button.repay'));
        var __VLS_128;
    }
    var __VLS_112;
    var __VLS_108;
}
var __VLS_28;
var __VLS_24;
var __VLS_20;
var __VLS_133 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
var __VLS_134 = __VLS_asFunctionalComponent(__VLS_133, new __VLS_133({}));
var __VLS_135 = __VLS_134.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_134), false));
__VLS_136.slots.default;
var __VLS_137 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_138 = __VLS_asFunctionalComponent(__VLS_137, new __VLS_137({
    span: (24),
}));
var __VLS_139 = __VLS_138.apply(void 0, __spreadArray([{
        span: (24),
    }], __VLS_functionalComponentArgsRest(__VLS_138), false));
__VLS_140.slots.default;
if (__VLS_ctx.order && __VLS_ctx.payWay === __VLS_ctx.PayWay.WechatPay) {
    var __VLS_141 = {}.WechatPayOrder;
    /** @type {[typeof __VLS_components.WechatPayOrder, typeof __VLS_components.wechatPayOrder, ]} */ ;
    // @ts-ignore
    var __VLS_142 = __VLS_asFunctionalComponent(__VLS_141, new __VLS_141(__assign({ 'onHide': {} }, { modelValue: (__VLS_ctx.order), visible: (__VLS_ctx.paying) })));
    var __VLS_143 = __VLS_142.apply(void 0, __spreadArray([__assign({ 'onHide': {} }, { modelValue: (__VLS_ctx.order), visible: (__VLS_ctx.paying) })], __VLS_functionalComponentArgsRest(__VLS_142), false));
    var __VLS_145 = void 0;
    var __VLS_146 = void 0;
    var __VLS_147 = void 0;
    var __VLS_148 = {
        onHide: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!(__VLS_ctx.order && __VLS_ctx.payWay === __VLS_ctx.PayWay.WechatPay))
                return;
            __VLS_ctx.paying = false;
        }
    };
    var __VLS_144;
}
if (__VLS_ctx.order && __VLS_ctx.payWay === __VLS_ctx.PayWay.Stripe) {
    var __VLS_149 = {}.StripePayOrder;
    /** @type {[typeof __VLS_components.StripePayOrder, typeof __VLS_components.stripePayOrder, ]} */ ;
    // @ts-ignore
    var __VLS_150 = __VLS_asFunctionalComponent(__VLS_149, new __VLS_149(__assign({ 'onHide': {} }, { modelValue: (__VLS_ctx.order), visible: (__VLS_ctx.paying) })));
    var __VLS_151 = __VLS_150.apply(void 0, __spreadArray([__assign({ 'onHide': {} }, { modelValue: (__VLS_ctx.order), visible: (__VLS_ctx.paying) })], __VLS_functionalComponentArgsRest(__VLS_150), false));
    var __VLS_153 = void 0;
    var __VLS_154 = void 0;
    var __VLS_155 = void 0;
    var __VLS_156 = {
        onHide: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!(__VLS_ctx.order && __VLS_ctx.payWay === __VLS_ctx.PayWay.Stripe))
                return;
            __VLS_ctx.paying = false;
        }
    };
    var __VLS_152;
}
if (__VLS_ctx.order && __VLS_ctx.payWay === __VLS_ctx.PayWay.AliPay) {
    var __VLS_157 = {}.AlipayPayOrder;
    /** @type {[typeof __VLS_components.AlipayPayOrder, typeof __VLS_components.alipayPayOrder, ]} */ ;
    // @ts-ignore
    var __VLS_158 = __VLS_asFunctionalComponent(__VLS_157, new __VLS_157(__assign({ 'onHide': {} }, { modelValue: (__VLS_ctx.order), visible: (__VLS_ctx.paying) })));
    var __VLS_159 = __VLS_158.apply(void 0, __spreadArray([__assign({ 'onHide': {} }, { modelValue: (__VLS_ctx.order), visible: (__VLS_ctx.paying) })], __VLS_functionalComponentArgsRest(__VLS_158), false));
    var __VLS_161 = void 0;
    var __VLS_162 = void 0;
    var __VLS_163 = void 0;
    var __VLS_164 = {
        onHide: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!(__VLS_ctx.order && __VLS_ctx.payWay === __VLS_ctx.PayWay.AliPay))
                return;
            __VLS_ctx.paying = false;
        }
    };
    var __VLS_160;
}
var __VLS_140;
var __VLS_136;
var __VLS_8;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-5']} */ ;
/** @type {__VLS_StyleScopedClasses['order']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-block']} */ ;
/** @type {__VLS_StyleScopedClasses['price']} */ ;
/** @type {__VLS_StyleScopedClasses['unfree']} */ ;
/** @type {__VLS_StyleScopedClasses['price']} */ ;
/** @type {__VLS_StyleScopedClasses['free']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
/** @type {__VLS_StyleScopedClasses['payways']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['payway']} */ ;
/** @type {__VLS_StyleScopedClasses['wechatpay']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['payicon']} */ ;
/** @type {__VLS_StyleScopedClasses['wechatpay']} */ ;
/** @type {__VLS_StyleScopedClasses['payname']} */ ;
/** @type {__VLS_StyleScopedClasses['payway']} */ ;
/** @type {__VLS_StyleScopedClasses['alipay']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['payicon']} */ ;
/** @type {__VLS_StyleScopedClasses['alipay']} */ ;
/** @type {__VLS_StyleScopedClasses['payname']} */ ;
/** @type {__VLS_StyleScopedClasses['payway']} */ ;
/** @type {__VLS_StyleScopedClasses['stripe']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['payicon']} */ ;
/** @type {__VLS_StyleScopedClasses['stripe']} */ ;
/** @type {__VLS_StyleScopedClasses['payname']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-pay']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-repay']} */ ;
var __VLS_dollars;
var __VLS_self;
