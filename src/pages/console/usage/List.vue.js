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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var models_1 = require("@/models");
var Pagination_vue_1 = require("@/components/common/Pagination.vue");
var element_plus_1 = require("element-plus");
var operators_1 = require("@/operators");
var CopyToClipboard_vue_1 = require("@/components/common/CopyToClipboard.vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'ConsoleUsageList',
    components: {
        Pagination: Pagination_vue_1.default,
        ElTag: element_plus_1.ElTag,
        ElTable: element_plus_1.ElTable,
        ElSelect: element_plus_1.ElSelect,
        ElOption: element_plus_1.ElOption,
        CopyToClipboard: CopyToClipboard_vue_1.default,
        ElRow: element_plus_1.ElRow,
        ElCol: element_plus_1.ElCol,
        ElTableColumn: element_plus_1.ElTableColumn,
        ElCard: element_plus_1.ElCard
    },
    data: function () {
        var _a, _b;
        return {
            applicationId: (_a = this.$route.query.application_id) === null || _a === void 0 ? void 0 : _a.toString(),
            apiId: (_b = this.$route.query.api_id) === null || _b === void 0 ? void 0 : _b.toString(),
            applications: [],
            credentialType: models_1.ICredentialType,
            apiUsages: [],
            loading: false,
            total: undefined,
            limit: 15
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
        },
        apis: function () {
            var _this = this;
            // contact all apis from application.service.apis
            return this.applications
                .filter(function (application) { return (_this.applicationId ? application.id === _this.applicationId : true); })
                .map(function (application) { var _a; return (_a = application.service) === null || _a === void 0 ? void 0 : _a.apis; })
                .flat();
        }
    },
    watch: {
        page: {
            handler: function () {
                this.onFetchApiUsages();
            }
        },
        type: {
            handler: function () {
                this.onFetchApiUsages();
            }
        }
    },
    mounted: function () {
        this.onFetchApplications();
        this.onFetchApiUsages();
    },
    methods: {
        onApiChange: function (apiId) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.$router.push({
                                name: (_a = this.$route.name) === null || _a === void 0 ? void 0 : _a.toString(),
                                query: __assign(__assign({}, this.$route.query), { api_id: apiId })
                            })];
                        case 1:
                            _b.sent();
                            this.onFetchApiUsages();
                            return [2 /*return*/];
                    }
                });
            });
        },
        onApplicationChange: function (applicationId) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.$router.push({
                                name: (_a = this.$route.name) === null || _a === void 0 ? void 0 : _a.toString(),
                                query: __assign(__assign({}, this.$route.query), { application_id: applicationId })
                            })];
                        case 1:
                            _b.sent();
                            this.onFetchApiUsages();
                            return [2 /*return*/];
                    }
                });
            });
        },
        onPageChange: function (page) {
            var _a;
            this.$router.push({
                name: (_a = this.$route.name) === null || _a === void 0 ? void 0 : _a.toString(),
                query: __assign(__assign({}, this.$route.query), { page: page })
            });
        },
        getRemainingAmount: function (apiUsage) {
            var _a, _b;
            if (apiUsage.remaining_amount === undefined || apiUsage.remaining_amount === null) {
                return '';
            }
            var unit = this.$t("service.unit.".concat(((_a = apiUsage === null || apiUsage === void 0 ? void 0 : apiUsage.service) === null || _a === void 0 ? void 0 : _a.unit) || 'credit', "s"));
            return "".concat((_b = apiUsage.remaining_amount) === null || _b === void 0 ? void 0 : _b.toFixed(6), " ").concat(unit);
        },
        getUsedAmount: function (apiUsage) {
            var _a, _b;
            if (apiUsage.used_amount === undefined || apiUsage.used_amount === null) {
                return '';
            }
            var unit = this.$t("service.unit.".concat(((_a = apiUsage === null || apiUsage === void 0 ? void 0 : apiUsage.service) === null || _a === void 0 ? void 0 : _a.unit) || 'credit', "s"));
            return "".concat((_b = apiUsage.used_amount) === null || _b === void 0 ? void 0 : _b.toFixed(6), " ").concat(unit);
        },
        getDeductedAmount: function (apiUsage) {
            var _a, _b;
            if ((apiUsage === null || apiUsage === void 0 ? void 0 : apiUsage.deducted_amount) === undefined || (apiUsage === null || apiUsage === void 0 ? void 0 : apiUsage.deducted_amount) === null) {
                return '';
            }
            var unit = this.$t("service.unit.".concat(((_a = apiUsage === null || apiUsage === void 0 ? void 0 : apiUsage.service) === null || _a === void 0 ? void 0 : _a.unit) || 'credit', "s"));
            return "".concat((_b = apiUsage.deducted_amount) === null || _b === void 0 ? void 0 : _b.toFixed(6), " ").concat(unit);
        },
        onFetchApplications: function () {
            var _this = this;
            operators_1.applicationOperator
                .getAll({
                limit: 100,
                offset: 0,
                user_id: this.$store.getters.user.id,
                ordering: '-created_at'
            })
                .then(function (_a) {
                var data = _a.data;
                _this.applications = data.items;
                _this.total = data.count;
            })
                .catch(function () { });
        },
        onFetchApiUsages: function () {
            var _this = this;
            this.loading = true;
            operators_1.apiUsageOperator
                .getAll(__assign(__assign({ limit: this.limit, offset: (this.page - 1) * this.limit, user_id: this.$store.getters.user.id, ordering: '-created_at' }, (this.applicationId ? { application_id: this.applicationId } : {})), (this.apiId ? { api_id: this.apiId } : {})))
                .then(function (_a) {
                var data = _a.data;
                _this.apiUsages = data.items;
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
    ElTag: element_plus_1.ElTag,
    ElTable: element_plus_1.ElTable,
    ElSelect: element_plus_1.ElSelect,
    ElOption: element_plus_1.ElOption,
    CopyToClipboard: CopyToClipboard_vue_1.default,
    ElRow: element_plus_1.ElRow,
    ElCol: element_plus_1.ElCol,
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
var __VLS_5 = {}.HelpEntry;
/** @type {[typeof __VLS_components.HelpEntry, typeof __VLS_components.helpEntry, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5(__assign({ class: "help" })));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([__assign({ class: "help" })], __VLS_functionalComponentArgsRest(__VLS_6), false));
var __VLS_9 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    span: (24),
}));
var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([{
        span: (24),
    }], __VLS_functionalComponentArgsRest(__VLS_10), false));
__VLS_12.slots.default;
var __VLS_13 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
var __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
var __VLS_15 = __VLS_14.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_14), false));
__VLS_16.slots.default;
var __VLS_17 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
    span: (24),
}));
var __VLS_19 = __VLS_18.apply(void 0, __spreadArray([{
        span: (24),
    }], __VLS_functionalComponentArgsRest(__VLS_18), false));
__VLS_20.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "title" }));
(__VLS_ctx.$t('common.title.allUsages'));
var __VLS_20;
var __VLS_16;
var __VLS_21 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
var __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({}));
var __VLS_23 = __VLS_22.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_22), false));
__VLS_24.slots.default;
var __VLS_25 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25(__assign({ md: (8), sm: (12) }, { class: "flex items-center px-2 mb-4" })));
var __VLS_27 = __VLS_26.apply(void 0, __spreadArray([__assign({ md: (8), sm: (12) }, { class: "flex items-center px-2 mb-4" })], __VLS_functionalComponentArgsRest(__VLS_26), false));
__VLS_28.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "inline-block mr-3 text-sm w-10" }));
(__VLS_ctx.$t('usage.field.application'));
var __VLS_29 = {}.ElSelect;
/** @type {[typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ]} */ ;
// @ts-ignore
var __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29(__assign({ 'onChange': {} }, { modelValue: (__VLS_ctx.applicationId), placeholder: (__VLS_ctx.$t('usage.field.application')), clearable: true })));
var __VLS_31 = __VLS_30.apply(void 0, __spreadArray([__assign({ 'onChange': {} }, { modelValue: (__VLS_ctx.applicationId), placeholder: (__VLS_ctx.$t('usage.field.application')), clearable: true })], __VLS_functionalComponentArgsRest(__VLS_30), false));
var __VLS_33;
var __VLS_34;
var __VLS_35;
var __VLS_36 = {
    onChange: (__VLS_ctx.onApplicationChange)
};
__VLS_32.slots.default;
for (var _i = 0, _e = __VLS_getVForSourceType((__VLS_ctx.applications)); _i < _e.length; _i++) {
    var item = _e[_i][0];
    var __VLS_37 = {}.ElOption;
    /** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
    // @ts-ignore
    var __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
        key: (item.id),
        label: ((_a = item.service) === null || _a === void 0 ? void 0 : _a.title),
        value: (item === null || item === void 0 ? void 0 : item.id),
    }));
    var __VLS_39 = __VLS_38.apply(void 0, __spreadArray([{
            key: (item.id),
            label: ((_b = item.service) === null || _b === void 0 ? void 0 : _b.title),
            value: (item === null || item === void 0 ? void 0 : item.id),
        }], __VLS_functionalComponentArgsRest(__VLS_38), false));
}
var __VLS_32;
var __VLS_28;
var __VLS_41 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41(__assign({ md: (8), sm: (12) }, { class: "flex items-center px-2 mb-4" })));
var __VLS_43 = __VLS_42.apply(void 0, __spreadArray([__assign({ md: (8), sm: (12) }, { class: "flex items-center px-2 mb-4" })], __VLS_functionalComponentArgsRest(__VLS_42), false));
__VLS_44.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "inline-block mr-3 text-sm w-10" }));
(__VLS_ctx.$t('usage.field.api'));
var __VLS_45 = {}.ElSelect;
/** @type {[typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ]} */ ;
// @ts-ignore
var __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45(__assign({ 'onChange': {} }, { modelValue: (__VLS_ctx.apiId), placeholder: (__VLS_ctx.$t('usage.field.api')), clearable: true })));
var __VLS_47 = __VLS_46.apply(void 0, __spreadArray([__assign({ 'onChange': {} }, { modelValue: (__VLS_ctx.apiId), placeholder: (__VLS_ctx.$t('usage.field.api')), clearable: true })], __VLS_functionalComponentArgsRest(__VLS_46), false));
var __VLS_49;
var __VLS_50;
var __VLS_51;
var __VLS_52 = {
    onChange: (__VLS_ctx.onApiChange)
};
__VLS_48.slots.default;
for (var _f = 0, _g = __VLS_getVForSourceType((__VLS_ctx.apis)); _f < _g.length; _f++) {
    var item = _g[_f][0];
    var __VLS_53 = {}.ElOption;
    /** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
    // @ts-ignore
    var __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
        key: (item === null || item === void 0 ? void 0 : item.id),
        label: (item === null || item === void 0 ? void 0 : item.title),
        value: (item === null || item === void 0 ? void 0 : item.id),
    }));
    var __VLS_55 = __VLS_54.apply(void 0, __spreadArray([{
            key: (item === null || item === void 0 ? void 0 : item.id),
            label: (item === null || item === void 0 ? void 0 : item.title),
            value: (item === null || item === void 0 ? void 0 : item.id),
        }], __VLS_functionalComponentArgsRest(__VLS_54), false));
}
var __VLS_48;
var __VLS_44;
var __VLS_24;
var __VLS_57 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
var __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({}));
var __VLS_59 = __VLS_58.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_58), false));
__VLS_60.slots.default;
var __VLS_61 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({
    span: (24),
}));
var __VLS_63 = __VLS_62.apply(void 0, __spreadArray([{
        span: (24),
    }], __VLS_functionalComponentArgsRest(__VLS_62), false));
__VLS_64.slots.default;
var __VLS_65 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
var __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({
    shadow: "hover",
}));
var __VLS_67 = __VLS_66.apply(void 0, __spreadArray([{
        shadow: "hover",
    }], __VLS_functionalComponentArgsRest(__VLS_66), false));
__VLS_68.slots.default;
var __VLS_69 = {}.ElTable;
/** @type {[typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ]} */ ;
// @ts-ignore
var __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69(__assign(__assign({ data: (__VLS_ctx.apiUsages), stripe: true, tableLayout: "fixed" }, { class: "!h-[calc(100vh-350px)]" }), { emptyText: (__VLS_ctx.$t('common.message.noData')) })));
var __VLS_71 = __VLS_70.apply(void 0, __spreadArray([__assign(__assign({ data: (__VLS_ctx.apiUsages), stripe: true, tableLayout: "fixed" }, { class: "!h-[calc(100vh-350px)]" }), { emptyText: (__VLS_ctx.$t('common.message.noData')) })], __VLS_functionalComponentArgsRest(__VLS_70), false));
__VLS_asFunctionalDirective(__VLS_directives.vLoading)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.loading) }), null, null);
__VLS_72.slots.default;
var __VLS_73 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
var __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({
    label: (__VLS_ctx.$t('application.field.name')),
    width: "140px",
}));
var __VLS_75 = __VLS_74.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('application.field.name')),
        width: "140px",
    }], __VLS_functionalComponentArgsRest(__VLS_74), false));
