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
var Navigator_vue_1 = require("@/components/common/Navigator.vue");
var SidePanel_vue_1 = require("@/components/console/SidePanel.vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'LayoutConsole',
    components: {
        SidePanel: SidePanel_vue_1.default,
        Navigator: Navigator_vue_1.default
    },
    data: function () {
        return {
            mobile: window.innerWidth < 768
        };
    },
    mounted: function () {
        var _this = this;
        window.addEventListener('resize', function () {
            _this.mobile = window.innerWidth < 768;
        });
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    SidePanel: SidePanel_vue_1.default,
    Navigator: Navigator_vue_1.default
};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['console']} */ ;
/** @type {__VLS_StyleScopedClasses['navigator']} */ ;
/** @type {__VLS_StyleScopedClasses['main']} */ ;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['side']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "console" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "main" }));
var __VLS_0 = {}.SidePanel;
/** @type {[typeof __VLS_components.SidePanel, typeof __VLS_components.sidePanel, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ class: "side" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "side" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ class: "panel" })));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ class: "panel" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
var __VLS_8 = {}.navigator;
/** @type {[typeof __VLS_components.Navigator, typeof __VLS_components.navigator, ]} */ ;
// @ts-ignore
var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ class: "navigator" }, { direction: (__VLS_ctx.mobile ? 'row' : 'column') })));
var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ class: "navigator" }, { direction: (__VLS_ctx.mobile ? 'row' : 'column') })], __VLS_functionalComponentArgsRest(__VLS_9), false));
/** @type {__VLS_StyleScopedClasses['console']} */ ;
/** @type {__VLS_StyleScopedClasses['main']} */ ;
/** @type {__VLS_StyleScopedClasses['side']} */ ;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['navigator']} */ ;
var __VLS_dollars;
var __VLS_self;
