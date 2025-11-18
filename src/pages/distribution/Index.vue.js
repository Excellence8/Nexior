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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var CopyToClipboard_vue_1 = require("@/components/common/CopyToClipboard.vue");
var element_plus_1 = require("element-plus");
var operators_1 = require("@/operators");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var operators_2 = require("@/operators");
var vue_qrcode_1 = require("vue-qrcode");
var router_1 = require("@/router");
var utils_1 = require("@/utils");
exports.default = (0, vue_1.defineComponent)({
    name: 'ConsoleDistributionList',
    components: {
        CopyToClipboard: CopyToClipboard_vue_1.default,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
        QrCode: vue_qrcode_1.default,
        ElProgress: element_plus_1.ElProgress,
        ElRow: element_plus_1.ElRow,
        ElCol: element_plus_1.ElCol,
        ElButton: element_plus_1.ElButton,
        ElDivider: element_plus_1.ElDivider,
        ElCard: element_plus_1.ElCard,
        ElTooltip: element_plus_1.ElTooltip,
        ElTable: element_plus_1.ElTable,
        ElTableColumn: element_plus_1.ElTableColumn,
        ElSkeleton: element_plus_1.ElSkeleton
    },
    data: function () {
        return {
            invitees: [],
            inviteesCount: undefined,
            distributionLevels: [],
            distributionLink: undefined,
            distributionStatus: undefined,
            loading: false
        };
    },
    computed: {
        redirect: function () {
            return this.$route.query.redirect;
        },
        page: function () {
            var _a;
            return parseInt(((_a = this.$route.query.page) === null || _a === void 0 ? void 0 : _a.toString()) || '1');
        },
        distributionLevelMap: function () {
            var result = {};
            this.distributionLevels.forEach(function (item) {
                result[item.level] = item;
            });
            return result;
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.onFetchData();
                this.onGenerateDistributionLink();
                return [2 /*return*/];
            });
        });
    },
    methods: {
        getPriceString: utils_1.getPriceString,
        goHistory: function () {
            this.$router.push({
                name: router_1.ROUTE_DISTRIBUTION_HISTORY
            });
        },
        goInvitees: function () {
            this.$router.push({
                name: router_1.ROUTE_DISTRIBUTION_INVITEES
            });
        },
        onPageChange: function (page) {
            var _a;
            this.$router.push({
                name: (_a = this.$route.name) === null || _a === void 0 ? void 0 : _a.toString(),
                query: {
                    page: page
                }
            });
        },
        getPercentageForNextLevel: function () {
            var _a, _b, _c, _d, _e, _f, _g;
            var currentThreshold = (_c = this.distributionLevelMap[(_b = (_a = this.distributionStatus) === null || _a === void 0 ? void 0 : _a.level) === null || _b === void 0 ? void 0 : _b.level]) === null || _c === void 0 ? void 0 : _c.threshold;
            var nextThreshold = (_f = this.distributionLevelMap[((_e = (_d = this.distributionStatus) === null || _d === void 0 ? void 0 : _d.level) === null || _e === void 0 ? void 0 : _e.level) + 1]) === null || _f === void 0 ? void 0 : _f.threshold;
            return Math.floor(((((_g = this.distributionStatus) === null || _g === void 0 ? void 0 : _g.price) - currentThreshold) / (nextThreshold - currentThreshold)) * 100);
        },
        getDeltaForNextLevel: function () {
            var _a, _b, _c, _d;
            var nextThreshold = (_c = this.distributionLevelMap[((_b = (_a = this.distributionStatus) === null || _a === void 0 ? void 0 : _a.level) === null || _b === void 0 ? void 0 : _b.level) + 1]) === null || _c === void 0 ? void 0 : _c.threshold;
            return Math.floor(nextThreshold - ((_d = this.distributionStatus) === null || _d === void 0 ? void 0 : _d.price));
        },
        onFetchData: function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.loading = true;
                            return [4 /*yield*/, operators_1.distributionStatusOperator.initialize()];
                        case 1:
                            _a.sent();
                            Promise.all([this.onFetchDistributionStatus(), this.onFetchDistributionLevels(), this.onFetchInvitees()]).finally(function () {
                                _this.loading = false;
                            });
                            return [2 /*return*/];
                    }
                });
            });
        },
        onGenerateDistributionLink: function () {
            return __awaiter(this, void 0, void 0, function () {
                var origin, link, url, error_1;
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            origin = window.location.origin;
                            link = "".concat(origin, "?inviter_id=").concat(this.$store.getters.user.id);
                            _d.label = 1;
                        case 1:
                            _d.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, operators_1.shortUrlOperator.create(link)];
                        case 2:
                            url = (_c = (_b = (_a = (_d.sent())) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.url;
                            this.distributionLink = (url || link).replace('surl.id', 'share.acedata.cloud');
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _d.sent();
                            this.distributionLink = link;
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
        onFetchDistributionStatus: function () {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, operators_1.distributionStatusOperator.getAll({
                                user_id: this.$store.getters.user.id
                            })];
                        case 1:
                            data = (_a.sent()).data;
                            if (data.items && data.items.length > 0) {
                                this.distributionStatus = data.items[0];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        },
        onFetchDistributionLevels: function () {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, operators_1.distributionLevelOperator.getAll({
                                limit: 20,
                                user_id: this.$store.getters.user.id
                            })];
                        case 1:
                            data = (_a.sent()).data;
                            this.distributionLevels = data.items;
                            return [2 /*return*/];
                    }
                });
            });
        },
        onFetchInvitees: function () {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, operators_2.userOperator.getInvitees({})];
                        case 1:
                            data = (_a.sent()).data;
                            this.invitees = data.items;
                            this.inviteesCount = data.count;
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
    CopyToClipboard: CopyToClipboard_vue_1.default,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
    QrCode: vue_qrcode_1.default,
    ElProgress: element_plus_1.ElProgress,
    ElRow: element_plus_1.ElRow,
    ElCol: element_plus_1.ElCol,
    ElButton: element_plus_1.ElButton,
    ElDivider: element_plus_1.ElDivider,
    ElCard: element_plus_1.ElCard,
    ElTooltip: element_plus_1.ElTooltip,
    ElTable: element_plus_1.ElTable,
    ElTableColumn: element_plus_1.ElTableColumn,
    ElSkeleton: element_plus_1.ElSkeleton
};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
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
(__VLS_ctx.$t('common.title.distribution'));
var __VLS_16;
var __VLS_12;
var __VLS_17 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
var __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
    gutter: (15),
}));
var __VLS_19 = __VLS_18.apply(void 0, __spreadArray([{
        gutter: (15),
    }], __VLS_functionalComponentArgsRest(__VLS_18), false));
