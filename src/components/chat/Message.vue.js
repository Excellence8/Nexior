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
var _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var AnsweringMark_vue_1 = require("./AnsweringMark.vue");
var copy_to_clipboard_1 = require("copy-to-clipboard");
var element_plus_1 = require("element-plus");
var MarkdownRenderer_vue_1 = require("@/components/common/MarkdownRenderer.vue");
var models_1 = require("@/models");
var CopyToClipboard_vue_1 = require("@/components/common/CopyToClipboard.vue");
var RestartToGenerate_vue_1 = require("./RestartToGenerate.vue");
var EditMessage_vue_1 = require("./EditMessage.vue");
var FilePreview_vue_1 = require("@/components/common/FilePreview.vue");
var constants_1 = require("@/constants");
var router_1 = require("@/router");
exports.default = (0, vue_1.defineComponent)({
    name: 'Message',
    components: {
        EditMessage: EditMessage_vue_1.default,
        CopyToClipboard: CopyToClipboard_vue_1.default,
        RestartToGenerate: RestartToGenerate_vue_1.default,
        AnsweringMark: AnsweringMark_vue_1.default,
        MarkdownRenderer: MarkdownRenderer_vue_1.default,
        ElAlert: element_plus_1.ElAlert,
        FilePreview: FilePreview_vue_1.default,
        ElButton: element_plus_1.ElButton,
        ElImage: element_plus_1.ElImage,
        ElInput: element_plus_1.ElInput
    },
    props: {
        messages: {
            type: Array,
            required: false,
            default: function () { return []; }
        },
        message: {
            type: Object,
            required: true
        },
        application: {
            type: Object,
            required: true
        }
    },
    emits: ['stop', 'edit', 'restart'],
    data: function () {
        return {
            copied: false,
            isEditing: false,
            questionValue: this.message.content,
            messageState: models_1.IChatMessageState
        };
    },
    computed: {
        modelGroup: function () {
            return this.$store.state.chat.modelGroup;
        },
        errorText: function () {
            var _a, _b, _c;
            console.debug('error', this.message.error);
            if (!this.message.error || !((_a = this.message.error) === null || _a === void 0 ? void 0 : _a.code)) {
                return undefined;
            }
            if ((_b = this.message.error) === null || _b === void 0 ? void 0 : _b.message) {
                return this.message.error.message;
            }
            switch ((_c = this.message.error) === null || _c === void 0 ? void 0 : _c.code) {
                case constants_1.ERROR_CODE_USED_UP:
                    return this.$t('chat.message.errorUsedUp');
                case constants_1.ERROR_CODE_API_ERROR:
                    return this.$t('chat.message.errorApiError');
                case constants_1.ERROR_CODE_BAD_REQUEST:
                    return this.$t('chat.message.errorBadRequest');
                case constants_1.ERROR_CODE_TIMEOUT:
                    return this.$t('chat.message.errorTimeout');
                case constants_1.ERROR_CODE_BUSY:
                    return this.$t('chat.message.errorBusy');
                case constants_1.ERROR_CODE_CONTENT_TOO_LARGE:
                    return this.$t('chat.message.errorContentTooLarge');
                case constants_1.ERROR_CODE_TOO_MANY_REQUESTS:
                    return this.$t('chat.message.errorTooManyRequests');
                case constants_1.ERROR_CODE_NOT_APPLIED:
                    return this.$t('chat.message.errorNotApplied');
                case constants_1.ERROR_CODE_CANCELED:
                    return undefined;
                case constants_1.ERROR_CODE_UNKNOWN:
                default:
                    return this.$t('chat.message.errorUnknown');
            }
        },
        showBuyMore: function () {
            var _a;
            return this.message.role === constants_1.ROLE_ASSISTANT && ((_a = this.message.error) === null || _a === void 0 ? void 0 : _a.code) === constants_1.ERROR_CODE_USED_UP;
        }
    },
    watch: {},
    methods: {
        startEditing: function () {
            this.isEditing = true;
            this.questionValue = this.message.content;
            console.debug('start to get answer', this.message);
        },
        cancelEdit: function () {
            this.isEditing = false;
        },
        onRestart: function () {
            this.$emit('restart', this.message);
        },
        onEdit: function () {
            this.isEditing = false;
            this.onSubmit();
        },
        onSubmit: function () {
            this.$emit('edit', this.message, this.questionValue);
        },
        onCopy: function () {
            var _this = this;
            (0, copy_to_clipboard_1.default)(this.message.content.toString(), {
                debug: true
            });
            this.copied = true;
            setTimeout(function () {
                _this.copied = false;
            }, 3000);
        },
        onBuyMore: function () {
            var _a;
            this.$router.push({
                name: router_1.ROUTE_CONSOLE_APPLICATION_EXTRA,
                params: {
                    id: (_a = this.application) === null || _a === void 0 ? void 0 : _a.id
                }
            });
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    EditMessage: EditMessage_vue_1.default,
    CopyToClipboard: CopyToClipboard_vue_1.default,
    RestartToGenerate: RestartToGenerate_vue_1.default,
    AnsweringMark: AnsweringMark_vue_1.default,
    MarkdownRenderer: MarkdownRenderer_vue_1.default,
    ElAlert: element_plus_1.ElAlert,
    FilePreview: FilePreview_vue_1.default,
    ElButton: element_plus_1.ElButton,
    ElImage: element_plus_1.ElImage,
    ElInput: element_plus_1.ElInput
};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['btn-buy']} */ ;
/** @type {__VLS_StyleScopedClasses['main']} */ ;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['edits']} */ ;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['operations']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-edit']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: (_a = {
            message: true
        },
        _a[__VLS_ctx.message.role] = true,
        _a) }, { role: (__VLS_ctx.message.role) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "author" }));
