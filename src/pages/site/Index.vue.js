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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16;
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
        ElRow: element_plus_1.ElRow,
        ElImage: element_plus_1.ElImage,
        ElCol: element_plus_1.ElCol,
        ElCard: element_plus_1.ElCard,
        ElForm: element_plus_1.ElForm,
        ElSwitch: element_plus_1.ElSwitch,
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
    ElRow: element_plus_1.ElRow,
    ElImage: element_plus_1.ElImage,
    ElCol: element_plus_1.ElCol,
    ElCard: element_plus_1.ElCard,
    ElForm: element_plus_1.ElForm,
    ElSwitch: element_plus_1.ElSwitch,
    ElFormItem: element_plus_1.ElFormItem
};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
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
(__VLS_ctx.$t('common.title.site'));
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
    md: (12),
    xs: (24),
}));
var __VLS_23 = __VLS_22.apply(void 0, __spreadArray([{
        md: (12),
        xs: (24),
    }], __VLS_functionalComponentArgsRest(__VLS_22), false));
__VLS_24.slots.default;
var __VLS_25 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
var __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25(__assign({ shadow: "hover" }, { class: "mb-4" })));
var __VLS_27 = __VLS_26.apply(void 0, __spreadArray([__assign({ shadow: "hover" }, { class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_26), false));
__VLS_28.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)(__assign({ class: "title" }));
(__VLS_ctx.$t('site.title.basicConfig'));
var __VLS_29 = {}.ElDivider;
/** @type {[typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, ]} */ ;
// @ts-ignore
var __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({}));
var __VLS_31 = __VLS_30.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_30), false));
var __VLS_33 = {}.ElForm;
/** @type {[typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ]} */ ;
// @ts-ignore
var __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33(__assign(__assign(__assign({ model: (__VLS_ctx.site) }, { class: "form" }), { labelWidth: "auto" }), { style: {} })));
var __VLS_35 = __VLS_34.apply(void 0, __spreadArray([__assign(__assign(__assign({ model: (__VLS_ctx.site) }, { class: "form" }), { labelWidth: "auto" }), { style: {} })], __VLS_functionalComponentArgsRest(__VLS_34), false));
__VLS_36.slots.default;
var __VLS_37 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
var __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
    label: (__VLS_ctx.$t('site.field.origin')),
}));
var __VLS_39 = __VLS_38.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('site.field.origin')),
    }], __VLS_functionalComponentArgsRest(__VLS_38), false));
__VLS_40.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block w-full" }));
(__VLS_ctx.site.origin);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block tip" }));
(__VLS_ctx.$t('site.message.originTip'));
var __VLS_40;
var __VLS_41 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
var __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({
    label: (__VLS_ctx.$t('site.field.title')),
}));
var __VLS_43 = __VLS_42.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('site.field.title')),
    }], __VLS_functionalComponentArgsRest(__VLS_42), false));
__VLS_44.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block w-full" }));
(__VLS_ctx.site.title);
var __VLS_45 = {}.EditText;
/** @type {[typeof __VLS_components.EditText, typeof __VLS_components.editText, ]} */ ;
// @ts-ignore
var __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45(__assign({ 'onConfirm': {} }, { modelValue: (__VLS_ctx.site.title), title: (__VLS_ctx.$t('site.title.editTitle')), placeholder: (__VLS_ctx.$t('site.placeholder.title')) })));
var __VLS_47 = __VLS_46.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { modelValue: (__VLS_ctx.site.title), title: (__VLS_ctx.$t('site.title.editTitle')), placeholder: (__VLS_ctx.$t('site.placeholder.title')) })], __VLS_functionalComponentArgsRest(__VLS_46), false));
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
        __VLS_ctx.onSave({ title: $event });
    }
};
var __VLS_48;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block tip" }));
(__VLS_ctx.$t('site.message.titleTip'));
var __VLS_44;
var __VLS_53 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
var __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
    label: (__VLS_ctx.$t('site.field.logo')),
}));
var __VLS_55 = __VLS_54.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('site.field.logo')),
    }], __VLS_functionalComponentArgsRest(__VLS_54), false));
