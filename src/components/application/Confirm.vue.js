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
var element_plus_1 = require("element-plus");
var utils_1 = require("@/utils");
exports.default = (0, vue_1.defineComponent)({
    name: 'ApplicationConfirm',
    components: {
        ElDialog: element_plus_1.ElDialog,
        ElDivider: element_plus_1.ElDivider,
        ElCheckbox: element_plus_1.ElCheckbox,
        ElButton: element_plus_1.ElButton
    },
    props: {
        visible: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    emits: ['update:visible', 'apply'],
    data: function () {
        return {
            checked: true
        };
    },
    watch: {},
    methods: {
        getBaseUrlPlatform: utils_1.getBaseUrlPlatform,
        onApply: function () {
            if (!this.checked) {
                element_plus_1.ElMessage.error(this.$t('application.message.notAgreePolicy'));
                return;
            }
            this.$emit('apply');
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElDialog: element_plus_1.ElDialog,
    ElDivider: element_plus_1.ElDivider,
    ElCheckbox: element_plus_1.ElCheckbox,
    ElButton: element_plus_1.ElButton
};
var __VLS_components;
var __VLS_directives;
var __VLS_0 = {}.ElDialog;
/** @type {[typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ 'onClose': {} }, { modelValue: (__VLS_ctx.visible), width: "500px", title: (__VLS_ctx.$t('application.message.welcome')), center: true })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ 'onClose': {} }, { modelValue: (__VLS_ctx.visible), width: "500px", title: (__VLS_ctx.$t('application.message.welcome')), center: true })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4;
var __VLS_5;
var __VLS_6;
var __VLS_7 = {
    onClose: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.$emit('update:visible', false);
    }
};
var __VLS_8 = {};
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "content py-[10px] px-[40px]" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "my-4" }));
(__VLS_ctx.$t('application.message.notApplied'));
var __VLS_9 = {}.ElDivider;
/** @type {[typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, ]} */ ;
// @ts-ignore
var __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9(__assign({ class: "my-2" })));
var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([__assign({ class: "my-2" })], __VLS_functionalComponentArgsRest(__VLS_10), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "policy mb-[10px]" }));
var __VLS_13 = {}.ElCheckbox;
/** @type {[typeof __VLS_components.ElCheckbox, typeof __VLS_components.elCheckbox, ]} */ ;
// @ts-ignore
var __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13(__assign({ modelValue: (__VLS_ctx.checked), size: "large" }, { class: "policy-checkbox mr-[10px]" })));
var __VLS_15 = __VLS_14.apply(void 0, __spreadArray([__assign({ modelValue: (__VLS_ctx.checked), size: "large" }, { class: "policy-checkbox mr-[10px]" })], __VLS_functionalComponentArgsRest(__VLS_14), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "policy-title text-[12px] relative -bottom-[3px]" }));
(__VLS_ctx.$t('application.message.readPolicy'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ class: "policy-title text-[12px] relative -bottom-[3px] text-[var(--el-color-primary)] cursor-pointer no-underline" }, { target: "_blank", href: (__VLS_ctx.getBaseUrlPlatform() + '/terms') }));
(__VLS_ctx.$t('application.message.policy'));
var __VLS_17 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
var __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17(__assign({ 'onClick': {} }, { round: true, type: "primary" })));
var __VLS_19 = __VLS_18.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { round: true, type: "primary" })], __VLS_functionalComponentArgsRest(__VLS_18), false));
var __VLS_21;
var __VLS_22;
var __VLS_23;
var __VLS_24 = {
    onClick: (__VLS_ctx.onApply)
};
__VLS_20.slots.default;
(__VLS_ctx.$t('common.button.start'));
var __VLS_20;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['py-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['px-[40px]']} */ ;
/** @type {__VLS_StyleScopedClasses['my-4']} */ ;
/** @type {__VLS_StyleScopedClasses['my-2']} */ ;
/** @type {__VLS_StyleScopedClasses['policy']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['policy-checkbox']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['policy-title']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[12px]']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['-bottom-[3px]']} */ ;
/** @type {__VLS_StyleScopedClasses['policy-title']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[12px]']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['-bottom-[3px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[var(--el-color-primary)]']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['no-underline']} */ ;
var __VLS_dollars;
var __VLS_self;
