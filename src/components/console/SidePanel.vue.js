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
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var router_1 = require("@/router");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var utils_1 = require("@/utils");
exports.default = (0, vue_1.defineComponent)({
    name: 'Navigator',
    components: {
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon
    },
    computed: {
        isOfficial: function () {
            return (0, utils_1.isOfficial)();
        },
        active: function () {
            return this.$route.matched[0].path;
        },
        user: function () {
            return this.$store.getters.user;
        },
        links: function () {
            var links = [
                {
                    key: 'application-list',
                    text: this.$t('console.menu.applicationList'),
                    name: router_1.ROUTE_CONSOLE_APPLICATION_LIST,
                    icon: 'fa-solid fa-cube'
                },
                {
                    key: 'order-list',
                    text: this.$t('console.menu.orderList'),
                    name: router_1.ROUTE_CONSOLE_ORDER_LIST,
                    icon: 'fa-solid fa-store'
                },
                {
                    key: 'usage-list',
                    text: this.$t('console.menu.usageList'),
                    name: router_1.ROUTE_CONSOLE_USAGE_LIST,
                    icon: 'fa-solid fa-rotate-left'
                }
            ];
            return links;
        }
    },
    mounted: function () { },
    methods: {
        onHome: function () {
            this.$router.push({
                name: router_1.ROUTE_INDEX
            });
        },
        onNavigate: function (link) {
            if (link.name) {
                this.$router.push({
                    name: link.name
                });
            }
            else if (link.href) {
                window.open(link.href, '_blank');
            }
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon
};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['suffix']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "side" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "links" }));
var _loop_1 = function (link, linkIndex) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.onNavigate(link);
        } }, { key: (linkIndex) }), { class: ({ link: true, active: __VLS_ctx.$route.name === link.name }) }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "icon" }));
    var __VLS_0 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ icon: (link.icon) }, { class: "text-sm" })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ icon: (link.icon) }, { class: "text-sm" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "text" }));
    (link.text);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "outer" }));
    if (!link.name && link.href) {
        var __VLS_4 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ icon: "fa-solid fa-up-right-from-square" }, { class: "text-sm ml-2" })));
        var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-up-right-from-square" }, { class: "text-sm ml-2" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "suffix" }));
};
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.links)); _i < _a.length; _i++) {
    var _b = _a[_i], link = _b[0], linkIndex = _b[1];
    _loop_1(link, linkIndex);
}
/** @type {__VLS_StyleScopedClasses['side']} */ ;
/** @type {__VLS_StyleScopedClasses['links']} */ ;
/** @type {__VLS_StyleScopedClasses['link']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text']} */ ;
/** @type {__VLS_StyleScopedClasses['outer']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['suffix']} */ ;
var __VLS_dollars;
var __VLS_self;