__VLS_56.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block w-full" }));
var __VLS_57 = {}.ElImage;
/** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
// @ts-ignore
var __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57(__assign({ src: (__VLS_ctx.site.logo) }, { class: "logo" })));
var __VLS_59 = __VLS_58.apply(void 0, __spreadArray([__assign({ src: (__VLS_ctx.site.logo) }, { class: "logo" })], __VLS_functionalComponentArgsRest(__VLS_58), false));
var __VLS_61 = {}.EditImage;
/** @type {[typeof __VLS_components.EditImage, typeof __VLS_components.editImage, ]} */ ;
// @ts-ignore
var __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61(__assign({ 'onConfirm': {} }, { modelValue: (__VLS_ctx.site.logo), title: (__VLS_ctx.$t('site.title.editLogo')), tip: (__VLS_ctx.$t('site.message.editLogoTip')) })));
var __VLS_63 = __VLS_62.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { modelValue: (__VLS_ctx.site.logo), title: (__VLS_ctx.$t('site.title.editLogo')), tip: (__VLS_ctx.$t('site.message.editLogoTip')) })], __VLS_functionalComponentArgsRest(__VLS_62), false));
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
        __VLS_ctx.onSave({ logo: $event });
    }
};
var __VLS_64;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block tip" }));
(__VLS_ctx.$t('site.message.logoTip'));
var __VLS_56;
var __VLS_69 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
var __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({
    label: (__VLS_ctx.$t('site.field.favicon')),
}));
var __VLS_71 = __VLS_70.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('site.field.favicon')),
    }], __VLS_functionalComponentArgsRest(__VLS_70), false));
__VLS_72.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block w-full" }));
var __VLS_73 = {}.ElImage;
/** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
// @ts-ignore
var __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73(__assign({ src: (__VLS_ctx.site.favicon) }, { class: "favicon" })));
var __VLS_75 = __VLS_74.apply(void 0, __spreadArray([__assign({ src: (__VLS_ctx.site.favicon) }, { class: "favicon" })], __VLS_functionalComponentArgsRest(__VLS_74), false));
var __VLS_77 = {}.EditImage;
/** @type {[typeof __VLS_components.EditImage, typeof __VLS_components.editImage, ]} */ ;
// @ts-ignore
var __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77(__assign({ 'onConfirm': {} }, { modelValue: (__VLS_ctx.site.favicon), title: (__VLS_ctx.$t('site.title.editFavicon')), tip: (__VLS_ctx.$t('site.message.editFaviconTip')) })));
var __VLS_79 = __VLS_78.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { modelValue: (__VLS_ctx.site.favicon), title: (__VLS_ctx.$t('site.title.editFavicon')), tip: (__VLS_ctx.$t('site.message.editFaviconTip')) })], __VLS_functionalComponentArgsRest(__VLS_78), false));
var __VLS_81;
var __VLS_82;
var __VLS_83;
var __VLS_84 = {
    onConfirm: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.onSave({ favicon: $event });
    }
};
var __VLS_80;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block tip" }));
(__VLS_ctx.$t('site.message.faviconTip'));
var __VLS_72;
var __VLS_85 = {}.ElDivider;
/** @type {[typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, ]} */ ;
// @ts-ignore
var __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({
    borderStyle: "dashed",
}));
var __VLS_87 = __VLS_86.apply(void 0, __spreadArray([{
        borderStyle: "dashed",
    }], __VLS_functionalComponentArgsRest(__VLS_86), false));
var __VLS_89 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
var __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({
    label: (__VLS_ctx.$t('site.field.admins')),
}));
var __VLS_91 = __VLS_90.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('site.field.admins')),
    }], __VLS_functionalComponentArgsRest(__VLS_90), false));
__VLS_92.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block w-full" }));
((_a = __VLS_ctx.site.admins) === null || _a === void 0 ? void 0 : _a.join(', '));
var __VLS_93 = {}.EditArray;
/** @type {[typeof __VLS_components.EditArray, typeof __VLS_components.editArray, ]} */ ;
// @ts-ignore
var __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, new __VLS_93(__assign({ 'onConfirm': {} }, { modelValue: (((_b = __VLS_ctx.site) === null || _b === void 0 ? void 0 : _b.admins) || []), title: (__VLS_ctx.$t('site.title.editAdmins')), placeholder: (__VLS_ctx.$t('site.placeholder.admins')), tip: (__VLS_ctx.$t('site.message.adminsTip2')), min: (1), minErrorMessage: (__VLS_ctx.$t('site.message.atLeastOneAdmin')) })));
var __VLS_95 = __VLS_94.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { modelValue: (((_c = __VLS_ctx.site) === null || _c === void 0 ? void 0 : _c.admins) || []), title: (__VLS_ctx.$t('site.title.editAdmins')), placeholder: (__VLS_ctx.$t('site.placeholder.admins')), tip: (__VLS_ctx.$t('site.message.adminsTip2')), min: (1), minErrorMessage: (__VLS_ctx.$t('site.message.atLeastOneAdmin')) })], __VLS_functionalComponentArgsRest(__VLS_94), false));
var __VLS_97;
var __VLS_98;
var __VLS_99;
var __VLS_100 = {
    onConfirm: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.onSave({ admins: $event });
    }
};
var __VLS_96;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block tip" }));
(__VLS_ctx.$t('site.message.adminsTip'));
var __VLS_92;
var __VLS_36;
var __VLS_28;
var __VLS_101 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
var __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({
    shadow: "hover",
}));
var __VLS_103 = __VLS_102.apply(void 0, __spreadArray([{
        shadow: "hover",
    }], __VLS_functionalComponentArgsRest(__VLS_102), false));
