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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var models_1 = require("@/models");
var router_1 = require("@/router");
var Info_vue_1 = require("./Info.vue");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
exports.default = (0, vue_1.defineComponent)({
    name: 'ApplicationStatus',
    components: {
        ElButton: element_plus_1.ElButton,
        ElDialog: element_plus_1.ElDialog,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
        ApplicationInfo: Info_vue_1.default
    },
    props: {
        application: {
            type: Object,
            required: true
        },
        applications: {
            type: Array,
            default: undefined
        },
        service: {
            type: Object,
            required: true
        }
    },
    emits: ['select'],
    data: function () {
        return {
            visible: false,
            applicationType: models_1.IApplicationType
        };
    },
    computed: {
        authenticated: function () {
            return !!this.$store.state.token.access;
        },
        user: function () {
            return this.$store.state.user;
        }
    },
    methods: {
        onGoUsage: function (application) {
            var url = this.$router.resolve({
                name: router_1.ROUTE_CONSOLE_USAGE_LIST,
                query: {
                    application_id: application.id
                }
            });
            window.open(url.href, '_blank');
        },
        onBuyMore: function (application) {
            // open in new tab for this url
            var url = this.$router.resolve({
                name: router_1.ROUTE_CONSOLE_APPLICATION_EXTRA,
                params: {
                    id: application.id
                }
            }).href;
            window.open(url, '_blank');
        },
        onSelectApplication: function (application) {
            this.$emit('select', application);
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElButton: element_plus_1.ElButton,
    ElDialog: element_plus_1.ElDialog,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
    ApplicationInfo: Info_vue_1.default
};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "status" }));
var __VLS_0 = {}.ElDialog;
/** @type {[typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({ modelValue: (__VLS_ctx.visible) }, { class: "mt-12" }), { width: "450px" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ modelValue: (__VLS_ctx.visible) }, { class: "mt-12" }), { width: "450px" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
if (__VLS_ctx.application) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-center mb-4" }));
    (__VLS_ctx.$t('application.message.applicationSelection'));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex flex-col gap-4 mb-6 justify-center items-center overflow-y-auto" }));
    var _loop_1 = function (app, index) {
        var __VLS_4 = {}.ApplicationInfo;
        /** @type {[typeof __VLS_components.ApplicationInfo, typeof __VLS_components.applicationInfo, ]} */ ;
        // @ts-ignore
        var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign(__assign(__assign(__assign(__assign({ 'onClick': {} }, { 'onUsage': {} }), { 'onBuy': {} }), { key: (index) }), { class: ({
                item: true,
                active: ((_a = __VLS_ctx.application) === null || _a === void 0 ? void 0 : _a.id) === app.id
            }) }), { application: (app) })));
        var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign(__assign(__assign(__assign(__assign({ 'onClick': {} }, { 'onUsage': {} }), { 'onBuy': {} }), { key: (index) }), { class: ({
                    item: true,
                    active: ((_b = __VLS_ctx.application) === null || _b === void 0 ? void 0 : _b.id) === app.id
                }) }), { application: (app) })], __VLS_functionalComponentArgsRest(__VLS_5), false));
        var __VLS_8 = void 0;
        var __VLS_9 = void 0;
        var __VLS_10 = void 0;
        var __VLS_11 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!(__VLS_ctx.application))
                    return;
                __VLS_ctx.onSelectApplication(app);
            }
        };
        var __VLS_12 = {
            onUsage: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!(__VLS_ctx.application))
                    return;
                __VLS_ctx.onGoUsage(app);
            }
        };
        var __VLS_13 = {
            onBuy: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!(__VLS_ctx.application))
                    return;
                __VLS_ctx.onBuyMore(app);
            }
        };
    };
    var __VLS_7;
    for (var _i = 0, _c = __VLS_getVForSourceType((__VLS_ctx.applications)); _i < _c.length; _i++) {
        var _d = _c[_i], app = _d[0], index = _d[1];
        _loop_1(app, index);
    }
}
var __VLS_3;
var __VLS_14 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
var __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14(__assign(__assign({ 'onClick': {} }, { circle: true }), { class: "entry" })));
var __VLS_16 = __VLS_15.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { circle: true }), { class: "entry" })], __VLS_functionalComponentArgsRest(__VLS_15), false));
var __VLS_18;
var __VLS_19;
var __VLS_20;
var __VLS_21 = {
    onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.visible = true;
    }
};
__VLS_17.slots.default;
var __VLS_22 = {}.FontAwesomeIcon;
/** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
// @ts-ignore
var __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22(__assign({ icon: "fa-solid fa-wallet" }, { class: "icon" })));
var __VLS_24 = __VLS_23.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-wallet" }, { class: "icon" })], __VLS_functionalComponentArgsRest(__VLS_23), false));
var __VLS_17;
/** @type {__VLS_StyleScopedClasses['status']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-12']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-y-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['entry']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
var __VLS_dollars;
var __VLS_self;
