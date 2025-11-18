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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var models_1 = require("@/models");
var element_plus_1 = require("element-plus");
var router_1 = require("@/router");
var Price_vue_1 = require("@/components/common/Price.vue");
var operators_1 = require("@/operators");
var utils_1 = require("@/utils");
var Estimation_vue_1 = require("@/components/service/Estimation.vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'ConsoleApplicationBuy',
    components: {
        ElSkeleton: element_plus_1.ElSkeleton,
        ElRow: element_plus_1.ElRow,
        ElCol: element_plus_1.ElCol,
        ElCard: element_plus_1.ElCard,
        ElForm: element_plus_1.ElForm,
        ElFormItem: element_plus_1.ElFormItem,
        ElButton: element_plus_1.ElButton,
        ElDivider: element_plus_1.ElDivider,
        ElRadioGroup: element_plus_1.ElRadioGroup,
        ElRadioButton: element_plus_1.ElRadioButton,
        Price: Price_vue_1.default,
        ServiceEstimation: Estimation_vue_1.default
    },
    data: function () {
        return {
            lang: this.$i18n.locale,
            application: undefined,
            loading: false,
            type: models_1.IPackageType.USAGE,
            form: {
                packageId: undefined,
                amount: undefined
            },
            creating: false
        };
    },
    computed: {
        applicationId: function () {
            var _a, _b;
            return (_b = (_a = this.$route.params) === null || _a === void 0 ? void 0 : _a.id) === null || _b === void 0 ? void 0 : _b.toString();
        },
        id: function () {
            var _a, _b;
            return (_b = (_a = this.$route.params) === null || _a === void 0 ? void 0 : _a.id) === null || _b === void 0 ? void 0 : _b.toString();
        },
        price: function () {
            var _a, _b, _c;
            if (((_b = (_a = this.application) === null || _a === void 0 ? void 0 : _a.service) === null || _b === void 0 ? void 0 : _b.price) && this.form.amount) {
                return this.form.amount * ((_c = this.application.service) === null || _c === void 0 ? void 0 : _c.price);
            }
            return 0;
        },
        packages: function () {
            var _a, _b;
            return (((_b = (_a = this.application) === null || _a === void 0 ? void 0 : _a.packages) === null || _b === void 0 ? void 0 : _b.filter(function (pkg) { return pkg.type === models_1.IPackageType.USAGE; }).sort(function (a, b) { return a.amount - b.amount; })) || []);
        },
        package: function () {
            var _this = this;
            if (this.packages && this.form.packageId) {
                var filterPackages = this.packages.filter(function (item) { return item.id === _this.form.packageId; });
                if (filterPackages.length > 0) {
                    return filterPackages[0];
                }
            }
            return undefined;
        }
    },
    mounted: function () {
        this.onFetchApplication();
    },
    methods: {
        getDiscount: function (pkg) {
            var _a, _b, _c, _d;
            if (this.packages && this.packages.length > 0) {
                if ((_a = this.lang) === null || _a === void 0 ? void 0 : _a.startsWith('zh')) {
                    return (
                    // @ts-ignore
                    ((_c = ((10 * (pkg === null || pkg === void 0 ? void 0 : pkg.price)) / (pkg === null || pkg === void 0 ? void 0 : pkg.amount) / (this.packages[0].price / ((_b = this.packages[0]) === null || _b === void 0 ? void 0 : _b.amount)))) === null || _c === void 0 ? void 0 : _c.toFixed(1)) + '折');
                }
                else {
                    return (Math.round(100 - (100 * (pkg === null || pkg === void 0 ? void 0 : pkg.price)) / (pkg === null || pkg === void 0 ? void 0 : pkg.amount) / (this.packages[0].price / ((_d = this.packages[0]) === null || _d === void 0 ? void 0 : _d.amount))) +
                        '% OFF');
                }
            }
            return '';
        },
        onSubscribe: function () {
            this.$router.push({
                name: router_1.ROUTE_CONSOLE_APPLICATION_SUBSCRIBE,
                params: this.$route.params
            });
        },
        getPriceString: utils_1.getPriceString,
        onFetchApplication: function () {
            var _this = this;
            this.loading = true;
            operators_1.applicationOperator
                .get(this.id)
                .then(function (_a) {
                var _b, _c;
                var data = _a.data;
                _this.application = data;
                _this.loading = false;
                // by default select first packageId
                _this.form.packageId = (_c = (_b = _this.packages) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.id;
            })
                .catch(function () {
                _this.loading = false;
            });
        },
        onChangeType: function () {
            this.$router.push({
                name: router_1.ROUTE_CONSOLE_APPLICATION_SUBSCRIBE,
                params: this.$route.params
            });
        },
        onCreateOrder: function () {
            var _this = this;
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            if (!((_a = this.application) === null || _a === void 0 ? void 0 : _a.id)) {
                return;
            }
            this.creating = true;
            var unit = this.$t("service.unit.".concat((_c = (_b = this.application) === null || _b === void 0 ? void 0 : _b.service) === null || _c === void 0 ? void 0 : _c.unit, "s"));
            operators_1.orderOperator
                .create(__assign(__assign({ application_id: (_d = this.application) === null || _d === void 0 ? void 0 : _d.id, amount: (_e = this.package) === null || _e === void 0 ? void 0 : _e.amount }, (this.form.packageId !== 'custom' && this.package
                ? {
                    package_id: this.package.id
                }
                : {})), { description: ((_f = this.application) === null || _f === void 0 ? void 0 : _f.service)
                    ? "".concat((_h = (_g = this.application) === null || _g === void 0 ? void 0 : _g.service) === null || _h === void 0 ? void 0 : _h.title, " x ").concat((_j = this.package) === null || _j === void 0 ? void 0 : _j.amount, " ").concat(unit)
                    : this.$t('application.title.globalBuy') +
                        ' - ' +
                        ((_k = this.package) === null || _k === void 0 ? void 0 : _k.amount) +
                        ' ' +
                        this.$t('service.unit.credits') }))
                .then(function (_a) {
                var data = _a.data;
                _this.creating = false;
                var order = data;
                _this.$router.push({
                    name: router_1.ROUTE_CONSOLE_ORDER_DETAIL,
                    params: {
                        id: order.id
                    }
                });
            })
                .catch(function () {
                element_plus_1.ElMessage.error(_this.$t('order.message.createFailed'));
                _this.creating = false;
            });
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElSkeleton: element_plus_1.ElSkeleton,
    ElRow: element_plus_1.ElRow,
    ElCol: element_plus_1.ElCol,
    ElCard: element_plus_1.ElCard,
    ElForm: element_plus_1.ElForm,
    ElFormItem: element_plus_1.ElFormItem,
    ElButton: element_plus_1.ElButton,
    ElDivider: element_plus_1.ElDivider,
    ElRadioGroup: element_plus_1.ElRadioGroup,
    ElRadioButton: element_plus_1.ElRadioButton,
    Price: Price_vue_1.default,
    ServiceEstimation: Estimation_vue_1.default
};
var __VLS_components;
var __VLS_directives;
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
(__VLS_ctx.$t('common.title.buyMore'));
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
    var __VLS_37 = {}.ElSkeleton;
    /** @type {[typeof __VLS_components.ElSkeleton, typeof __VLS_components.elSkeleton, ]} */ ;
    // @ts-ignore
    var __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({}));
    var __VLS_39 = __VLS_38.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_38), false));
}
else if (__VLS_ctx.application) {
    var __VLS_41 = {}.ElForm;
    /** @type {[typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ]} */ ;
    // @ts-ignore
    var __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({
        labelWidth: "100px",
    }));
    var __VLS_43 = __VLS_42.apply(void 0, __spreadArray([{
            labelWidth: "100px",
        }], __VLS_functionalComponentArgsRest(__VLS_42), false));
    __VLS_44.slots.default;
    if ((_a = __VLS_ctx.application) === null || _a === void 0 ? void 0 : _a.service) {
        var __VLS_45 = {}.ElFormItem;
        /** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
        // @ts-ignore
        var __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
            label: (__VLS_ctx.$t('application.field.service')),
        }));
        var __VLS_47 = __VLS_46.apply(void 0, __spreadArray([{
                label: (__VLS_ctx.$t('application.field.service')),
            }], __VLS_functionalComponentArgsRest(__VLS_46), false));
        __VLS_48.slots.default;
        ((_c = (_b = __VLS_ctx.application) === null || _b === void 0 ? void 0 : _b.service) === null || _c === void 0 ? void 0 : _c.title);
        var __VLS_48;
    }
    else {
        var __VLS_49 = {}.ElFormItem;
        /** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
        // @ts-ignore
        var __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({
            label: (__VLS_ctx.$t('application.field.scope')),
        }));
        var __VLS_51 = __VLS_50.apply(void 0, __spreadArray([{
                label: (__VLS_ctx.$t('application.field.scope')),
            }], __VLS_functionalComponentArgsRest(__VLS_50), false));
        __VLS_52.slots.default;
        (__VLS_ctx.$t('application.title.globalBuy'));
        var __VLS_52;
    }
    var __VLS_53 = {}.ElFormItem;
    /** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
    // @ts-ignore
    var __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53(__assign({ label: (__VLS_ctx.$t('application.field.package')) }, { class: "mb-0" })));
    var __VLS_55 = __VLS_54.apply(void 0, __spreadArray([__assign({ label: (__VLS_ctx.$t('application.field.package')) }, { class: "mb-0" })], __VLS_functionalComponentArgsRest(__VLS_54), false));
    __VLS_56.slots.default;
    if (__VLS_ctx.packages) {
        var __VLS_57 = {}.ElRadioGroup;
        /** @type {[typeof __VLS_components.ElRadioGroup, typeof __VLS_components.elRadioGroup, typeof __VLS_components.ElRadioGroup, typeof __VLS_components.elRadioGroup, ]} */ ;
        // @ts-ignore
        var __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({
            modelValue: (__VLS_ctx.form.packageId),
        }));
        var __VLS_59 = __VLS_58.apply(void 0, __spreadArray([{
                modelValue: (__VLS_ctx.form.packageId),
            }], __VLS_functionalComponentArgsRest(__VLS_58), false));
        __VLS_60.slots.default;
        for (var _i = 0, _x = __VLS_getVForSourceType((__VLS_ctx.packages)); _i < _x.length; _i++) {
            var _y = _x[_i], pkg = _y[0], pkgIndex = _y[1];
            var __VLS_61 = {}.ElRadioButton;
            /** @type {[typeof __VLS_components.ElRadioButton, typeof __VLS_components.elRadioButton, typeof __VLS_components.ElRadioButton, typeof __VLS_components.elRadioButton, ]} */ ;
            // @ts-ignore
            var __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61(__assign({ key: (pkgIndex), label: (pkg.id) }, { class: "mb-2" })));
            var __VLS_63 = __VLS_62.apply(void 0, __spreadArray([__assign({ key: (pkgIndex), label: (pkg.id) }, { class: "mb-2" })], __VLS_functionalComponentArgsRest(__VLS_62), false));
            __VLS_64.slots.default;
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "corner" }));
            __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (pkgIndex !== 0) }), null, null);
            (__VLS_ctx.getDiscount(pkg));
            (pkg.amount);
            (__VLS_ctx.$t("service.unit.".concat(((_e = (_d = __VLS_ctx.application) === null || _d === void 0 ? void 0 : _d.service) === null || _e === void 0 ? void 0 : _e.unit) || 'credit', "s")));
            var __VLS_64;
        }
        var __VLS_60;
    }
    var __VLS_56;
    if (((_g = (_f = __VLS_ctx.application) === null || _f === void 0 ? void 0 : _f.service) === null || _g === void 0 ? void 0 : _g.apis) &&
        ((_l = (_k = (_j = (_h = __VLS_ctx.application) === null || _h === void 0 ? void 0 : _h.service) === null || _j === void 0 ? void 0 : _j.apis) === null || _k === void 0 ? void 0 : _k.map(function (api) { return api === null || api === void 0 ? void 0 : api.estimation; }).filter(function (x) { return !!x; })) === null || _l === void 0 ? void 0 : _l.length) > 0) {
        var __VLS_65 = {}.ElFormItem;
        /** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
        // @ts-ignore
        var __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({}));
        var __VLS_67 = __VLS_66.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_66), false));
        __VLS_68.slots.default;
        if ((_m = __VLS_ctx.application) === null || _m === void 0 ? void 0 : _m.service) {
            var __VLS_69 = {}.ServiceEstimation;
            /** @type {[typeof __VLS_components.ServiceEstimation, typeof __VLS_components.serviceEstimation, ]} */ ;
            // @ts-ignore
            var __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({
                service: (__VLS_ctx.application.service),
                package: (__VLS_ctx.package),
            }));
            var __VLS_71 = __VLS_70.apply(void 0, __spreadArray([{
                    service: (__VLS_ctx.application.service),
                    package: (__VLS_ctx.package),
                }], __VLS_functionalComponentArgsRest(__VLS_70), false));
        }
        var __VLS_68;
    }
    var __VLS_73 = {}.ElFormItem;
    /** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
    // @ts-ignore
    var __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({
        label: (__VLS_ctx.$t('service.field.price')),
    }));
    var __VLS_75 = __VLS_74.apply(void 0, __spreadArray([{
            label: (__VLS_ctx.$t('service.field.price')),
        }], __VLS_functionalComponentArgsRest(__VLS_74), false));
    __VLS_76.slots.default;
    var __VLS_77 = {}.price;
    /** @type {[typeof __VLS_components.Price, typeof __VLS_components.price, ]} */ ;
    // @ts-ignore
    var __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({
        price: ((_o = __VLS_ctx.package) === null || _o === void 0 ? void 0 : _o.price),
    }));
    var __VLS_79 = __VLS_78.apply(void 0, __spreadArray([{
            price: ((_p = __VLS_ctx.package) === null || _p === void 0 ? void 0 : _p.price),
        }], __VLS_functionalComponentArgsRest(__VLS_78), false));
    if (__VLS_ctx.package) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "ml-2" }));
        (__VLS_ctx.getPriceString({ value: ((_q = __VLS_ctx.package) === null || _q === void 0 ? void 0 : _q.price) / ((_r = __VLS_ctx.package) === null || _r === void 0 ? void 0 : _r.amount) }) +
            ' / ' +
            __VLS_ctx.$t("service.unit.".concat(((_t = (_s = __VLS_ctx.application) === null || _s === void 0 ? void 0 : _s.service) === null || _t === void 0 ? void 0 : _t.unit) || 'credits')));
    }
    var __VLS_76;
    var __VLS_81 = {}.ElDivider;
    /** @type {[typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, ]} */ ;
    // @ts-ignore
    var __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({
        borderStyle: "dashed",
    }));
    var __VLS_83 = __VLS_82.apply(void 0, __spreadArray([{
            borderStyle: "dashed",
        }], __VLS_functionalComponentArgsRest(__VLS_82), false));
    var __VLS_85 = {}.ElFormItem;
    /** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
    // @ts-ignore
    var __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({
        label: (__VLS_ctx.$t('application.field.shouldPayPrice')),
    }));
    var __VLS_87 = __VLS_86.apply(void 0, __spreadArray([{
            label: (__VLS_ctx.$t('application.field.shouldPayPrice')),
        }], __VLS_functionalComponentArgsRest(__VLS_86), false));
    __VLS_88.slots.default;
    if (__VLS_ctx.package) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ({ price: true, unfree: ((_u = __VLS_ctx.package) === null || _u === void 0 ? void 0 : _u.price) > 0, free: ((_v = __VLS_ctx.package) === null || _v === void 0 ? void 0 : _v.price) === 0 }) }));
        (__VLS_ctx.getPriceString({ value: (_w = __VLS_ctx.package) === null || _w === void 0 ? void 0 : _w.price }));
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ({ price: true, free: true }) }));
    }
    var __VLS_88;
    var __VLS_89 = {}.ElFormItem;
    /** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
    // @ts-ignore
    var __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({}));
    var __VLS_91 = __VLS_90.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_90), false));
    __VLS_92.slots.default;
    var __VLS_93 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    var __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, new __VLS_93(__assign(__assign(__assign({ 'onClick': {} }, { type: "primary", size: "large" }), { class: "btn-create" }), { loading: (__VLS_ctx.creating), round: true })));
    var __VLS_95 = __VLS_94.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onClick': {} }, { type: "primary", size: "large" }), { class: "btn-create" }), { loading: (__VLS_ctx.creating), round: true })], __VLS_functionalComponentArgsRest(__VLS_94), false));
    var __VLS_97 = void 0;
    var __VLS_98 = void 0;
    var __VLS_99 = void 0;
    var __VLS_100 = {
        onClick: (__VLS_ctx.onCreateOrder)
    };
    __VLS_96.slots.default;
    (__VLS_ctx.$t('application.button.createOrder'));
    var __VLS_96;
    var __VLS_92;
    var __VLS_101 = {}.ElDivider;
    /** @type {[typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, ]} */ ;
    // @ts-ignore
    var __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({
        borderStyle: "dashed",
    }));
    var __VLS_103 = __VLS_102.apply(void 0, __spreadArray([{
            borderStyle: "dashed",
        }], __VLS_functionalComponentArgsRest(__VLS_102), false));
    var __VLS_105 = {}.ElFormItem;
    /** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
    // @ts-ignore
    var __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, new __VLS_105({
        label: "",
    }));
    var __VLS_107 = __VLS_106.apply(void 0, __spreadArray([{
            label: "",
        }], __VLS_functionalComponentArgsRest(__VLS_106), false));
    __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (false) }), null, null);
    __VLS_108.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.$t('console.message.doNotWantExtra'));
    var __VLS_109 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    var __VLS_110 = __VLS_asFunctionalComponent(__VLS_109, new __VLS_109(__assign(__assign(__assign({ 'onClick': {} }, { type: "primary" }), { class: "btn btn-subscribe" }), { round: true, size: "small" })));
    var __VLS_111 = __VLS_110.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onClick': {} }, { type: "primary" }), { class: "btn btn-subscribe" }), { round: true, size: "small" })], __VLS_functionalComponentArgsRest(__VLS_110), false));
    var __VLS_113 = void 0;
    var __VLS_114 = void 0;
    var __VLS_115 = void 0;
    var __VLS_116 = {
        onClick: (__VLS_ctx.onSubscribe)
    };
    __VLS_112.slots.default;
    (__VLS_ctx.$t('console.message.subscribe'));
    var __VLS_112;
    var __VLS_108;
    var __VLS_44;
}
var __VLS_36;
var __VLS_32;
var __VLS_28;
var __VLS_24;
var __VLS_20;
var __VLS_8;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['corner']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['price']} */ ;
/** @type {__VLS_StyleScopedClasses['unfree']} */ ;
/** @type {__VLS_StyleScopedClasses['free']} */ ;
/** @type {__VLS_StyleScopedClasses['price']} */ ;
/** @type {__VLS_StyleScopedClasses['free']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-create']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-subscribe']} */ ;
var __VLS_dollars;
var __VLS_self;
