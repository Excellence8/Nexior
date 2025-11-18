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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var Preview_vue_1 = require("./task/Preview.vue");
var Player_vue_1 = require("@/components/suno/player/Player.vue");
var NoTasks_vue_1 = require("@/components/common/NoTasks.vue");
var element_plus_1 = require("element-plus");
exports.default = (0, vue_1.defineComponent)({
    name: 'RecentPanel',
    components: {
        ElSkeletonItem: element_plus_1.ElSkeletonItem,
        ElSkeleton: element_plus_1.ElSkeleton,
        TaskPreview: Preview_vue_1.default,
        Player: Player_vue_1.default,
        NoTasks: NoTasks_vue_1.default
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
            return __assign(__assign({}, (_a = this.$store.state.suno) === null || _a === void 0 ? void 0 : _a.tasks), { items: (_d = (_c = (_b = this.$store.state.suno) === null || _b === void 0 ? void 0 : _b.tasks) === null || _c === void 0 ? void 0 : _c.items) === null || _d === void 0 ? void 0 : _d.slice() });
        }
    },
    methods: {
        onHandleScroll: function () {
            var el = this.$refs.panel;
            console.log('reach-top');
            if (el.scrollTop === 0) {
                this.$emit('reach-top');
            }
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElSkeletonItem: element_plus_1.ElSkeletonItem,
    ElSkeleton: element_plus_1.ElSkeleton,
    TaskPreview: Preview_vue_1.default,
    Player: Player_vue_1.default,
    NoTasks: NoTasks_vue_1.default
};
var __VLS_components;
var __VLS_directives;
if (((_a = __VLS_ctx.tasks) === null || _a === void 0 ? void 0 : _a.items) === undefined) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "tasks" }));
    for (var _i = 0, _o = __VLS_getVForSourceType((3)); _i < _o.length; _i++) {
        var _1 = _o[_i][0];
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: (_1) }, { class: "flex" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "left w-[70px] p-[10px] flex items-center" }));
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
            var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ variant: "image" }, { class: "avatar w-[50px] h-[50px]" })));
            var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ variant: "image" }, { class: "avatar w-[50px] h-[50px]" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
        }
        var __VLS_3;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "main w-[calc(100%-70px)] flex-1 p-[10px]" }));
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
            var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ variant: "p" }, { class: "w-[200px] h-[15px] mb-[5px] mt-[10px]" })));
            var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ variant: "p" }, { class: "w-[200px] h-[15px] mb-[5px] mt-[10px]" })], __VLS_functionalComponentArgsRest(__VLS_13), false));
            var __VLS_16 = {}.ElSkeletonItem;
            /** @type {[typeof __VLS_components.ElSkeletonItem, typeof __VLS_components.elSkeletonItem, ]} */ ;
            // @ts-ignore
            var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
                variant: "text",
            }));
            var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([{
                    variant: "text",
                }], __VLS_functionalComponentArgsRest(__VLS_17), false));
        }
        var __VLS_11;
    }
}
else if (((_c = (_b = __VLS_ctx.tasks) === null || _b === void 0 ? void 0 : _b.items) === null || _c === void 0 ? void 0 : _c.length) && ((_e = (_d = __VLS_ctx.tasks) === null || _d === void 0 ? void 0 : _d.items) === null || _e === void 0 ? void 0 : _e.length) > 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onScroll: (__VLS_ctx.onHandleScroll) }, { class: "flex-1 w-full overflow-y-auto tasks p-2" }));
    for (var _p = 0, _q = __VLS_getVForSourceType(((_f = __VLS_ctx.tasks) === null || _f === void 0 ? void 0 : _f.items)); _p < _q.length; _p++) {
        var _r = _q[_p], task = _r[0], taskId = _r[1];
        var __VLS_20 = {}.TaskPreview;
        /** @type {[typeof __VLS_components.TaskPreview, typeof __VLS_components.taskPreview, ]} */ ;
        // @ts-ignore
        var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20(__assign({ key: (taskId), modelValue: (task) }, { class: "preview" })));
        var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([__assign({ key: (taskId), modelValue: (task) }, { class: "preview" })], __VLS_functionalComponentArgsRest(__VLS_21), false));
    }
}
if (((_h = (_g = __VLS_ctx.tasks) === null || _g === void 0 ? void 0 : _g.items) === null || _h === void 0 ? void 0 : _h.length) === 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "w-full flex-1 flex items-center justify-center" }));
    var __VLS_24 = {}.NoTasks;
    /** @type {[typeof __VLS_components.NoTasks, typeof __VLS_components.noTasks, ]} */ ;
    // @ts-ignore
    var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_25), false));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "h-20" }));
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (!!((_m = (_l = (_k = (_j = __VLS_ctx.$store) === null || _j === void 0 ? void 0 : _j.state) === null || _k === void 0 ? void 0 : _k.suno) === null || _l === void 0 ? void 0 : _l.audio) === null || _m === void 0 ? void 0 : _m.object)) }), null, null);
var __VLS_28 = {}.player;
/** @type {[typeof __VLS_components.Player, typeof __VLS_components.player, ]} */ ;
// @ts-ignore
var __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({}));
var __VLS_30 = __VLS_29.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_29), false));
/** @type {__VLS_StyleScopedClasses['tasks']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[70px]']} */ ;
/** @type {__VLS_StyleScopedClasses['p-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[50px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[50px]']} */ ;
/** @type {__VLS_StyleScopedClasses['main']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[calc(100%-70px)]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['p-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[200px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[15px]']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-[5px]']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-y-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['tasks']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['preview']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['h-20']} */ ;
var __VLS_dollars;
var __VLS_self;
