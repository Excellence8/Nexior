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
exports.DEFAULT_MODE = void 0;
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
exports.DEFAULT_MODE = 'fast';
exports.default = (0, vue_1.defineComponent)({
    name: 'ModeSelector',
    components: {
        ElRadioButton: element_plus_1.ElRadioButton,
        ElRadioGroup: element_plus_1.ElRadioGroup
    },
    data: function () {
        return {
            options: [
                {
                    label: this.$t('headshots.button.fast'),
                    value: 'fast'
                },
                {
                    label: this.$t('headshots.button.relax'),
                    value: 'relax'
                }
            ]
        };
    },
    computed: {
        value: {
            get: function () {
                var _a;
                return (_a = this.$store.state.headshots.config) === null || _a === void 0 ? void 0 : _a.mode;
            },
            set: function (val) {
                console.debug('set mode', val);
                this.$store.commit('headshots/setConfig', __assign(__assign({}, this.$store.state.headshots.config), { mode: val }));
            }
        }
    },
    mounted: function () {
        if (!this.value) {
            this.value = exports.DEFAULT_MODE;
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElRadioButton: element_plus_1.ElRadioButton,
    ElRadioGroup: element_plus_1.ElRadioGroup
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "field" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "title font-bold" }));
(__VLS_ctx.$t('headshots.name.mode'));
var __VLS_0 = {}.ElRadioGroup;
/** @type {[typeof __VLS_components.ElRadioGroup, typeof __VLS_components.elRadioGroup, typeof __VLS_components.ElRadioGroup, typeof __VLS_components.elRadioGroup, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ modelValue: (__VLS_ctx.value), size: "small" }, { class: "mode" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ modelValue: (__VLS_ctx.value), size: "small" }, { class: "mode" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.options)); _i < _a.length; _i++) {
    var item = _a[_i][0];
    var __VLS_4 = {}.ElRadioButton;
    /** @type {[typeof __VLS_components.ElRadioButton, typeof __VLS_components.elRadioButton, typeof __VLS_components.ElRadioButton, typeof __VLS_components.elRadioButton, ]} */ ;
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        key: (item.value),
        label: (item.value),
    }));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{
            key: (item.value),
            label: (item.value),
        }], __VLS_functionalComponentArgsRest(__VLS_5), false));
    __VLS_7.slots.default;
    (item.label);
    var __VLS_7;
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['field']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mode']} */ ;
var __VLS_dollars;
var __VLS_self;
