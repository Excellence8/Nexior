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
exports.DEFAULT_PROMPT = void 0;
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var InfoIcon_vue_1 = require("@/components/common/InfoIcon.vue");
exports.DEFAULT_PROMPT = '';
exports.default = (0, vue_1.defineComponent)({
    name: 'PromptInput',
    components: {
        ElInput: element_plus_1.ElInput,
        InfoIcon: InfoIcon_vue_1.default
    },
    computed: {
        prompt: {
            get: function () {
                var _a, _b;
                return (_b = (_a = this.$store.state.kling) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.prompt;
            },
            set: function (val) {
                var _a;
                console.debug('set prompt', val);
                this.$store.commit('kling/setConfig', __assign(__assign({}, (_a = this.$store.state.kling) === null || _a === void 0 ? void 0 : _a.config), { prompt: val }));
            }
        }
    },
    mounted: function () {
        if (!this.prompt) {
            this.prompt = exports.DEFAULT_PROMPT;
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElInput: element_plus_1.ElInput,
    InfoIcon: InfoIcon_vue_1.default
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "field" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "box" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "title font-bold" }));
(__VLS_ctx.$t('kling.name.prompt'));
var __VLS_0 = {}.InfoIcon;
/** @type {[typeof __VLS_components.InfoIcon, typeof __VLS_components.infoIcon, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ content: (__VLS_ctx.$t('kling.description.prompt')) }, { class: "info" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ content: (__VLS_ctx.$t('kling.description.prompt')) }, { class: "info" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign(__assign({ modelValue: (__VLS_ctx.prompt), rows: (3), type: "textarea" }, { class: "prompt" }), { placeholder: (__VLS_ctx.$t('kling.placeholder.prompt')), maxlength: (500), showWordLimit: true })));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign(__assign({ modelValue: (__VLS_ctx.prompt), rows: (3), type: "textarea" }, { class: "prompt" }), { placeholder: (__VLS_ctx.$t('kling.placeholder.prompt')), maxlength: (500), showWordLimit: true })], __VLS_functionalComponentArgsRest(__VLS_5), false));
/** @type {__VLS_StyleScopedClasses['field']} */ ;
/** @type {__VLS_StyleScopedClasses['box']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['prompt']} */ ;
var __VLS_dollars;
var __VLS_self;
