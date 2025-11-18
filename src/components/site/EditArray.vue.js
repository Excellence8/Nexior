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
        ElTag: element_plus_1.ElTag,
        Edit: icons_vue_1.Edit
    },
    props: {
        modelValue: {
            type: Array,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        tip: {
            type: String,
            default: undefined
        },
        min: {
            type: Number,
            default: undefined
        },
        minErrorMessage: {
            type: String,
            default: undefined
        }
    },
    emits: ['confirm', 'cancel'],
    data: function () {
        return {
            inputVisible: false,
            inputValue: '',
            editing: false,
            value: JSON.parse(JSON.stringify(this.modelValue))
        };
    },
    methods: {
        onCancel: function () {
            this.editing = false;
        },
        onConfirm: function () {
            if (this.min !== undefined && this.value.length < this.min) {
                element_plus_1.ElMessage.error(this.minErrorMessage);
                return;
            }
            this.$emit('confirm', this.value);
            this.editing = false;
        },
        onClose: function (item) {
            this.value.splice(this.value.indexOf(item), 1);
        },
        onInputConfirm: function () {
            var inputValue = this.inputValue;
            if (inputValue) {
                this.value.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = '';
        },
        onNewItem: function () {
            var _this = this;
            this.inputVisible = true;
            this.$nextTick(function () {
                // @ts-ignore
                _this.$refs.input.focus();
            });
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
    ElTag: element_plus_1.ElTag,
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
var _loop_1 = function (item, itemKey) {
    var __VLS_4 = {}.ElTag;
    /** @type {[typeof __VLS_components.ElTag, typeof __VLS_components.elTag, typeof __VLS_components.ElTag, typeof __VLS_components.elTag, ]} */ ;
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign(__assign(__assign({ 'onClose': {} }, { key: (itemKey), closable: true, round: true }), { class: "mr-2 mb-2" }), { disableTransitions: (false) })));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onClose': {} }, { key: (itemKey), closable: true, round: true }), { class: "mr-2 mb-2" }), { disableTransitions: (false) })], __VLS_functionalComponentArgsRest(__VLS_5), false));
    var __VLS_8 = void 0;
    var __VLS_9 = void 0;
    var __VLS_10 = void 0;
    var __VLS_11 = {
        onClose: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.onClose(item);
        }
    };
    __VLS_7.slots.default;
    (item);
};
var __VLS_7;
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.value)); _i < _a.length; _i++) {
    var _b = _a[_i], item = _b[0], itemKey = _b[1];
    _loop_1(item, itemKey);
}
if (__VLS_ctx.inputVisible) {
    var __VLS_12 = {}.ElInput;
    /** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign(__assign(__assign(__assign({ 'onKeyup': {} }, { 'onBlur': {} }), { ref: "input", modelValue: (__VLS_ctx.inputValue) }), { class: "block" }), { size: "small" })));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign(__assign(__assign(__assign({ 'onKeyup': {} }, { 'onBlur': {} }), { ref: "input", modelValue: (__VLS_ctx.inputValue) }), { class: "block" }), { size: "small" })], __VLS_functionalComponentArgsRest(__VLS_13), false));
    var __VLS_16 = void 0;
    var __VLS_17 = void 0;
    var __VLS_18 = void 0;
    var __VLS_19 = {
        onKeyup: (__VLS_ctx.onInputConfirm)
    };
    var __VLS_20 = {
        onBlur: (__VLS_ctx.onInputConfirm)
    };
    /** @type {typeof __VLS_ctx.input} */ ;
    var __VLS_21 = {};
    var __VLS_15;
}
else {
    var __VLS_23 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    var __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23(__assign(__assign(__assign({ 'onClick': {} }, { round: true }), { class: "block" }), { size: "small" })));
    var __VLS_25 = __VLS_24.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onClick': {} }, { round: true }), { class: "block" }), { size: "small" })], __VLS_functionalComponentArgsRest(__VLS_24), false));
    var __VLS_27 = void 0;
    var __VLS_28 = void 0;
    var __VLS_29 = void 0;
    var __VLS_30 = {
        onClick: (__VLS_ctx.onNewItem)
    };
    __VLS_26.slots.default;
    var __VLS_26;
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block tip" }));
(__VLS_ctx.tip);
{
    var __VLS_thisSlot = __VLS_3.slots.footer;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "dialog-footer" }));
    var __VLS_31 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    var __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31(__assign({ 'onClick': {} }, { round: true })));
    var __VLS_33 = __VLS_32.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { round: true })], __VLS_functionalComponentArgsRest(__VLS_32), false));
    var __VLS_35 = void 0;
    var __VLS_36 = void 0;
    var __VLS_37 = void 0;
    var __VLS_38 = {
        onClick: (__VLS_ctx.onCancel)
    };
    __VLS_34.slots.default;
    (__VLS_ctx.$t('common.button.cancel'));
    var __VLS_34;
    var __VLS_39 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    var __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39(__assign({ 'onClick': {} }, { round: true, type: "primary" })));
    var __VLS_41 = __VLS_40.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { round: true, type: "primary" })], __VLS_functionalComponentArgsRest(__VLS_40), false));
    var __VLS_43 = void 0;
    var __VLS_44 = void 0;
    var __VLS_45 = void 0;
    var __VLS_46 = {
        onClick: (__VLS_ctx.onConfirm)
    };
    __VLS_42.slots.default;
    (__VLS_ctx.$t('common.button.confirm'));
    var __VLS_42;
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
var __VLS_47 = {}.ElIcon;
/** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
// @ts-ignore
var __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47(__assign({ class: "icon" })));
var __VLS_49 = __VLS_48.apply(void 0, __spreadArray([__assign({ class: "icon" })], __VLS_functionalComponentArgsRest(__VLS_48), false));
__VLS_50.slots.default;
var __VLS_51 = {}.edit;
/** @type {[typeof __VLS_components.Edit, typeof __VLS_components.edit, ]} */ ;
// @ts-ignore
var __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({}));
var __VLS_53 = __VLS_52.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_52), false));
var __VLS_50;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['tip']} */ ;
/** @type {__VLS_StyleScopedClasses['dialog-footer']} */ ;
/** @type {__VLS_StyleScopedClasses['edit']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
// @ts-ignore
var __VLS_22 = __VLS_21;
var __VLS_dollars;
var __VLS_self;
