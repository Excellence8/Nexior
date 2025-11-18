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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var order_1 = require("@/operators/order");
var Pagination_vue_1 = require("@/components/common/Pagination.vue");
var CopyToClipboard_vue_1 = require("@/components/common/CopyToClipboard.vue");
var element_plus_1 = require("element-plus");
var models_1 = require("@/models");
var utils_1 = require("@/utils");
exports.default = (0, vue_1.defineComponent)({
    name: 'ConsoleOrderList',
    components: {
        Pagination: Pagination_vue_1.default,
        CopyToClipboard: CopyToClipboard_vue_1.default,
        ElRow: element_plus_1.ElRow,
        ElCol: element_plus_1.ElCol,
        ElTable: element_plus_1.ElTable,
        ElTableColumn: element_plus_1.ElTableColumn,
        ElButton: element_plus_1.ElButton,
        ElTag: element_plus_1.ElTag,
        ElCard: element_plus_1.ElCard
    },
    data: function () {
        return {
            OrderState: models_1.OrderState,
            orders: [],
            loading: false,
            total: undefined,
            // dynamic calculate the limit according to window height
            limit: Math.floor((window.innerHeight - 300) / 50)
        };
    },
    computed: {
        redirect: function () {
            return this.$route.query.redirect;
        },
        page: function () {
            var _a;
            return parseInt(((_a = this.$route.query.page) === null || _a === void 0 ? void 0 : _a.toString()) || '1');
        }
    },
    watch: {
        page: {
            handler: function () {
                this.onFetchData();
            }
        }
    },
    mounted: function () {
        this.onFetchData();
    },
    methods: {
        getPriceString: utils_1.getPriceString,
        onPageChange: function (page) {
            var _a;
            this.$router.push({
                name: (_a = this.$route.name) === null || _a === void 0 ? void 0 : _a.toString(),
                query: {
                    page: page
                }
            });
        },
        onFetchData: function () {
            var _this = this;
            this.loading = true;
            order_1.orderOperator
                .getAll({
                ordering: '-created_at',
                limit: this.limit,
                offset: (this.page - 1) * this.limit,
                user_id: this.$store.getters.user.id
            })
                .then(function (_a) {
                var data = _a.data;
                _this.orders = data.items;
                _this.loading = false;
                _this.total = data.count;
            })
                .catch(function () {
                _this.loading = false;
            });
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    Pagination: Pagination_vue_1.default,
    CopyToClipboard: CopyToClipboard_vue_1.default,
    ElRow: element_plus_1.ElRow,
    ElCol: element_plus_1.ElCol,
    ElTable: element_plus_1.ElTable,
    ElTableColumn: element_plus_1.ElTableColumn,
    ElButton: element_plus_1.ElButton,
    ElTag: element_plus_1.ElTag,
    ElCard: element_plus_1.ElCard
};
var __VLS_components;
var __VLS_directives;
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
(__VLS_ctx.$t('common.title.allOrders'));
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
var __VLS_29 = {}.ElTable;
/** @type {[typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ]} */ ;
// @ts-ignore
var __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29(__assign({ data: (__VLS_ctx.orders), stripe: true }, { class: "!h-[calc(100vh-250px)]" })));
var __VLS_31 = __VLS_30.apply(void 0, __spreadArray([__assign({ data: (__VLS_ctx.orders), stripe: true }, { class: "!h-[calc(100vh-250px)]" })], __VLS_functionalComponentArgsRest(__VLS_30), false));
__VLS_asFunctionalDirective(__VLS_directives.vLoading)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.loading) }), null, null);
__VLS_32.slots.default;
var __VLS_33 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
var __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
    prop: "id",
    label: (__VLS_ctx.$t('order.field.id')),
    className: "text-center",
    width: "190px",
}));
var __VLS_35 = __VLS_34.apply(void 0, __spreadArray([{
        prop: "id",
        label: (__VLS_ctx.$t('order.field.id')),
        className: "text-center",
        width: "190px",
    }], __VLS_functionalComponentArgsRest(__VLS_34), false));
