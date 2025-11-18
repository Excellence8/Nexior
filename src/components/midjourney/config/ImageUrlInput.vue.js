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
var InfoIcon_vue_1 = require("@/components/common/InfoIcon.vue");
var ImagePreview_vue_1 = require("@/components/common/ImagePreview.vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'ReferenceImage',
    components: {
        ElUpload: element_plus_1.ElUpload,
        ElButton: element_plus_1.ElButton,
        InfoIcon: InfoIcon_vue_1.default,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
        ImagePreview: ImagePreview_vue_1.default
    },
    emits: ['change'],
    data: function () {
        return {
            fileList: [],
            uploadUrl: (0, utils_1.getBaseUrlPlatform)() + '/api/v1/files/'
        };
    },
    computed: {
        headers: function () {
            return {
                Authorization: "Bearer ".concat(this.$store.state.token.access)
            };
        },
        urls: function () {
            // @ts-ignore
            return this.fileList.map(function (file) { var _a; return (_a = file === null || file === void 0 ? void 0 : file.response) === null || _a === void 0 ? void 0 : _a.file_url; });
        }
    },
    watch: {
        urls: {
            handler: function (val) {
                console.debug('URLs changed:', val);
                this.$store.commit('midjourney/setConfig', __assign(__assign({}, this.$store.state.midjourney.config), { image_url: val[0] }));
            }
        }
    },
    methods: {
        onExceed: function () {
            element_plus_1.ElMessage.warning(this.$t('midjourney.message.uploadStartImageExceed'));
        },
        onError: function () {
            element_plus_1.ElMessage.error(this.$t('midjourney.message.uploadStartImageError'));
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElUpload: element_plus_1.ElUpload,
    ElButton: element_plus_1.ElButton,
    InfoIcon: InfoIcon_vue_1.default,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
    ImagePreview: ImagePreview_vue_1.default
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "relative" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex justify-between" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex justify-start items-center" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "text-sm font-bold" }));
(__VLS_ctx.$t('midjourney.name.imageUrl'));
var __VLS_0 = {}.InfoIcon;
/** @type {[typeof __VLS_components.InfoIcon, typeof __VLS_components.infoIcon, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    content: (__VLS_ctx.$t('midjourney.description.imageUrl')),
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        content: (__VLS_ctx.$t('midjourney.description.imageUrl')),
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {}.ElUpload;
/** @type {[typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign(__assign({ fileList: (__VLS_ctx.fileList), name: "file", limit: (5) }, { class: "upload-wrapper" }), { accept: ".png,.jpg,.jpeg,.gif,.bmp,.webp", multiple: (true), listType: "picture", action: (__VLS_ctx.uploadUrl), onExceed: (__VLS_ctx.onExceed), onError: (__VLS_ctx.onError), headers: (__VLS_ctx.headers) })));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign(__assign({ fileList: (__VLS_ctx.fileList), name: "file", limit: (5) }, { class: "upload-wrapper" }), { accept: ".png,.jpg,.jpeg,.gif,.bmp,.webp", multiple: (true), listType: "picture", action: (__VLS_ctx.uploadUrl), onExceed: (__VLS_ctx.onExceed), onError: (__VLS_ctx.onError), headers: (__VLS_ctx.headers) })], __VLS_functionalComponentArgsRest(__VLS_5), false));
__VLS_7.slots.default;
{
    var __VLS_thisSlot = __VLS_7.slots.file;
    var file_1 = __VLS_getSlotParams(__VLS_thisSlot)[0].file;
    var __VLS_8 = {}.ImagePreview;
    /** @type {[typeof __VLS_components.ImagePreview, typeof __VLS_components.imagePreview, ]} */ ;
    // @ts-ignore
    var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ 'onRemove': {} }, { url: (file_1.url || ((_a = file_1.response) === null || _a === void 0 ? void 0 : _a.file_url)), name: (file_1.name), percentage: (file_1.percentage) })));
    var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ 'onRemove': {} }, { url: (file_1.url || ((_b = file_1.response) === null || _b === void 0 ? void 0 : _b.file_url)), name: (file_1.name), percentage: (file_1.percentage) })], __VLS_functionalComponentArgsRest(__VLS_9), false));
    var __VLS_12 = void 0;
    var __VLS_13 = void 0;
    var __VLS_14 = void 0;
    var __VLS_15 = {
        onRemove: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.fileList.splice(__VLS_ctx.fileList.indexOf(file_1), 1);
        }
    };
    var __VLS_11;
}
var __VLS_16 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign({ round: true, type: "primary", size: "small" }, { class: "btn btn-upload" })));
var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign({ round: true, type: "primary", size: "small" }, { class: "btn btn-upload" })], __VLS_functionalComponentArgsRest(__VLS_17), false));
__VLS_19.slots.default;
var __VLS_20 = {}.FontAwesomeIcon;
/** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
// @ts-ignore
var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20(__assign({ icon: "fa-solid fa-upload" }, { class: "icon mr-1" })));
var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-upload" }, { class: "icon mr-1" })], __VLS_functionalComponentArgsRest(__VLS_21), false));
(__VLS_ctx.$t('midjourney.button.uploadImageUrl'));
var __VLS_19;
var __VLS_7;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-start']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['upload-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-upload']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
var __VLS_dollars;
var __VLS_self;