__VLS_104.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)(__assign({ class: "title" }));
(__VLS_ctx.$t('site.title.seoConfig'));
var __VLS_105 = {}.ElDivider;
/** @type {[typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, ]} */ ;
// @ts-ignore
var __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, new __VLS_105({}));
var __VLS_107 = __VLS_106.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_106), false));
var __VLS_109 = {}.ElForm;
/** @type {[typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ]} */ ;
// @ts-ignore
var __VLS_110 = __VLS_asFunctionalComponent(__VLS_109, new __VLS_109(__assign(__assign(__assign({ model: (__VLS_ctx.site) }, { class: "form" }), { labelWidth: "auto" }), { style: {} })));
var __VLS_111 = __VLS_110.apply(void 0, __spreadArray([__assign(__assign(__assign({ model: (__VLS_ctx.site) }, { class: "form" }), { labelWidth: "auto" }), { style: {} })], __VLS_functionalComponentArgsRest(__VLS_110), false));
__VLS_112.slots.default;
var __VLS_113 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
var __VLS_114 = __VLS_asFunctionalComponent(__VLS_113, new __VLS_113({
    label: (__VLS_ctx.$t('site.field.description')),
}));
var __VLS_115 = __VLS_114.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('site.field.description')),
    }], __VLS_functionalComponentArgsRest(__VLS_114), false));
__VLS_116.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block w-full" }));
(__VLS_ctx.site.description);
var __VLS_117 = {}.EditText;
/** @type {[typeof __VLS_components.EditText, typeof __VLS_components.editText, ]} */ ;
// @ts-ignore
var __VLS_118 = __VLS_asFunctionalComponent(__VLS_117, new __VLS_117(__assign({ 'onConfirm': {} }, { modelValue: (__VLS_ctx.site.description), title: (__VLS_ctx.$t('site.title.editDescription')), placeholder: (__VLS_ctx.$t('site.placeholder.description')) })));
var __VLS_119 = __VLS_118.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { modelValue: (__VLS_ctx.site.description), title: (__VLS_ctx.$t('site.title.editDescription')), placeholder: (__VLS_ctx.$t('site.placeholder.description')) })], __VLS_functionalComponentArgsRest(__VLS_118), false));
var __VLS_121;
var __VLS_122;
var __VLS_123;
var __VLS_124 = {
    onConfirm: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.onSave({ description: $event });
    }
};
var __VLS_120;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block tip" }));
(__VLS_ctx.$t('site.message.descriptionTip'));
var __VLS_116;
var __VLS_125 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
var __VLS_126 = __VLS_asFunctionalComponent(__VLS_125, new __VLS_125({
    label: (__VLS_ctx.$t('site.field.keywords')),
}));
var __VLS_127 = __VLS_126.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('site.field.keywords')),
    }], __VLS_functionalComponentArgsRest(__VLS_126), false));
__VLS_128.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block w-full" }));
((_d = __VLS_ctx.site.keywords) === null || _d === void 0 ? void 0 : _d.join(', '));
var __VLS_129 = {}.EditArray;
/** @type {[typeof __VLS_components.EditArray, typeof __VLS_components.editArray, ]} */ ;
// @ts-ignore
var __VLS_130 = __VLS_asFunctionalComponent(__VLS_129, new __VLS_129(__assign({ 'onConfirm': {} }, { modelValue: (((_e = __VLS_ctx.site) === null || _e === void 0 ? void 0 : _e.keywords) || []), title: (__VLS_ctx.$t('site.title.editKeywords')), placeholder: (__VLS_ctx.$t('site.placeholder.keywords')), tip: (__VLS_ctx.$t('site.message.keywordsTip2')) })));
var __VLS_131 = __VLS_130.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { modelValue: (((_f = __VLS_ctx.site) === null || _f === void 0 ? void 0 : _f.keywords) || []), title: (__VLS_ctx.$t('site.title.editKeywords')), placeholder: (__VLS_ctx.$t('site.placeholder.keywords')), tip: (__VLS_ctx.$t('site.message.keywordsTip2')) })], __VLS_functionalComponentArgsRest(__VLS_130), false));
var __VLS_133;
var __VLS_134;
var __VLS_135;
var __VLS_136 = {
    onConfirm: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.onSave({ keywords: $event });
    }
};
var __VLS_132;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block tip" }));
(__VLS_ctx.$t('site.message.keywordsTip'));
var __VLS_128;
var __VLS_112;
var __VLS_104;
var __VLS_24;
var __VLS_137 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
var __VLS_138 = __VLS_asFunctionalComponent(__VLS_137, new __VLS_137({
    md: (12),
    xs: (24),
}));
var __VLS_139 = __VLS_138.apply(void 0, __spreadArray([{
        md: (12),
        xs: (24),
    }], __VLS_functionalComponentArgsRest(__VLS_138), false));
