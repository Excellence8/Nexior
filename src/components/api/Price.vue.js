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
    name: 'ApiPrice',
    components: {
        ElTable: element_plus_1.ElTable,
        ElTableColumn: element_plus_1.ElTableColumn,
        ElDialog: element_plus_1.ElDialog,
        ElButton: element_plus_1.ElButton
    },
    props: {
        price: {
            type: Object,
            required: true
        }
    },
    data: function () {
        return {
            visible: false
        };
    },
    computed: {
        data: function () {
            var _a;
            return ((_a = this.price) === null || _a === void 0 ? void 0 : _a.data) || [];
        },
        columns: function () {
            var _a;
            return (_a = this.price) === null || _a === void 0 ? void 0 : _a.columns;
        },
        spans: function () {
            var _a;
            return (_a = this.price) === null || _a === void 0 ? void 0 : _a.spans;
        }
    },
    methods: {
        // @ts-ignore
        cellStyle: function () {
            return {
                'font-weight': 'bold',
                'text-align': 'center'
            };
        },
        spanMethod: function (_a) {
            var rowIndex = _a.rowIndex, columnIndex = _a.columnIndex;
            if (this.spans) {
                for (var _i = 0, _b = this.spans; _i < _b.length; _i++) {
                    var span = _b[_i];
                    if (rowIndex === span[0] && columnIndex === span[1]) {
                        return [span[2], span[3]];
                    }
                }
            }
            return [1, 1];
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElTable: element_plus_1.ElTable,
    ElTableColumn: element_plus_1.ElTableColumn,
    ElDialog: element_plus_1.ElDialog,
    ElButton: element_plus_1.ElButton
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
var __VLS_0 = {}.ElDialog;
/** @type {[typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.visible),
    center: true,
    width: "80%",
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.visible),
        center: true,
        width: "80%",
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
var __VLS_4 = {}.ElTable;
/** @type {[typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    data: (__VLS_ctx.data),
    stripe: true,
    spanMethod: (__VLS_ctx.spanMethod),
    headerCellStyle: (__VLS_ctx.cellStyle),
    cellStyle: (__VLS_ctx.cellStyle),
}));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{
        data: (__VLS_ctx.data),
        stripe: true,
        spanMethod: (__VLS_ctx.spanMethod),
        headerCellStyle: (__VLS_ctx.cellStyle),
        cellStyle: (__VLS_ctx.cellStyle),
    }], __VLS_functionalComponentArgsRest(__VLS_5), false));
__VLS_7.slots.default;
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.columns)); _i < _a.length; _i++) {
    var _b = _a[_i], column = _b[0], columnIndex = _b[1];
    var __VLS_8 = {}.ElTableColumn;
    /** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
    // @ts-ignore
    var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        key: (columnIndex),
        prop: (column.key),
        label: (column.label),
    }));
    var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([{
            key: (columnIndex),
            prop: (column.key),
            label: (column.label),
        }], __VLS_functionalComponentArgsRest(__VLS_9), false));
}
var __VLS_7;
var __VLS_3;
var __VLS_12 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ 'onClick': {} }, { round: true, size: "small" })));
var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { round: true, size: "small" })], __VLS_functionalComponentArgsRest(__VLS_13), false));
var __VLS_16;
var __VLS_17;
var __VLS_18;
var __VLS_19 = {
    onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.visible = true;
    }
};
__VLS_15.slots.default;
(__VLS_ctx.$t('service.button.pricing'));
var __VLS_15;
var __VLS_dollars;
var __VLS_self;
