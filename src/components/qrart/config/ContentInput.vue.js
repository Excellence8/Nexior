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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_CONTENT = void 0;
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var ImagePreview_vue_1 = require("@/components/common/ImagePreview.vue");
var utils_1 = require("@/utils");
exports.DEFAULT_CONTENT = '';
exports.default = (0, vue_1.defineComponent)({
    name: 'ContentInput',
    components: {
        ElInput: element_plus_1.ElInput,
        ElUpload: element_plus_1.ElUpload,
        ElRadioGroup: element_plus_1.ElRadioGroup,
        ElButton: element_plus_1.ElButton,
        ElRadioButton: element_plus_1.ElRadioButton,
        ImagePreview: ImagePreview_vue_1.default,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon
    },
    data: function () {
        return {
            inputWay: 'input',
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
        },
        value: {
            get: function () {
                var _a, _b;
                return (_b = (_a = this.$store.state.qrart) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.content;
            },
            set: function (val) {
                var _a;
                this.$store.commit('qrart/setConfig', __assign(__assign({}, (_a = this.$store.state.qrart) === null || _a === void 0 ? void 0 : _a.config), { content: val, content_image_url: undefined }));
            }
        }
    },
    mounted: function () {
        if (!this.value) {
            this.value = exports.DEFAULT_CONTENT;
        }
        this.onSetContentImageUrl();
    },
    methods: {
        onExceed: function () {
            element_plus_1.ElMessage.warning(this.$t('qrart.message.uploadDocumentsExceed'));
        },
        onError: function () {
            element_plus_1.ElMessage.error(this.$t('qrart.message.uploadDocumentsError'));
        },
        onSetContentImageUrl: function () {
            var _a, _b;
            var url = (_a = this.urls) === null || _a === void 0 ? void 0 : _a[0];
            this.$store.commit('qrart/setConfig', __assign(__assign({}, (_b = this.$store.state.qrart) === null || _b === void 0 ? void 0 : _b.config), { content: undefined, content_image_url: url }));
        },
        onSuccess: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.onSetContentImageUrl();
                    return [2 /*return*/];
                });
            });
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElInput: element_plus_1.ElInput,
    ElUpload: element_plus_1.ElUpload,
    ElRadioGroup: element_plus_1.ElRadioGroup,
    ElButton: element_plus_1.ElButton,
    ElRadioButton: element_plus_1.ElRadioButton,
    ImagePreview: ImagePreview_vue_1.default,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "field" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex justify-between items-center mb-4" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "text-sm font-bold title" }));
(__VLS_ctx.$t('qrart.name.content'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex items-center" }));
var __VLS_0 = {}.ElRadioGroup;
/** @type {[typeof __VLS_components.ElRadioGroup, typeof __VLS_components.elRadioGroup, typeof __VLS_components.ElRadioGroup, typeof __VLS_components.elRadioGroup, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.inputWay),
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.inputWay),
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
var __VLS_4 = {}.ElRadioButton;
/** @type {[typeof __VLS_components.ElRadioButton, typeof __VLS_components.elRadioButton, typeof __VLS_components.ElRadioButton, typeof __VLS_components.elRadioButton, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    label: "input",
}));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{
        label: "input",
    }], __VLS_functionalComponentArgsRest(__VLS_5), false));
__VLS_7.slots.default;
(__VLS_ctx.$t('qrart.inputWay.input'));
var __VLS_7;
var __VLS_8 = {}.ElRadioButton;
/** @type {[typeof __VLS_components.ElRadioButton, typeof __VLS_components.elRadioButton, typeof __VLS_components.ElRadioButton, typeof __VLS_components.elRadioButton, ]} */ ;
// @ts-ignore
var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    label: "upload",
}));
var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([{
        label: "upload",
    }], __VLS_functionalComponentArgsRest(__VLS_9), false));