__VLS_20.slots.default;
var __VLS_21 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
    md: (6),
    xs: (24),
}));
var __VLS_23 = __VLS_22.apply(void 0, __spreadArray([{
        md: (6),
        xs: (24),
    }], __VLS_functionalComponentArgsRest(__VLS_22), false));
__VLS_24.slots.default;
var __VLS_25 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
var __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25(__assign({ shadow: "hover" }, { class: "item-mini mb-4" })));
var __VLS_27 = __VLS_26.apply(void 0, __spreadArray([__assign({ shadow: "hover" }, { class: "item-mini mb-4" })], __VLS_functionalComponentArgsRest(__VLS_26), false));
__VLS_28.slots.default;
if (__VLS_ctx.loading) {
    var __VLS_29 = {}.ElSkeleton;
    /** @type {[typeof __VLS_components.ElSkeleton, typeof __VLS_components.elSkeleton, ]} */ ;
    // @ts-ignore
    var __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({}));
    var __VLS_31 = __VLS_30.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_30), false));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "icon-wrapper" }));
    var __VLS_33 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33(__assign({ icon: "fa-solid fa-wallet" }, { class: "icon" })));
    var __VLS_35 = __VLS_34.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-wallet" }, { class: "icon" })], __VLS_functionalComponentArgsRest(__VLS_34), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "text-left" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
    (__VLS_ctx.$t('distribution.title.price'));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "value" }));
    (__VLS_ctx.getPriceString({ value: (_a = __VLS_ctx.distributionStatus) === null || _a === void 0 ? void 0 : _a.price }));
    var __VLS_37 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    var __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37(__assign(__assign({ 'onClick': {} }, { type: "primary", round: true, size: "small" }), { class: "btn" })));
    var __VLS_39 = __VLS_38.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { type: "primary", round: true, size: "small" }), { class: "btn" })], __VLS_functionalComponentArgsRest(__VLS_38), false));
    var __VLS_41 = void 0;
    var __VLS_42 = void 0;
    var __VLS_43 = void 0;
    var __VLS_44 = {
        onClick: (__VLS_ctx.goHistory)
    };
    __VLS_40.slots.default;
    (__VLS_ctx.$t('distribution.button.detail'));
    var __VLS_40;
}
var __VLS_28;
var __VLS_24;
var __VLS_45 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
    md: (6),
    xs: (24),
}));
var __VLS_47 = __VLS_46.apply(void 0, __spreadArray([{
        md: (6),
        xs: (24),
    }], __VLS_functionalComponentArgsRest(__VLS_46), false));
