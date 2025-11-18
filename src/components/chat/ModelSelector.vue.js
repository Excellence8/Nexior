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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var constants_1 = require("@/constants");
exports.default = (0, vue_1.defineComponent)({
    name: 'ModelSelector',
    components: {
        ElDropdown: element_plus_1.ElDropdown,
        ElDropdownMenu: element_plus_1.ElDropdownMenu,
        ElDropdownItem: element_plus_1.ElDropdownItem,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon
    },
    emits: ['update:modelValue', 'select', 'model-group-changed', 'model-changed'],
    data: function () {
        return {
            options: [constants_1.CHAT_MODEL_GROUP_CHATGPT, constants_1.CHAT_MODEL_GROUP_DEEPSEEK, constants_1.CHAT_MODEL_GROUP_GROK]
        };
    },
    computed: {
        model: function () {
            console.log('model', this.$store.state.chat.model);
            return this.$store.state.chat.model;
        },
        modelGroup: function () {
            var _a;
            return ((_a = this.$route.meta) === null || _a === void 0 ? void 0 : _a.modelGroup) || constants_1.CHAT_MODEL_GROUP_CHATGPT;
        }
    },
    watch: {
        // set first model when modelGroup changes
        modelGroup: function (newValue) {
            console.debug('modelGroup from route changed', newValue);
            this.$store.dispatch('chat/setModelGroup', newValue);
            this.$store.dispatch('chat/setModel', newValue.models[0]);
        }
    },
    mounted: function () {
        var _this = this;
        // renew models if modelGroup is already set
        console.debug('ModelSelector mounted, checking model group');
        var modelGroups = [constants_1.CHAT_MODEL_GROUP_CHATGPT, constants_1.CHAT_MODEL_GROUP_DEEPSEEK, constants_1.CHAT_MODEL_GROUP_GROK];
        var foundGroup = modelGroups.find(function (group) { return group.name === _this.modelGroup.name; });
        console.debug('Found model group:', foundGroup);
        if (foundGroup) {
            this.$store.dispatch('chat/setModelGroup', foundGroup);
            this.$store.dispatch('chat/setModel', foundGroup.models[0]);
        }
    },
    methods: {
        onModelGroupChange: function (modelGroup) {
            this.$store.dispatch('chat/setModelGroup', modelGroup);
            this.$emit('model-group-changed', modelGroup);
        },
        onModelChange: function (model) {
            this.$store.dispatch('chat/setModel', model);
            this.$emit('model-changed', model);
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElDropdown: element_plus_1.ElDropdown,
    ElDropdownMenu: element_plus_1.ElDropdownMenu,
    ElDropdownItem: element_plus_1.ElDropdownItem,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon
};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['name']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "selector" }));
var __VLS_0 = {}.ElDropdown;
/** @type {[typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    trigger: "click",
    popperClass: "popper",
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        trigger: "click",
        popperClass: "popper",
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex justify-center" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "name" }));
((_a = __VLS_ctx.model) === null || _a === void 0 ? void 0 : _a.getDisplayName());
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "angle" }));
var __VLS_4 = {}.FontAwesomeIcon;
/** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    icon: "fa-solid fa-angle-down",
}));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{
        icon: "fa-solid fa-angle-down",
    }], __VLS_functionalComponentArgsRest(__VLS_5), false));
{
    var __VLS_thisSlot = __VLS_3.slots.dropdown;
    if (__VLS_ctx.modelGroup && ((_b = __VLS_ctx.modelGroup) === null || _b === void 0 ? void 0 : _b.models)) {
        var __VLS_8 = {}.ElDropdownMenu;
        /** @type {[typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, ]} */ ;
        // @ts-ignore
        var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({}));
        var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_9), false));
        __VLS_11.slots.default;
        var _loop_1 = function (option, optionKey) {
            var __VLS_12 = {}.ElDropdownItem;
            /** @type {[typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ]} */ ;
            // @ts-ignore
            var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ 'onClick': {} }, { key: (optionKey) })));
            var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { key: (optionKey) })], __VLS_functionalComponentArgsRest(__VLS_13), false));
            var __VLS_16 = void 0;
            var __VLS_17 = void 0;
            var __VLS_18 = void 0;
            var __VLS_19 = {
                onClick: function () {
                    var _a;
                    var _b = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _b[_i] = arguments[_i];
                    }
                    var $event = _b[0];
                    if (!(__VLS_ctx.modelGroup && ((_a = __VLS_ctx.modelGroup) === null || _a === void 0 ? void 0 : _a.models)))
                        return;
                    __VLS_ctx.onModelChange(option);
                }
            };
            __VLS_15.slots.default;
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "item" }));
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "info" }));
            if (option === null || option === void 0 ? void 0 : option.getDisplayName) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "name" }));
                (option === null || option === void 0 ? void 0 : option.getDisplayName());
            }
            if (option === null || option === void 0 ? void 0 : option.getDescription) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
                (option === null || option === void 0 ? void 0 : option.getDescription());
            }
        };
        var __VLS_15;
        for (var _i = 0, _e = __VLS_getVForSourceType(((_d = (_c = __VLS_ctx.modelGroup) === null || _c === void 0 ? void 0 : _c.models) === null || _d === void 0 ? void 0 : _d.filter(function (m) { return m.enabled; }))); _i < _e.length; _i++) {
            var _f = _e[_i], option = _f[0], optionKey = _f[1];
            _loop_1(option, optionKey);
        }
        var __VLS_11;
    }
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['selector']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['name']} */ ;
/** @type {__VLS_StyleScopedClasses['angle']} */ ;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['name']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
var __VLS_dollars;
var __VLS_self;