__VLS_36.slots.default;
{
    var __VLS_thisSlot = __VLS_36.slots.default;
    var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "key" }));
    (scope.row.id);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "copy" }));
    var __VLS_37 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
        content: (scope.row.id),
    }));
    var __VLS_39 = __VLS_38.apply(void 0, __spreadArray([{
            content: (scope.row.id),
        }], __VLS_functionalComponentArgsRest(__VLS_38), false));
}
var __VLS_36;
var __VLS_41 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
var __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({
    label: (__VLS_ctx.$t('order.field.price')),
    width: "100px",
}));
var __VLS_43 = __VLS_42.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('order.field.price')),
        width: "100px",
    }], __VLS_functionalComponentArgsRest(__VLS_42), false));
__VLS_44.slots.default;
{
    var __VLS_thisSlot = __VLS_44.slots.default;
    var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "price" }));
    (__VLS_ctx.getPriceString({ value: (_a = scope.row) === null || _a === void 0 ? void 0 : _a.price }));
}
var __VLS_44;
var __VLS_45 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
var __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
    prop: "state",
    label: (__VLS_ctx.$t('order.field.state')),
    className: "text-center",
    width: "150px",
}));
var __VLS_47 = __VLS_46.apply(void 0, __spreadArray([{
        prop: "state",
        label: (__VLS_ctx.$t('order.field.state')),
        className: "text-center",
        width: "150px",
    }], __VLS_functionalComponentArgsRest(__VLS_46), false));
__VLS_48.slots.default;
{
    var __VLS_thisSlot = __VLS_48.slots.default;
    var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
    if (scope.row.state === ((_b = __VLS_ctx.OrderState) === null || _b === void 0 ? void 0 : _b.PENDING)) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        var __VLS_49 = {}.ElTag;
        /** @type {[typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ]} */ ;
        // @ts-ignore
        var __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49(__assign(__assign({ type: "info" }, { class: "mx-1" }), { effect: "dark", round: true })));
        var __VLS_51 = __VLS_50.apply(void 0, __spreadArray([__assign(__assign({ type: "info" }, { class: "mx-1" }), { effect: "dark", round: true })], __VLS_functionalComponentArgsRest(__VLS_50), false));
        __VLS_52.slots.default;
        (__VLS_ctx.$t('order.state.pending'));
        var __VLS_52;
    }
    else if (scope.row.state === ((_c = __VLS_ctx.OrderState) === null || _c === void 0 ? void 0 : _c.PAID)) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "state state-paid" }));
        var __VLS_53 = {}.ElTag;
        /** @type {[typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ]} */ ;
        // @ts-ignore
        var __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53(__assign(__assign({ type: "success" }, { class: "mx-1" }), { effect: "dark", round: true })));
        var __VLS_55 = __VLS_54.apply(void 0, __spreadArray([__assign(__assign({ type: "success" }, { class: "mx-1" }), { effect: "dark", round: true })], __VLS_functionalComponentArgsRest(__VLS_54), false));
        __VLS_56.slots.default;
        (__VLS_ctx.$t('order.state.paid'));
        var __VLS_56;
    }
    else if (scope.row.state === ((_d = __VLS_ctx.OrderState) === null || _d === void 0 ? void 0 : _d.FINISHED)) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "state state-finished" }));
        var __VLS_57 = {}.ElTag;
        /** @type {[typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ]} */ ;
        // @ts-ignore
        var __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57(__assign(__assign({ type: "success" }, { class: "mx-1" }), { effect: "dark", round: true })));
        var __VLS_59 = __VLS_58.apply(void 0, __spreadArray([__assign(__assign({ type: "success" }, { class: "mx-1" }), { effect: "dark", round: true })], __VLS_functionalComponentArgsRest(__VLS_58), false));
        __VLS_60.slots.default;
        (__VLS_ctx.$t('order.state.finished'));
        var __VLS_60;
    }
    else if (scope.row.state === ((_e = __VLS_ctx.OrderState) === null || _e === void 0 ? void 0 : _e.EXPIRED)) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "state state-expired" }));
        var __VLS_61 = {}.ElTag;
        /** @type {[typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ]} */ ;
        // @ts-ignore
        var __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61(__assign(__assign({ type: "danger" }, { class: "mx-1" }), { effect: "dark", round: true })));
        var __VLS_63 = __VLS_62.apply(void 0, __spreadArray([__assign(__assign({ type: "danger" }, { class: "mx-1" }), { effect: "dark", round: true })], __VLS_functionalComponentArgsRest(__VLS_62), false));
        __VLS_64.slots.default;
        (__VLS_ctx.$t('order.state.expired'));
        var __VLS_64;
    }
    else if (scope.row.state === ((_f = __VLS_ctx.OrderState) === null || _f === void 0 ? void 0 : _f.FAILED)) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "state state-failed" }));
        var __VLS_65 = {}.ElTag;
        /** @type {[typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ]} */ ;
        // @ts-ignore
        var __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65(__assign(__assign({ type: "danger" }, { class: "mx-1" }), { effect: "dark", round: true })));
        var __VLS_67 = __VLS_66.apply(void 0, __spreadArray([__assign(__assign({ type: "danger" }, { class: "mx-1" }), { effect: "dark", round: true })], __VLS_functionalComponentArgsRest(__VLS_66), false));
        __VLS_68.slots.default;
        (__VLS_ctx.$t('order.state.failed'));
        var __VLS_68;
    }
}
var __VLS_48;
var __VLS_69 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
var __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({
    label: (__VLS_ctx.$t('order.field.description')),
    width: "300px",
}));
var __VLS_71 = __VLS_70.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('order.field.description')),
        width: "300px",
    }], __VLS_functionalComponentArgsRest(__VLS_70), false));
