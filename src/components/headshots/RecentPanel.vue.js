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
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var Preview_vue_1 = require("./task/Preview.vue");
var element_plus_1 = require("element-plus");
exports.default = (0, vue_1.defineComponent)({
    name: 'RecentPanel',
    components: {
        TaskPreview: Preview_vue_1.default,
        ElSkeleton: element_plus_1.ElSkeleton,
        ElSkeletonItem: element_plus_1.ElSkeletonItem
    },
    emits: ['reach-top'],
    data: function () {
        return {
            job: 0
        };
    },
    computed: {
        tasks: function () {
            var _a, _b, _c, _d;
            // reverse the order of the tasks.items
            return __assign(__assign({}, (_a = this.$store.state.headshots) === null || _a === void 0 ? void 0 : _a.tasks), { items: (_d = (_c = (_b = this.$store.state.headshots) === null || _b === void 0 ? void 0 : _b.tasks) === null || _c === void 0 ? void 0 : _c.items) === null || _d === void 0 ? void 0 : _d.slice() });
        }
    },
    methods: {
        onHandleScroll: function () {
            var el = this.$refs.panel;
            console.log('reach-top reach-top reach-top');
            if (el.scrollTop === 0) {
                this.$emit('reach-top');
            }
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    TaskPreview: Preview_vue_1.default,
    ElSkeleton: element_plus_1.ElSkeleton,
    ElSkeletonItem: element_plus_1.ElSkeletonItem
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ onScroll: (__VLS_ctx.onHandleScroll) }, { ref: "panel" }), { class: "panel recent" }));
/** @type {typeof __VLS_ctx.panel} */ ;
if (((_a = __VLS_ctx.tasks) === null || _a === void 0 ? void 0 : _a.items) === undefined) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "tasks" }));
    for (var _i = 0, _j = __VLS_getVForSourceType((3)); _i < _j.length; _i++) {
        var _1 = _j[_i][0];
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: (_1) }, { class: "task placeholder" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "left" }));
        var __VLS_0 = {}.ElSkeleton;
        /** @type {[typeof __VLS_components.ElSkeleton, typeof __VLS_components.elSkeleton, typeof __VLS_components.ElSkeleton, typeof __VLS_components.elSkeleton, ]} */ ;
        // @ts-ignore
        var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
            animated: true,
        }));
        var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
                animated: true,
            }], __VLS_functionalComponentArgsRest(__VLS_1), false));
        __VLS_3.slots.default;
        {
            var __VLS_thisSlot = __VLS_3.slots.template;
            var __VLS_4 = {}.ElSkeletonItem;
            /** @type {[typeof __VLS_components.ElSkeletonItem, typeof __VLS_components.elSkeletonItem, ]} */ ;
            // @ts-ignore
            var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ variant: "image" }, { class: "avatar" })));
            var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ variant: "image" }, { class: "avatar" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
        }
        var __VLS_3;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "main" }));
        var __VLS_8 = {}.ElSkeleton;
        /** @type {[typeof __VLS_components.ElSkeleton, typeof __VLS_components.elSkeleton, typeof __VLS_components.ElSkeleton, typeof __VLS_components.elSkeleton, ]} */ ;
        // @ts-ignore
        var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
            animated: true,
        }));
        var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([{
                animated: true,
            }], __VLS_functionalComponentArgsRest(__VLS_9), false));
        __VLS_11.slots.default;
        {
            var __VLS_thisSlot = __VLS_11.slots.template;
            var __VLS_12 = {}.ElSkeletonItem;
            /** @type {[typeof __VLS_components.ElSkeletonItem, typeof __VLS_components.elSkeletonItem, ]} */ ;
            // @ts-ignore
            var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ variant: "p" }, { class: "title" })));
            var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ variant: "p" }, { class: "title" })], __VLS_functionalComponentArgsRest(__VLS_13), false));
            var __VLS_16 = {}.ElSkeletonItem;
            /** @type {[typeof __VLS_components.ElSkeletonItem, typeof __VLS_components.elSkeletonItem, ]} */ ;
            // @ts-ignore
            var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign({ variant: "image" }, { class: "icon" })));
            var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign({ variant: "image" }, { class: "icon" })], __VLS_functionalComponentArgsRest(__VLS_17), false));
        }
        var __VLS_11;
    }
}
else if (((_c = (_b = __VLS_ctx.tasks) === null || _b === void 0 ? void 0 : _b.items) === null || _c === void 0 ? void 0 : _c.length) && ((_e = (_d = __VLS_ctx.tasks) === null || _d === void 0 ? void 0 : _d.items) === null || _e === void 0 ? void 0 : _e.length) > 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "tasks" }));
    for (var _k = 0, _l = __VLS_getVForSourceType(((_f = __VLS_ctx.tasks) === null || _f === void 0 ? void 0 : _f.items)); _k < _l.length; _k++) {
        var _m = _l[_k], task = _m[0], taskIndex = _m[1];
        var __VLS_20 = {}.TaskPreview;
        /** @type {[typeof __VLS_components.TaskPreview, typeof __VLS_components.taskPreview, ]} */ ;
        // @ts-ignore
        var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20(__assign({ key: (taskIndex), modelValue: (task) }, { class: "preview" })));
        var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([__assign({ key: (taskIndex), modelValue: (task) }, { class: "preview" })], __VLS_functionalComponentArgsRest(__VLS_21), false));
    }
}
if (((_h = (_g = __VLS_ctx.tasks) === null || _g === void 0 ? void 0 : _g.items) === null || _h === void 0 ? void 0 : _h.length) === 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
    (__VLS_ctx.$t('headshots.message.noTasks'));
}
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['recent']} */ ;
/** @type {__VLS_StyleScopedClasses['tasks']} */ ;
/** @type {__VLS_StyleScopedClasses['task']} */ ;
/** @type {__VLS_StyleScopedClasses['placeholder']} */ ;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['main']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['tasks']} */ ;
/** @type {__VLS_StyleScopedClasses['preview']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
var __VLS_dollars;
var __VLS_self;
