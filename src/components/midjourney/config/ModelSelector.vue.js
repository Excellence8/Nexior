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
var InfoIcon_vue_1 = require("@/components/common/InfoIcon.vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'ModelSelector',
    components: {
        ElImage: element_plus_1.ElImage,
        InfoIcon: InfoIcon_vue_1.default
    },
    data: function () {
        return {
            options: [
                {
                    value: '',
                    label: this.$t('midjourney.model.general'),
                    image: 'https://cdn.acedata.cloud/ebvlwg.png'
                },
                {
                    value: 'niji 5',
                    label: this.$t('midjourney.model.niji'),
                    image: 'https://cdn.acedata.cloud/j6v1m7.png'
                }
            ]
        };
    },
    computed: {
        active: function () {
            var _this = this;
            return this.options.findIndex(function (option) { return option.value === _this.value; });
        },
        value: {
            get: function () {
                return this.$store.state.midjourney.config.model;
            },
            set: function (val) {
                this.$store.commit('midjourney/setConfig', __assign(__assign({}, this.$store.state.midjourney.config), { model: val }));
            }
        }
    },
    mounted: function () {
        if (this.value === undefined) {
            this.value = '';
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElImage: element_plus_1.ElImage,
    InfoIcon: InfoIcon_vue_1.default
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex justify-start items-center" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "text-sm font-bold" }));
(__VLS_ctx.$t('midjourney.name.model'));
var __VLS_0 = {}.InfoIcon;
/** @type {[typeof __VLS_components.InfoIcon, typeof __VLS_components.infoIcon, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    content: (__VLS_ctx.$t('midjourney.description.model')),
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        content: (__VLS_ctx.$t('midjourney.description.model')),
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "items" }));
var _loop_1 = function (option, optionKey) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.value = option.value;
        } }, { key: (optionKey) }), { class: ({ active: __VLS_ctx.active === optionKey, item: true }) }));
    var __VLS_4 = {}.ElImage;
    /** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ src: (option.image), fit: "cover" }, { class: "image" })));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ src: (option.image), fit: "cover" }, { class: "image" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "name" }));
    (option.label);
};
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.options)); _i < _a.length; _i++) {
    var _b = _a[_i], option = _b[0], optionKey = _b[1];
    _loop_1(option, optionKey);
}
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-start']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['items']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
/** @type {__VLS_StyleScopedClasses['image']} */ ;
/** @type {__VLS_StyleScopedClasses['name']} */ ;
var __VLS_dollars;
var __VLS_self;