__VLS_48.slots.default;
var __VLS_49 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
var __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49(__assign({ shadow: "hover" }, { class: "item-mini mb-4" })));
var __VLS_51 = __VLS_50.apply(void 0, __spreadArray([__assign({ shadow: "hover" }, { class: "item-mini mb-4" })], __VLS_functionalComponentArgsRest(__VLS_50), false));
__VLS_52.slots.default;
if (__VLS_ctx.loading) {
    var __VLS_53 = {}.ElSkeleton;
    /** @type {[typeof __VLS_components.ElSkeleton, typeof __VLS_components.elSkeleton, ]} */ ;
    // @ts-ignore
    var __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({}));
    var __VLS_55 = __VLS_54.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_54), false));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "icon-wrapper" }));
    var __VLS_57 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57(__assign({ icon: "fa-solid fa-coins" }, { class: "icon" })));
    var __VLS_59 = __VLS_58.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-coins" }, { class: "icon" })], __VLS_functionalComponentArgsRest(__VLS_58), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "text-left" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
    (__VLS_ctx.$t('distribution.title.reward'));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "value" }));
    (__VLS_ctx.getPriceString({ value: (_b = __VLS_ctx.distributionStatus) === null || _b === void 0 ? void 0 : _b.reward }));
    var __VLS_61 = {}.ElTooltip;
    /** @type {[typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ]} */ ;
    // @ts-ignore
    var __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({
        effect: "dark",
        content: (__VLS_ctx.$t('distribution.message.developingWithDrawal')),
        placement: "top",
    }));
    var __VLS_63 = __VLS_62.apply(void 0, __spreadArray([{
            effect: "dark",
            content: (__VLS_ctx.$t('distribution.message.developingWithDrawal')),
            placement: "top",
        }], __VLS_functionalComponentArgsRest(__VLS_62), false));
    __VLS_64.slots.default;
    var __VLS_65 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    var __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65(__assign({ type: "primary", round: true, size: "small" }, { class: "btn" })));
    var __VLS_67 = __VLS_66.apply(void 0, __spreadArray([__assign({ type: "primary", round: true, size: "small" }, { class: "btn" })], __VLS_functionalComponentArgsRest(__VLS_66), false));
    __VLS_68.slots.default;
    (__VLS_ctx.$t('distribution.button.withdrawal'));
    var __VLS_68;
    var __VLS_64;
}
var __VLS_52;
var __VLS_48;
var __VLS_69 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({
    md: (6),
    xs: (24),
}));
var __VLS_71 = __VLS_70.apply(void 0, __spreadArray([{
        md: (6),
        xs: (24),
    }], __VLS_functionalComponentArgsRest(__VLS_70), false));
