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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var models_1 = require("@/models");
var element_plus_1 = require("element-plus");
var operators_1 = require("@/operators");
var utils_1 = require("@/utils");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var router_1 = require("@/router");
exports.default = (0, vue_1.defineComponent)({
    name: 'ConsoleSubscriptionBuy',
    components: {
        ElSkeleton: element_plus_1.ElSkeleton,
        ElRow: element_plus_1.ElRow,
        ElTag: element_plus_1.ElTag,
        ElCol: element_plus_1.ElCol,
        ElCard: element_plus_1.ElCard,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
        ElButton: element_plus_1.ElButton
    },
    data: function () {
        return {
            application: undefined,
            // the application which used for subscription
            application2: undefined,
            type: models_1.IApplicationType.PERIOD,
            services: [],
            loading: false,
            creating: false,
            subscription: undefined
        };
    },
    computed: {
        site: function () {
            return this.$store.getters.site;
        },
        applicationId: function () {
            var _a, _b;
            return (_b = (_a = this.$route.params) === null || _a === void 0 ? void 0 : _a.id) === null || _b === void 0 ? void 0 : _b.toString();
        },
        subscriptions: function () {
            var _a, _b, _c, _d;
            var items = [
                {
                    name: 'WEEK',
                    label: this.$t('console.subscription.weekly'),
                    description: this.$t('console.subscription.weekly.description'),
                    duration: 7 * 24 * 60 * 60
                },
                {
                    name: 'MONTH',
                    label: this.$t('console.subscription.monthly'),
                    description: this.$t('console.subscription.monthly.description'),
                    duration: 30 * 24 * 60 * 60
                },
                {
                    name: 'YEAR',
                    tag: this.$t('console.button.suggested'),
                    label: this.$t('console.subscription.yearly'),
                    description: this.$t('console.subscription.yearly.description'),
                    duration: 365 * 24 * 60 * 60
                }
            ];
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                console.log('item', item);
                var pkgs = this.getPackages(item.duration);
                console.log('pkgs', pkgs);
                if (pkgs) {
                    item.price = pkgs.reduce(function (acc, pkg) { return acc + pkg.price; }, 0);
                }
                for (var _e = 0, pkgs_1 = pkgs; _e < pkgs_1.length; _e++) {
                    var pkg = pkgs_1[_e];
                    if (!item.benefits) {
                        item.benefits = [];
                    }
                    item.benefits.push({
                        enabled: true,
                        content: "".concat((_a = pkg === null || pkg === void 0 ? void 0 : pkg.service) === null || _a === void 0 ? void 0 : _a.title, " - ").concat(pkg.amount, " ") + this.$t('service.unit.' + ((_b = pkg === null || pkg === void 0 ? void 0 : pkg.service) === null || _b === void 0 ? void 0 : _b.unit) + 's')
                    });
                }
                (_c = item.benefits) === null || _c === void 0 ? void 0 : _c.push({ enabled: item.name !== 'WEEK', content: this.$t('console.message.benefit1') });
                (_d = item.benefits) === null || _d === void 0 ? void 0 : _d.push({ enabled: item.name !== 'WEEK', content: this.$t('console.message.benefit2') });
            }
            return items;
        },
        service: function () {
            var _a;
            return (_a = this.application) === null || _a === void 0 ? void 0 : _a.service;
        },
        serviceIds: function () {
            if (!this.application || !this.application.service) {
                return [];
            }
            return [this.application.service.id];
        }
    },
    mounted: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        return [4 /*yield*/, this.onFetchApplication()];
                    case 1:
                        _a.sent();
                        // fetch the real period application
                        return [4 /*yield*/, this.onFetchApplication2()];
                    case 2:
                        // fetch the real period application
                        _a.sent();
                        return [4 /*yield*/, this.onCreateApplications()];
                    case 3:
                        _a.sent();
                        this.loading = false;
                        this.subscription = this.subscriptions[2];
                        return [2 /*return*/];
                }
            });
        });
    },
    methods: {
        getPriceString: utils_1.getPriceString,
        onBuyExtra: function () {
            this.$router.push({
                name: router_1.ROUTE_CONSOLE_APPLICATION_EXTRA,
                params: {
                    id: this.applicationId
                }
            });
        },
        getPackages: function (duration) {
            var _this = this;
            var result = [];
            if (!this.service) {
                return [];
            }
            var services = [this.service];
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            var sortedServices = services.sort(function (a, b) { return _this.serviceIds.indexOf(a.id) - _this.serviceIds.indexOf(b.id); });
            for (var _i = 0, sortedServices_1 = sortedServices; _i < sortedServices_1.length; _i++) {
                var service = sortedServices_1[_i];
                var packages = service.packages;
                var target = packages === null || packages === void 0 ? void 0 : packages.find(function (p) { return p.type === models_1.IPackageType.PERIOD && p.duration === duration; });
                if (target) {
                    result.push(__assign(__assign({}, target), { service: service }));
                }
            }
            return result;
        },
        onCreateApplications: function () {
            return __awaiter(this, void 0, void 0, function () {
                var missingServiceIds, _i, missingServiceIds_1, serviceId;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            missingServiceIds = [];
                            if (!this.application2) {
                                missingServiceIds.push((_b = (_a = this.application) === null || _a === void 0 ? void 0 : _a.service) === null || _b === void 0 ? void 0 : _b.id);
                            }
                            if (!(missingServiceIds.length > 0)) return [3 /*break*/, 6];
                            _i = 0, missingServiceIds_1 = missingServiceIds;
                            _c.label = 1;
                        case 1:
                            if (!(_i < missingServiceIds_1.length)) return [3 /*break*/, 4];
                            serviceId = missingServiceIds_1[_i];
                            return [4 /*yield*/, operators_1.applicationOperator.create({
                                    service_id: serviceId,
                                    type: models_1.IApplicationType.PERIOD
                                })];
                        case 2:
                            _c.sent();
                            _c.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [4 /*yield*/, this.onFetchApplication2()];
                        case 5:
                            _c.sent();
                            _c.label = 6;
                        case 6: return [2 /*return*/];
                    }
                });
            });
        },
        onChangeType: function () {
            console.log('onChangeType', this.type);
            this.$router.push({
                name: router_1.ROUTE_CONSOLE_APPLICATION_EXTRA,
                params: this.$route.params
            });
        },
        onFetchServices: function () {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, operators_1.serviceOperator.getAll({
                                id: this.serviceIds
                            })];
                        case 1:
                            data = (_a.sent()).data;
                            this.services = data.items;
                            console.debug('services', this.services);
                            return [2 /*return*/];
                    }
                });
            });
        },
        onFetchApplication: function () {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, operators_1.applicationOperator.get(this.applicationId)];
                        case 1:
                            data = (_a.sent()).data;
                            this.application = data;
                            console.debug('application', this.application);
                            return [2 /*return*/];
                    }
                });
            });
        },
        onFetchApplication2: function () {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, operators_1.applicationOperator.getAll({
                                limit: 100,
                                offset: 0,
                                user_id: this.$store.getters.user.id,
                                ordering: '-created_at',
                                service_id: this.serviceIds,
                                type: models_1.IApplicationType.PERIOD
                            })];
                        case 1:
                            data = (_b.sent()).data;
                            this.application2 = (_a = data.items) === null || _a === void 0 ? void 0 : _a[0];
                            console.debug('application2', this.application2);
                            return [2 /*return*/];
                    }
                });
            });
        },
        onCreateOrder: function (subscription) {
            var _this = this;
            var _a;
            this.subscription = subscription;
            this.creating = true;
            if (!this.application2 || !this.application2.id) {
                element_plus_1.ElMessage.error(this.$t('console.message.applicationNotFound'));
                this.creating = false;
                return;
            }
            operators_1.orderOperator
                .create({
                application_ids: [this.application2.id],
                package_ids: this.getPackages(subscription.duration).map(function (p) { return p.id; }),
                description: ((_a = this.service) === null || _a === void 0 ? void 0 : _a.title) + ' - ' + subscription.label
            })
                .then(function (_a) {
                var data = _a.data;
                _this.creating = false;
                _this.$router.push({
                    name: router_1.ROUTE_CONSOLE_ORDER_DETAIL,
                    params: {
                        id: data.id
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
    ElTag: element_plus_1.ElTag,
    ElCol: element_plus_1.ElCol,
    ElCard: element_plus_1.ElCard,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
    ElButton: element_plus_1.ElButton
};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['benefits']} */ ;
/** @type {__VLS_StyleScopedClasses['benefit']} */ ;
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
var __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25(__assign({ shadow: "hover" }, { class: "card" })));
var __VLS_27 = __VLS_26.apply(void 0, __spreadArray([__assign({ shadow: "hover" }, { class: "card" })], __VLS_functionalComponentArgsRest(__VLS_26), false));
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
var __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33(__assign({ class: "max-w-4xl mx-auto" })));
var __VLS_35 = __VLS_34.apply(void 0, __spreadArray([__assign({ class: "max-w-4xl mx-auto" })], __VLS_functionalComponentArgsRest(__VLS_34), false));
__VLS_36.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "introduction" }));
(__VLS_ctx.$t('console.subscription.title'));
if (__VLS_ctx.loading) {
    var __VLS_37 = {}.ElSkeleton;
    /** @type {[typeof __VLS_components.ElSkeleton, typeof __VLS_components.elSkeleton, ]} */ ;
    // @ts-ignore
    var __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({}));
    var __VLS_39 = __VLS_38.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_38), false));
}
else {
    var __VLS_41 = {}.ElRow;
    /** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
    // @ts-ignore
    var __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41(__assign({ gutter: (15) }, { class: "subscriptions" })));
    var __VLS_43 = __VLS_42.apply(void 0, __spreadArray([__assign({ gutter: (15) }, { class: "subscriptions" })], __VLS_functionalComponentArgsRest(__VLS_42), false));
    __VLS_44.slots.default;
    var _loop_1 = function (item, index) {
        var __VLS_45 = {}.ElCol;
        /** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
        // @ts-ignore
        var __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
            key: (index),
            xs: (24),
            md: (24 / (((_a = __VLS_ctx.subscriptions) === null || _a === void 0 ? void 0 : _a.length) || 4)),
        }));
        var __VLS_47 = __VLS_46.apply(void 0, __spreadArray([{
                key: (index),
                xs: (24),
                md: (24 / (((_b = __VLS_ctx.subscriptions) === null || _b === void 0 ? void 0 : _b.length) || 4)),
            }], __VLS_functionalComponentArgsRest(__VLS_46), false));
        __VLS_48.slots.default;
        var __VLS_49 = {}.ElCard;
        /** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
        // @ts-ignore
        var __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49(__assign(__assign({ 'onClick': {} }, { shadow: "hover" }), { class: ({ subscription: true, active: ((_c = __VLS_ctx.subscription) === null || _c === void 0 ? void 0 : _c.name) === item.name }) })));
        var __VLS_51 = __VLS_50.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { shadow: "hover" }), { class: ({ subscription: true, active: ((_d = __VLS_ctx.subscription) === null || _d === void 0 ? void 0 : _d.name) === item.name }) })], __VLS_functionalComponentArgsRest(__VLS_50), false));
        var __VLS_53 = void 0;
        var __VLS_54 = void 0;
        var __VLS_55 = void 0;
        var __VLS_56 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!!(__VLS_ctx.loading))
                    return;
                __VLS_ctx.subscription = item;
            }
        };
        __VLS_52.slots.default;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)(__assign({ class: "name" }));
        (item.label);
        if (item.tag) {
            var __VLS_57 = {}.ElTag;
            /** @type {[typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ]} */ ;
            // @ts-ignore
            var __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({
                type: "warning",
            }));
            var __VLS_59 = __VLS_58.apply(void 0, __spreadArray([{
                    type: "warning",
                }], __VLS_functionalComponentArgsRest(__VLS_58), false));
            __VLS_60.slots.default;
            (item.tag);
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "price" }));
        (__VLS_ctx.getPriceString({ value: item.price }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
        (item.description);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "benefits" }));
        for (var _j = 0, _k = __VLS_getVForSourceType((item.benefits)); _j < _k.length; _j++) {
            var _l = _k[_j], benefit = _l[0], benefitIndex = _l[1];
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: (benefitIndex) }, { class: "benefit" }));
            if (benefit.enabled) {
                var __VLS_61 = {}.FontAwesomeIcon;
                /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
                // @ts-ignore
                var __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61(__assign({ icon: "fa-solid fa-check" }, { class: "icon icon-check" })));
                var __VLS_63 = __VLS_62.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-check" }, { class: "icon icon-check" })], __VLS_functionalComponentArgsRest(__VLS_62), false));
            }
            else {
                var __VLS_65 = {}.FontAwesomeIcon;
                /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
                // @ts-ignore
                var __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65(__assign({ icon: "fa-solid fa-xmark" }, { class: "icon icon-xmark" })));
                var __VLS_67 = __VLS_66.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-xmark" }, { class: "icon icon-xmark" })], __VLS_functionalComponentArgsRest(__VLS_66), false));
            }
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (benefit.content);
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "operations" }));
        var __VLS_69 = {}.ElButton;
        /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
        // @ts-ignore
        var __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69(__assign(__assign({ 'onClick': {} }, { class: "btn btn-subscribe" }), { type: (((_e = __VLS_ctx.subscription) === null || _e === void 0 ? void 0 : _e.name) === (item === null || item === void 0 ? void 0 : item.name) ? 'primary' : ''), round: true })));
        var __VLS_71 = __VLS_70.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { class: "btn btn-subscribe" }), { type: (((_f = __VLS_ctx.subscription) === null || _f === void 0 ? void 0 : _f.name) === (item === null || item === void 0 ? void 0 : item.name) ? 'primary' : ''), round: true })], __VLS_functionalComponentArgsRest(__VLS_70), false));
        var __VLS_73 = void 0;
        var __VLS_74 = void 0;
        var __VLS_75 = void 0;
        var __VLS_76 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!!(__VLS_ctx.loading))
                    return;
                __VLS_ctx.onCreateOrder(item);
            }
        };
        __VLS_72.slots.default;
        (__VLS_ctx.$t('common.button.buy'));
    };
    var __VLS_60, __VLS_72, __VLS_52, __VLS_48;
    for (var _i = 0, _g = __VLS_getVForSourceType((__VLS_ctx.subscriptions)); _i < _g.length; _i++) {
        var _h = _g[_i], item = _h[0], index = _h[1];
        _loop_1(item, index);
    }
    var __VLS_44;
}
if (!__VLS_ctx.loading) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "extra" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.$t('console.message.doNotWantSubscribe'));
    var __VLS_77 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    var __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77(__assign(__assign(__assign({ 'onClick': {} }, { type: "primary" }), { class: "btn btn-extra" }), { round: true, size: "small" })));
    var __VLS_79 = __VLS_78.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onClick': {} }, { type: "primary" }), { class: "btn btn-extra" }), { round: true, size: "small" })], __VLS_functionalComponentArgsRest(__VLS_78), false));
    var __VLS_81 = void 0;
    var __VLS_82 = void 0;
    var __VLS_83 = void 0;
    var __VLS_84 = {
        onClick: (__VLS_ctx.onBuyExtra)
    };
    __VLS_80.slots.default;
    (__VLS_ctx.$t('console.message.buyExtra'));
    var __VLS_80;
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
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['introduction']} */ ;
/** @type {__VLS_StyleScopedClasses['subscriptions']} */ ;
/** @type {__VLS_StyleScopedClasses['subscription']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['name']} */ ;
/** @type {__VLS_StyleScopedClasses['price']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['benefits']} */ ;
/** @type {__VLS_StyleScopedClasses['benefit']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-check']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-xmark']} */ ;
/** @type {__VLS_StyleScopedClasses['operations']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-subscribe']} */ ;
/** @type {__VLS_StyleScopedClasses['extra']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-extra']} */ ;
var __VLS_dollars;
var __VLS_self;
