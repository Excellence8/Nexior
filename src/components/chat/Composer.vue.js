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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var utils_1 = require("@/utils");
var FilePreview_vue_1 = require("@/components/common/FilePreview.vue");
var ImagePreview_vue_1 = require("@/components/common/ImagePreview.vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'Composer',
    components: {
        FilePreview: FilePreview_vue_1.default,
        ImagePreview: ImagePreview_vue_1.default,
        ElTooltip: element_plus_1.ElTooltip,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
        ElUpload: element_plus_1.ElUpload,
        ElButton: element_plus_1.ElButton
    },
    props: {
        answering: {
            type: Boolean,
            required: false,
            default: false
        },
        references: {
            type: Array,
            required: false,
            default: function () { return []; }
        },
        question: {
            type: String,
            required: true
        }
    },
    emits: ['update:question', 'update:references', 'submit', 'stop'],
    data: function () {
        return {
            inputHeight: '35px',
            questionValue: this.question || '',
            fileList: [],
            uploadUrl: (0, utils_1.getBaseUrlPlatform)() + '/api/v1/files/'
        };
    },
    computed: {
        model: function () {
            return this.$store.state.chat.model;
        },
        modelGroup: function () {
            return this.$store.state.chat.modelGroup;
        },
        isFileSupported: function () {
            var _a;
            return (_a = this.model) === null || _a === void 0 ? void 0 : _a.isFileSupported;
        },
        isImageSupported: function () {
            var _a;
            return (_a = this.model) === null || _a === void 0 ? void 0 : _a.isImageSupported;
        },
        headers: function () {
            return {
                Authorization: "Bearer ".concat(this.$store.state.token.access)
            };
        },
        urls: function () {
            // @ts-ignore
            return this.fileList.map(function (file) { var _a; return (_a = file === null || file === void 0 ? void 0 : file.response) === null || _a === void 0 ? void 0 : _a.file_url; });
        },
        uploading: function () {
            // if at least file is uploading, return true
            return !!this.fileList.find(function (file) { return file.percentage !== undefined && file.percentage >= 0 && file.percentage < 100; });
        },
        extensions: function () {
            if (this.isFileSupported === false && this.isImageSupported === true) {
                return '.png,.jpg,.jpeg,.gif,.bmp,.webp,.svg,.tiff,.ico,.heic';
            }
            return undefined;
        }
    },
    watch: {
        urls: function (val) {
            console.debug('File URLs:', val);
            if (val.length > 0) {
                this.$emit('update:references', val);
            }
        },
        questionValue: function (val) {
            this.$emit('update:question', val.trim());
        },
        question: function (val) {
            if (val !== this.questionValue) {
                this.questionValue = val;
            }
        },
        references: function (val) {
            console.debug('References updated:', val);
            if (val.length === 0) {
                this.fileList = [];
            }
        },
        isFileSupported: function (val, oldVal) {
            if (oldVal && !val) {
                this.fileList = [];
            }
        }
    },
    methods: {
        isImageUrl: utils_1.isImageUrl,
        // add textarea method
        adjustTextareaHeight: function () {
            var _this = this;
            this.$nextTick(function () {
                var textarea = _this.$refs.textarea;
                if (textarea) {
                    // @ts-ignore
                    textarea.style.height = '35px';
                    // @ts-ignore
                    textarea.style.height = textarea.scrollHeight + 'px';
                }
            });
        },
        onSubmit: function () {
            if (!this.question || this.uploading) {
                return;
            }
            this.$emit('submit');
        },
        onStop: function () {
            this.$emit('stop');
        },
        onProgress: function (event, uploadFile) {
            console.debug('File upload progress:', uploadFile.name, event.loaded, event.total, uploadFile.percentage);
        },
        onExceed: function () {
            element_plus_1.ElMessage.warning(this.$t('chat.message.uploadReferencesExceed'));
        },
        onError: function () {
            element_plus_1.ElMessage.error(this.$t('chat.message.uploadReferencesError'));
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    FilePreview: FilePreview_vue_1.default,
    ImagePreview: ImagePreview_vue_1.default,
    ElTooltip: element_plus_1.ElTooltip,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
    ElUpload: element_plus_1.ElUpload,
    ElButton: element_plus_1.ElButton
};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['btn-upload']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-attachment']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "composer" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "tools" }));
var __VLS_0 = {}.ElUpload;
/** @type {[typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({ fileList: (__VLS_ctx.fileList) }, { class: ({
        upload: true,
        disabled: (!__VLS_ctx.isFileSupported && !__VLS_ctx.isImageSupported) || __VLS_ctx.answering
    }) }), { accept: (__VLS_ctx.extensions), disabled: ((!__VLS_ctx.isFileSupported && !__VLS_ctx.isImageSupported) || __VLS_ctx.answering), name: "file", limit: (10), multiple: (true), action: (__VLS_ctx.uploadUrl), listType: "picture", onExceed: (__VLS_ctx.onExceed), onError: (__VLS_ctx.onError), onProgress: (__VLS_ctx.onProgress), headers: (__VLS_ctx.headers) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ fileList: (__VLS_ctx.fileList) }, { class: ({
            upload: true,
            disabled: (!__VLS_ctx.isFileSupported && !__VLS_ctx.isImageSupported) || __VLS_ctx.answering
        }) }), { accept: (__VLS_ctx.extensions), disabled: ((!__VLS_ctx.isFileSupported && !__VLS_ctx.isImageSupported) || __VLS_ctx.answering), name: "file", limit: (10), multiple: (true), action: (__VLS_ctx.uploadUrl), listType: "picture", onExceed: (__VLS_ctx.onExceed), onError: (__VLS_ctx.onError), onProgress: (__VLS_ctx.onProgress), headers: (__VLS_ctx.headers) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
{
    var __VLS_thisSlot = __VLS_3.slots.file;
    var file_1 = __VLS_getSlotParams(__VLS_thisSlot)[0].file;
    if (__VLS_ctx.isImageUrl(file_1.name)) {
        var __VLS_4 = {}.ImagePreview;
        /** @type {[typeof __VLS_components.ImagePreview, typeof __VLS_components.imagePreview, ]} */ ;
        // @ts-ignore
        var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ 'onRemove': {} }, { url: (file_1.url || ((_a = file_1.response) === null || _a === void 0 ? void 0 : _a.file_url)), name: (file_1.name), percentage: (file_1.percentage) })));
        var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ 'onRemove': {} }, { url: (file_1.url || ((_b = file_1.response) === null || _b === void 0 ? void 0 : _b.file_url)), name: (file_1.name), percentage: (file_1.percentage) })], __VLS_functionalComponentArgsRest(__VLS_5), false));
        var __VLS_8 = void 0;
        var __VLS_9 = void 0;
        var __VLS_10 = void 0;
        var __VLS_11 = {
            onRemove: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!(__VLS_ctx.isImageUrl(file_1.name)))
                    return;
                __VLS_ctx.fileList.splice(__VLS_ctx.fileList.indexOf(file_1), 1);
            }
        };
        var __VLS_7;
    }
    else {
        var __VLS_12 = {}.FilePreview;
        /** @type {[typeof __VLS_components.FilePreview, typeof __VLS_components.filePreview, ]} */ ;
        // @ts-ignore
        var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ 'onRemove': {} }, { name: (file_1.name), percentage: (file_1.percentage) })));
        var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ 'onRemove': {} }, { name: (file_1.name), percentage: (file_1.percentage) })], __VLS_functionalComponentArgsRest(__VLS_13), false));
        var __VLS_16 = void 0;
        var __VLS_17 = void 0;
        var __VLS_18 = void 0;
        var __VLS_19 = {
            onRemove: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!!(__VLS_ctx.isImageUrl(file_1.name)))
                    return;
                __VLS_ctx.fileList.splice(__VLS_ctx.fileList.indexOf(file_1), 1);
            }
        };
        var __VLS_15;
    }
}
var __VLS_20 = {}.ElTooltip;
/** @type {[typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ]} */ ;
// @ts-ignore
var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20(__assign({ class: "box-item" }, { effect: "dark", content: (__VLS_ctx.$t('chat.message.uploadFile')), placement: "bottom" })));
var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([__assign({ class: "box-item" }, { effect: "dark", content: (__VLS_ctx.$t('chat.message.uploadFile')), placement: "bottom" })], __VLS_functionalComponentArgsRest(__VLS_21), false));
__VLS_23.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ({ btn: true, 'btn-upload': true, disabled: (!__VLS_ctx.isFileSupported && !__VLS_ctx.isImageSupported) || __VLS_ctx.answering }) }));
var __VLS_24 = {}.FontAwesomeIcon;
/** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
// @ts-ignore
var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24(__assign({ icon: "fa-solid fa-plus" }, { class: "icon icon-attachment" })));
var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-plus" }, { class: "icon icon-attachment" })], __VLS_functionalComponentArgsRest(__VLS_25), false));
var __VLS_23;
var __VLS_3;
var __VLS_28 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
var __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28(__assign(__assign({ 'onClick': {} }, { disabled: (__VLS_ctx.answering || !__VLS_ctx.questionValue || __VLS_ctx.uploading), type: "primary" }), { class: ({
        btn: true,
        'btn-send': true
    }) })));
var __VLS_30 = __VLS_29.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { disabled: (__VLS_ctx.answering || !__VLS_ctx.questionValue || __VLS_ctx.uploading), type: "primary" }), { class: ({
            btn: true,
            'btn-send': true
        }) })], __VLS_functionalComponentArgsRest(__VLS_29), false));
var __VLS_32;
var __VLS_33;
var __VLS_34;
var __VLS_35 = {
    onClick: (__VLS_ctx.onSubmit)
};
__VLS_31.slots.default;
var __VLS_36 = {}.FontAwesomeIcon;
/** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
// @ts-ignore
var __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36(__assign({ icon: "fa-solid fa-arrow-up" }, { class: "icon icon-send" })));
var __VLS_38 = __VLS_37.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-arrow-up" }, { class: "icon icon-send" })], __VLS_functionalComponentArgsRest(__VLS_37), false));
var __VLS_31;
var __VLS_40 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
var __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40(__assign(__assign({ 'onClick': {} }, { disabled: (!__VLS_ctx.answering), type: "primary" }), { class: ({
        btn: true,
        'btn-stop': true
    }) })));
var __VLS_42 = __VLS_41.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { disabled: (!__VLS_ctx.answering), type: "primary" }), { class: ({
            btn: true,
            'btn-stop': true
        }) })], __VLS_functionalComponentArgsRest(__VLS_41), false));
var __VLS_44;
var __VLS_45;
var __VLS_46;
var __VLS_47 = {
    onClick: (__VLS_ctx.onStop)
};
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.answering) }), null, null);
__VLS_43.slots.default;
var __VLS_48 = {}.FontAwesomeIcon;
/** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
// @ts-ignore
var __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48(__assign({ icon: "fa-solid fa-stop" }, { class: "icon icon-stop" })));
var __VLS_50 = __VLS_49.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-stop" }, { class: "icon icon-stop" })], __VLS_functionalComponentArgsRest(__VLS_49), false));
var __VLS_43;
__VLS_asFunctionalElement(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)(__assign(__assign(__assign(__assign(__assign({ onKeydown: (__VLS_ctx.onSubmit) }, { onInput: (__VLS_ctx.adjustTextareaHeight) }), { ref: "textarea", value: (__VLS_ctx.questionValue), disabled: (__VLS_ctx.answering) }), { class: "input" }), { placeholder: (__VLS_ctx.$t('chat.message.newMessagePlaceholder')) }), { style: ({ height: __VLS_ctx.inputHeight }) }));
/** @type {typeof __VLS_ctx.textarea} */ ;
/** @type {__VLS_StyleScopedClasses['composer']} */ ;
/** @type {__VLS_StyleScopedClasses['tools']} */ ;
/** @type {__VLS_StyleScopedClasses['upload']} */ ;
/** @type {__VLS_StyleScopedClasses['disabled']} */ ;
/** @type {__VLS_StyleScopedClasses['box-item']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['disabled']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-upload']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-attachment']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-send']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-send']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-stop']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-stop']} */ ;
/** @type {__VLS_StyleScopedClasses['input']} */ ;
var __VLS_dollars;
var __VLS_self;
