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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var EditText_vue_1 = require("@/components/site/EditText.vue");
var EditImage_vue_1 = require("@/components/site/EditImage.vue");
var EditArray_vue_1 = require("@/components/site/EditArray.vue");
var operators_1 = require("@/operators");
exports.default = (0, vue_1.defineComponent)({
    name: 'SiteIndex',
    components: {
        EditText: EditText_vue_1.default,
        EditImage: EditImage_vue_1.default,
        EditArray: EditArray_vue_1.default,
        ElDivider: element_plus_1.ElDivider,
        ElImage: element_plus_1.ElImage,
        ElForm: element_plus_1.ElForm,
        ElFormItem: element_plus_1.ElFormItem
    },
    data: function () {
        return {
            editing: {
                title: false
            }
        };
    },
    computed: {
        site: function () {
            return this.$store.getters.site;
        }
    },
    methods: {
        onSave: function (data) {
            var _this = this;
            var _a;
            var payload = __assign(__assign({}, this.site), data);
            operators_1.siteOperator.update((_a = this.site) === null || _a === void 0 ? void 0 : _a.id, payload).then(function () {
                var _a;
                console.debug('getSite for id', (_a = _this.site) === null || _a === void 0 ? void 0 : _a.id);
                _this.$store.dispatch('getSite');
            });
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    EditText: EditText_vue_1.default,
    EditImage: EditImage_vue_1.default,
    EditArray: EditArray_vue_1.default,
    ElDivider: element_plus_1.ElDivider,
    ElImage: element_plus_1.ElImage,
    ElForm: element_plus_1.ElForm,
    ElFormItem: element_plus_1.ElFormItem
};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
// CSS variable injection 
// CSS variable injection end 
var __VLS_0 = {}.ElForm;
/** @type {[typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign(__assign({ model: (__VLS_ctx.site) }, { class: "form" }), { labelWidth: "auto" }), { style: {} })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign(__assign({ model: (__VLS_ctx.site) }, { class: "form" }), { labelWidth: "auto" }), { style: {} })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {};
__VLS_3.slots.default;
var __VLS_5 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    label: (__VLS_ctx.$t('site.field.origin')),
}));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('site.field.origin')),
    }], __VLS_functionalComponentArgsRest(__VLS_6), false));
__VLS_8.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block w-full" }));
(__VLS_ctx.site.origin);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block tip" }));
(__VLS_ctx.$t('site.message.originTip'));
var __VLS_8;
var __VLS_9 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
var __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    label: (__VLS_ctx.$t('site.field.title')),
}));
var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('site.field.title')),
    }], __VLS_functionalComponentArgsRest(__VLS_10), false));
__VLS_12.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block w-full" }));
(__VLS_ctx.site.title);
var __VLS_13 = {}.EditText;
/** @type {[typeof __VLS_components.EditText, typeof __VLS_components.editText, ]} */ ;
// @ts-ignore
var __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13(__assign({ 'onConfirm': {} }, { modelValue: (__VLS_ctx.site.title), title: (__VLS_ctx.$t('site.title.editTitle')), placeholder: (__VLS_ctx.$t('site.placeholder.title')) })));
var __VLS_15 = __VLS_14.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { modelValue: (__VLS_ctx.site.title), title: (__VLS_ctx.$t('site.title.editTitle')), placeholder: (__VLS_ctx.$t('site.placeholder.title')) })], __VLS_functionalComponentArgsRest(__VLS_14), false));
var __VLS_17;
var __VLS_18;
var __VLS_19;
var __VLS_20 = {
    onConfirm: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.onSave({ title: $event });
    }
};
var __VLS_16;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block tip" }));
(__VLS_ctx.$t('site.message.titleTip'));
var __VLS_12;
var __VLS_21 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
var __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
    label: (__VLS_ctx.$t('site.field.logo')),
}));
var __VLS_23 = __VLS_22.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('site.field.logo')),
    }], __VLS_functionalComponentArgsRest(__VLS_22), false));
