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
exports.DEFAULT_MODE = void 0;
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var icons_vue_1 = require("@element-plus/icons-vue");
exports.DEFAULT_MODE = 'fast';
exports.default = (0, vue_1.defineComponent)({
    name: 'ModeSelector',
    components: {
        ElButton: element_plus_1.ElButton,
        ElDropdown: element_plus_1.ElDropdown,
        ArrowDown: icons_vue_1.ArrowDown,
        ElIcon: element_plus_1.ElIcon,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
        ElDropdownItem: element_plus_1.ElDropdownItem
    },
    data: function () {
        return {
            options: [
                {
                    label: this.$t('midjourney.button.fast'),
                    value: 'fast',
                    icon: 'fa-solid fa-wind',
                    color: '#2dc49c'
                },
                {
                    label: this.$t('midjourney.button.relax'),
                    value: 'relax',
                    icon: 'fa-solid fa-mug-saucer',
                    color: '#ce65e6'
                },
                {
                    label: this.$t('midjourney.button.turbo'),
                    value: 'turbo',
                    icon: 'fa-solid fa-bolt',
                    color: '#ff9900'
                }
            ]
        };
    },
    computed: {
        activeOption: function () {
            var _this = this;
            return this.options.find(function (option) { return option.value === _this.value; });
        },
        value: {
            get: function () {
                return this.$store.state.midjourney.config.mode;
            },
            set: function (val) {
                this.$store.commit('midjourney/setConfig', __assign(__assign({}, this.$store.state.midjourney.config), { mode: val }));
            }
        }
    },
    mounted: function () {
        if (!this.value) {
            this.value = exports.DEFAULT_MODE;
        }
    },
    methods: {
        onCommand: function (command) {
            console.log('command', command);
            this.value = command;
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElButton: element_plus_1.ElButton,
    ElDropdown: element_plus_1.ElDropdown,
    ArrowDown: icons_vue_1.ArrowDown,
    ElIcon: element_plus_1.ElIcon,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
    ElDropdownItem: element_plus_1.ElDropdownItem
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
var __VLS_0 = {}.ElDropdown;
/** @type {[typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ 'onCommand': {} }, { trigger: "click" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ 'onCommand': {} }, { trigger: "click" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4;
var __VLS_5;
var __VLS_6;
var __VLS_7 = {
    onCommand: (__VLS_ctx.onCommand)
};
var __VLS_8 = {};
__VLS_3.slots.default;
var __VLS_9 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
var __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    round: true,
}));
var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([{
        round: true,
    }], __VLS_functionalComponentArgsRest(__VLS_10), false));
__VLS_12.slots.default;
if ((_a = __VLS_ctx.activeOption) === null || _a === void 0 ? void 0 : _a.icon) {
    var __VLS_13 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13(__assign({ icon: (__VLS_ctx.activeOption.icon) }, { style: ({
            color: (_b = __VLS_ctx.activeOption) === null || _b === void 0 ? void 0 : _b.color
        }) })));
    var __VLS_15 = __VLS_14.apply(void 0, __spreadArray([__assign({ icon: (__VLS_ctx.activeOption.icon) }, { style: ({
                color: (_c = __VLS_ctx.activeOption) === null || _c === void 0 ? void 0 : _c.color
            }) })], __VLS_functionalComponentArgsRest(__VLS_14), false));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "ml-2" }));
((_d = __VLS_ctx.activeOption) === null || _d === void 0 ? void 0 : _d.label);
var __VLS_17 = {}.ElIcon;
/** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
// @ts-ignore
var __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17(__assign({ class: "el-icon--right" })));
var __VLS_19 = __VLS_18.apply(void 0, __spreadArray([__assign({ class: "el-icon--right" })], __VLS_functionalComponentArgsRest(__VLS_18), false));
__VLS_20.slots.default;
var __VLS_21 = {}.ArrowDown;
/** @type {[typeof __VLS_components.ArrowDown, typeof __VLS_components.arrowDown, ]} */ ;
// @ts-ignore
var __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({}));
var __VLS_23 = __VLS_22.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_22), false));
var __VLS_20;
var __VLS_12;
{
    var __VLS_thisSlot = __VLS_3.slots.dropdown;
    var __VLS_25 = {}.ElDropdownMenu;
    /** @type {[typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, ]} */ ;
    // @ts-ignore
    var __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({}));
    var __VLS_27 = __VLS_26.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_26), false));
    __VLS_28.slots.default;
    for (var _i = 0, _e = __VLS_getVForSourceType((__VLS_ctx.options)); _i < _e.length; _i++) {
        var _f = _e[_i], option = _f[0], index = _f[1];
        var __VLS_29 = {}.ElDropdownItem;
        /** @type {[typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ]} */ ;
        // @ts-ignore
        var __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29(__assign(__assign({ key: (index) }, { class: "flex items-center justify-between" }), { command: (option.value) })));
        var __VLS_31 = __VLS_30.apply(void 0, __spreadArray([__assign(__assign({ key: (index) }, { class: "flex items-center justify-between" }), { command: (option.value) })], __VLS_functionalComponentArgsRest(__VLS_30), false));
        __VLS_32.slots.default;
        if (option.icon) {
            var __VLS_33 = {}.FontAwesomeIcon;
            /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
            // @ts-ignore
            var __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33(__assign({ icon: (option.icon) }, { style: ({
                    color: option.color
                }) })));
            var __VLS_35 = __VLS_34.apply(void 0, __spreadArray([__assign({ icon: (option.icon) }, { style: ({
                        color: option.color
                    }) })], __VLS_functionalComponentArgsRest(__VLS_34), false));
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "ml-1 text-sm" }));
        (option.label);
        var __VLS_32;
    }
    var __VLS_28;
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['el-icon--right']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
var __VLS_dollars;
var __VLS_self;