__VLS_72.slots.default;
var __VLS_73 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
var __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73(__assign({ shadow: "hover" }, { class: "item-mini mb-4" })));
var __VLS_75 = __VLS_74.apply(void 0, __spreadArray([__assign({ shadow: "hover" }, { class: "item-mini mb-4" })], __VLS_functionalComponentArgsRest(__VLS_74), false));
__VLS_76.slots.default;
if (__VLS_ctx.loading) {
    var __VLS_77 = {}.ElSkeleton;
    /** @type {[typeof __VLS_components.ElSkeleton, typeof __VLS_components.elSkeleton, ]} */ ;
    // @ts-ignore
    var __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({}));
    var __VLS_79 = __VLS_78.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_78), false));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "icon-wrapper" }));
    var __VLS_81 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81(__assign({ icon: "fa-solid fa-percent" }, { class: "icon" })));
    var __VLS_83 = __VLS_82.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-percent" }, { class: "icon" })], __VLS_functionalComponentArgsRest(__VLS_82), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "text-left" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
    (__VLS_ctx.$t('distribution.title.percentage'));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "value" }));
    ((_d = (_c = __VLS_ctx.distributionStatus) === null || _c === void 0 ? void 0 : _c.level) === null || _d === void 0 ? void 0 : _d.percentage);
}
var __VLS_76;
var __VLS_72;
var __VLS_85 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({
    md: (6),
    xs: (24),
}));
var __VLS_87 = __VLS_86.apply(void 0, __spreadArray([{
        md: (6),
        xs: (24),
    }], __VLS_functionalComponentArgsRest(__VLS_86), false));
__VLS_88.slots.default;
var __VLS_89 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
var __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89(__assign({ shadow: "hover" }, { class: "item-mini mb-4" })));
var __VLS_91 = __VLS_90.apply(void 0, __spreadArray([__assign({ shadow: "hover" }, { class: "item-mini mb-4" })], __VLS_functionalComponentArgsRest(__VLS_90), false));
__VLS_92.slots.default;
if (__VLS_ctx.loading) {
    var __VLS_93 = {}.ElSkeleton;
    /** @type {[typeof __VLS_components.ElSkeleton, typeof __VLS_components.elSkeleton, ]} */ ;
    // @ts-ignore
    var __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, new __VLS_93({}));
    var __VLS_95 = __VLS_94.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_94), false));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "icon-wrapper" }));
    var __VLS_97 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97(__assign({ icon: "fa-regular fa-user" }, { class: "icon" })));
    var __VLS_99 = __VLS_98.apply(void 0, __spreadArray([__assign({ icon: "fa-regular fa-user" }, { class: "icon" })], __VLS_functionalComponentArgsRest(__VLS_98), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "text-left" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
    (__VLS_ctx.$t('distribution.title.inviteesCount'));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "value" }));
    (__VLS_ctx.inviteesCount);
    var __VLS_101 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    var __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101(__assign(__assign({ 'onClick': {} }, { type: "primary", round: true, size: "small" }), { class: "btn" })));
    var __VLS_103 = __VLS_102.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { type: "primary", round: true, size: "small" }), { class: "btn" })], __VLS_functionalComponentArgsRest(__VLS_102), false));
    var __VLS_105 = void 0;
    var __VLS_106 = void 0;
    var __VLS_107 = void 0;
    var __VLS_108 = {
        onClick: (__VLS_ctx.goInvitees)
    };
    __VLS_104.slots.default;
    (__VLS_ctx.$t('distribution.button.detail'));
    var __VLS_104;
}
var __VLS_92;
var __VLS_88;
var __VLS_20;
var __VLS_109 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
var __VLS_110 = __VLS_asFunctionalComponent(__VLS_109, new __VLS_109({
    gutter: (15),
}));
var __VLS_111 = __VLS_110.apply(void 0, __spreadArray([{
        gutter: (15),
    }], __VLS_functionalComponentArgsRest(__VLS_110), false));