__VLS_76.slots.default;
{
    var __VLS_thisSlot = __VLS_76.slots.default;
    var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    ((_d = (_c = scope.row) === null || _c === void 0 ? void 0 : _c.api) === null || _d === void 0 ? void 0 : _d.title);
}
var __VLS_76;
var __VLS_77 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
var __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({
    label: (__VLS_ctx.$t('usage.field.statusCode')),
    width: "80px",
}));
var __VLS_79 = __VLS_78.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('usage.field.statusCode')),
        width: "80px",
    }], __VLS_functionalComponentArgsRest(__VLS_78), false));
__VLS_80.slots.default;
{
    var __VLS_thisSlot = __VLS_80.slots.default;
    var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (scope.row.status_code);
}
var __VLS_80;
var __VLS_81 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
var __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({
    prop: "deducted_amount",
    label: (__VLS_ctx.$t('usage.field.deductedAmount')),
    width: "130px",
    className: "text-center",
}));
var __VLS_83 = __VLS_82.apply(void 0, __spreadArray([{
        prop: "deducted_amount",
        label: (__VLS_ctx.$t('usage.field.deductedAmount')),
        width: "130px",
        className: "text-center",
    }], __VLS_functionalComponentArgsRest(__VLS_82), false));
__VLS_84.slots.default;
{
    var __VLS_thisSlot = __VLS_84.slots.default;
    var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.getDeductedAmount(scope.row));
}
var __VLS_84;
var __VLS_85 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
var __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({
    prop: "metadata",
    width: "350px",
    label: (__VLS_ctx.$t('usage.field.metadata')),
}));
var __VLS_87 = __VLS_86.apply(void 0, __spreadArray([{
        prop: "metadata",
        width: "350px",
        label: (__VLS_ctx.$t('usage.field.metadata')),
    }], __VLS_functionalComponentArgsRest(__VLS_86), false));
