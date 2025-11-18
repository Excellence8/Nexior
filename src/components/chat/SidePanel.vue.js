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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var operators_1 = require("@/operators");
var models_1 = require("@/models");
exports.default = (0, vue_1.defineComponent)({
    name: 'SidePanel',
    components: {
        ElInput: element_plus_1.ElInput,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
        ElSkeleton: element_plus_1.ElSkeleton
    },
    props: {},
    emits: ['change-conversation'],
    computed: {
        modelGroup: function () {
            return this.$store.state.chat.modelGroup;
        },
        conversationId: function () {
            var _a, _b, _c;
            console.debug('conversationId in side', (_a = this.$route.params) === null || _a === void 0 ? void 0 : _a.id);
            return (_c = (_b = this.$route.params) === null || _b === void 0 ? void 0 : _b.id) === null || _c === void 0 ? void 0 : _c.toString();
        },
        conversations: function () {
            var _this = this;
            var conversations = this.$store.state.chat.conversations;
            console.debug('conversations', conversations);
            console.debug('modelGroup', this.modelGroup);
            // filter by model group
            conversations = conversations === null || conversations === void 0 ? void 0 : conversations.filter(function (conversation) {
                var _a, _b, _c;
                return (conversation === null || conversation === void 0 ? void 0 : conversation.model) &&
                    ((_c = (_b = (_a = _this.modelGroup) === null || _a === void 0 ? void 0 : _a.models) === null || _b === void 0 ? void 0 : _b.map(function (item) { return item.name; })) === null || _c === void 0 ? void 0 : _c.includes(conversation === null || conversation === void 0 ? void 0 : conversation.model));
            });
            console.debug('filtered conversations', conversations);
            return conversations;
        },
        conversationGroups: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            // split our 4 groups according to the `updated_at` field, to 'today', 'yesterday', 'this week', 'earlier'.
            var today = new Date();
            today.setHours(0, 0, 0, 0);
            var yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);
            var thisWeek = new Date(today);
            thisWeek.setDate(thisWeek.getDate() - today.getDay());
            var earlier = new Date(thisWeek);
            earlier.setDate(earlier.getDate() - 7);
            var groups = (_a = this.conversations) === null || _a === void 0 ? void 0 : _a.reduce(function (acc, conversation) {
                var updatedAt = new Date(conversation.updated_at * 1000);
                if (updatedAt >= today) {
                    acc.today.push(conversation);
                }
                else if (updatedAt >= yesterday) {
                    acc.yesterday.push(conversation);
                }
                else if (updatedAt >= thisWeek) {
                    acc.thisWeek.push(conversation);
                }
                else {
                    acc.earlier.push(conversation);
                }
                return acc;
            }, { today: [], yesterday: [], thisWeek: [], earlier: [] });
            // sort every group by `updated_at` field.
            return __assign(__assign(__assign(__assign({}, (((_b = groups === null || groups === void 0 ? void 0 : groups.today) === null || _b === void 0 ? void 0 : _b.length) > 0 ? { today: (_c = groups === null || groups === void 0 ? void 0 : groups.today) === null || _c === void 0 ? void 0 : _c.sort(function (a, b) { return b.updated_at - a.updated_at; }) } : {})), (((_d = groups === null || groups === void 0 ? void 0 : groups.yesterday) === null || _d === void 0 ? void 0 : _d.length) > 0
                ? { yesterday: (_e = groups === null || groups === void 0 ? void 0 : groups.yesterday) === null || _e === void 0 ? void 0 : _e.sort(function (a, b) { return b.updated_at - a.updated_at; }) }
                : {})), (((_f = groups === null || groups === void 0 ? void 0 : groups.thisWeek) === null || _f === void 0 ? void 0 : _f.length) > 0
                ? { thisWeek: (_g = groups === null || groups === void 0 ? void 0 : groups.thisWeek) === null || _g === void 0 ? void 0 : _g.sort(function (a, b) { return b.updated_at - a.updated_at; }) }
                : {})), (((_h = groups === null || groups === void 0 ? void 0 : groups.earlier) === null || _h === void 0 ? void 0 : _h.length) > 0
                ? { earlier: (_j = groups === null || groups === void 0 ? void 0 : groups.earlier) === null || _j === void 0 ? void 0 : _j.sort(function (a, b) { return b.updated_at - a.updated_at; }) }
                : {}));
        },
        application: function () {
            return this.$store.state.chat.application;
        },
        loading: function () {
            return this.$store.state.chat.status.getConversations === models_1.Status.Request;
        },
        token: function () {
            var _a, _b;
            return (_b = (_a = this.$store.state.chat) === null || _a === void 0 ? void 0 : _a.credential) === null || _b === void 0 ? void 0 : _b.token;
        }
    },
    watch: {
        modelGroup: function () {
            var _a;
            console.debug('modelGroup changed, refreshing conversations');
            var firstConversation = (_a = this.conversations) === null || _a === void 0 ? void 0 : _a[0];
            // will create new conversation once no conversation
            this.$emit('change-conversation', firstConversation === null || firstConversation === void 0 ? void 0 : firstConversation.id);
        }
    },
    methods: {
        onNewConversation: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.debug('onNewConversation from side panel');
                    this.$emit('change-conversation', undefined);
                    return [2 /*return*/];
                });
            });
        },
        onConfirm: function (conversation) {
            return __awaiter(this, void 0, void 0, function () {
                var token;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            token = this.token;
                            if (!token) {
                                console.error('Token is not found');
                                return [2 /*return*/];
                            }
                            if (!((conversation === null || conversation === void 0 ? void 0 : conversation.deleting) && conversation.id)) return [3 /*break*/, 3];
                            return [4 /*yield*/, operators_1.chatOperator.deleteConversation(conversation.id, {
                                    token: token
                                })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.$store.dispatch('chat/getConversations')];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 7];
                        case 3:
                            if (!(conversation === null || conversation === void 0 ? void 0 : conversation.editing)) return [3 /*break*/, 6];
                            return [4 /*yield*/, operators_1.chatOperator.updateConversation(conversation, {
                                    token: token
                                })];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, this.$store.dispatch('chat/getConversations')];
                        case 5:
                            _a.sent();
                            return [3 /*break*/, 7];
                        case 6:
                            conversation.editing = true;
                            _a.label = 7;
                        case 7: return [2 /*return*/];
                    }
                });
            });
        },
        onClickConversation: function (id) {
            console.debug('onClickConversation in side panel', id);
            this.$emit('change-conversation', id);
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElInput: element_plus_1.ElInput,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
    ElSkeleton: element_plus_1.ElSkeleton
};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['operations']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "panel" }));
if (__VLS_ctx.loading && __VLS_ctx.conversationGroups === undefined) {
    var __VLS_0 = {}.ElSkeleton;
    /** @type {[typeof __VLS_components.ElSkeleton, typeof __VLS_components.elSkeleton, ]} */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "conversations" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: (__VLS_ctx.onNewConversation) }, { class: "conversation" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "icons" }));
    var __VLS_4 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ icon: "fa-solid fa-plus" }, { class: "icon" })));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-plus" }, { class: "icon" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "title" }));
    (__VLS_ctx.$t('chat.message.startNewChat'));
    for (var _i = 0, _e = __VLS_getVForSourceType((__VLS_ctx.conversationGroups)); _i < _e.length; _i++) {
        var _f = _e[_i], group = _f[0], groupKey = _f[1];
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: (groupKey) }, { class: "group" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "key" }));
        (__VLS_ctx.$t("chat.group.".concat(groupKey)));
        var _loop_1 = function (conversation, conversationIndex) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ onClick: function () {
                    var _a = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _a[_i] = arguments[_i];
                    }
                    var $event = _a[0];
                    if (!!(__VLS_ctx.loading && __VLS_ctx.conversationGroups === undefined))
                        return;
                    __VLS_ctx.onClickConversation(conversation.id);
                } }, { key: (conversationIndex) }), { class: ({ conversation: true, active: conversation.id === __VLS_ctx.conversationId }) }));
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "title" }));
            if (conversation === null || conversation === void 0 ? void 0 : conversation.deleting) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                ("".concat(__VLS_ctx.$t('chat.message.confirmDelete'), "?"));
            }
            else if (conversation === null || conversation === void 0 ? void 0 : conversation.editing) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                var __VLS_8 = {}.ElInput;
                /** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
                // @ts-ignore
                var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ 'onKeydown': {} }, { modelValue: (conversation.title) })));
                var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ 'onKeydown': {} }, { modelValue: (conversation.title) })], __VLS_functionalComponentArgsRest(__VLS_9), false));
                var __VLS_12 = void 0;
                var __VLS_13 = void 0;
                var __VLS_14 = void 0;
                var __VLS_15 = {
                    onKeydown: function () {
                        var _a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            _a[_i] = arguments[_i];
                        }
                        var $event = _a[0];
                        if (!!(__VLS_ctx.loading && __VLS_ctx.conversationGroups === undefined))
                            return;
                        if (!!(conversation === null || conversation === void 0 ? void 0 : conversation.deleting))
                            return;
                        if (!(conversation === null || conversation === void 0 ? void 0 : conversation.editing))
                            return;
                        __VLS_ctx.onConfirm(conversation);
                    }
                };
            }
            else if ((conversation === null || conversation === void 0 ? void 0 : conversation.title) || (conversation === null || conversation === void 0 ? void 0 : conversation.messages)) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                ((conversation === null || conversation === void 0 ? void 0 : conversation.title) ||
                    ((_b = (_a = conversation === null || conversation === void 0 ? void 0 : conversation.messages) === null || _a === void 0 ? void 0 : _a[(conversation === null || conversation === void 0 ? void 0 : conversation.messages.length) - 1]) === null || _b === void 0 ? void 0 : _b.content) ||
                    ((_d = (_c = conversation === null || conversation === void 0 ? void 0 : conversation.messages) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.content));
            }
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "operations" }));
            if (!(conversation === null || conversation === void 0 ? void 0 : conversation.editing) && !conversation.deleting) {
                var __VLS_16 = {}.FontAwesomeIcon;
                /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
                // @ts-ignore
                var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign(__assign({ 'onClick': {} }, { icon: "fa-solid fa-edit" }), { class: "icon icon-edit" })));
                var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { icon: "fa-solid fa-edit" }), { class: "icon icon-edit" })], __VLS_functionalComponentArgsRest(__VLS_17), false));
                var __VLS_20 = void 0;
                var __VLS_21 = void 0;
                var __VLS_22 = void 0;
                var __VLS_23 = {
                    onClick: function () {
                        var _a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            _a[_i] = arguments[_i];
                        }
                        var $event = _a[0];
                        if (!!(__VLS_ctx.loading && __VLS_ctx.conversationGroups === undefined))
                            return;
                        if (!(!(conversation === null || conversation === void 0 ? void 0 : conversation.editing) && !conversation.deleting))
                            return;
                        conversation.editing = true;
                    }
                };
            }
            if (!(conversation === null || conversation === void 0 ? void 0 : conversation.editing) && !conversation.deleting) {
                var __VLS_24 = {}.FontAwesomeIcon;
                /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
                // @ts-ignore
                var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24(__assign(__assign({ 'onClick': {} }, { icon: "fa-solid fa-trash" }), { class: "icon icon-delete" })));
                var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { icon: "fa-solid fa-trash" }), { class: "icon icon-delete" })], __VLS_functionalComponentArgsRest(__VLS_25), false));
                var __VLS_28 = void 0;
                var __VLS_29 = void 0;
                var __VLS_30 = void 0;
                var __VLS_31 = {
                    onClick: function () {
                        var _a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            _a[_i] = arguments[_i];
                        }
                        var $event = _a[0];
                        if (!!(__VLS_ctx.loading && __VLS_ctx.conversationGroups === undefined))
                            return;
                        if (!(!(conversation === null || conversation === void 0 ? void 0 : conversation.editing) && !conversation.deleting))
                            return;
                        conversation.deleting = true;
                    }
                };
            }
            if ((conversation === null || conversation === void 0 ? void 0 : conversation.editing) || conversation.deleting) {
                var __VLS_32 = {}.FontAwesomeIcon;
                /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
                // @ts-ignore
                var __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32(__assign(__assign({ 'onClick': {} }, { icon: "fa-solid fa-check" }), { class: "icon icon-confirm" })));
                var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { icon: "fa-solid fa-check" }), { class: "icon icon-confirm" })], __VLS_functionalComponentArgsRest(__VLS_33), false));
                var __VLS_36 = void 0;
                var __VLS_37 = void 0;
                var __VLS_38 = void 0;
                var __VLS_39 = {
                    onClick: function () {
                        var _a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            _a[_i] = arguments[_i];
                        }
                        var $event = _a[0];
                        if (!!(__VLS_ctx.loading && __VLS_ctx.conversationGroups === undefined))
                            return;
                        if (!((conversation === null || conversation === void 0 ? void 0 : conversation.editing) || conversation.deleting))
                            return;
                        __VLS_ctx.onConfirm(conversation);
                    }
                };
            }
            if ((conversation === null || conversation === void 0 ? void 0 : conversation.editing) || conversation.deleting) {
                var __VLS_40 = {}.FontAwesomeIcon;
                /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
                // @ts-ignore
                var __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40(__assign(__assign({ 'onClick': {} }, { icon: "fa-solid fa-xmark" }), { class: "icon icon-cancel" })));
                var __VLS_42 = __VLS_41.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { icon: "fa-solid fa-xmark" }), { class: "icon icon-cancel" })], __VLS_functionalComponentArgsRest(__VLS_41), false));
                var __VLS_44 = void 0;
                var __VLS_45 = void 0;
                var __VLS_46 = void 0;
                var __VLS_47 = {
                    onClick: function () {
                        var _a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            _a[_i] = arguments[_i];
                        }
                        var $event = _a[0];
                        if (!!(__VLS_ctx.loading && __VLS_ctx.conversationGroups === undefined))
                            return;
                        if (!((conversation === null || conversation === void 0 ? void 0 : conversation.editing) || conversation.deleting))
                            return;
                        conversation.editing = false;
                        conversation.deleting = false;
                        ;
                    }
                };
            }
        };
        var __VLS_11, __VLS_19, __VLS_27, __VLS_35, __VLS_43;
        for (var _g = 0, _h = __VLS_getVForSourceType((group)); _g < _h.length; _g++) {
            var _j = _h[_g], conversation = _j[0], conversationIndex = _j[1];
            _loop_1(conversation, conversationIndex);
        }
    }
}
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['conversations']} */ ;
/** @type {__VLS_StyleScopedClasses['conversation']} */ ;
/** @type {__VLS_StyleScopedClasses['icons']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['key']} */ ;
/** @type {__VLS_StyleScopedClasses['conversation']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['operations']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-edit']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-delete']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-confirm']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-cancel']} */ ;
var __VLS_dollars;
var __VLS_self;
