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
var icons_vue_1 = require("@element-plus/icons-vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'EditText',
    components: {
        ElDialog: element_plus_1.ElDialog,
        ElInput: element_plus_1.ElInput,
        ElButton: element_plus_1.ElButton,
        ElIcon: element_plus_1.ElIcon,
        Edit: icons_vue_1.Edit
    },
    props: {
        modelValue: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        }
    },
    emits: ['confirm', 'cancel'],
    data: function () {
        return {
            editing: false,
            value: this.modelValue
        };
    },
    methods: {
        onCancel: function () {
            this.editing = false;
        },
        onConfirm: function () {
            this.$emit('confirm', this.value);
            this.editing = false;
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElDialog: element_plus_1.ElDialog,
    ElInput: element_plus_1.ElInput,
    ElButton: element_plus_1.ElButton,
    ElIcon: element_plus_1.ElIcon,
    Edit: icons_vue_1.Edit
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
var __VLS_0 = {}.ElDialog;
/** @type {[typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.editing),
    title: (__VLS_ctx.title),
    width: "400px",
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.editing),
        title: (__VLS_ctx.title),
        width: "400px",
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
var __VLS_4 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    modelValue: (__VLS_ctx.value),
    placeholder: (__VLS_ctx.placeholder),
}));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.value),
        placeholder: (__VLS_ctx.placeholder),
    }], __VLS_functionalComponentArgsRest(__VLS_5), false));
{
    var __VLS_thisSlot = __VLS_3.slots.footer;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "dialog-footer" }));
    var __VLS_8 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ 'onClick': {} }, { round: true })));
    var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { round: true })], __VLS_functionalComponentArgsRest(__VLS_9), false));
    var __VLS_12 = void 0;
    var __VLS_13 = void 0;
    var __VLS_14 = void 0;
    var __VLS_15 = {
        onClick: (__VLS_ctx.onCancel)
    };
    __VLS_11.slots.default;
    (__VLS_ctx.$t('common.button.cancel'));
    var __VLS_11;
    var __VLS_16 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign({ 'onClick': {} }, { round: true, type: "primary" })));
    var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { round: true, type: "primary" })], __VLS_functionalComponentArgsRest(__VLS_17), false));
    var __VLS_20 = void 0;
    var __VLS_21 = void 0;
    var __VLS_22 = void 0;
    var __VLS_23 = {
        onClick: (__VLS_ctx.onConfirm)
    };
    __VLS_19.slots.default;
    (__VLS_ctx.$t('common.button.confirm'));
    var __VLS_19;
}
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.editing = true;
    } }, { class: "edit" }));
var __VLS_24 = {}.ElIcon;
/** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
// @ts-ignore
var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24(__assign({ class: "icon" })));
var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([__assign({ class: "icon" })], __VLS_functionalComponentArgsRest(__VLS_25), false));
__VLS_27.slots.default;
var __VLS_28 = {}.edit;
/** @type {[typeof __VLS_components.Edit, typeof __VLS_components.edit, ]} */ ;
// @ts-ignore
var __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({}));
var __VLS_30 = __VLS_29.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_29), false));
var __VLS_27;
/** @type {__VLS_StyleScopedClasses['dialog-footer']} */ ;
/** @type {__VLS_StyleScopedClasses['edit']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
var __VLS_dollars;
var __VLS_self;
