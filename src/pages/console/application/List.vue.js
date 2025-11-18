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
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var operators_1 = require("@/operators");
var Pagination_vue_1 = require("@/components/common/Pagination.vue");
var CopyToClipboard_vue_1 = require("@/components/common/CopyToClipboard.vue");
var element_plus_1 = require("element-plus");
var constants_1 = require("@/router/constants");
var models_1 = require("@/models");
exports.default = (0, vue_1.defineComponent)({
    name: 'ConsoleApplicationList',
    components: {
        Pagination: Pagination_vue_1.default,
        CopyToClipboard: CopyToClipboard_vue_1.default,
        ElTable: element_plus_1.ElTable,
        ElRow: element_plus_1.ElRow,
        ElButton: element_plus_1.ElButton,
        ElCol: element_plus_1.ElCol,
        ElTag: element_plus_1.ElTag,
        ElTableColumn: element_plus_1.ElTableColumn,
        ElCard: element_plus_1.ElCard
    },
    data: function () {
        return {
            credentialType: models_1.ICredentialType,
            applications: [],
            loading: false,
            total: undefined,
            buying: false,
            limit: 12,
            form: {
                amount: 1
            },
            active: {
                service: undefined,
                application: undefined
            }
        };
    },
    computed: {
        redirect: function () {
            var _a;
            return (_a = this.$route.query) === null || _a === void 0 ? void 0 : _a.redirect;
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
        },
        type: {
            handler: function () {
                this.onFetchData();
            }
        }
    },
    mounted: function () {
        this.onFetchData();
    },
    methods: {
        onBuyMore: function (application) {
            this.$router.push({
                name: constants_1.ROUTE_CONSOLE_APPLICATION_EXTRA,
                params: {
                    id: application.id
                }
            });
        },
        onPageChange: function (page) {
            var _a;
            this.$router.push({
                name: (_a = this.$route.name) === null || _a === void 0 ? void 0 : _a.toString(),
                query: __assign(__assign({}, this.$route.query), { page: page })
            });
        },
        onFetchData: function () {
            var _this = this;
            this.loading = true;
            operators_1.applicationOperator
                .getAll({
                limit: this.limit,
                offset: (this.page - 1) * this.limit,
                user_id: this.$store.getters.user.id,
                ordering: '-created_at'
            })
                .then(function (_a) {
                var data = _a.data;
                _this.applications = data.items;
                _this.loading = false;
                _this.total = data.count;
            })
                .catch(function () {
                _this.loading = false;
            });
        },
        getRemainingAmount: function (application) {
            var _a, _b;
            if (application.remaining_amount === undefined || application.remaining_amount === null) {
                return '';
            }
            var unit = this.$t("service.unit.".concat(((_a = application === null || application === void 0 ? void 0 : application.service) === null || _a === void 0 ? void 0 : _a.unit) || 'credit', "s"));
            return "".concat((_b = application.remaining_amount) === null || _b === void 0 ? void 0 : _b.toFixed(6), " ").concat(unit);
        },
        getUsedAmount: function (application) {
            var _a, _b;
            if (application.used_amount === undefined || application.used_amount === null) {
                return '';
            }
            var unit = this.$t("service.unit.".concat(((_a = application === null || application === void 0 ? void 0 : application.service) === null || _a === void 0 ? void 0 : _a.unit) || 'credit', "s"));
            return "".concat((_b = application.used_amount) === null || _b === void 0 ? void 0 : _b.toFixed(6), " ").concat(unit);
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    Pagination: Pagination_vue_1.default,
    CopyToClipboard: CopyToClipboard_vue_1.default,
    ElTable: element_plus_1.ElTable,
    ElRow: element_plus_1.ElRow,
    ElButton: element_plus_1.ElButton,
    ElCol: element_plus_1.ElCol,
    ElTag: element_plus_1.ElTag,
    ElTableColumn: element_plus_1.ElTableColumn,
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
(__VLS_ctx.$t('common.title.allApplications'));
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
var __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29(__assign(__assign({ data: (__VLS_ctx.applications), stripe: true }, { class: "!h-[calc(100vh-250px)]" }), { tableLayout: "fixed", emptyText: (__VLS_ctx.$t('common.message.noData')) })));
var __VLS_31 = __VLS_30.apply(void 0, __spreadArray([__assign(__assign({ data: (__VLS_ctx.applications), stripe: true }, { class: "!h-[calc(100vh-250px)]" }), { tableLayout: "fixed", emptyText: (__VLS_ctx.$t('common.message.noData')) })], __VLS_functionalComponentArgsRest(__VLS_30), false));
__VLS_asFunctionalDirective(__VLS_directives.vLoading)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.loading) }), null, null);
__VLS_32.slots.default;
var __VLS_33 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
var __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
    prop: "id",
    label: (__VLS_ctx.$t('application.field.id')),
    width: "190px",
    className: "text-center",
}));
var __VLS_35 = __VLS_34.apply(void 0, __spreadArray([{
        prop: "id",
        label: (__VLS_ctx.$t('application.field.id')),
        width: "190px",
        className: "text-center",
    }], __VLS_functionalComponentArgsRest(__VLS_34), false));