__VLS_88.slots.default;
{
    var __VLS_thisSlot = __VLS_88.slots.default;
    var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex flex-wrap gap-2 justify-start" }));
    for (var _h = 0, _j = __VLS_getVForSourceType((scope.row.metadata)); _h < _j.length; _h++) {
        var _k = _j[_h], name_1 = _k[0], key = _k[1];
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: (key) }, { class: "inline-block" }));
        var __VLS_89 = {}.ElTag;
        /** @type {[typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ]} */ ;
        // @ts-ignore
        var __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({
            round: true,
        }));
        var __VLS_91 = __VLS_90.apply(void 0, __spreadArray([{
                round: true,
            }], __VLS_functionalComponentArgsRest(__VLS_90), false));
        __VLS_92.slots.default;
        (key);
        (name_1);
        var __VLS_92;
    }
}
var __VLS_88;
var __VLS_93 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
var __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, new __VLS_93({
    prop: "trace_id",
    label: (__VLS_ctx.$t('application.field.traceId')),
    width: "200px",
    className: "text-center",
}));
var __VLS_95 = __VLS_94.apply(void 0, __spreadArray([{
        prop: "trace_id",
        label: (__VLS_ctx.$t('application.field.traceId')),
        width: "200px",
        className: "text-center",
    }], __VLS_functionalComponentArgsRest(__VLS_94), false));
