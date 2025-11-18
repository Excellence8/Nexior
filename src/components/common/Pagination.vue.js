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
    name: 'Pagination',
    components: {
        ElPagination: element_plus_1.ElPagination
    },
    props: {
        total: {
            type: Number,
            required: false,
            default: undefined
        },
        currentPage: {
            type: Number,
            required: true
        },
        pageSize: {
            type: Number,
            required: true
        }
    },
    emits: ['change'],
    data: function () {
        return {
            loaded: false
        };
    },
    mounted: function () {
        var _this = this;
        setTimeout(function () {
            // use this flag to fix the bug of el-pagination,
            // always emit page 1 when load first time.
            _this.loaded = true;
        }, 1000);
    },
    methods: {
        onPageChange: function (val) {
            // if not finished loading, ignore the wrong emit event
            if (!this.loaded) {
                return;
            }
            this.$emit('change', val);
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElPagination: element_plus_1.ElPagination
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
var __VLS_0 = {}.ElPagination;
/** @type {[typeof __VLS_components.ElPagination, typeof __VLS_components.elPagination, typeof __VLS_components.ElPagination, typeof __VLS_components.elPagination, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({ 'onCurrentChange': {} }, { class: "mt-3 mb-3" }), { background: true, hideOnSinglePage: (false), layout: "prev, pager, next", currentPage: (__VLS_ctx.currentPage), total: (__VLS_ctx.total), pageSize: (__VLS_ctx.pageSize) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ 'onCurrentChange': {} }, { class: "mt-3 mb-3" }), { background: true, hideOnSinglePage: (false), layout: "prev, pager, next", currentPage: (__VLS_ctx.currentPage), total: (__VLS_ctx.total), pageSize: (__VLS_ctx.pageSize) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4;
var __VLS_5;
var __VLS_6;
var __VLS_7 = {
    onCurrentChange: (__VLS_ctx.onPageChange)
};
var __VLS_8 = {};
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
var __VLS_dollars;
var __VLS_self;
