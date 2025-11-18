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
var BotPlaceholder_vue_1 = require("@/components/common/BotPlaceholder.vue");
var NoTasks_vue_1 = require("@/components/common/NoTasks.vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'RecentPanel',
    components: {
        TaskPreview: Preview_vue_1.default,
        NoTasks: NoTasks_vue_1.default,
        BotPlaceholder: BotPlaceholder_vue_1.default
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
            return __assign(__assign({}, (_a = this.$store.state.sora) === null || _a === void 0 ? void 0 : _a.tasks), { items: (_d = (_c = (_b = this.$store.state.sora) === null || _b === void 0 ? void 0 : _b.tasks) === null || _c === void 0 ? void 0 : _c.items) === null || _d === void 0 ? void 0 : _d.slice() });
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
    NoTasks: NoTasks_vue_1.default,
    BotPlaceholder: BotPlaceholder_vue_1.default
};
var __VLS_components;
var __VLS_directives;
if (((_a = __VLS_ctx.tasks) === null || _a === void 0 ? void 0 : _a.items) === undefined) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    var __VLS_0 = {}.BotPlaceholder;
    /** @type {[typeof __VLS_components.BotPlaceholder, typeof __VLS_components.botPlaceholder, ]} */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
}
else if (((_c = (_b = __VLS_ctx.tasks) === null || _b === void 0 ? void 0 : _b.items) === null || _c === void 0 ? void 0 : _c.length) && ((_e = (_d = __VLS_ctx.tasks) === null || _d === void 0 ? void 0 : _d.items) === null || _e === void 0 ? void 0 : _e.length) > 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "tasks h-full w-full overflow-y-auto" }));
    for (var _i = 0, _j = __VLS_getVForSourceType(((_f = __VLS_ctx.tasks) === null || _f === void 0 ? void 0 : _f.items)); _i < _j.length; _i++) {
        var _k = _j[_i], task = _k[0], taskIndex = _k[1];
        var __VLS_4 = {}.TaskPreview;
        /** @type {[typeof __VLS_components.TaskPreview, typeof __VLS_components.taskPreview, ]} */ ;
        // @ts-ignore
        var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
            key: (taskIndex),
            modelValue: (task),
        }));
        var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{
                key: (taskIndex),
                modelValue: (task),
            }], __VLS_functionalComponentArgsRest(__VLS_5), false));
    }
}
if (((_h = (_g = __VLS_ctx.tasks) === null || _g === void 0 ? void 0 : _g.items) === null || _h === void 0 ? void 0 : _h.length) === 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "w-full h-full flex items-center justify-center" }));
    var __VLS_8 = {}.NoTasks;
    /** @type {[typeof __VLS_components.NoTasks, typeof __VLS_components.noTasks, ]} */ ;
    // @ts-ignore
    var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({}));
    var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_9), false));
}
/** @type {__VLS_StyleScopedClasses['tasks']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-y-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
var __VLS_dollars;
var __VLS_self;