__VLS_140.slots.default;
var __VLS_141 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
var __VLS_142 = __VLS_asFunctionalComponent(__VLS_141, new __VLS_141(__assign({ shadow: "hover" }, { class: "mb-4" })));
var __VLS_143 = __VLS_142.apply(void 0, __spreadArray([__assign({ shadow: "hover" }, { class: "mb-4" })], __VLS_functionalComponentArgsRest(__VLS_142), false));
__VLS_144.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)(__assign({ class: "title" }));
(__VLS_ctx.$t('site.title.distributionConfig'));
var __VLS_145 = {}.ElDivider;
/** @type {[typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, ]} */ ;
// @ts-ignore
var __VLS_146 = __VLS_asFunctionalComponent(__VLS_145, new __VLS_145({}));
var __VLS_147 = __VLS_146.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_146), false));
var __VLS_149 = {}.ElForm;
/** @type {[typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ]} */ ;
// @ts-ignore
var __VLS_150 = __VLS_asFunctionalComponent(__VLS_149, new __VLS_149(__assign(__assign(__assign({ model: (__VLS_ctx.site) }, { class: "form" }), { labelWidth: "auto" }), { style: {} })));
var __VLS_151 = __VLS_150.apply(void 0, __spreadArray([__assign(__assign(__assign({ model: (__VLS_ctx.site) }, { class: "form" }), { labelWidth: "auto" }), { style: {} })], __VLS_functionalComponentArgsRest(__VLS_150), false));
__VLS_152.slots.default;
var __VLS_153 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
var __VLS_154 = __VLS_asFunctionalComponent(__VLS_153, new __VLS_153({
    label: (__VLS_ctx.$t('site.field.distributionDefaultInviterId')),
}));
var __VLS_155 = __VLS_154.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('site.field.distributionDefaultInviterId')),
    }], __VLS_functionalComponentArgsRest(__VLS_154), false));
__VLS_156.slots.default;
((_g = __VLS_ctx.site.distribution) === null || _g === void 0 ? void 0 : _g.default_inviter_id);
var __VLS_157 = {}.EditText;
/** @type {[typeof __VLS_components.EditText, typeof __VLS_components.editText, ]} */ ;
// @ts-ignore
var __VLS_158 = __VLS_asFunctionalComponent(__VLS_157, new __VLS_157(__assign({ 'onConfirm': {} }, { modelValue: ((_h = __VLS_ctx.site.distribution) === null || _h === void 0 ? void 0 : _h.default_inviter_id), title: (__VLS_ctx.$t('site.title.editDistributionDefaultInviterId')), placeholder: (__VLS_ctx.$t('site.placeholder.editDistributionDefaultInviterId')) })));
var __VLS_159 = __VLS_158.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { modelValue: ((_j = __VLS_ctx.site.distribution) === null || _j === void 0 ? void 0 : _j.default_inviter_id), title: (__VLS_ctx.$t('site.title.editDistributionDefaultInviterId')), placeholder: (__VLS_ctx.$t('site.placeholder.editDistributionDefaultInviterId')) })], __VLS_functionalComponentArgsRest(__VLS_158), false));
var __VLS_161;
var __VLS_162;
var __VLS_163;
var __VLS_164 = {
    onConfirm: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.onSave({
            distribution: __assign(__assign({}, __VLS_ctx.site.distribution), { default_inviter_id: $event })
        });
    }
};
var __VLS_160;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block tip" }));
(__VLS_ctx.$t('site.message.distributionDefaultInviterIdTip'));
var __VLS_156;
var __VLS_165 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
var __VLS_166 = __VLS_asFunctionalComponent(__VLS_165, new __VLS_165({
    label: (__VLS_ctx.$t('site.field.distributionForceInviterId')),
}));
var __VLS_167 = __VLS_166.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('site.field.distributionForceInviterId')),
    }], __VLS_functionalComponentArgsRest(__VLS_166), false));