__VLS_11.slots.default;
(__VLS_ctx.$t('qrart.inputWay.upload'));
var __VLS_11;
var __VLS_3;
if (__VLS_ctx.inputWay == 'input') {
    var __VLS_12 = {}.ElInput;
    /** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign(__assign({ modelValue: (__VLS_ctx.value) }, { class: "content" }), { placeholder: (__VLS_ctx.$t('qrart.placeholder.content')) })));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign(__assign({ modelValue: (__VLS_ctx.value) }, { class: "content" }), { placeholder: (__VLS_ctx.$t('qrart.placeholder.content')) })], __VLS_functionalComponentArgsRest(__VLS_13), false));
}
if (__VLS_ctx.inputWay == 'upload') {
    var __VLS_16 = {}.ElUpload;
    /** @type {[typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, ]} */ ;
    // @ts-ignore
    var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign(__assign({ fileList: (__VLS_ctx.fileList), accept: ".png,.jpg,.jpeg,.gif,.bmp,.webp", name: "file" }, { class: "upload upload-wrapper" }), { limit: (1), multiple: (false), listType: "picture", action: (__VLS_ctx.uploadUrl), onExceed: (__VLS_ctx.onExceed), onError: (__VLS_ctx.onError), onSuccess: (__VLS_ctx.onSuccess), headers: (__VLS_ctx.headers) })));
    var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign(__assign({ fileList: (__VLS_ctx.fileList), accept: ".png,.jpg,.jpeg,.gif,.bmp,.webp", name: "file" }, { class: "upload upload-wrapper" }), { limit: (1), multiple: (false), listType: "picture", action: (__VLS_ctx.uploadUrl), onExceed: (__VLS_ctx.onExceed), onError: (__VLS_ctx.onError), onSuccess: (__VLS_ctx.onSuccess), headers: (__VLS_ctx.headers) })], __VLS_functionalComponentArgsRest(__VLS_17), false));
    __VLS_19.slots.default;
    {
        var __VLS_thisSlot = __VLS_19.slots.file;
        var file_1 = __VLS_getSlotParams(__VLS_thisSlot)[0].file;
        var __VLS_20 = {}.ImagePreview;
        /** @type {[typeof __VLS_components.ImagePreview, typeof __VLS_components.imagePreview, ]} */ ;
        // @ts-ignore
        var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20(__assign({ 'onRemove': {} }, { url: (file_1.url || ((_a = file_1.response) === null || _a === void 0 ? void 0 : _a.file_url)), name: (file_1.name), percentage: (file_1.percentage) })));
        var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([__assign({ 'onRemove': {} }, { url: (file_1.url || ((_b = file_1.response) === null || _b === void 0 ? void 0 : _b.file_url)), name: (file_1.name), percentage: (file_1.percentage) })], __VLS_functionalComponentArgsRest(__VLS_21), false));
        var __VLS_24 = void 0;
        var __VLS_25 = void 0;
        var __VLS_26 = void 0;
        var __VLS_27 = {
            onRemove: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!(__VLS_ctx.inputWay == 'upload'))
                    return;
                __VLS_ctx.fileList.splice(__VLS_ctx.fileList.indexOf(file_1), 1);
            }
        };
        var __VLS_23;
    }
    var __VLS_28 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    var __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
        size: "small",
        type: "primary",
        round: true,
    }));
    var __VLS_30 = __VLS_29.apply(void 0, __spreadArray([{
            size: "small",
            type: "primary",
            round: true,
        }], __VLS_functionalComponentArgsRest(__VLS_29), false));
    __VLS_31.slots.default;
    var __VLS_32 = {}.FontAwesomeIcon;
    /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
    // @ts-ignore
    var __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32(__assign({ icon: "fa-solid fa-upload" }, { class: "mr-1" })));
    var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-upload" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_33), false));
    (__VLS_ctx.$t('qrart.button.uploadQr'));
    var __VLS_31;
    var __VLS_19;
}
if (__VLS_ctx.inputWay == 'upload') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "description" }));
    (__VLS_ctx.$t('qrart.message.uploadQr'));
}
/** @type {__VLS_StyleScopedClasses['field']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['upload']} */ ;
/** @type {__VLS_StyleScopedClasses['upload-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
var __VLS_dollars;
var __VLS_self;