if (__VLS_ctx.message.role === 'assistant') {
    var __VLS_0 = {}.ElImage;
    /** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ src: ((_b = __VLS_ctx.modelGroup) === null || _b === void 0 ? void 0 : _b.icon), fit: "cover" }, { class: "avatar" })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ src: ((_c = __VLS_ctx.modelGroup) === null || _c === void 0 ? void 0 : _c.icon), fit: "cover" }, { class: "avatar" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
}
if (!__VLS_ctx.errorText) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "main" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ initial: ({ opacity: 0, y: 5 }), enter: ({ opacity: 1, y: 0, scale: 1 }), delay: (300), duration: (400), layout: (true), transition: ({
            enter: { delay: 0.3, duration: 0.5 },
            layout: { duration: 0.4, easing: 'ease-in-out' }
        }) }, { class: "content" }));
    __VLS_asFunctionalDirective(__VLS_directives.vMotion)(null, __assign({}, __VLS_directiveBindingRestFields), null, null);
    if (!__VLS_ctx.isEditing) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "message-content" }));
        if (!Array.isArray(__VLS_ctx.message.content)) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            if (__VLS_ctx.message.role === 'assistant') {
                var __VLS_4 = {}.MarkdownRenderer;
                /** @type {[typeof __VLS_components.MarkdownRenderer, typeof __VLS_components.markdownRenderer, ]} */ ;
                // @ts-ignore
                var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
                    content: ((_d = __VLS_ctx.message) === null || _d === void 0 ? void 0 : _d.content),
                }));
                var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{
                        content: ((_e = __VLS_ctx.message) === null || _e === void 0 ? void 0 : _e.content),
                    }], __VLS_functionalComponentArgsRest(__VLS_5), false));
            }
            else {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)(__assign({ class: "whitespace-pre-wrap break-words w-fit max-w-full py-1" }));
                (__VLS_ctx.message.content);
            }
        }
        else {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            for (var _i = 0, _k = __VLS_getVForSourceType((__VLS_ctx.message.content)); _i < _k.length; _i++) {
                var _l = _k[_i], item = _l[0], index = _l[1];
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    key: (index),
                });
                if (item.type === 'image_url') {
                    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: (typeof (item === null || item === void 0 ? void 0 : item.image_url) === 'string' ? item.image_url : (_f = item.image_url) === null || _f === void 0 ? void 0 : _f.url), fit: "cover" }, { class: "image" }));
                }
                if (item.file_url) {
                    var __VLS_8 = {}.FilePreview;
                    /** @type {[typeof __VLS_components.FilePreview, typeof __VLS_components.filePreview, ]} */ ;
                    // @ts-ignore
                    var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ name: (typeof (item === null || item === void 0 ? void 0 : item.file_url) === 'string' ? item.file_url : (_g = item.file_url) === null || _g === void 0 ? void 0 : _g.url), percentage: (0), closable: (false) }, { class: "mt-2" })));
                    var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ name: (typeof (item === null || item === void 0 ? void 0 : item.file_url) === 'string' ? item.file_url : (_h = item.file_url) === null || _h === void 0 ? void 0 : _h.url), percentage: (0), closable: (false) }, { class: "mt-2" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
                }
                if (item.type === 'text') {
                    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
                    if (__VLS_ctx.message.role === 'assistant') {
                        var __VLS_12 = {}.MarkdownRenderer;
                        /** @type {[typeof __VLS_components.MarkdownRenderer, typeof __VLS_components.markdownRenderer, ]} */ ;
                        // @ts-ignore
                        var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
                            content: (item.text),
                        }));
                        var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{
                                content: (item.text),
                            }], __VLS_functionalComponentArgsRest(__VLS_13), false));
                    }
                    else {
                        __VLS_asFunctionalElement(__VLS_intrinsicElements.pre, __VLS_intrinsicElements.pre)(__assign({ class: "whitespace-pre-wrap break-words w-fit max-w-full py-1" }));
                        ((_j = item.text) === null || _j === void 0 ? void 0 : _j.trim());
                    }
                }
            }
        }
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "edits" }));
        var __VLS_16 = {}.ElInput;
        /** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
        // @ts-ignore
        var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign(__assign({ 'onKeydown': {} }, { modelValue: (__VLS_ctx.questionValue), type: "textarea" }), { class: "mb-2" })));
        var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign(__assign({ 'onKeydown': {} }, { modelValue: (__VLS_ctx.questionValue), type: "textarea" }), { class: "mb-2" })], __VLS_functionalComponentArgsRest(__VLS_17), false));
        var __VLS_20 = void 0;
        var __VLS_21 = void 0;
        var __VLS_22 = void 0;
        var __VLS_23 = {
            onKeydown: (__VLS_ctx.onEdit)
        };
        var __VLS_19;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex justify-end" }));
        var __VLS_24 = {}.ElButton;
        /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
        // @ts-ignore
        var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24(__assign({ 'onClick': {} }, { round: true })));
        var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { round: true })], __VLS_functionalComponentArgsRest(__VLS_25), false));
        var __VLS_28 = void 0;
        var __VLS_29 = void 0;
        var __VLS_30 = void 0;
        var __VLS_31 = {
            onClick: (__VLS_ctx.cancelEdit)
        };
        __VLS_27.slots.default;
        (__VLS_ctx.$t('common.button.cancel'));
        var __VLS_27;
        var __VLS_32 = {}.ElButton;
        /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
        // @ts-ignore
        var __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32(__assign(__assign(__assign({ 'onClick': {} }, { type: "primary" }), { class: "btn-confirm" }), { round: true })));
        var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onClick': {} }, { type: "primary" }), { class: "btn-confirm" }), { round: true })], __VLS_functionalComponentArgsRest(__VLS_33), false));
        var __VLS_36 = void 0;
        var __VLS_37 = void 0;
        var __VLS_38 = void 0;
        var __VLS_39 = {
            onClick: (__VLS_ctx.onEdit)
        };
        __VLS_35.slots.default;
        (__VLS_ctx.$t('common.button.confirm'));
        var __VLS_35;
    }
    if (__VLS_ctx.message.state === __VLS_ctx.messageState.PENDING) {
        var __VLS_40 = {}.AnsweringMark;
        /** @type {[typeof __VLS_components.AnsweringMark, typeof __VLS_components.answeringMark, ]} */ ;
        // @ts-ignore
        var __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({}));
        var __VLS_42 = __VLS_41.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_41), false));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ initial: ({ opacity: 0, y: 5 }), enter: ({ opacity: 1, y: 0, scale: 1 }), delay: (300), duration: (400), layout: (true), transition: ({
            enter: { delay: 0.3, duration: 0.5 },
            layout: { duration: 0.4, easing: 'ease-in-out' }
        }) }, { class: "operations" }));
    __VLS_asFunctionalDirective(__VLS_directives.vMotion)(null, __assign({}, __VLS_directiveBindingRestFields), null, null);
    if (__VLS_ctx.message.role === 'user' && !__VLS_ctx.isEditing && !Array.isArray(__VLS_ctx.message.content)) {
        var __VLS_44 = {}.EditMessage;
        /** @type {[typeof __VLS_components.EditMessage, typeof __VLS_components.editMessage, ]} */ ;
        // @ts-ignore
        var __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44(__assign({ 'onClick': {} }, { class: "btn-edit" })));
        var __VLS_46 = __VLS_45.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { class: "btn-edit" })], __VLS_functionalComponentArgsRest(__VLS_45), false));
        var __VLS_48 = void 0;
        var __VLS_49 = void 0;
        var __VLS_50 = void 0;
        var __VLS_51 = {
            onClick: (__VLS_ctx.startEditing)
        };
        var __VLS_47;
    }
    if (!Array.isArray(__VLS_ctx.message.content) &&
        (__VLS_ctx.message.state === __VLS_ctx.messageState.FINISHED || __VLS_ctx.message.state === __VLS_ctx.messageState.FAILED)) {
        var __VLS_52 = {}.CopyToClipboard;
        /** @type {[typeof __VLS_components.CopyToClipboard, typeof __VLS_components.copyToClipboard, ]} */ ;
        // @ts-ignore
        var __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52(__assign({ content: (__VLS_ctx.message.content) }, { class: "btn-copy" })));
        var __VLS_54 = __VLS_53.apply(void 0, __spreadArray([__assign({ content: (__VLS_ctx.message.content) }, { class: "btn-copy" })], __VLS_functionalComponentArgsRest(__VLS_53), false));
    }
    if (!Array.isArray(__VLS_ctx.message.content) &&
        (__VLS_ctx.message.state === __VLS_ctx.messageState.FINISHED || __VLS_ctx.message.state === __VLS_ctx.messageState.FAILED) &&
        __VLS_ctx.message.role === 'assistant' &&
        __VLS_ctx.message === __VLS_ctx.messages[__VLS_ctx.messages.length - 1]) {
        var __VLS_56 = {}.RestartToGenerate;
        /** @type {[typeof __VLS_components.RestartToGenerate, typeof __VLS_components.restartToGenerate, ]} */ ;
        // @ts-ignore
        var __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56(__assign(__assign({ 'onRestart': {} }, { class: "btn-restart" }), { messages: (__VLS_ctx.messages) })));
        var __VLS_58 = __VLS_57.apply(void 0, __spreadArray([__assign(__assign({ 'onRestart': {} }, { class: "btn-restart" }), { messages: (__VLS_ctx.messages) })], __VLS_functionalComponentArgsRest(__VLS_57), false));
        var __VLS_60 = void 0;
        var __VLS_61 = void 0;
        var __VLS_62 = void 0;
        var __VLS_63 = {
            onRestart: (__VLS_ctx.onRestart)
        };
        var __VLS_59;
    }
}
else {
    var __VLS_64 = {}.ElAlert;
    /** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
    // @ts-ignore
    var __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64(__assign({ class: "error" }, { title: (__VLS_ctx.errorText), type: "error", closable: (false) })));
    var __VLS_66 = __VLS_65.apply(void 0, __spreadArray([__assign({ class: "error" }, { title: (__VLS_ctx.errorText), type: "error", closable: (false) })], __VLS_functionalComponentArgsRest(__VLS_65), false));
}
if (__VLS_ctx.showBuyMore) {
    var __VLS_68 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    var __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68(__assign(__assign(__assign({ 'onClick': {} }, { round: true, type: "primary" }), { class: "btn btn-buy" }), { size: "small" })));
    var __VLS_70 = __VLS_69.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onClick': {} }, { round: true, type: "primary" }), { class: "btn btn-buy" }), { size: "small" })], __VLS_functionalComponentArgsRest(__VLS_69), false));
    var __VLS_72 = void 0;
    var __VLS_73 = void 0;
    var __VLS_74 = void 0;
    var __VLS_75 = {
        onClick: (__VLS_ctx.onBuyMore)
    };
    __VLS_71.slots.default;
    (__VLS_ctx.$t('common.button.buyMore'));
    var __VLS_71;
}
/** @type {__VLS_StyleScopedClasses['message']} */ ;
/** @type {__VLS_StyleScopedClasses['author']} */ ;
/** @type {__VLS_StyleScopedClasses['avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['main']} */ ;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['message-content']} */ ;
/** @type {__VLS_StyleScopedClasses['whitespace-pre-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['break-words']} */ ;
/** @type {__VLS_StyleScopedClasses['w-fit']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['image']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['whitespace-pre-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['break-words']} */ ;
/** @type {__VLS_StyleScopedClasses['w-fit']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['edits']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-confirm']} */ ;
/** @type {__VLS_StyleScopedClasses['operations']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-edit']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-copy']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-restart']} */ ;
/** @type {__VLS_StyleScopedClasses['error']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-buy']} */ ;
var __VLS_dollars;
var __VLS_self;
