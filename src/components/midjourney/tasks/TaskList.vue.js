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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var TaskItem_vue_1 = require("./TaskItem.vue");
var BotPlaceholder_vue_1 = require("@/components/common/BotPlaceholder.vue");
var NoTasks_vue_1 = require("@/components/common/NoTasks.vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'TaskList',
    components: {
        TaskItem: TaskItem_vue_1.default,
        BotPlaceholder: BotPlaceholder_vue_1.default,
        NoTasks: NoTasks_vue_1.default
    },
    emits: ['custom', 'extend', 'reach-top'],
    data: function () {
        return {
            job: 0
        };
    },
    computed: {
        tasks: function () {
            var _a;
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            return (_a = this.$store.state.midjourney.tasks) === null || _a === void 0 ? void 0 : _a.items;
        },
        application: function () {
            return this.$store.state.midjourney.application;
        }
    },
    methods: {
        onHandleScroll: function () {
            var el = this.$refs.panel;
            if (el.scrollTop === 0) {
                console.log('reach-top reach-top');
                this.$emit('reach-top');
            }
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    TaskItem: TaskItem_vue_1.default,
    BotPlaceholder: BotPlaceholder_vue_1.default,
    NoTasks: NoTasks_vue_1.default
};
var __VLS_components;
var __VLS_directives;
if (__VLS_ctx.tasks === undefined) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "p-2 flex flex-col overflow-y-auto" }));
    var __VLS_0 = {}.BotPlaceholder;
    /** @type {[typeof __VLS_components.BotPlaceholder, typeof __VLS_components.botPlaceholder, ]} */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
}
else if (__VLS_ctx.tasks && ((_a = __VLS_ctx.tasks) === null || _a === void 0 ? void 0 : _a.length) === 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "w-full h-full flex items-center justify-center" }));
    var __VLS_4 = {}.NoTasks;
    /** @type {[typeof __VLS_components.NoTasks, typeof __VLS_components.noTasks, ]} */ ;
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({}));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_5), false));
}
else if (__VLS_ctx.tasks.length > 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ onScroll: (__VLS_ctx.onHandleScroll) }, { ref: "panel" }), { class: "p-2 py-3 h-full flex flex-col overflow-y-auto tasks" }));
    /** @type {typeof __VLS_ctx.panel} */ ;
    for (var _i = 0, _b = __VLS_getVForSourceType((__VLS_ctx.tasks)); _i < _b.length; _i++) {
        var task = _b[_i][0];
        var __VLS_8 = {}.TaskItem;
        /** @type {[typeof __VLS_components.TaskItem, typeof __VLS_components.taskItem, ]} */ ;
        // @ts-ignore
        var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign(__assign({ 'onExtend': {} }, { 'onCustom': {} }), { key: (task.id), modelValue: (task) })));
        var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign(__assign({ 'onExtend': {} }, { 'onCustom': {} }), { key: (task.id), modelValue: (task) })], __VLS_functionalComponentArgsRest(__VLS_9), false));
        var __VLS_12 = void 0;
        var __VLS_13 = void 0;
        var __VLS_14 = void 0;
        var __VLS_15 = {
            onExtend: function () {
                var _a;
                var _b = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _b[_i] = arguments[_i];
                }
                var $event = _b[0];
                if (!!(__VLS_ctx.tasks === undefined))
                    return;
                if (!!(__VLS_ctx.tasks && ((_a = __VLS_ctx.tasks) === null || _a === void 0 ? void 0 : _a.length) === 0))
                    return;
                if (!(__VLS_ctx.tasks.length > 0))
                    return;
                __VLS_ctx.$emit('extend', $event);
            }
        };
        var __VLS_16 = {
            onCustom: function () {
                var _a;
                var _b = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _b[_i] = arguments[_i];
                }
                var $event = _b[0];
                if (!!(__VLS_ctx.tasks === undefined))
                    return;
                if (!!(__VLS_ctx.tasks && ((_a = __VLS_ctx.tasks) === null || _a === void 0 ? void 0 : _a.length) === 0))
                    return;
                if (!(__VLS_ctx.tasks.length > 0))
                    return;
                __VLS_ctx.$emit('custom', $event);
            }
        };
        var __VLS_11;
    }
}
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-y-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-y-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['tasks']} */ ;
var __VLS_dollars;
var __VLS_self;
