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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var Pagination_vue_1 = require("@/components/common/Pagination.vue");
var CopyToClipboard_vue_1 = require("@/components/common/CopyToClipboard.vue");
var element_plus_1 = require("element-plus");
var distribution_1 = require("@/operators/distribution");
var utils_1 = require("@/utils");
exports.default = (0, vue_1.defineComponent)({
    name: 'ConsoleDistributionList',
    components: {
        Pagination: Pagination_vue_1.default,
        CopyToClipboard: CopyToClipboard_vue_1.default,
        ElRow: element_plus_1.ElRow,
        ElCol: element_plus_1.ElCol,
        ElTable: element_plus_1.ElTable,
        ElTableColumn: element_plus_1.ElTableColumn,
        ElCard: element_plus_1.ElCard
    },
    data: function () {
        return {
            distributionHistories: [],
            distributionStatus: undefined,
            loading: false,
            total: undefined,
            limit: 10
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
            Promise.all([this.onFetchDistributionHistory()]).finally(function () {
                _this.loading = false;
            });
        },
        onFetchDistributionHistory: function () {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, distribution_1.distributionHistoryOperator.getAll({
                                user_id: this.$store.getters.user.id,
                                ordering: '-created_at',
                                limit: this.limit,
                                offset: (this.page - 1) * this.limit
                            })];
                        case 1:
                            data = (_a.sent()).data;
                            this.distributionHistories = data.items;
                            this.total = data.count;
                            return [2 /*return*/];
                    }
                });
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
    ElCard: element_plus_1.ElCard
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
(__VLS_ctx.$t('common.title.distributionHistory'));
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
var __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({
    data: (__VLS_ctx.distributionHistories),
    stripe: true,
}));
var __VLS_31 = __VLS_30.apply(void 0, __spreadArray([{
        data: (__VLS_ctx.distributionHistories),
        stripe: true,
    }], __VLS_functionalComponentArgsRest(__VLS_30), false));
__VLS_asFunctionalDirective(__VLS_directives.vLoading)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.loading) }), null, null);
__VLS_32.slots.default;
var __VLS_33 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
var __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
    prop: "id",
    label: (__VLS_ctx.$t('distribution.field.id')),
    className: "text-center",
    width: "350px",
}));
var __VLS_35 = __VLS_34.apply(void 0, __spreadArray([{
        prop: "id",
        label: (__VLS_ctx.$t('distribution.field.id')),
        className: "text-center",
        width: "350px",
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
    prop: "id",
    label: (__VLS_ctx.$t('distribution.field.userId')),
    className: "text-center",
    width: "350px",
}));
var __VLS_43 = __VLS_42.apply(void 0, __spreadArray([{
        prop: "id",
        label: (__VLS_ctx.$t('distribution.field.userId')),
        className: "text-center",
        width: "350px",
    }], __VLS_functionalComponentArgsRest(__VLS_42), false));
__VLS_44.slots.default;
{
    var __VLS_thisSlot = __VLS_44.slots.default;
    var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "key" }));
    (scope.row.user_id);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "copy" }));
    var __VLS_45 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
        content: (scope.row.user_id),
    }));
    var __VLS_47 = __VLS_46.apply(void 0, __spreadArray([{
            content: (scope.row.user_id),
        }], __VLS_functionalComponentArgsRest(__VLS_46), false));
}
var __VLS_44;
var __VLS_49 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
var __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({
    label: (__VLS_ctx.$t('distribution.field.price')),
    width: "100px",
}));
var __VLS_51 = __VLS_50.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('distribution.field.price')),
        width: "100px",
    }], __VLS_functionalComponentArgsRest(__VLS_50), false));
__VLS_52.slots.default;
{
    var __VLS_thisSlot = __VLS_52.slots.default;
    var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "price" }));
    (__VLS_ctx.getPriceString({ value: (_a = scope.row) === null || _a === void 0 ? void 0 : _a.price }));
}
var __VLS_52;
var __VLS_53 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
var __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
    label: (__VLS_ctx.$t('distribution.field.reward')),
    width: "100px",
}));
var __VLS_55 = __VLS_54.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('distribution.field.reward')),
        width: "100px",
    }], __VLS_functionalComponentArgsRest(__VLS_54), false));
__VLS_56.slots.default;
{
    var __VLS_thisSlot = __VLS_56.slots.default;
    var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "description" }));
    (__VLS_ctx.getPriceString({ value: (_b = scope.row) === null || _b === void 0 ? void 0 : _b.reward }));
}
var __VLS_56;
var __VLS_57 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
var __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({
    label: (__VLS_ctx.$t('distribution.field.percentage')),
    width: "120px",
}));
var __VLS_59 = __VLS_58.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('distribution.field.percentage')),
        width: "120px",
    }], __VLS_functionalComponentArgsRest(__VLS_58), false));
__VLS_60.slots.default;
{
    var __VLS_thisSlot = __VLS_60.slots.default;
    var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "description" }));
    (scope.row.percentage);
}
var __VLS_60;
var __VLS_61 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
var __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({
    label: (__VLS_ctx.$t('distribution.field.createdAt')),
    width: "200px",
}));
var __VLS_63 = __VLS_62.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('distribution.field.createdAt')),
        width: "200px",
    }], __VLS_functionalComponentArgsRest(__VLS_62), false));
__VLS_64.slots.default;
{
    var __VLS_thisSlot = __VLS_64.slots.default;
    var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "created-at" }));
    (__VLS_ctx.$dayjs.format(scope.row.created_at));
}
var __VLS_64;
var __VLS_32;
var __VLS_28;
var __VLS_24;
var __VLS_20;
var __VLS_65 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
var __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({}));
var __VLS_67 = __VLS_66.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_66), false));
__VLS_68.slots.default;
var __VLS_69 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({
    span: (10),
    offset: (14),
}));
var __VLS_71 = __VLS_70.apply(void 0, __spreadArray([{
        span: (10),
        offset: (14),
    }], __VLS_functionalComponentArgsRest(__VLS_70), false));
__VLS_72.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "pagination m-v-lg" }));
var __VLS_73 = {}.pagination;
/** @type {[typeof __VLS_components.Pagination, typeof __VLS_components.pagination, typeof __VLS_components.Pagination, typeof __VLS_components.pagination, ]} */ ;
// @ts-ignore
var __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73(__assign({ 'onChange': {} }, { currentPage: (__VLS_ctx.page), pageSize: (__VLS_ctx.limit), total: (__VLS_ctx.total) })));
var __VLS_75 = __VLS_74.apply(void 0, __spreadArray([__assign({ 'onChange': {} }, { currentPage: (__VLS_ctx.page), pageSize: (__VLS_ctx.limit), total: (__VLS_ctx.total) })], __VLS_functionalComponentArgsRest(__VLS_74), false));
var __VLS_77;
var __VLS_78;
var __VLS_79;
var __VLS_80 = {
    onChange: (__VLS_ctx.onPageChange)
};
var __VLS_76;
var __VLS_72;
var __VLS_68;
var __VLS_8;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['key']} */ ;
/** @type {__VLS_StyleScopedClasses['copy']} */ ;
/** @type {__VLS_StyleScopedClasses['key']} */ ;
/** @type {__VLS_StyleScopedClasses['copy']} */ ;
/** @type {__VLS_StyleScopedClasses['price']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['created-at']} */ ;
/** @type {__VLS_StyleScopedClasses['pagination']} */ ;
/** @type {__VLS_StyleScopedClasses['m-v-lg']} */ ;
var __VLS_dollars;
var __VLS_self;
