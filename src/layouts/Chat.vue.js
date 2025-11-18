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
var SidePanel_vue_1 = require("@/components/chat/SidePanel.vue");
var element_plus_1 = require("element-plus");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
exports.default = (0, vue_1.defineComponent)({
    name: 'LayoutChat',
    components: {
        SidePanel: SidePanel_vue_1.default,
        ElDrawer: element_plus_1.ElDrawer,
        ElButton: element_plus_1.ElButton,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon
    },
    emits: ['change-conversation'],
    data: function () {
        return {
            drawer: false
        };
    },
    methods: {
        onChangeConversation: function (id) {
            console.debug('onChangeConversation in layout', id);
            this.$emit('change-conversation', id);
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    SidePanel: SidePanel_vue_1.default,
    ElDrawer: element_plus_1.ElDrawer,
    ElButton: element_plus_1.ElButton,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon
};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['menu']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "main flex flex-row flex-1" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "side w-[250px] h-full overflow-y-scroll border-r border-[var(--el-border-color)]" }));
var __VLS_0 = {};
var __VLS_2 = {}.SidePanel;
/** @type {[typeof __VLS_components.SidePanel, typeof __VLS_components.sidePanel, ]} */ ;
// @ts-ignore
var __VLS_3 = __VLS_asFunctionalComponent(__VLS_2, new __VLS_2(__assign({ 'onChangeConversation': {} })));
var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([__assign({ 'onChangeConversation': {} })], __VLS_functionalComponentArgsRest(__VLS_3), false));
var __VLS_6;
var __VLS_7;
var __VLS_8;
var __VLS_9 = {
    onChangeConversation: (__VLS_ctx.onChangeConversation)
};
var __VLS_5;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "chat h-full w-[calc(100%-250px)] pt-[45px] flex-1 flex flex-col relative" }));
var __VLS_10 = {};
var __VLS_12 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign(__assign({ 'onClick': {} }, { round: true }), { class: "menu" })));
var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { round: true }), { class: "menu" })], __VLS_functionalComponentArgsRest(__VLS_13), false));
var __VLS_16;
var __VLS_17;
var __VLS_18;
var __VLS_19 = {
    onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.drawer = true;
    }
};
__VLS_15.slots.default;
var __VLS_20 = {}.FontAwesomeIcon;
/** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
// @ts-ignore
var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    icon: "fa-solid fa-bars",
}));
var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([{
        icon: "fa-solid fa-bars",
    }], __VLS_functionalComponentArgsRest(__VLS_21), false));
var __VLS_15;
var __VLS_24 = {}.ElDrawer;
/** @type {[typeof __VLS_components.ElDrawer, typeof __VLS_components.elDrawer, typeof __VLS_components.ElDrawer, typeof __VLS_components.elDrawer, ]} */ ;
// @ts-ignore
var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    modelValue: (__VLS_ctx.drawer),
    direction: "ltr",
    withHeader: (false),
    size: "290px",
}));
var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.drawer),
        direction: "ltr",
        withHeader: (false),
        size: "290px",
    }], __VLS_functionalComponentArgsRest(__VLS_25), false));
__VLS_27.slots.default;
var __VLS_28 = {}.SidePanel;
/** @type {[typeof __VLS_components.SidePanel, typeof __VLS_components.sidePanel, ]} */ ;
// @ts-ignore
var __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28(__assign({ 'onChangeConversation': {} })));
var __VLS_30 = __VLS_29.apply(void 0, __spreadArray([__assign({ 'onChangeConversation': {} })], __VLS_functionalComponentArgsRest(__VLS_29), false));
var __VLS_32;
var __VLS_33;
var __VLS_34;
var __VLS_35 = {
    onChangeConversation: (__VLS_ctx.onChangeConversation)
};
var __VLS_31;
var __VLS_27;
/** @type {__VLS_StyleScopedClasses['main']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['side']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[250px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-y-scroll']} */ ;
/** @type {__VLS_StyleScopedClasses['border-r']} */ ;
/** @type {__VLS_StyleScopedClasses['border-[var(--el-border-color)]']} */ ;
/** @type {__VLS_StyleScopedClasses['chat']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[calc(100%-250px)]']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-[45px]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['menu']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0, __VLS_11 = __VLS_10;
var __VLS_dollars;
var __VLS_self;
