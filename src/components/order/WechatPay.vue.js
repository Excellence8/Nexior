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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("@/operators");
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var vue_qrcode_1 = require("vue-qrcode");
var models_1 = require("@/models");
exports.default = (0, vue_1.defineComponent)({
    name: 'PayOrderDialog',
    components: {
        ElDialog: element_plus_1.ElDialog,
        QrCode: vue_qrcode_1.default,
        ElRow: element_plus_1.ElRow,
        ElCol: element_plus_1.ElCol
    },
    props: {
        modelValue: {
            type: Object,
            required: true
        },
        visible: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    emits: ['hide', 'update:modelValue'],
    data: function () {
        return {
            refreshTimer: undefined
        };
    },
    mounted: function () {
        this.onRefresh();
    },
    unmounted: function () {
        if (this.refreshTimer) {
            clearTimeout(this.refreshTimer);
        }
    },
    methods: {
        onRefresh: function () {
            var _this = this;
            if (!this.modelValue.id) {
                console.error('id does not exist');
                return;
            }
            operators_1.orderOperator
                .refresh(this.modelValue.id)
                .then(function (_a) {
                var data = _a.data;
                // if not paid, check for next loop
                if (data.state !== models_1.OrderState.PAID) {
                    setTimeout(function () {
                        _this.onRefresh();
                    }, 2000);
                }
                else {
                    // paid, just notify parent, and hide the dialog
                    _this.$emit('hide');
                }
                _this.$emit('update:modelValue', data);
            })
                .catch(function () {
                setTimeout(function () {
                    _this.onRefresh();
                }, 2000);
            });
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElDialog: element_plus_1.ElDialog,
    QrCode: vue_qrcode_1.default,
    ElRow: element_plus_1.ElRow,
    ElCol: element_plus_1.ElCol
};
var __VLS_components;
var __VLS_directives;
var __VLS_0 = {}.ElDialog;
/** @type {[typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.visible),
    title: (__VLS_ctx.$t('application.title.buyService')),
    width: "500px",
    center: true,
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.visible),
        title: (__VLS_ctx.$t('application.title.buyService')),
        width: "500px",
        center: true,
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {};
__VLS_3.slots.default;
var __VLS_5 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5(__assign({ class: "paycodes py-[30px] w-[500px] mx-auto" })));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([__assign({ class: "paycodes py-[30px] w-[500px] mx-auto" })], __VLS_functionalComponentArgsRest(__VLS_6), false));
__VLS_8.slots.default;
var __VLS_9 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    span: (12),
}));
var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([{
        span: (12),
    }], __VLS_functionalComponentArgsRest(__VLS_10), false));
__VLS_12.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "paycode wechat" }));
if ((_a = __VLS_ctx.modelValue) === null || _a === void 0 ? void 0 : _a.pay_url) {
    var __VLS_13 = {}.QrCode;
    /** @type {[typeof __VLS_components.QrCode, typeof __VLS_components.qrCode, ]} */ ;
    // @ts-ignore
    var __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13(__assign(__assign({ value: ((_b = __VLS_ctx.modelValue) === null || _b === void 0 ? void 0 : _b.pay_url), size: (200) }, { class: "qrcode m-auto w-[200px] h-[200px]" }), { type: "image/png", color: ({ dark: '#000000', light: '#ffffff' }) })));
    var __VLS_15 = __VLS_14.apply(void 0, __spreadArray([__assign(__assign({ value: ((_c = __VLS_ctx.modelValue) === null || _c === void 0 ? void 0 : _c.pay_url), size: (200) }, { class: "qrcode m-auto w-[200px] h-[200px]" }), { type: "image/png", color: ({ dark: '#000000', light: '#ffffff' }) })], __VLS_functionalComponentArgsRest(__VLS_14), false));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "help-text block bg-[#00c800] text-white text-[14px] h-[35px] w-[240px] text-center leading-[35px] mt-[10px] mx-auto" }));
(__VLS_ctx.$t('order.message.wechatPayHelp'));
var __VLS_12;
var __VLS_17 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
    span: (12),
}));
var __VLS_19 = __VLS_18.apply(void 0, __spreadArray([{
        span: (12),
    }], __VLS_functionalComponentArgsRest(__VLS_18), false));
__VLS_20.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "help-img" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "https://midas.gtimg.cn/enterprise/images/ep_sys_wx_tip.jpg",
});
var __VLS_20;
var __VLS_8;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['paycodes']} */ ;
/** @type {__VLS_StyleScopedClasses['py-[30px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[500px]']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['paycode']} */ ;
/** @type {__VLS_StyleScopedClasses['wechat']} */ ;
/** @type {__VLS_StyleScopedClasses['qrcode']} */ ;
/** @type {__VLS_StyleScopedClasses['m-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[200px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[200px]']} */ ;
/** @type {__VLS_StyleScopedClasses['help-text']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#00c800]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[14px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[35px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[240px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-[35px]']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['help-img']} */ ;
var __VLS_dollars;
var __VLS_self;
