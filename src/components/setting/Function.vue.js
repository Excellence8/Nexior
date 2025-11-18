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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var EditText_vue_1 = require("@/components/site/EditText.vue");
var EditImage_vue_1 = require("@/components/site/EditImage.vue");
var operators_1 = require("@/operators");
exports.default = (0, vue_1.defineComponent)({
    name: 'SiteIndex',
    components: {
        EditText: EditText_vue_1.default,
        EditImage: EditImage_vue_1.default,
        ElImage: element_plus_1.ElImage,
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
    ElImage: element_plus_1.ElImage,
    ElForm: element_plus_1.ElForm,
    ElSwitch: element_plus_1.ElSwitch,
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
var _loop_1 = function (feature, featureIndex) {
    var __VLS_5 = {}.ElFormItem;
    /** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
    // @ts-ignore
    var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
        key: (featureIndex),
        label: (__VLS_ctx.$t('site.field.features' + feature.charAt(0).toUpperCase() + feature.slice(1))),
    }));
    var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{
            key: (featureIndex),
            label: (__VLS_ctx.$t('site.field.features' + feature.charAt(0).toUpperCase() + feature.slice(1))),
        }], __VLS_functionalComponentArgsRest(__VLS_6), false));
    __VLS_8.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "w-full" }));
    var __VLS_9 = {}.ElSwitch;
    /** @type {[typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ]} */ ;
    // @ts-ignore
    var __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9(__assign({ 'onUpdate:modelValue': {} }, { modelValue: (((_a = __VLS_ctx.site.features[feature]) === null || _a === void 0 ? void 0 : _a.enabled) || false), inlinePrompt: true, activeText: (__VLS_ctx.$t('site.button.enabled')), inactiveText: (__VLS_ctx.$t('site.button.disabled')) })));
    var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([__assign({ 'onUpdate:modelValue': {} }, { modelValue: (((_b = __VLS_ctx.site.features[feature]) === null || _b === void 0 ? void 0 : _b.enabled) || false), inlinePrompt: true, activeText: (__VLS_ctx.$t('site.button.enabled')), inactiveText: (__VLS_ctx.$t('site.button.disabled')) })], __VLS_functionalComponentArgsRest(__VLS_10), false));
    var __VLS_13 = void 0;
    var __VLS_14 = void 0;
    var __VLS_15 = void 0;
    var __VLS_16 = {
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
        __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: ((_c = __VLS_ctx.site.features[feature]) === null || _c === void 0 ? void 0 : _c.enabled) }), null, null);
        var __VLS_17 = {}.ElFormItem;
        /** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
        // @ts-ignore
        var __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
            label: "WeChat",
        }));
        var __VLS_19 = __VLS_18.apply(void 0, __spreadArray([{
                label: "WeChat",
            }], __VLS_functionalComponentArgsRest(__VLS_18), false));
        __VLS_20.slots.default;
        var __VLS_21 = {}.ElSwitch;
        /** @type {[typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ]} */ ;
        // @ts-ignore
        var __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21(__assign({ 'onUpdate:modelValue': {} }, { modelValue: (((_e = (_d = __VLS_ctx.site.features[feature]) === null || _d === void 0 ? void 0 : _d.wechat) === null || _e === void 0 ? void 0 : _e.enabled) || false), inlinePrompt: true, activeText: (__VLS_ctx.$t('site.button.enabled')), inactiveText: (__VLS_ctx.$t('site.button.disabled')) })));
        var __VLS_23 = __VLS_22.apply(void 0, __spreadArray([__assign({ 'onUpdate:modelValue': {} }, { modelValue: (((_g = (_f = __VLS_ctx.site.features[feature]) === null || _f === void 0 ? void 0 : _f.wechat) === null || _g === void 0 ? void 0 : _g.enabled) || false), inlinePrompt: true, activeText: (__VLS_ctx.$t('site.button.enabled')), inactiveText: (__VLS_ctx.$t('site.button.disabled')) })], __VLS_functionalComponentArgsRest(__VLS_22), false));
        var __VLS_25 = void 0;
        var __VLS_26 = void 0;
        var __VLS_27 = void 0;
        var __VLS_28 = {
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
        var __VLS_29 = {}.ElFormItem;
        /** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
        // @ts-ignore
        var __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({
            label: (__VLS_ctx.$t('site.field.qr')),
        }));
        var __VLS_31 = __VLS_30.apply(void 0, __spreadArray([{
                label: (__VLS_ctx.$t('site.field.qr')),
            }], __VLS_functionalComponentArgsRest(__VLS_30), false));
        __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: ((_j = (_h = __VLS_ctx.site.features[feature]) === null || _h === void 0 ? void 0 : _h.wechat) === null || _j === void 0 ? void 0 : _j.enabled) }), null, null);
        __VLS_32.slots.default;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block w-full" }));
        var __VLS_33 = {}.ElImage;
        /** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
        // @ts-ignore
        var __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
            src: ((_l = (_k = __VLS_ctx.site.features[feature]) === null || _k === void 0 ? void 0 : _k.wechat) === null || _l === void 0 ? void 0 : _l.qr),
        }));
        var __VLS_35 = __VLS_34.apply(void 0, __spreadArray([{
                src: ((_o = (_m = __VLS_ctx.site.features[feature]) === null || _m === void 0 ? void 0 : _m.wechat) === null || _o === void 0 ? void 0 : _o.qr),
            }], __VLS_functionalComponentArgsRest(__VLS_34), false));
        var __VLS_37 = {}.EditImage;
        /** @type {[typeof __VLS_components.EditImage, typeof __VLS_components.editImage, ]} */ ;
        // @ts-ignore
        var __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37(__assign({ 'onConfirm': {} }, { modelValue: ((_q = (_p = __VLS_ctx.site.features[feature]) === null || _p === void 0 ? void 0 : _p.wechat) === null || _q === void 0 ? void 0 : _q.qr), title: (__VLS_ctx.$t('site.title.editQR')), tip: (__VLS_ctx.$t('site.message.editQRTip')) })));
        var __VLS_39 = __VLS_38.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { modelValue: ((_s = (_r = __VLS_ctx.site.features[feature]) === null || _r === void 0 ? void 0 : _r.wechat) === null || _s === void 0 ? void 0 : _s.qr), title: (__VLS_ctx.$t('site.title.editQR')), tip: (__VLS_ctx.$t('site.message.editQRTip')) })], __VLS_functionalComponentArgsRest(__VLS_38), false));
        var __VLS_41 = void 0;
        var __VLS_42 = void 0;
        var __VLS_43 = void 0;
        var __VLS_44 = {
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
        var __VLS_45 = {}.ElFormItem;
        /** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
        // @ts-ignore
        var __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
            label: "Discord",
        }));
        var __VLS_47 = __VLS_46.apply(void 0, __spreadArray([{
                label: "Discord",
            }], __VLS_functionalComponentArgsRest(__VLS_46), false));
        __VLS_48.slots.default;
        var __VLS_49 = {}.ElSwitch;
        /** @type {[typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, typeof __VLS_components.ElSwitch, typeof __VLS_components.elSwitch, ]} */ ;
        // @ts-ignore
        var __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49(__assign({ 'onUpdate:modelValue': {} }, { modelValue: (((_u = (_t = __VLS_ctx.site.features[feature]) === null || _t === void 0 ? void 0 : _t.discord) === null || _u === void 0 ? void 0 : _u.enabled) || false), inlinePrompt: true, activeText: (__VLS_ctx.$t('site.button.enabled')), inactiveText: (__VLS_ctx.$t('site.button.disabled')) })));
        var __VLS_51 = __VLS_50.apply(void 0, __spreadArray([__assign({ 'onUpdate:modelValue': {} }, { modelValue: (((_w = (_v = __VLS_ctx.site.features[feature]) === null || _v === void 0 ? void 0 : _v.discord) === null || _w === void 0 ? void 0 : _w.enabled) || false), inlinePrompt: true, activeText: (__VLS_ctx.$t('site.button.enabled')), inactiveText: (__VLS_ctx.$t('site.button.disabled')) })], __VLS_functionalComponentArgsRest(__VLS_50), false));
        var __VLS_53 = void 0;
        var __VLS_54 = void 0;
        var __VLS_55 = void 0;
        var __VLS_56 = {
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
        var __VLS_57 = {}.ElFormItem;
        /** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
        // @ts-ignore
        var __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({
            label: (__VLS_ctx.$t('site.field.url')),
        }));
        var __VLS_59 = __VLS_58.apply(void 0, __spreadArray([{
                label: (__VLS_ctx.$t('site.field.url')),
            }], __VLS_functionalComponentArgsRest(__VLS_58), false));
        __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: ((_y = (_x = __VLS_ctx.site.features[feature]) === null || _x === void 0 ? void 0 : _x.discord) === null || _y === void 0 ? void 0 : _y.enabled) }), null, null);
        __VLS_60.slots.default;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "block w-full" }));
        ((_0 = (_z = __VLS_ctx.site.features[feature]) === null || _z === void 0 ? void 0 : _z.discord) === null || _0 === void 0 ? void 0 : _0.url);
        var __VLS_61 = {}.EditText;
        /** @type {[typeof __VLS_components.EditText, typeof __VLS_components.editText, ]} */ ;
        // @ts-ignore
        var __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61(__assign({ 'onConfirm': {} }, { modelValue: ((_2 = (_1 = __VLS_ctx.site.features[feature]) === null || _1 === void 0 ? void 0 : _1.discord) === null || _2 === void 0 ? void 0 : _2.url), title: (__VLS_ctx.$t('site.title.editUrl')), placeholder: (__VLS_ctx.$t('site.placeholder.editUrl')) })));
        var __VLS_63 = __VLS_62.apply(void 0, __spreadArray([__assign({ 'onConfirm': {} }, { modelValue: ((_4 = (_3 = __VLS_ctx.site.features[feature]) === null || _3 === void 0 ? void 0 : _3.discord) === null || _4 === void 0 ? void 0 : _4.url), title: (__VLS_ctx.$t('site.title.editUrl')), placeholder: (__VLS_ctx.$t('site.placeholder.editUrl')) })], __VLS_functionalComponentArgsRest(__VLS_62), false));
        var __VLS_65 = void 0;
        var __VLS_66 = void 0;
        var __VLS_67 = void 0;
        var __VLS_68 = {
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
var __VLS_12, __VLS_24, __VLS_20, __VLS_40, __VLS_32, __VLS_52, __VLS_48, __VLS_64, __VLS_60, __VLS_8;
for (var _i = 0, _5 = __VLS_getVForSourceType(([
    'chatgpt',
    'grok',
    'deepseek',
    'midjourney',
    'qrart',
    'suno',
    'luma',
    'pika',
    'kling',
    'veo',
    'sora',
    'pixverse',
    'flux',
    'hailuo',
    'headshots',
    'nanobanana'
])); _i < _5.length; _i++) {
    var _6 = _5[_i], feature = _6[0], featureIndex = _6[1];
    _loop_1(feature, featureIndex);
}
var __VLS_3;
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