__VLS_24.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block w-full" }));
var __VLS_25 = {}.ElImage;
/** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
// @ts-ignore
var __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25(__assign({ src: (__VLS_ctx.site.logo) }, { class: "logo" })));
var __VLS_27 = __VLS_26.apply(void 0, __spreadArray([__assign({ src: (__VLS_ctx.site.logo) }, { class: "logo" })], __VLS_functionalComponentArgsRest(__VLS_26), false));
var __VLS_29 = {}.EditImage;
/** @type {[typeof __VLS_components.EditImage, typeof __VLS_components.editImage, ]} */ ;
// @ts-ignore
var __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29(__assign({ 'onConfirm': {} }, { modelValue: (__VLS_ctx.site.logo), title: (__VLS_ctx.$t('site.title.editLogo')), tip: (__VLS_ctx.$t('site.message.editLogoTip')) })));
var __VLS_31 = __VLS_30.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { modelValue: (__VLS_ctx.site.logo), title: (__VLS_ctx.$t('site.title.editLogo')), tip: (__VLS_ctx.$t('site.message.editLogoTip')) })], __VLS_functionalComponentArgsRest(__VLS_30), false));
var __VLS_33;
var __VLS_34;
var __VLS_35;
var __VLS_36 = {
    onConfirm: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.onSave({ logo: $event });
    }
};
var __VLS_32;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block tip" }));
(__VLS_ctx.$t('site.message.logoTip'));
var __VLS_24;
var __VLS_37 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
var __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
    label: (__VLS_ctx.$t('site.field.favicon')),
}));
var __VLS_39 = __VLS_38.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('site.field.favicon')),
    }], __VLS_functionalComponentArgsRest(__VLS_38), false));
__VLS_40.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block w-full" }));
var __VLS_41 = {}.ElImage;
/** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
// @ts-ignore
var __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41(__assign({ src: (__VLS_ctx.site.favicon) }, { class: "favicon" })));
var __VLS_43 = __VLS_42.apply(void 0, __spreadArray([__assign({ src: (__VLS_ctx.site.favicon) }, { class: "favicon" })], __VLS_functionalComponentArgsRest(__VLS_42), false));
var __VLS_45 = {}.EditImage;
/** @type {[typeof __VLS_components.EditImage, typeof __VLS_components.editImage, ]} */ ;
// @ts-ignore
var __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45(__assign({ 'onConfirm': {} }, { modelValue: (__VLS_ctx.site.favicon), title: (__VLS_ctx.$t('site.title.editFavicon')), tip: (__VLS_ctx.$t('site.message.editFaviconTip')) })));
var __VLS_47 = __VLS_46.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { modelValue: (__VLS_ctx.site.favicon), title: (__VLS_ctx.$t('site.title.editFavicon')), tip: (__VLS_ctx.$t('site.message.editFaviconTip')) })], __VLS_functionalComponentArgsRest(__VLS_46), false));
var __VLS_49;
var __VLS_50;
var __VLS_51;
var __VLS_52 = {
    onConfirm: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.onSave({ favicon: $event });
    }
};
var __VLS_48;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block tip" }));
(__VLS_ctx.$t('site.message.faviconTip'));
var __VLS_40;
var __VLS_53 = {}.ElDivider;
/** @type {[typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, ]} */ ;
// @ts-ignore
var __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
    borderStyle: "dashed",
}));
var __VLS_55 = __VLS_54.apply(void 0, __spreadArray([{
        borderStyle: "dashed",
    }], __VLS_functionalComponentArgsRest(__VLS_54), false));
var __VLS_57 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
var __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({
    label: (__VLS_ctx.$t('site.field.admins')),
}));
var __VLS_59 = __VLS_58.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('site.field.admins')),
    }], __VLS_functionalComponentArgsRest(__VLS_58), false));
__VLS_60.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block w-full" }));
((_a = __VLS_ctx.site.admins) === null || _a === void 0 ? void 0 : _a.join(', '));
var __VLS_61 = {}.EditArray;
/** @type {[typeof __VLS_components.EditArray, typeof __VLS_components.editArray, ]} */ ;
// @ts-ignore
var __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61(__assign({ 'onConfirm': {} }, { modelValue: (((_b = __VLS_ctx.site) === null || _b === void 0 ? void 0 : _b.admins) || []), title: (__VLS_ctx.$t('site.title.editAdmins')), placeholder: (__VLS_ctx.$t('site.placeholder.admins')), tip: (__VLS_ctx.$t('site.message.adminsTip2')), min: (1), minErrorMessage: (__VLS_ctx.$t('site.message.atLeastOneAdmin')) })));
var __VLS_63 = __VLS_62.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { modelValue: (((_c = __VLS_ctx.site) === null || _c === void 0 ? void 0 : _c.admins) || []), title: (__VLS_ctx.$t('site.title.editAdmins')), placeholder: (__VLS_ctx.$t('site.placeholder.admins')), tip: (__VLS_ctx.$t('site.message.adminsTip2')), min: (1), minErrorMessage: (__VLS_ctx.$t('site.message.atLeastOneAdmin')) })], __VLS_functionalComponentArgsRest(__VLS_62), false));
var __VLS_65;
var __VLS_66;
var __VLS_67;
var __VLS_68 = {
    onConfirm: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.onSave({ admins: $event });
    }
};
var __VLS_64;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block tip" }));
(__VLS_ctx.$t('site.message.adminsTip'));
var __VLS_60;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['form']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['tip']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['tip']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['tip']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['favicon']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['tip']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['tip']} */ ;
var __VLS_dollars;
var __VLS_self;
