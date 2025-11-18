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
var utils_1 = require("@/utils");
var InfoIcon_vue_1 = require("@/components/common/InfoIcon.vue");
var ImagePreview_vue_1 = require("@/components/common/ImagePreview.vue");
exports.DEFAULT_CONTENT = '';
exports.default = (0, vue_1.defineComponent)({
    name: 'ImageUrlInput',
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
                return (_b = (_a = this.$store.state.pika) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.image_url;
            },
            set: function () {
                var _a, _b;
                var url = (_a = this.urls) === null || _a === void 0 ? void 0 : _a[0];
                this.$store.commit('pika/setConfig', __assign(__assign({}, (_b = this.$store.state.pika) === null || _b === void 0 ? void 0 : _b.config), { image_url: url }));
            }
        }
    },
    mounted: function () {
        if (!this.value) {
            this.value = undefined;
        }
        this.onSetStartImageUrl();
    },
    methods: {
        onExceed: function () {
            element_plus_1.ElMessage.warning(this.$t('pika.message.uploadStartImageExceed'));
        },
        onError: function () {
            element_plus_1.ElMessage.error(this.$t('pika.message.uploadStartImageError'));
        },
        onRemove: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    element_plus_1.ElMessage.error(this.$t('pika.message.uploadStartImageError'));
                    return [2 /*return*/];
                });
            });
        },
        onSetStartImageUrl: function () {
            var _a;
            this.$store.commit('pika/setConfig', __assign(__assign({}, (_a = this.$store.state.pika) === null || _a === void 0 ? void 0 : _a.config), { image_url: this.urls }));
        },
        onSuccess: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.onSetStartImageUrl();
                    return [2 /*return*/];
                });
            });
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
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "field" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "title font-bold" }));
(__VLS_ctx.$t('pika.name.imageUrl'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "upload-wrapper" }));
var __VLS_0 = {}.ElUpload;
/** @type {[typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({ fileList: (__VLS_ctx.fileList), accept: ".png,.jpg,.jpeg,.gif,.bmp,.webp", name: "file" }, { class: "value upload-wrapper" }), { limit: (3), multiple: (true), listType: "picture", action: (__VLS_ctx.uploadUrl), onExceed: (__VLS_ctx.onExceed), onError: (__VLS_ctx.onError), onRemove: (__VLS_ctx.onRemove), onSuccess: (__VLS_ctx.onSuccess), headers: (__VLS_ctx.headers) })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ fileList: (__VLS_ctx.fileList), accept: ".png,.jpg,.jpeg,.gif,.bmp,.webp", name: "file" }, { class: "value upload-wrapper" }), { limit: (3), multiple: (true), listType: "picture", action: (__VLS_ctx.uploadUrl), onExceed: (__VLS_ctx.onExceed), onError: (__VLS_ctx.onError), onRemove: (__VLS_ctx.onRemove), onSuccess: (__VLS_ctx.onSuccess), headers: (__VLS_ctx.headers) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
{
    var __VLS_thisSlot = __VLS_3.slots.file;
    var file_1 = __VLS_getSlotParams(__VLS_thisSlot)[0].file;
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
            __VLS_ctx.fileList.splice(__VLS_ctx.fileList.indexOf(file_1), 1);
        }
    };
    var __VLS_7;
}
var __VLS_12 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    size: "small",
    type: "primary",
    round: true,
}));
var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{
        size: "small",
        type: "primary",
        round: true,
    }], __VLS_functionalComponentArgsRest(__VLS_13), false));
__VLS_15.slots.default;
var __VLS_16 = {}.FontAwesomeIcon;
/** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
// @ts-ignore
var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign({ icon: "fa-solid fa-upload" }, { class: "mr-1" })));
var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-upload" }, { class: "mr-1" })], __VLS_functionalComponentArgsRest(__VLS_17), false));
(__VLS_ctx.$t('pika.button.uploadImageUrl'));
var __VLS_15;
var __VLS_3;
var __VLS_20 = {}.InfoIcon;
/** @type {[typeof __VLS_components.InfoIcon, typeof __VLS_components.infoIcon, ]} */ ;
// @ts-ignore
var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20(__assign({ content: (__VLS_ctx.$t('pika.description.imageUrl')) }, { class: "info" })));
var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([__assign({ content: (__VLS_ctx.$t('pika.description.imageUrl')) }, { class: "info" })], __VLS_functionalComponentArgsRest(__VLS_21), false));
/** @type {__VLS_StyleScopedClasses['field']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['upload-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['value']} */ ;
/** @type {__VLS_StyleScopedClasses['upload-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
var __VLS_dollars;
var __VLS_self;
