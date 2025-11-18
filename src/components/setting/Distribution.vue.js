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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var EditText_vue_1 = require("@/components/site/EditText.vue");
var operators_1 = require("@/operators");
exports.default = (0, vue_1.defineComponent)({
    name: 'SiteIndex',
    components: {
        EditText: EditText_vue_1.default,
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
    label: (__VLS_ctx.$t('site.field.distributionDefaultInviterId')),
}));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('site.field.distributionDefaultInviterId')),
    }], __VLS_functionalComponentArgsRest(__VLS_6), false));
__VLS_8.slots.default;
((_a = __VLS_ctx.site.distribution) === null || _a === void 0 ? void 0 : _a.default_inviter_id);
var __VLS_9 = {}.EditText;
/** @type {[typeof __VLS_components.EditText, typeof __VLS_components.editText, ]} */ ;
// @ts-ignore
var __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9(__assign({ 'onConfirm': {} }, { modelValue: ((_b = __VLS_ctx.site.distribution) === null || _b === void 0 ? void 0 : _b.default_inviter_id), title: (__VLS_ctx.$t('site.title.editDistributionDefaultInviterId')), placeholder: (__VLS_ctx.$t('site.placeholder.editDistributionDefaultInviterId')) })));
var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { modelValue: ((_c = __VLS_ctx.site.distribution) === null || _c === void 0 ? void 0 : _c.default_inviter_id), title: (__VLS_ctx.$t('site.title.editDistributionDefaultInviterId')), placeholder: (__VLS_ctx.$t('site.placeholder.editDistributionDefaultInviterId')) })], __VLS_functionalComponentArgsRest(__VLS_10), false));
var __VLS_13;
var __VLS_14;
var __VLS_15;
var __VLS_16 = {
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
var __VLS_12;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block tip" }));
(__VLS_ctx.$t('site.message.distributionDefaultInviterIdTip'));
var __VLS_8;
var __VLS_17 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
var __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
    label: (__VLS_ctx.$t('site.field.distributionForceInviterId')),
}));
var __VLS_19 = __VLS_18.apply(void 0, __spreadArray([{
        label: (__VLS_ctx.$t('site.field.distributionForceInviterId')),
    }], __VLS_functionalComponentArgsRest(__VLS_18), false));
__VLS_20.slots.default;
((_d = __VLS_ctx.site.distribution) === null || _d === void 0 ? void 0 : _d.force_inviter_id);
var __VLS_21 = {}.EditText;
/** @type {[typeof __VLS_components.EditText, typeof __VLS_components.editText, ]} */ ;
// @ts-ignore
var __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21(__assign({ 'onConfirm': {} }, { modelValue: ((_e = __VLS_ctx.site.distribution) === null || _e === void 0 ? void 0 : _e.force_inviter_id), title: (__VLS_ctx.$t('site.title.editDistributionForceInviterId')), placeholder: (__VLS_ctx.$t('site.placeholder.editDistributionForceInviterId')) })));
var __VLS_23 = __VLS_22.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { modelValue: ((_f = __VLS_ctx.site.distribution) === null || _f === void 0 ? void 0 : _f.force_inviter_id), title: (__VLS_ctx.$t('site.title.editDistributionForceInviterId')), placeholder: (__VLS_ctx.$t('site.placeholder.editDistributionForceInviterId')) })], __VLS_functionalComponentArgsRest(__VLS_22), false));
var __VLS_25;
var __VLS_26;
var __VLS_27;
var __VLS_28 = {
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
var __VLS_24;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block tip" }));
(__VLS_ctx.$t('site.message.distributionForceInviterIdTip'));
var __VLS_20;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['form']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['tip']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['tip']} */ ;
var __VLS_dollars;
var __VLS_self;
