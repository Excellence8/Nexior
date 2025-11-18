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
var utils_1 = require("@/utils");
var InfoIcon_vue_1 = require("@/components/common/InfoIcon.vue");
var ImagePreview_vue_1 = require("@/components/common/ImagePreview.vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'ImageUrlsInput',
    components: {
        ElUpload: element_plus_1.ElUpload,
        ElButton: element_plus_1.ElButton,
        InfoIcon: InfoIcon_vue_1.default,
        ImagePreview: ImagePreview_vue_1.default,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon
    },
    data: function () {
        return {
            fileList: [],
            uploadUrl: (0, utils_1.getBaseUrlPlatform)() + '/api/v1/files/',
            // internal flag to prevent feedback loops when syncing store -> fileList
            // @ts-ignore
            suppressWatch: false
        };
    },
    computed: {
        headers: function () {
            return {
                Authorization: "Bearer ".concat(this.$store.state.token.access)
            };
        },
        urls: function () {
            // only persist uploaded remote URLs for request payload
            // @ts-ignore
            return this.fileList
                // @ts-ignore
                .map(function (file) { var _a; return (_a = file === null || file === void 0 ? void 0 : file.response) === null || _a === void 0 ? void 0 : _a.file_url; })
                .filter(function (u) { return !!u; });
        },
        value: function () {
            var _a, _b;
            return (_b = (_a = this.$store.state.nanobanana) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.image_urls;
        }
    },
    watch: {
        value: {
            immediate: true,
            handler: function (newVal) {
                var _this = this;
                if (this.suppressWatch)
                    return;
                if (!newVal || newVal.length === 0) {
                    // preserve uploading items even if store is empty
                    var uploading_1 = (this.fileList || []).filter(function (f) { var _a; return !((_a = f === null || f === void 0 ? void 0 : f.response) === null || _a === void 0 ? void 0 : _a.file_url); });
                    this.fileList = uploading_1.length ? uploading_1 : [];
                    return;
                }
                // sync fileList with value, but keep uploading items
                var newFiles = [];
                newVal.forEach(function (url) {
                    var existing = _this.fileList.find(function (file) { var _a; return ((_a = file === null || file === void 0 ? void 0 : file.response) === null || _a === void 0 ? void 0 : _a.file_url) === url || (file === null || file === void 0 ? void 0 : file.url) === url; });
                    if (existing) {
                        newFiles.push(existing);
                    }
                    else {
                        newFiles.push({
                            name: url.split('/').pop() || url,
                            url: url,
                            status: 'success',
                            percentage: 100,
                            response: { file_url: url }
                        });
                    }
                });
                // append currently uploading items not in newFiles
                var uploading = (this.fileList || []).filter(function (f) { var _a; return !((_a = f === null || f === void 0 ? void 0 : f.response) === null || _a === void 0 ? void 0 : _a.file_url); });
                uploading.forEach(function (f) {
                    var exists = newFiles.some(function (nf) { var _a, _b; return nf === f || (nf === null || nf === void 0 ? void 0 : nf.url) === (f === null || f === void 0 ? void 0 : f.url) || ((_a = nf === null || nf === void 0 ? void 0 : nf.response) === null || _a === void 0 ? void 0 : _a.file_url) === ((_b = f === null || f === void 0 ? void 0 : f.response) === null || _b === void 0 ? void 0 : _b.file_url); });
                    if (!exists)
                        newFiles.push(f);
                });
                this.fileList = newFiles;
            }
        }
    },
    mounted: function () {
        // initial sync handled by watcher with immediate: true
    },
    methods: {
        onChange: function (file) {
            // ensure preview shows while uploading
            if (!(file === null || file === void 0 ? void 0 : file.url) && (file === null || file === void 0 ? void 0 : file.raw)) {
                try {
                    // attach object url for preview
                    file.url = URL.createObjectURL(file.raw);
                }
                catch (e) {
                    // ignore
                }
            }
        },
        onRemove: function (file) {
            // revoke object URL to avoid leaks
            if ((file === null || file === void 0 ? void 0 : file.url) && typeof file.url === 'string' && file.url.startsWith('blob:')) {
                try {
                    URL.revokeObjectURL(file.url);
                }
                catch (e) {
                    // ignore
                }
            }
            this.onSetImageUrls();
        },
        onExceed: function () {
            element_plus_1.ElMessage.warning(this.$t('nanobanana.message.uploadImageExceed'));
        },
        onError: function () {
            element_plus_1.ElMessage.error(this.$t('nanobanana.message.uploadImageError'));
        },
        onSetImageUrls: function () {
            var _this = this;
            var _a;
            var urls = this.urls;
            this.suppressWatch = true;
            this.$store.commit('nanobanana/setConfig', __assign(__assign({}, (_a = this.$store.state.nanobanana) === null || _a === void 0 ? void 0 : _a.config), { image_urls: urls }));
            this.$nextTick(function () {
                _this.suppressWatch = false;
            });
        },
        onSuccess: function (response, file) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // update preview to remote URL when finished
                    if (response === null || response === void 0 ? void 0 : response.file_url) {
                        file.url = response.file_url;
                        file.response = response;
                    }
                    this.onSetImageUrls();
                    return [2 /*return*/];
                });
            });
        },
        onRemovePreview: function (idx, file) {
            // remove from our list and update store; also revoke blob url
            this.fileList.splice(idx, 1);
            if ((file === null || file === void 0 ? void 0 : file.url) && typeof file.url === 'string' && file.url.startsWith('blob:')) {
                try {
                    URL.revokeObjectURL(file.url);
                }
                catch (e) {
                    // ignore
                }
            }
            this.onSetImageUrls();
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElUpload: element_plus_1.ElUpload,
    ElButton: element_plus_1.ElButton,
    InfoIcon: InfoIcon_vue_1.default,
    ImagePreview: ImagePreview_vue_1.default,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon
};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "field flex items-center justify-between" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "title font-bold text-[14px] mb-[10px]" }));
(__VLS_ctx.$t('nanobanana.name.imageUrls'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "upload-wrapper flex flex-col items-start gap-[8px]" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "controls flex items-center" }));
var __VLS_0 = {}.ElUpload;
/** @type {[typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({ fileList: (__VLS_ctx.fileList), accept: ".png,.jpg,.jpeg,.gif,.bmp,.webp", name: "file" }, { class: "value" }), { limit: (5), multiple: (true), showFileList: (false), action: (__VLS_ctx.uploadUrl), onExceed: (__VLS_ctx.onExceed), onError: (__VLS_ctx.onError), onSuccess: (__VLS_ctx.onSuccess), onChange: (__VLS_ctx.onChange), onRemove: (__VLS_ctx.onRemove), headers: (__VLS_ctx.headers) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ fileList: (__VLS_ctx.fileList), accept: ".png,.jpg,.jpeg,.gif,.bmp,.webp", name: "file" }, { class: "value" }), { limit: (5), multiple: (true), showFileList: (false), action: (__VLS_ctx.uploadUrl), onExceed: (__VLS_ctx.onExceed), onError: (__VLS_ctx.onError), onSuccess: (__VLS_ctx.onSuccess), onChange: (__VLS_ctx.onChange), onRemove: (__VLS_ctx.onRemove), headers: (__VLS_ctx.headers) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
var __VLS_4 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    size: "small",
    type: "primary",
    round: true,
}));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{
        size: "small",
        type: "primary",
        round: true,
    }], __VLS_functionalComponentArgsRest(__VLS_5), false));
__VLS_7.slots.default;
var __VLS_8 = {}.FontAwesomeIcon;
/** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
// @ts-ignore
var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ icon: "fa-solid fa-upload" }, { class: "mr-1" })));
var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-upload" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
(__VLS_ctx.$t('nanobanana.button.uploadImageUrls'));
var __VLS_7;
var __VLS_3;
var __VLS_12 = {}.InfoIcon;
/** @type {[typeof __VLS_components.InfoIcon, typeof __VLS_components.infoIcon, ]} */ ;
// @ts-ignore
var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ content: (__VLS_ctx.$t('nanobanana.description.imageUrls')) }, { class: "ml-2" })));
var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ content: (__VLS_ctx.$t('nanobanana.description.imageUrls')) }, { class: "ml-2" })], __VLS_functionalComponentArgsRest(__VLS_13), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "file-list flex flex-wrap gap-[10px]" }));
var _loop_1 = function (file, idx) {
    var __VLS_16 = {}.ImagePreview;
    /** @type {[typeof __VLS_components.ImagePreview, typeof __VLS_components.imagePreview, ]} */ ;
    // @ts-ignore
    var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign({ 'onRemove': {} }, { key: (file.uid || ((_a = file === null || file === void 0 ? void 0 : file.response) === null || _a === void 0 ? void 0 : _a.file_url) || file.url || idx), url: (file.url || ((_b = file === null || file === void 0 ? void 0 : file.response) === null || _b === void 0 ? void 0 : _b.file_url)), name: (file.name), percentage: (file.percentage) })));
    var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign({ 'onRemove': {} }, { key: (file.uid || ((_c = file === null || file === void 0 ? void 0 : file.response) === null || _c === void 0 ? void 0 : _c.file_url) || file.url || idx), url: (file.url || ((_d = file === null || file === void 0 ? void 0 : file.response) === null || _d === void 0 ? void 0 : _d.file_url)), name: (file.name), percentage: (file.percentage) })], __VLS_functionalComponentArgsRest(__VLS_17), false));
    var __VLS_20 = void 0;
    var __VLS_21 = void 0;
    var __VLS_22 = void 0;
    var __VLS_23 = {
        onRemove: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.onRemovePreview(idx, file);
        }
    };
};
var __VLS_19;
for (var _i = 0, _e = __VLS_getVForSourceType((__VLS_ctx.fileList)); _i < _e.length; _i++) {
    var _f = _e[_i], file = _f[0], idx = _f[1];
    _loop_1(file, idx);
}
/** @type {__VLS_StyleScopedClasses['field']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[14px]']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['upload-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-[8px]']} */ ;
/** @type {__VLS_StyleScopedClasses['controls']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['value']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['file-list']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-[10px]']} */ ;
var __VLS_dollars;
var __VLS_self;
