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
var SuggestionItem_vue_1 = require("./SuggestionItem.vue");
var element_plus_1 = require("element-plus");
exports.default = (0, vue_1.defineComponent)({
    name: 'Suggestion',
    components: {
        SuggestionItem: SuggestionItem_vue_1.default,
        ElRow: element_plus_1.ElRow,
        ElCol: element_plus_1.ElCol
    },
    emits: ['draft'],
    data: function () {
        return {
            items: [
                {
                    icon: 'fa-solid fa-pen-nib',
                    content: this.$t('chat.message.question1'),
                    color: 'rgb(226, 197, 65)'
                },
                {
                    icon: 'fa-solid fa-laptop-code',
                    content: this.$t('chat.message.question2'),
                    color: 'rgb(203, 139, 208)'
                },
                {
                    icon: 'fa-solid fa-fan',
                    content: this.$t('chat.message.question3'),
                    color: 'rgb(118, 208, 235)'
                },
                {
                    icon: 'fa-solid fa-plane-departure',
                    content: this.$t('chat.message.question4'),
                    color: 'rgb(237, 98, 98)'
                },
                {
                    icon: 'fa-solid fa-bolt',
                    content: this.$t('chat.message.question5'),
                    color: 'rgb(203, 139, 208)'
                },
                {
                    icon: 'fa-solid fa-diamond',
                    content: this.$t('chat.message.question6'),
                    color: 'rgb(118, 208, 235)'
                },
                {
                    icon: 'fa-solid fa-fire',
                    content: this.$t('chat.message.question7'),
                    color: 'rgb(226, 197, 65)'
                },
                {
                    icon: 'fa-solid fa-magic',
                    content: this.$t('chat.message.question8'),
                    color: 'rgb(237, 98, 98)'
                }
            ]
                .sort(function () { return Math.random() - 0.5; })
                .slice(0, 3)
        };
    },
    computed: {}
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    SuggestionItem: SuggestionItem_vue_1.default,
    ElRow: element_plus_1.ElRow,
    ElCol: element_plus_1.ElCol
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "suggestion" }));
var __VLS_0 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ class: "items" }, { justify: "center", gutter: (15) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "items" }, { justify: "center", gutter: (15) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
var _loop_1 = function (item, itemKey) {
    var __VLS_4 = {}.ElCol;
    /** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        key: (itemKey),
        md: (8),
        sm: (12),
        xs: (12),
    }));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{
            key: (itemKey),
            md: (8),
            sm: (12),
            xs: (12),
        }], __VLS_functionalComponentArgsRest(__VLS_5), false));
    __VLS_7.slots.default;
    var __VLS_8 = {}.SuggestionItem;
    /** @type {[typeof __VLS_components.SuggestionItem, typeof __VLS_components.suggestionItem, ]} */ ;
    // @ts-ignore
    var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign(__assign({ 'onClick': {} }, { content: (item.content), icon: (item.icon), color: (item.color) }), { class: "cursor-pointer" })));
    var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { content: (item.content), icon: (item.icon), color: (item.color) }), { class: "cursor-pointer" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
    var __VLS_12 = void 0;
    var __VLS_13 = void 0;
    var __VLS_14 = void 0;
    var __VLS_15 = {
        onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.$emit('draft', item.content);
        }
    };
};
var __VLS_11, __VLS_7;
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.items)); _i < _a.length; _i++) {
    var _b = _a[_i], item = _b[0], itemKey = _b[1];
    _loop_1(item, itemKey);
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['suggestion']} */ ;
/** @type {__VLS_StyleScopedClasses['items']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
var __VLS_dollars;
var __VLS_self;
