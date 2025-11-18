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
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var constants_1 = require("@/constants");
exports.default = (0, vue_1.defineComponent)({
    name: 'AspectRatioSelector',
    data: function () {
        return {
            options: [
                {
                    value: '1:1',
                    label: '1:1',
                    width: 20,
                    height: 20
                },
                {
                    value: '4:3',
                    label: '4:3',
                    width: 20,
                    height: 15
                },
                {
                    value: '3:4',
                    label: '3:4',
                    width: 15,
                    height: 20
                },
                {
                    value: '16:9',
                    label: '16:9',
                    width: 25,
                    height: 13
                },
                {
                    value: '9:16',
                    label: '9:16',
                    width: 13,
                    height: 25
                }
            ]
        };
    },
    computed: {
        active: function () {
            var _this = this;
            return this.options.findIndex(function (option) { return option.value === _this.value; }) || 0;
        },
        value: {
            get: function () {
                var _a, _b;
                return (_b = (_a = this.$store.state.veo) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.aspect_ratio;
            },
            set: function (val) {
                var _a, _b;
                console.debug('set aspect_ratio', val);
                this.$store.commit('veo/setConfig', __assign(__assign({}, (_b = (_a = this.$store.state) === null || _a === void 0 ? void 0 : _a.veo) === null || _b === void 0 ? void 0 : _b.config), { aspect_ratio: val }));
            }
        }
    },
    mounted: function () {
        if (!this.value) {
            this.value = constants_1.VEO_DEFAULT_ASPECT_RATIO;
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['rect']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "text-sm font-bold mb-2 block" }));
(__VLS_ctx.$t('veo.name.ratio'));
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
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "preview" }, { class: (option.label) }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "rect" }, { style: ({ width: option.width + 'px', height: option.height + 'px' }) }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "name" }));
    (option.label);
};
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.options)); _i < _a.length; _i++) {
    var _b = _a[_i], option = _b[0], optionKey = _b[1];
    _loop_1(option, optionKey);
}
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['items']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
/** @type {__VLS_StyleScopedClasses['preview']} */ ;
/** @type {__VLS_StyleScopedClasses['rect']} */ ;
/** @type {__VLS_StyleScopedClasses['name']} */ ;
var __VLS_dollars;
var __VLS_self;