__VLS_72.slots.default;
{
    var __VLS_thisSlot = __VLS_72.slots.default;
    var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "description" }));
    (scope.row.description);
}
var __VLS_72;
var __VLS_73 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
var __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({
    label: (__VLS_ctx.$t('order.field.createdAt')),
    width: "180px",
}));
var __VLS_75 = __VLS_74.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('order.field.createdAt')),
        width: "180px",
    }], __VLS_functionalComponentArgsRest(__VLS_74), false));
__VLS_76.slots.default;
{
    var __VLS_thisSlot = __VLS_76.slots.default;
    var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "created-at" }));
    (__VLS_ctx.$dayjs.format(scope.row.created_at));
}
var __VLS_76;
var __VLS_77 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
var __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({
    fixed: "right",
    minWidth: "120px",
}));
var __VLS_79 = __VLS_78.apply(void 0, __spreadArray([{
        fixed: "right",
        minWidth: "120px",
    }], __VLS_functionalComponentArgsRest(__VLS_78), false));
__VLS_80.slots.default;
{
    var __VLS_thisSlot = __VLS_80.slots.default;
    var scope_1 = __VLS_getSlotParams(__VLS_thisSlot)[0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "float-right" }));
    if (scope_1.row.state !== __VLS_ctx.OrderState.PAID &&
        scope_1.row.state !== __VLS_ctx.OrderState.FINISHED &&
        scope_1.row.state !== __VLS_ctx.OrderState.EXPIRED) {
        var __VLS_81 = {}.ElButton;
        /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
        // @ts-ignore
        var __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81(__assign({ 'onClick': {} }, { type: "primary", size: "small", round: true })));
        var __VLS_83 = __VLS_82.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: "primary", size: "small", round: true })], __VLS_functionalComponentArgsRest(__VLS_82), false));
        var __VLS_85 = void 0;
        var __VLS_86 = void 0;
        var __VLS_87 = void 0;
        var __VLS_88 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!(scope_1.row.state !== __VLS_ctx.OrderState.PAID &&
                    scope_1.row.state !== __VLS_ctx.OrderState.FINISHED &&
                    scope_1.row.state !== __VLS_ctx.OrderState.EXPIRED))
                    return;
                __VLS_ctx.$router.push({
                    name: 'console-order-detail',
                    params: {
                        id: scope_1.row.id
                    }
                });
            }
        };
        __VLS_84.slots.default;
        (__VLS_ctx.$t('order.button.continuePay'));
        var __VLS_84;
    }
    else {
        var __VLS_89 = {}.ElButton;
        /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
        // @ts-ignore
        var __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89(__assign({ 'onClick': {} }, { size: "small", round: true })));
        var __VLS_91 = __VLS_90.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { size: "small", round: true })], __VLS_functionalComponentArgsRest(__VLS_90), false));
        var __VLS_93 = void 0;
        var __VLS_94 = void 0;
        var __VLS_95 = void 0;
        var __VLS_96 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!!(scope_1.row.state !== __VLS_ctx.OrderState.PAID &&
                    scope_1.row.state !== __VLS_ctx.OrderState.FINISHED &&
                    scope_1.row.state !== __VLS_ctx.OrderState.EXPIRED))
                    return;
                __VLS_ctx.$router.push({
                    name: 'console-order-detail',
                    params: {
                        id: scope_1.row.id
                    }
                });
            }
        };
        __VLS_92.slots.default;
        (__VLS_ctx.$t('order.button.checkDetail'));
        var __VLS_92;
    }
}
var __VLS_80;
var __VLS_32;
var __VLS_28;
var __VLS_24;
var __VLS_20;
var __VLS_97 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
var __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({}));
var __VLS_99 = __VLS_98.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_98), false));
__VLS_100.slots.default;
var __VLS_101 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({}));
var __VLS_103 = __VLS_102.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_102), false));
__VLS_104.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "pagination" }));
var __VLS_105 = {}.pagination;
/** @type {[typeof __VLS_components.Pagination, typeof __VLS_components.pagination, typeof __VLS_components.Pagination, typeof __VLS_components.pagination, ]} */ ;
// @ts-ignore
var __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, new __VLS_105(__assign({ 'onChange': {} }, { currentPage: (__VLS_ctx.page), pageSize: (__VLS_ctx.limit), total: (__VLS_ctx.total) })));
var __VLS_107 = __VLS_106.apply(void 0, __spreadArray([__assign({ 'onChange': {} }, { currentPage: (__VLS_ctx.page), pageSize: (__VLS_ctx.limit), total: (__VLS_ctx.total) })], __VLS_functionalComponentArgsRest(__VLS_106), false));
var __VLS_109;
var __VLS_110;
var __VLS_111;
var __VLS_112 = {
    onChange: (__VLS_ctx.onPageChange)
};
var __VLS_108;
var __VLS_104;
var __VLS_100;
var __VLS_8;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['!h-[calc(100vh-250px)]']} */ ;
/** @type {__VLS_StyleScopedClasses['key']} */ ;
/** @type {__VLS_StyleScopedClasses['copy']} */ ;
/** @type {__VLS_StyleScopedClasses['price']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-1']} */ ;
/** @type {__VLS_StyleScopedClasses['state']} */ ;
/** @type {__VLS_StyleScopedClasses['state-paid']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-1']} */ ;
/** @type {__VLS_StyleScopedClasses['state']} */ ;
/** @type {__VLS_StyleScopedClasses['state-finished']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-1']} */ ;
/** @type {__VLS_StyleScopedClasses['state']} */ ;
/** @type {__VLS_StyleScopedClasses['state-expired']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-1']} */ ;
/** @type {__VLS_StyleScopedClasses['state']} */ ;
/** @type {__VLS_StyleScopedClasses['state-failed']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-1']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['created-at']} */ ;
/** @type {__VLS_StyleScopedClasses['float-right']} */ ;
/** @type {__VLS_StyleScopedClasses['pagination']} */ ;
var __VLS_dollars;
var __VLS_self;