__VLS_168.slots.default;
((_k = __VLS_ctx.site.distribution) === null || _k === void 0 ? void 0 : _k.force_inviter_id);
var __VLS_169 = {}.EditText;
/** @type {[typeof __VLS_components.EditText, typeof __VLS_components.editText, ]} */ ;
// @ts-ignore
var __VLS_170 = __VLS_asFunctionalComponent(__VLS_169, new __VLS_169(__assign({ 'onConfirm': {} }, { modelValue: ((_l = __VLS_ctx.site.distribution) === null || _l === void 0 ? void 0 : _l.force_inviter_id), title: (__VLS_ctx.$t('site.title.editDistributionForceInviterId')), placeholder: (__VLS_ctx.$t('site.placeholder.editDistributionForceInviterId')) })));
var __VLS_171 = __VLS_170.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { modelValue: ((_m = __VLS_ctx.site.distribution) === null || _m === void 0 ? void 0 : _m.force_inviter_id), title: (__VLS_ctx.$t('site.title.editDistributionForceInviterId')), placeholder: (__VLS_ctx.$t('site.placeholder.editDistributionForceInviterId')) })], __VLS_functionalComponentArgsRest(__VLS_170), false));
var __VLS_173;
var __VLS_174;
var __VLS_175;
var __VLS_176 = {
    onConfirm: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.onSave({
            distribution: __assign(__assign({}, __VLS_ctx.site.distribution), { force_inviter_id: $event })
        });
    }
};
var __VLS_172;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block tip" }));
(__VLS_ctx.$t('site.message.distributionForceInviterIdTip'));
var __VLS_168;
var __VLS_152;
var __VLS_144;
var __VLS_177 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
var __VLS_178 = __VLS_asFunctionalComponent(__VLS_177, new __VLS_177({
    shadow: "hover",
}));
var __VLS_179 = __VLS_178.apply(void 0, __spreadArray([{
        shadow: "hover",
    }], __VLS_functionalComponentArgsRest(__VLS_178), false));