__VLS_96.slots.default;
{
    var __VLS_thisSlot = __VLS_96.slots.default;
    var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "key" }));
    (scope.row.trace_id);
    if (scope.row.trace_id) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "copy" }));
        var __VLS_97 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97(__assign({ content: (scope.row.trace_id) }, { class: "inline-block" })));
        var __VLS_99 = __VLS_98.apply(void 0, __spreadArray([__assign({ content: (scope.row.trace_id) }, { class: "inline-block" })], __VLS_functionalComponentArgsRest(__VLS_98), false));
    }
}
var __VLS_96;
var __VLS_101 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
var __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({
    label: (__VLS_ctx.$t('usage.field.createdAt')),
    width: "200px",
}));
var __VLS_103 = __VLS_102.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('usage.field.createdAt')),
        width: "200px",
    }], __VLS_functionalComponentArgsRest(__VLS_102), false));
__VLS_104.slots.default;
{
    var __VLS_thisSlot = __VLS_104.slots.default;
    var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "created-at" }));
    (__VLS_ctx.$dayjs.format(scope.row.created_at));
}
var __VLS_104;
var __VLS_72;
var __VLS_68;
var __VLS_64;
var __VLS_60;
var __VLS_105 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
var __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, new __VLS_105({}));
var __VLS_107 = __VLS_106.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_106), false));
__VLS_108.slots.default;
var __VLS_109 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_110 = __VLS_asFunctionalComponent(__VLS_109, new __VLS_109({}));
var __VLS_111 = __VLS_110.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_110), false));
__VLS_112.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "pagination" }));
var __VLS_113 = {}.pagination;
/** @type {[typeof __VLS_components.Pagination, typeof __VLS_components.pagination, typeof __VLS_components.Pagination, typeof __VLS_components.pagination, ]} */ ;
// @ts-ignore
var __VLS_114 = __VLS_asFunctionalComponent(__VLS_113, new __VLS_113(__assign({ 'onChange': {} }, { currentPage: (__VLS_ctx.page), pageSize: (__VLS_ctx.limit), total: (__VLS_ctx.total) })));
var __VLS_115 = __VLS_114.apply(void 0, __spreadArray([__assign({ 'onChange': {} }, { currentPage: (__VLS_ctx.page), pageSize: (__VLS_ctx.limit), total: (__VLS_ctx.total) })], __VLS_functionalComponentArgsRest(__VLS_114), false));
var __VLS_117;
var __VLS_118;
var __VLS_119;
var __VLS_120 = {
    onChange: (__VLS_ctx.onPageChange)
};
var __VLS_116;
var __VLS_112;
var __VLS_108;
var __VLS_12;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['help']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-block']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['w-10']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-block']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['w-10']} */ ;
/** @type {__VLS_StyleScopedClasses['!h-[calc(100vh-350px)]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-start']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-block']} */ ;
/** @type {__VLS_StyleScopedClasses['key']} */ ;
/** @type {__VLS_StyleScopedClasses['copy']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-block']} */ ;
/** @type {__VLS_StyleScopedClasses['created-at']} */ ;
/** @type {__VLS_StyleScopedClasses['pagination']} */ ;
var __VLS_dollars;
var __VLS_self;