__VLS_36.slots.default;
{
    var __VLS_thisSlot = __VLS_36.slots.default;
    var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (scope.row.id);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "copy" }));
    var __VLS_37 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37(__assign({ content: ((_a = scope === null || scope === void 0 ? void 0 : scope.row) === null || _a === void 0 ? void 0 : _a.id) }, { class: "inline-block" })));
    var __VLS_39 = __VLS_38.apply(void 0, __spreadArray([__assign({ content: ((_b = scope === null || scope === void 0 ? void 0 : scope.row) === null || _b === void 0 ? void 0 : _b.id) }, { class: "inline-block" })], __VLS_functionalComponentArgsRest(__VLS_38), false));
}
var __VLS_36;
var __VLS_41 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
var __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({
    label: (__VLS_ctx.$t('application.field.type')),
    width: "80px",
}));
var __VLS_43 = __VLS_42.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('application.field.type')),
        width: "80px",
    }], __VLS_functionalComponentArgsRest(__VLS_42), false));
__VLS_44.slots.default;
{
    var __VLS_thisSlot = __VLS_44.slots.default;
    var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
    if (((_c = scope.row) === null || _c === void 0 ? void 0 : _c.type) === 'Period') {
        var __VLS_45 = {}.ElTag;
        /** @type {[typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ]} */ ;
        // @ts-ignore
        var __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
            type: "success",
            effect: "dark",
            round: true,
        }));
        var __VLS_47 = __VLS_46.apply(void 0, __spreadArray([{
                type: "success",
                effect: "dark",
                round: true,
            }], __VLS_functionalComponentArgsRest(__VLS_46), false));
        __VLS_48.slots.default;
        (__VLS_ctx.$t('application.type.period'));
        var __VLS_48;
    }
    if (((_d = scope.row) === null || _d === void 0 ? void 0 : _d.type) === 'Usage') {
        var __VLS_49 = {}.ElTag;
        /** @type {[typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ]} */ ;
        // @ts-ignore
        var __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({
            effect: "dark",
            round: true,
        }));
        var __VLS_51 = __VLS_50.apply(void 0, __spreadArray([{
                effect: "dark",
                round: true,
            }], __VLS_functionalComponentArgsRest(__VLS_50), false));
        __VLS_52.slots.default;
        (__VLS_ctx.$t('application.type.usage'));
        var __VLS_52;
    }
}
var __VLS_44;
var __VLS_53 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
var __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
    label: (__VLS_ctx.$t('application.field.name')),
    width: "180px",
}));
var __VLS_55 = __VLS_54.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('application.field.name')),
        width: "180px",
    }], __VLS_functionalComponentArgsRest(__VLS_54), false));
__VLS_56.slots.default;
{
    var __VLS_thisSlot = __VLS_56.slots.default;
    var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    ((_f = (_e = scope.row) === null || _e === void 0 ? void 0 : _e.service) === null || _f === void 0 ? void 0 : _f.title);
}
var __VLS_56;
var __VLS_57 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
var __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({
    prop: "remaining_amount",
    label: (__VLS_ctx.$t('application.field.remainingAmount')),
    width: "140px",
    className: "text-center",
}));
var __VLS_59 = __VLS_58.apply(void 0, __spreadArray([{
        prop: "remaining_amount",
        label: (__VLS_ctx.$t('application.field.remainingAmount')),
        width: "140px",
        className: "text-center",
    }], __VLS_functionalComponentArgsRest(__VLS_58), false));
__VLS_60.slots.default;
{
    var __VLS_thisSlot = __VLS_60.slots.default;
    var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.getRemainingAmount(scope.row));
}
var __VLS_60;
var __VLS_61 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
var __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({
    prop: "used_amount",
    label: (__VLS_ctx.$t('application.field.usedAmount')),
    width: "140px",
    className: "text-center",
}));
var __VLS_63 = __VLS_62.apply(void 0, __spreadArray([{
        prop: "used_amount",
        label: (__VLS_ctx.$t('application.field.usedAmount')),
        width: "140px",
        className: "text-center",
    }], __VLS_functionalComponentArgsRest(__VLS_62), false));