__VLS_180.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)(__assign({ class: "title" }));
(__VLS_ctx.$t('site.title.featuresConfig'));
var __VLS_181 = {}.ElDivider;
/** @type {[typeof __VLS_components.ElDivider, typeof __VLS_components.elDivider, ]} */ ;
// @ts-ignore
var __VLS_182 = __VLS_asFunctionalComponent(__VLS_181, new __VLS_181({}));
var __VLS_183 = __VLS_182.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_182), false));
var __VLS_185 = {}.ElForm;
/** @type {[typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ]} */ ;
// @ts-ignore
var __VLS_186 = __VLS_asFunctionalComponent(__VLS_185, new __VLS_185(__assign(__assign(__assign({ model: (__VLS_ctx.site) }, { class: "form" }), { labelWidth: "auto" }), { style: {} })));
var __VLS_187 = __VLS_186.apply(void 0, __spreadArray([__assign(__assign(__assign({ model: (__VLS_ctx.site) }, { class: "form" }), { labelWidth: "auto" }), { style: {} })], __VLS_functionalComponentArgsRest(__VLS_186), false));
__VLS_188.slots.default;
var _loop_1 = function (feature, featureIndex) {
    var __VLS_189 = {}.ElFormItem;
    /** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
    // @ts-ignore
    var __VLS_190 = __VLS_asFunctionalComponent(__VLS_189, new __VLS_189({
        key: (featureIndex),
        label: (__VLS_ctx.$t('site.field.features' + feature.charAt(0).toUpperCase() + feature.slice(1))),
    }));
    var __VLS_191 = __VLS_190.apply(void 0, __spreadArray([{
            key: (featureIndex),
            label: (__VLS_ctx.$t('site.field.features' + feature.charAt(0).toUpperCase() + feature.slice(1))),
        }], __VLS_functionalComponentArgsRest(__VLS_190), false));
    __VLS_192.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "w-full" }));
    var __VLS_193 = {}.ElSwitch;
    /** @type {[typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ]} */ ;
    // @ts-ignore
    var __VLS_194 = __VLS_asFunctionalComponent(__VLS_193, new __VLS_193(__assign({ 'onUpdate:modelValue': {} }, { modelValue: (((_o = __VLS_ctx.site.features[feature]) === null || _o === void 0 ? void 0 : _o.enabled) || false), inlinePrompt: true, activeText: (__VLS_ctx.$t('site.button.enabled')), inactiveText: (__VLS_ctx.$t('site.button.disabled')) })));
    var __VLS_195 = __VLS_194.apply(void 0, __spreadArray([__assign({ 'onUpdate:modelValue': {} }, { modelValue: (((_p = __VLS_ctx.site.features[feature]) === null || _p === void 0 ? void 0 : _p.enabled) || false), inlinePrompt: true, activeText: (__VLS_ctx.$t('site.button.enabled')), inactiveText: (__VLS_ctx.$t('site.button.disabled')) })], __VLS_functionalComponentArgsRest(__VLS_194), false));
    var __VLS_197 = void 0;
    var __VLS_198 = void 0;
    var __VLS_199 = void 0;
    var __VLS_200 = {
        'onUpdate:modelValue': function () {
            var _a;
            var _b = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _b[_i] = arguments[_i];
            }
            var $event = _b[0];
            __VLS_ctx.onSave({
                features: __assign(__assign({}, __VLS_ctx.site.features), (_a = {}, _a[feature] = __assign(__assign({}, __VLS_ctx.site.features[feature]), { enabled: $event }), _a))
            });
        }
    };
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block tip w-full" }));
    (__VLS_ctx.$t('site.message.features' + feature.charAt(0).toUpperCase() + feature.slice(1)));
    if (feature === 'support') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: ((_q = __VLS_ctx.site.features[feature]) === null || _q === void 0 ? void 0 : _q.enabled) }), null, null);
        var __VLS_201 = {}.ElFormItem;
        /** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
        // @ts-ignore
        var __VLS_202 = __VLS_asFunctionalComponent(__VLS_201, new __VLS_201({
            label: "WeChat",
        }));
        var __VLS_203 = __VLS_202.apply(void 0, __spreadArray([{
                label: "WeChat",
            }], __VLS_functionalComponentArgsRest(__VLS_202), false));
        __VLS_204.slots.default;
        var __VLS_205 = {}.ElSwitch;
        /** @type {[typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ]} */ ;
        // @ts-ignore
        var __VLS_206 = __VLS_asFunctionalComponent(__VLS_205, new __VLS_205(__assign({ 'onUpdate:modelValue': {} }, { modelValue: (((_s = (_r = __VLS_ctx.site.features[feature]) === null || _r === void 0 ? void 0 : _r.wechat) === null || _s === void 0 ? void 0 : _s.enabled) || false), inlinePrompt: true, activeText: (__VLS_ctx.$t('site.button.enabled')), inactiveText: (__VLS_ctx.$t('site.button.disabled')) })));
        var __VLS_207 = __VLS_206.apply(void 0, __spreadArray([__assign({ 'onUpdate:modelValue': {} }, { modelValue: (((_u = (_t = __VLS_ctx.site.features[feature]) === null || _t === void 0 ? void 0 : _t.wechat) === null || _u === void 0 ? void 0 : _u.enabled) || false), inlinePrompt: true, activeText: (__VLS_ctx.$t('site.button.enabled')), inactiveText: (__VLS_ctx.$t('site.button.disabled')) })], __VLS_functionalComponentArgsRest(__VLS_206), false));
        var __VLS_209 = void 0;
        var __VLS_210 = void 0;
        var __VLS_211 = void 0;
        var __VLS_212 = {
            'onUpdate:modelValue': function () {
                var _a;
                var _b;
                var _c = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _c[_i] = arguments[_i];
                }
                var $event = _c[0];
                if (!(feature === 'support'))
                    return;
                __VLS_ctx.onSave({
                    features: __assign(__assign({}, __VLS_ctx.site.features), (_a = {}, _a[feature] = __assign(__assign({}, __VLS_ctx.site.features[feature]), { wechat: __assign(__assign({}, (_b = __VLS_ctx.site.features[feature]) === null || _b === void 0 ? void 0 : _b.wechat), { enabled: $event }) }), _a))
                });
            }
        };
        var __VLS_213 = {}.ElFormItem;
        /** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
        // @ts-ignore
        var __VLS_214 = __VLS_asFunctionalComponent(__VLS_213, new __VLS_213({
            label: (__VLS_ctx.$t('site.field.qr')),
        }));
        var __VLS_215 = __VLS_214.apply(void 0, __spreadArray([{
                label: (__VLS_ctx.$t('site.field.qr')),
            }], __VLS_functionalComponentArgsRest(__VLS_214), false));
        __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: ((_w = (_v = __VLS_ctx.site.features[feature]) === null || _v === void 0 ? void 0 : _v.wechat) === null || _w === void 0 ? void 0 : _w.enabled) }), null, null);
        __VLS_216.slots.default;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block w-full" }));
        var __VLS_217 = {}.ElImage;
        /** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
        // @ts-ignore
        var __VLS_218 = __VLS_asFunctionalComponent(__VLS_217, new __VLS_217({
            src: ((_y = (_x = __VLS_ctx.site.features[feature]) === null || _x === void 0 ? void 0 : _x.wechat) === null || _y === void 0 ? void 0 : _y.qr),
        }));
        var __VLS_219 = __VLS_218.apply(void 0, __spreadArray([{
                src: ((_0 = (_z = __VLS_ctx.site.features[feature]) === null || _z === void 0 ? void 0 : _z.wechat) === null || _0 === void 0 ? void 0 : _0.qr),
            }], __VLS_functionalComponentArgsRest(__VLS_218), false));
        var __VLS_221 = {}.EditImage;
        /** @type {[typeof __VLS_components.EditImage, typeof __VLS_components.editImage, ]} */ ;
        // @ts-ignore
        var __VLS_222 = __VLS_asFunctionalComponent(__VLS_221, new __VLS_221(__assign({ 'onConfirm': {} }, { modelValue: ((_2 = (_1 = __VLS_ctx.site.features[feature]) === null || _1 === void 0 ? void 0 : _1.wechat) === null || _2 === void 0 ? void 0 : _2.qr), title: (__VLS_ctx.$t('site.title.editQR')), tip: (__VLS_ctx.$t('site.message.editQRTip')) })));
        var __VLS_223 = __VLS_222.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { modelValue: ((_4 = (_3 = __VLS_ctx.site.features[feature]) === null || _3 === void 0 ? void 0 : _3.wechat) === null || _4 === void 0 ? void 0 : _4.qr), title: (__VLS_ctx.$t('site.title.editQR')), tip: (__VLS_ctx.$t('site.message.editQRTip')) })], __VLS_functionalComponentArgsRest(__VLS_222), false));
        var __VLS_225 = void 0;
        var __VLS_226 = void 0;
        var __VLS_227 = void 0;
        var __VLS_228 = {
            onConfirm: function () {
                var _a;
                var _b;
                var _c = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _c[_i] = arguments[_i];
                }
                var $event = _c[0];
                if (!(feature === 'support'))
                    return;
                __VLS_ctx.onSave({
                    features: __assign(__assign({}, __VLS_ctx.site.features), (_a = {}, _a[feature] = __assign(__assign({}, __VLS_ctx.site.features[feature]), { wechat: __assign(__assign({}, (_b = __VLS_ctx.site.features[feature]) === null || _b === void 0 ? void 0 : _b.wechat), { qr: $event }) }), _a))
                });
            }
        };
        var __VLS_229 = {}.ElFormItem;
        /** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
        // @ts-ignore
        var __VLS_230 = __VLS_asFunctionalComponent(__VLS_229, new __VLS_229({
            label: "Discord",
        }));
        var __VLS_231 = __VLS_230.apply(void 0, __spreadArray([{
                label: "Discord",
            }], __VLS_functionalComponentArgsRest(__VLS_230), false));
        __VLS_232.slots.default;
        var __VLS_233 = {}.ElSwitch;
        /** @type {[typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ]} */ ;
        // @ts-ignore
        var __VLS_234 = __VLS_asFunctionalComponent(__VLS_233, new __VLS_233(__assign({ 'onUpdate:modelValue': {} }, { modelValue: (((_6 = (_5 = __VLS_ctx.site.features[feature]) === null || _5 === void 0 ? void 0 : _5.discord) === null || _6 === void 0 ? void 0 : _6.enabled) || false), inlinePrompt: true, activeText: (__VLS_ctx.$t('site.button.enabled')), inactiveText: (__VLS_ctx.$t('site.button.disabled')) })));
        var __VLS_235 = __VLS_234.apply(void 0, __spreadArray([__assign({ 'onUpdate:modelValue': {} }, { modelValue: (((_8 = (_7 = __VLS_ctx.site.features[feature]) === null || _7 === void 0 ? void 0 : _7.discord) === null || _8 === void 0 ? void 0 : _8.enabled) || false), inlinePrompt: true, activeText: (__VLS_ctx.$t('site.button.enabled')), inactiveText: (__VLS_ctx.$t('site.button.disabled')) })], __VLS_functionalComponentArgsRest(__VLS_234), false));
        var __VLS_237 = void 0;
        var __VLS_238 = void 0;
        var __VLS_239 = void 0;
        var __VLS_240 = {
            'onUpdate:modelValue': function () {
                var _a;
                var _b;
                var _c = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _c[_i] = arguments[_i];
                }
                var $event = _c[0];
                if (!(feature === 'support'))
                    return;
                __VLS_ctx.onSave({
                    features: __assign(__assign({}, __VLS_ctx.site.features), (_a = {}, _a[feature] = __assign(__assign({}, __VLS_ctx.site.features[feature]), { discord: __assign(__assign({}, (_b = __VLS_ctx.site.features[feature]) === null || _b === void 0 ? void 0 : _b.discord), { enabled: $event }) }), _a))
                });
            }
        };
        var __VLS_241 = {}.ElFormItem;
        /** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
        // @ts-ignore
        var __VLS_242 = __VLS_asFunctionalComponent(__VLS_241, new __VLS_241({
            label: (__VLS_ctx.$t('site.field.url')),
        }));
        var __VLS_243 = __VLS_242.apply(void 0, __spreadArray([{
                label: (__VLS_ctx.$t('site.field.url')),
            }], __VLS_functionalComponentArgsRest(__VLS_242), false));
        __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: ((_10 = (_9 = __VLS_ctx.site.features[feature]) === null || _9 === void 0 ? void 0 : _9.discord) === null || _10 === void 0 ? void 0 : _10.enabled) }), null, null);
        __VLS_244.slots.default;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block w-full" }));
        ((_12 = (_11 = __VLS_ctx.site.features[feature]) === null || _11 === void 0 ? void 0 : _11.discord) === null || _12 === void 0 ? void 0 : _12.url);
        var __VLS_245 = {}.EditText;
        /** @type {[typeof __VLS_components.EditText, typeof __VLS_components.editText, ]} */ ;
        // @ts-ignore
        var __VLS_246 = __VLS_asFunctionalComponent(__VLS_245, new __VLS_245(__assign({ 'onConfirm': {} }, { modelValue: ((_14 = (_13 = __VLS_ctx.site.features[feature]) === null || _13 === void 0 ? void 0 : _13.discord) === null || _14 === void 0 ? void 0 : _14.url), title: (__VLS_ctx.$t('site.title.editUrl')), placeholder: (__VLS_ctx.$t('site.placeholder.editUrl')) })));
        var __VLS_247 = __VLS_246.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { modelValue: ((_16 = (_15 = __VLS_ctx.site.features[feature]) === null || _15 === void 0 ? void 0 : _15.discord) === null || _16 === void 0 ? void 0 : _16.url), title: (__VLS_ctx.$t('site.title.editUrl')), placeholder: (__VLS_ctx.$t('site.placeholder.editUrl')) })], __VLS_functionalComponentArgsRest(__VLS_246), false));
        var __VLS_249 = void 0;
        var __VLS_250 = void 0;
        var __VLS_251 = void 0;
        var __VLS_252 = {
            onConfirm: function () {
                var _a;
                var _b;
                var _c = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _c[_i] = arguments[_i];
                }
                var $event = _c[0];
                if (!(feature === 'support'))
                    return;
                __VLS_ctx.onSave({
                    features: __assign(__assign({}, __VLS_ctx.site.features), (_a = {}, _a[feature] = __assign(__assign({}, __VLS_ctx.site.features[feature]), { discord: __assign(__assign({}, (_b = __VLS_ctx.site.features[feature]) === null || _b === void 0 ? void 0 : _b.discord), { url: $event }) }), _a))
                });
            }
        };
    }
};
var __VLS_196, __VLS_208, __VLS_204, __VLS_224, __VLS_216, __VLS_236, __VLS_232, __VLS_248, __VLS_244, __VLS_192;
for (var _i = 0, _17 = __VLS_getVForSourceType(([
    'chat',
    'midjourney',
    'qrart',
    'suno',
    'luma',
    'pika',
    'kling',
    'flux',
    'hailuo',
    'headshots',
    'support'
])); _i < _17.length; _i++) {
    var _18 = _17[_i], feature = _18[0], featureIndex = _18[1];
    _loop_1(feature, featureIndex);
}
var __VLS_188;
var __VLS_180;
var __VLS_140;
var __VLS_20;
var __VLS_8;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
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
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['form']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['tip']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['tip']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['form']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['tip']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['tip']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['form']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['tip']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
var __VLS_dollars;
var __VLS_self;
