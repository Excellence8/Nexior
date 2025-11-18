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
var operators_1 = require("@/operators");
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var models_1 = require("@/models");
exports.default = (0, vue_1.defineComponent)({
    name: 'PayOrderDialog',
    components: {
        ElDialog: element_plus_1.ElDialog
    },
    props: {
        modelValue: {
            type: Object,
            required: true
        },
        visible: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    emits: ['hide', 'update:modelValue'],
    data: function () {
        return {
            refreshTimer: undefined
        };
    },
    watch: {
        visible: {
            handler: function (val) {
                if (val && this.modelValue.pay_url) {
                    window.open(this.modelValue.pay_url, '_blank');
                }
            }
        }
    },
    mounted: function () {
        this.onRefresh();
    },
    unmounted: function () {
        if (this.refreshTimer) {
            clearTimeout(this.refreshTimer);
        }
    },
    methods: {
        onRefresh: function () {
            var _this = this;
            if (!this.modelValue.id) {
                console.error('id does not exist');
                return;
            }
            operators_1.orderOperator
                .refresh(this.modelValue.id)
                .then(function (_a) {
                var data = _a.data;
                // if not paid, check for next loop
                if (data.state !== models_1.OrderState.PAID) {
                    setTimeout(function () {
                        _this.onRefresh();
                    }, 2000);
                }
                else {
                    // paid, just notify parent, and hide the dialog
                    _this.$emit('hide');
                }
                _this.$emit('update:modelValue', data);
            })
                .catch(function () {
                setTimeout(function () {
                    _this.onRefresh();
                }, 5000);
            });
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElDialog: element_plus_1.ElDialog
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
var __VLS_0 = {}.ElDialog;
/** @type {[typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.visible),
    title: (__VLS_ctx.$t('application.title.buyService')),
    width: "500px",
    center: true,
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.visible),
        title: (__VLS_ctx.$t('application.title.buyService')),
        width: "500px",
        center: true,
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {};
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-center" }));
(__VLS_ctx.$t('order.message.buyInExternalUrl'));
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
var __VLS_dollars;
var __VLS_self;