__VLS_64.slots.default;
{
    var __VLS_thisSlot = __VLS_64.slots.default;
    var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.getUsedAmount(scope.row));
}
var __VLS_64;
var __VLS_65 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
var __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({
    label: (__VLS_ctx.$t('application.field.expiredAt')),
    width: "170px",
}));
var __VLS_67 = __VLS_66.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('application.field.expiredAt')),
        width: "170px",
    }], __VLS_functionalComponentArgsRest(__VLS_66), false));
__VLS_68.slots.default;
{
    var __VLS_thisSlot = __VLS_68.slots.default;
    var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
    if (scope.row.expired_at) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "expired-at" }));
        (__VLS_ctx.$dayjs.format(scope.row.expired_at));
    }
}
var __VLS_68;
var __VLS_69 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
var __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({
    fixed: "right",
    width: "120px",
}));
var __VLS_71 = __VLS_70.apply(void 0, __spreadArray([{
        fixed: "right",
        width: "120px",
    }], __VLS_functionalComponentArgsRest(__VLS_70), false));
__VLS_72.slots.default;
{
    var __VLS_thisSlot = __VLS_72.slots.default;
    var scope_1 = __VLS_getSlotParams(__VLS_thisSlot)[0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "float-right" }));
    if (((_g = scope_1 === null || scope_1 === void 0 ? void 0 : scope_1.row) === null || _g === void 0 ? void 0 : _g.type) === 'Period' || ((_h = scope_1 === null || scope_1 === void 0 ? void 0 : scope_1.row) === null || _h === void 0 ? void 0 : _h.type) === 'Usage') {
        var __VLS_73 = {}.ElButton;
        /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
        // @ts-ignore
        var __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73(__assign({ 'onClick': {} }, { type: "primary", round: true, size: "small" })));
        var __VLS_75 = __VLS_74.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { type: "primary", round: true, size: "small" })], __VLS_functionalComponentArgsRest(__VLS_74), false));
        var __VLS_77 = void 0;
        var __VLS_78 = void 0;
        var __VLS_79 = void 0;
        var __VLS_80 = {
            onClick: function () {
                var _a, _b;
                var _c = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _c[_i] = arguments[_i];
                }
                var $event = _c[0];
                if (!(((_a = scope_1 === null || scope_1 === void 0 ? void 0 : scope_1.row) === null || _a === void 0 ? void 0 : _a.type) === 'Period' || ((_b = scope_1 === null || scope_1 === void 0 ? void 0 : scope_1.row) === null || _b === void 0 ? void 0 : _b.type) === 'Usage'))
                    return;
                __VLS_ctx.onBuyMore(scope_1 === null || scope_1 === void 0 ? void 0 : scope_1.row);
            }
        };
        __VLS_76.slots.default;
        (__VLS_ctx.$t('application.button.buyMore'));
        var __VLS_76;
    }
}
var __VLS_72;
var __VLS_32;
var __VLS_28;
var __VLS_24;
var __VLS_20;
var __VLS_81 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
var __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({}));
var __VLS_83 = __VLS_82.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_82), false));
__VLS_84.slots.default;
var __VLS_85 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({
    span: (24),
}));
var __VLS_87 = __VLS_86.apply(void 0, __spreadArray([{
        span: (24),
    }], __VLS_functionalComponentArgsRest(__VLS_86), false));
__VLS_88.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "pagination" }));
var __VLS_89 = {}.pagination;
/** @type {[typeof __VLS_components.Pagination, typeof __VLS_components.pagination, typeof __VLS_components.Pagination, typeof __VLS_components.pagination, ]} */ ;
// @ts-ignore
var __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89(__assign({ 'onChange': {} }, { currentPage: (__VLS_ctx.page), pageSize: (__VLS_ctx.limit), total: (__VLS_ctx.total) })));
var __VLS_91 = __VLS_90.apply(void 0, __spreadArray([__assign({ 'onChange': {} }, { currentPage: (__VLS_ctx.page), pageSize: (__VLS_ctx.limit), total: (__VLS_ctx.total) })], __VLS_functionalComponentArgsRest(__VLS_90), false));
var __VLS_93;
var __VLS_94;
var __VLS_95;
var __VLS_96 = {
    onChange: (__VLS_ctx.onPageChange)
};
var __VLS_92;
var __VLS_88;
var __VLS_84;
var __VLS_8;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['!h-[calc(100vh-250px)]']} */ ;
/** @type {__VLS_StyleScopedClasses['copy']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-block']} */ ;
/** @type {__VLS_StyleScopedClasses['expired-at']} */ ;
/** @type {__VLS_StyleScopedClasses['float-right']} */ ;
/** @type {__VLS_StyleScopedClasses['pagination']} */ ;
var __VLS_dollars;
var __VLS_self;
