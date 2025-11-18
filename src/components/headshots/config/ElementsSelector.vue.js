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
exports.default = (0, vue_1.defineComponent)({
    name: 'StylizeSelector',
    components: {
        ElTabs: element_plus_1.ElTabs,
        ElTabPane: element_plus_1.ElTabPane,
        ElImage: element_plus_1.ElImage
    },
    data: function () {
        return {
            tab: 'styles',
            value: '',
            elements: {
                styles: {
                    displayName: this.$t('headshots.styleCategory.styles'),
                    items: [
                        {
                            image: 'https://static.aipedias.com/aicamera/common/20241008/20241008202314260779439.png',
                            label: this.$t('headshots.styleTag.malePportrait'),
                            value: 'male_portrait'
                        },
                        {
                            image: 'https://static.aipedias.com/aicamera/common/20241008/202410082022241e9755548.png',
                            label: this.$t('headshots.styleTag.malePportrait2'),
                            value: 'male_portrait2'
                        },
                        {
                            image: 'https://static.aipedias.com/aicamera/common/20241101/20241101170130d78f66521.png',
                            label: this.$t('headshots.styleTag.kindergarten'),
                            value: 'kindergarten'
                        },
                        {
                            image: 'https://static.aipedias.com/aicamera/common/20240923/20240923123233accf60398.webp',
                            label: this.$t('headshots.styleTag.logoTshirt'),
                            value: 'logo_tshirt'
                        },
                        {
                            image: 'https://static.aipedias.com/aicamera/common/20241025/202410252012329472d0656.jpg',
                            label: this.$t('headshots.styleTag.wedding'),
                            value: 'wedding'
                        },
                        {
                            image: 'https://static.aipedias.com/aicamera/common/20240915/20240915145045254931400.webp',
                            label: this.$t('headshots.styleTag.businessPphoto'),
                            value: 'business_photo'
                        },
                        {
                            image: 'https://static.aipedias.com/aicamera/common/20240810/20240810194526040341795.jpg',
                            label: this.$t('headshots.styleTag.bobSuit'),
                            value: 'bob_suit'
                        },
                        {
                            image: 'https://static.aipedias.com/aicamera/common/20240717/20240717152654e0b348173.webp',
                            label: this.$t('headshots.styleTag.femalePortrait'),
                            value: 'female_portrait'
                        }
                    ]
                }
            }
        };
    },
    watch: {
        value: function (val) {
            var _a;
            console.debug('set template', val);
            this.$store.commit('headshots/setConfig', __assign(__assign({}, (_a = this.$store.state.headshots) === null || _a === void 0 ? void 0 : _a.config), { template: val }));
        }
    },
    mounted: function () {
        var _a;
        if (!this.value) {
            this.value = '';
        }
        console.debug('set template', this.value);
        this.$store.commit('headshots/setConfig', __assign(__assign({}, (_a = this.$store.state.headshots) === null || _a === void 0 ? void 0 : _a.config), { template: this.value }));
    },
    methods: {
        onToggle: function (selectedValue) {
            var _a;
            if (this.value === selectedValue) {
                this.value = '';
            }
            else {
                this.value = selectedValue;
            }
            console.debug('set template', this.value);
            this.$store.commit('headshots/setConfig', __assign(__assign({}, (_a = this.$store.state.headshots) === null || _a === void 0 ? void 0 : _a.config), { template: this.value }));
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElTabs: element_plus_1.ElTabs,
    ElTabPane: element_plus_1.ElTabPane,
    ElImage: element_plus_1.ElImage
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "field" }));
var __VLS_0 = {}.ElTabs;
/** @type {[typeof __VLS_components.ElTabs, typeof __VLS_components.elTabs, typeof __VLS_components.ElTabs, typeof __VLS_components.elTabs, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.tab),
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.tab),
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.elements)); _i < _a.length; _i++) {
    var _b = _a[_i], element = _b[0], elementKey = _b[1];
    var __VLS_4 = {}.ElTabPane;
    /** @type {[typeof __VLS_components.ElTabPane, typeof __VLS_components.elTabPane, typeof __VLS_components.ElTabPane, typeof __VLS_components.elTabPane, ]} */ ;
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ key: (elementKey), label: (element.displayName), name: (elementKey) }, { class: "pane" })));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ key: (elementKey), label: (element.displayName), name: (elementKey) }, { class: "pane" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
    __VLS_7.slots.default;
    var _loop_1 = function (item, itemKey) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.onToggle(item.value);
            } }, { key: (itemKey) }), { class: ({
                item: true,
                active: __VLS_ctx.value === item.value
            }) }));
        var __VLS_8 = {}.ElImage;
        /** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
        // @ts-ignore
        var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ src: (item.image), fit: "fill" }, { class: "preview" })));
        var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ src: (item.image), fit: "fill" }, { class: "preview" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "name" }));
        (item.label);
    };
    for (var _c = 0, _d = __VLS_getVForSourceType((element.items)); _c < _d.length; _c++) {
        var _e = _d[_c], item = _e[0], itemKey = _e[1];
        _loop_1(item, itemKey);
    }
    var __VLS_7;
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['field']} */ ;
/** @type {__VLS_StyleScopedClasses['pane']} */ ;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['preview']} */ ;
/** @type {__VLS_StyleScopedClasses['name']} */ ;
var __VLS_dollars;
var __VLS_self;
