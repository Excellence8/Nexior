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
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var General_vue_1 = require("@/components/setting/General.vue");
var Site_vue_1 = require("@/components/setting/Site.vue");
var Seo_vue_1 = require("@/components/setting/Seo.vue");
var Distribution_vue_1 = require("@/components/setting/Distribution.vue");
var Function_vue_1 = require("@/components/setting/Function.vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'UserSetting',
    components: {
        ElDialog: element_plus_1.ElDialog,
        ElMenu: element_plus_1.ElMenu,
        ElMenuItem: element_plus_1.ElMenuItem,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
        GeneralSetting: General_vue_1.default,
        SiteSetting: Site_vue_1.default,
        SeoSetting: Seo_vue_1.default,
        DistributionSetting: Distribution_vue_1.default,
        FunctionSetting: Function_vue_1.default
    },
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:visible'],
    data: function () {
        return {
            activeTab: 'general',
            showSuggestions: true
        };
    },
    computed: {
        navItems: function () {
            return [
                { key: 'general', label: this.$t('common.settings.general'), icon: free_solid_svg_icons_1.faCog, visible: true },
                { key: 'site', label: this.$t('common.settings.site'), icon: free_solid_svg_icons_1.faBell, visible: this.isSiteAdmin },
                { key: 'seo', label: this.$t('common.settings.seo'), icon: free_solid_svg_icons_1.faUserShield, visible: this.isSiteAdmin },
                {
                    key: 'distribution',
                    label: this.$t('common.settings.distribution'),
                    icon: free_solid_svg_icons_1.faMoneyBill,
                    visible: this.isSiteAdmin
                },
                { key: 'function', label: this.$t('common.settings.function'), icon: free_solid_svg_icons_1.faMagic, visible: this.isSiteAdmin }
            ];
        },
        currentTabTitle: function () {
            var _this = this;
            console.debug('activeTab', this.activeTab);
            var current = this.navItems.find(function (item) { return item.key === _this.activeTab; });
            return current ? current.label : '';
        },
        isSiteAdmin: function () {
            var _a, _b, _c, _d, _e;
            return !!((_d = (_c = (_b = (_a = this.$store) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.site) === null || _c === void 0 ? void 0 : _c.admins) === null || _d === void 0 ? void 0 : _d.includes((_e = this.$store.getters.user) === null || _e === void 0 ? void 0 : _e.id));
        }
    },
    methods: {
        onClose: function () {
            this.$emit('update:visible', false);
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElDialog: element_plus_1.ElDialog,
    ElMenu: element_plus_1.ElMenu,
    ElMenuItem: element_plus_1.ElMenuItem,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
    GeneralSetting: General_vue_1.default,
    SiteSetting: Site_vue_1.default,
    SeoSetting: Seo_vue_1.default,
    DistributionSetting: Distribution_vue_1.default,
    FunctionSetting: Function_vue_1.default
};
var __VLS_components;
var __VLS_directives;
var __VLS_0 = {}.ElDialog;
/** @type {[typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({ 'onClose': {} }, { class: "min-w-[450px]" }), { modelValue: (__VLS_ctx.visible) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ 'onClose': {} }, { class: "min-w-[450px]" }), { modelValue: (__VLS_ctx.visible) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4;
var __VLS_5;
var __VLS_6;
var __VLS_7 = {
    onClose: (__VLS_ctx.onClose)
};
var __VLS_8 = {};
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex settings h-[450px]" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.aside, __VLS_intrinsicElements.aside)(__assign({ class: "h-full border-r" }));
var __VLS_9 = {}.ElMenu;
/** @type {[typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, ]} */ ;
// @ts-ignore
var __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9(__assign({ class: "border-r-0" })));
var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([__assign({ class: "border-r-0" })], __VLS_functionalComponentArgsRest(__VLS_10), false));
__VLS_12.slots.default;
var _loop_1 = function (item, index) {
    var __VLS_13 = {}.ElMenuItem;
    /** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
    // @ts-ignore
    var __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13(__assign(__assign({ 'onClick': {} }, { key: (index), index: (item.key) }), { class: ([
            'flex w-[160px] truncate items-center px-2 cursor-pointer py-2',
            __VLS_ctx.activeTab === item.key ? 'active' : '',
            item.visible ? '' : 'hidden'
        ]) })));
    var __VLS_15 = __VLS_14.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { key: (index), index: (item.key) }), { class: ([
                'flex w-[160px] truncate items-center px-2 cursor-pointer py-2',
                __VLS_ctx.activeTab === item.key ? 'active' : '',
                item.visible ? '' : 'hidden'
            ]) })], __VLS_functionalComponentArgsRest(__VLS_14), false));
    var __VLS_17 = void 0;
    var __VLS_18 = void 0;
    var __VLS_19 = void 0;
    var __VLS_20 = {
        onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.activeTab = item.key;
        }
    };
    __VLS_16.slots.default;
    var __VLS_21 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21(__assign({ icon: (item.icon) }, { class: "mr-2" })));
    var __VLS_23 = __VLS_22.apply(void 0, __spreadArray([__assign({ icon: (item.icon) }, { class: "mr-2" })], __VLS_functionalComponentArgsRest(__VLS_22), false));
    (item.label);
};
var __VLS_16;
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.navItems)); _i < _a.length; _i++) {
    var _b = _a[_i], item = _b[0], index = _b[1];
    _loop_1(item, index);
}
var __VLS_12;
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)(__assign({ class: "flex-1 p-6 overflow-y-auto" }));
if (__VLS_ctx.activeTab === 'general') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    var __VLS_25 = {}.GeneralSetting;
    /** @type {[typeof __VLS_components.GeneralSetting, typeof __VLS_components.generalSetting, ]} */ ;
    // @ts-ignore
    var __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({}));
    var __VLS_27 = __VLS_26.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_26), false));
}
else if (__VLS_ctx.activeTab === 'site') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    var __VLS_29 = {}.SiteSetting;
    /** @type {[typeof __VLS_components.SiteSetting, typeof __VLS_components.siteSetting, ]} */ ;
    // @ts-ignore
    var __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({}));
    var __VLS_31 = __VLS_30.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_30), false));
}
else if (__VLS_ctx.activeTab === 'seo' && __VLS_ctx.isSiteAdmin) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    var __VLS_33 = {}.SeoSetting;
    /** @type {[typeof __VLS_components.SeoSetting, typeof __VLS_components.seoSetting, ]} */ ;
    // @ts-ignore
    var __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({}));
    var __VLS_35 = __VLS_34.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_34), false));
}
else if (__VLS_ctx.activeTab === 'distribution' && __VLS_ctx.isSiteAdmin) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    var __VLS_37 = {}.DistributionSetting;
    /** @type {[typeof __VLS_components.DistributionSetting, typeof __VLS_components.distributionSetting, ]} */ ;
    // @ts-ignore
    var __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({}));
    var __VLS_39 = __VLS_38.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_38), false));
}
else if (__VLS_ctx.activeTab === 'function' && __VLS_ctx.isSiteAdmin) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    var __VLS_41 = {}.FunctionSetting;
    /** @type {[typeof __VLS_components.FunctionSetting, typeof __VLS_components.functionSetting, ]} */ ;
    // @ts-ignore
    var __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({}));
    var __VLS_43 = __VLS_42.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_42), false));
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['min-w-[450px]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['settings']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[450px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['border-r']} */ ;
/** @type {__VLS_StyleScopedClasses['border-r-0']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[160px]']} */ ;
/** @type {__VLS_StyleScopedClasses['truncate']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-y-auto']} */ ;
var __VLS_dollars;
var __VLS_self;