__VLS_112.slots.default;
var __VLS_113 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_114 = __VLS_asFunctionalComponent(__VLS_113, new __VLS_113({
    md: (12),
    xs: (24),
}));
var __VLS_115 = __VLS_114.apply(void 0, __spreadArray([{
        md: (12),
        xs: (24),
    }], __VLS_functionalComponentArgsRest(__VLS_114), false));
__VLS_116.slots.default;
var __VLS_117 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
var __VLS_118 = __VLS_asFunctionalComponent(__VLS_117, new __VLS_117(__assign({ shadow: "hover" }, { class: "level-info mb-4" })));
var __VLS_119 = __VLS_118.apply(void 0, __spreadArray([__assign({ shadow: "hover" }, { class: "level-info mb-4" })], __VLS_functionalComponentArgsRest(__VLS_118), false));
__VLS_120.slots.default;
if (__VLS_ctx.loading) {
    var __VLS_121 = {}.ElSkeleton;
    /** @type {[typeof __VLS_components.ElSkeleton, typeof __VLS_components.elSkeleton, ]} */ ;
    // @ts-ignore
    var __VLS_122 = __VLS_asFunctionalComponent(__VLS_121, new __VLS_121({}));
    var __VLS_123 = __VLS_122.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_122), false));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)(__assign({ class: "title" }));
    (__VLS_ctx.$t('distribution.title.levelInfo'));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "clear-both overflow-hidden" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "float-left description" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t('distribution.title.currentLevel'));
    ((_f = (_e = __VLS_ctx.distributionStatus) === null || _e === void 0 ? void 0 : _e.level) === null || _f === void 0 ? void 0 : _f.level);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t('distribution.title.currentPercentage'));
    ((_j = __VLS_ctx.distributionLevelMap[(_h = (_g = __VLS_ctx.distributionStatus) === null || _g === void 0 ? void 0 : _g.level) === null || _h === void 0 ? void 0 : _h.level]) === null || _j === void 0 ? void 0 : _j.percentage);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "float-right description" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t('distribution.title.nextLevel'));
    (((_l = (_k = __VLS_ctx.distributionStatus) === null || _k === void 0 ? void 0 : _k.level) === null || _l === void 0 ? void 0 : _l.level) + 1);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t('distribution.title.nextPercentage'));
    ((_p = __VLS_ctx.distributionLevelMap[((_o = (_m = __VLS_ctx.distributionStatus) === null || _m === void 0 ? void 0 : _m.level) === null || _o === void 0 ? void 0 : _o.level) + 1]) === null || _p === void 0 ? void 0 : _p.percentage);
    var __VLS_125 = {}.ElProgress;
    /** @type {[typeof __VLS_components.ElProgress, typeof __VLS_components.elProgress, typeof __VLS_components.ElProgress, typeof __VLS_components.elProgress, ]} */ ;
    // @ts-ignore
    var __VLS_126 = __VLS_asFunctionalComponent(__VLS_125, new __VLS_125(__assign({ textInside: (true), strokeWidth: (20), percentage: (__VLS_ctx.getPercentageForNextLevel()) }, { class: "mb-2" })));
    var __VLS_127 = __VLS_126.apply(void 0, __spreadArray([__assign({ textInside: (true), strokeWidth: (20), percentage: (__VLS_ctx.getPercentageForNextLevel()) }, { class: "mb-2" })], __VLS_functionalComponentArgsRest(__VLS_126), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
    (__VLS_ctx.$t('distribution.message.deltaPriceForNextLevel'));
    (__VLS_ctx.getDeltaForNextLevel());
    var __VLS_129 = {}.ElDivider;
    /** @type {[typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, ]} */ ;
    // @ts-ignore
    var __VLS_130 = __VLS_asFunctionalComponent(__VLS_129, new __VLS_129({}));
    var __VLS_131 = __VLS_130.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_130), false));
    if (__VLS_ctx.distributionLevels) {
        var __VLS_133 = {}.ElTable;
        /** @type {[typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ]} */ ;
        // @ts-ignore
        var __VLS_134 = __VLS_asFunctionalComponent(__VLS_133, new __VLS_133({
            data: (__VLS_ctx.distributionLevels),
            stripe: true,
        }));
        var __VLS_135 = __VLS_134.apply(void 0, __spreadArray([{
                data: (__VLS_ctx.distributionLevels),
                stripe: true,
            }], __VLS_functionalComponentArgsRest(__VLS_134), false));
        __VLS_136.slots.default;
        var __VLS_137 = {}.ElTableColumn;
        /** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
        // @ts-ignore
        var __VLS_138 = __VLS_asFunctionalComponent(__VLS_137, new __VLS_137({
            label: (__VLS_ctx.$t('distribution.field.level')),
        }));
        var __VLS_139 = __VLS_138.apply(void 0, __spreadArray([{
                label: (__VLS_ctx.$t('distribution.field.level')),
            }], __VLS_functionalComponentArgsRest(__VLS_138), false));
        __VLS_140.slots.default;
        {
            var __VLS_thisSlot = __VLS_140.slots.default;
            var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "level" }));
            ((_q = scope.row) === null || _q === void 0 ? void 0 : _q.level);
        }
        var __VLS_140;
        var __VLS_141 = {}.ElTableColumn;
        /** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
        // @ts-ignore
        var __VLS_142 = __VLS_asFunctionalComponent(__VLS_141, new __VLS_141({
            label: (__VLS_ctx.$t('distribution.field.threshold')),
        }));
        var __VLS_143 = __VLS_142.apply(void 0, __spreadArray([{
                label: (__VLS_ctx.$t('distribution.field.threshold')),
            }], __VLS_functionalComponentArgsRest(__VLS_142), false));
        __VLS_144.slots.default;
        {
            var __VLS_thisSlot = __VLS_144.slots.default;
            var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "level" }));
            ((_r = scope.row) === null || _r === void 0 ? void 0 : _r.threshold);
        }
        var __VLS_144;
        var __VLS_145 = {}.ElTableColumn;
        /** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
        // @ts-ignore
        var __VLS_146 = __VLS_asFunctionalComponent(__VLS_145, new __VLS_145({
            label: (__VLS_ctx.$t('distribution.field.percentage')),
        }));
        var __VLS_147 = __VLS_146.apply(void 0, __spreadArray([{
                label: (__VLS_ctx.$t('distribution.field.percentage')),
            }], __VLS_functionalComponentArgsRest(__VLS_146), false));
        __VLS_148.slots.default;
        {
            var __VLS_thisSlot = __VLS_148.slots.default;
            var scope = __VLS_getSlotParams(__VLS_thisSlot)[0];
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "level" }));
            ((_s = scope.row) === null || _s === void 0 ? void 0 : _s.percentage);
        }
        var __VLS_148;
        var __VLS_136;
    }
}
var __VLS_120;
var __VLS_116;
var __VLS_149 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_150 = __VLS_asFunctionalComponent(__VLS_149, new __VLS_149({
    md: (12),
    xs: (24),
}));
var __VLS_151 = __VLS_150.apply(void 0, __spreadArray([{
        md: (12),
        xs: (24),
    }], __VLS_functionalComponentArgsRest(__VLS_150), false));
__VLS_152.slots.default;
var __VLS_153 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
var __VLS_154 = __VLS_asFunctionalComponent(__VLS_153, new __VLS_153(__assign({ shadow: "hover" }, { class: "distribution-info mb-4" })));
var __VLS_155 = __VLS_154.apply(void 0, __spreadArray([__assign({ shadow: "hover" }, { class: "distribution-info mb-4" })], __VLS_functionalComponentArgsRest(__VLS_154), false));
__VLS_156.slots.default;
if (__VLS_ctx.loading) {
    var __VLS_157 = {}.ElSkeleton;
    /** @type {[typeof __VLS_components.ElSkeleton, typeof __VLS_components.elSkeleton, ]} */ ;
    // @ts-ignore
    var __VLS_158 = __VLS_asFunctionalComponent(__VLS_157, new __VLS_157({}));
    var __VLS_159 = __VLS_158.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_158), false));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)(__assign({ class: "title" }));
    (__VLS_ctx.$t('distribution.title.distributionLink'));
    var __VLS_161 = {}.ElDivider;
    /** @type {[typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, ]} */ ;
    // @ts-ignore
    var __VLS_162 = __VLS_asFunctionalComponent(__VLS_161, new __VLS_161({}));
    var __VLS_163 = __VLS_162.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_162), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "link-wrapper text-center" }));
    if (false) {
        var __VLS_165 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_166 = __VLS_asFunctionalComponent(__VLS_165, new __VLS_165(__assign({ icon: "fa-solid fa-link" }, { class: "icon" })));
        var __VLS_167 = __VLS_166.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-link" }, { class: "icon" })], __VLS_functionalComponentArgsRest(__VLS_166), false));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: (__VLS_ctx.distributionLink) }, { class: "link" }));
    (__VLS_ctx.distributionLink);
    var __VLS_169 = {}.CopyToClipboard;
    /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
    // @ts-ignore
    var __VLS_170 = __VLS_asFunctionalComponent(__VLS_169, new __VLS_169({
        content: (__VLS_ctx.distributionLink),
    }));
    var __VLS_171 = __VLS_170.apply(void 0, __spreadArray([{
            content: (__VLS_ctx.distributionLink),
        }], __VLS_functionalComponentArgsRest(__VLS_170), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "qr-wrapper ml-auto mr-auto" }));
    if (__VLS_ctx.distributionLink) {
        var __VLS_173 = {}.QrCode;
        /** @type {[typeof __VLS_components.QrCode, typeof __VLS_components.qrCode, ]} */ ;
        // @ts-ignore
        var __VLS_174 = __VLS_asFunctionalComponent(__VLS_173, new __VLS_173(__assign(__assign({ value: (__VLS_ctx.distributionLink), size: (180), margin: (2) }, { class: "block mb-2 ml-auto mr-auto" }), { type: "image/png", color: ({ dark: '#000000', light: '#ffffff' }) })));
        var __VLS_175 = __VLS_174.apply(void 0, __spreadArray([__assign(__assign({ value: (__VLS_ctx.distributionLink), size: (180), margin: (2) }, { class: "block mb-2 ml-auto mr-auto" }), { type: "image/png", color: ({ dark: '#000000', light: '#ffffff' }) })], __VLS_functionalComponentArgsRest(__VLS_174), false));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "mt-0" }));
    (__VLS_ctx.$t('distribution.message.distributionQrDescription'));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
    (__VLS_ctx.$t('distribution.message.distributionLinkDescription'));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "more" }));
    var __VLS_177 = {}.ElTooltip;
    /** @type {[typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ]} */ ;
    // @ts-ignore
    var __VLS_178 = __VLS_asFunctionalComponent(__VLS_177, new __VLS_177({
        effect: "dark",
        content: (__VLS_ctx.$t('distribution.message.distributionLinkDescription2')),
        placement: "top",
    }));
    var __VLS_179 = __VLS_178.apply(void 0, __spreadArray([{
            effect: "dark",
            content: (__VLS_ctx.$t('distribution.message.distributionLinkDescription2')),
            placement: "top",
        }], __VLS_functionalComponentArgsRest(__VLS_178), false));
    __VLS_180.slots.default;
    (__VLS_ctx.$t('distribution.message.technicalDetail'));
    var __VLS_180;
}
var __VLS_156;
var __VLS_152;
var __VLS_112;
var __VLS_8;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['item-mini']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['value']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['item-mini']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['value']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['item-mini']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['value']} */ ;
/** @type {__VLS_StyleScopedClasses['item-mini']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['value']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['level-info']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['clear-both']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['float-left']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['float-right']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['level']} */ ;
/** @type {__VLS_StyleScopedClasses['level']} */ ;
/** @type {__VLS_StyleScopedClasses['level']} */ ;
/** @type {__VLS_StyleScopedClasses['distribution-info']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['link-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['link']} */ ;
/** @type {__VLS_StyleScopedClasses['qr-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-0']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['more']} */ ;
var __VLS_dollars;
var __VLS_self;
