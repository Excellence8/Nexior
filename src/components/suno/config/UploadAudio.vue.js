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
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var utils_1 = require("@/utils");
var InfoIcon_vue_1 = require("@/components/common/InfoIcon.vue");
var operators_1 = require("@/operators");
exports.default = (0, vue_1.defineComponent)({
    name: 'UploadAudio',
    components: {
        ElUpload: element_plus_1.ElUpload,
        ElButton: element_plus_1.ElButton,
        InfoIcon: InfoIcon_vue_1.default,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon
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
        credential: function () {
            return this.$store.state.suno.credential;
        },
        config: function () {
            return this.$store.state.suno.config;
        },
        urls: function () {
            // @ts-ignore
            return this.fileList.map(function (file) { var _a; return (_a = file === null || file === void 0 ? void 0 : file.response) === null || _a === void 0 ? void 0 : _a.file_url; });
        },
        value: {
            get: function () {
                var _a, _b;
                return (_b = (_a = this.$store.state.suno) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.audio_id;
            },
            set: function () { }
        }
    },
    watch: {
        urls: {
            handler: function (val) {
                this.$emit('change', val);
            }
        }
    },
    mounted: function () {
        if (!this.value) {
            this.value = undefined;
        }
        this.onSetAudio();
    },
    methods: {
        onExceed: function () {
            element_plus_1.ElMessage.warning(this.$t('suno.message.uploadReferencesExceed'));
        },
        onError: function () {
            element_plus_1.ElMessage.error(this.$t('suno.message.uploadReferencesError'));
        },
        onSuccess: function () {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            url = (_a = this.urls) === null || _a === void 0 ? void 0 : _a[0];
                            return [4 /*yield*/, this.onGenerateAudioId(url)];
                        case 1:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        },
        onGenerateAudioId: function (audio_url) {
            return __awaiter(this, void 0, void 0, function () {
                var request, token;
                var _this = this;
                var _a;
                return __generator(this, function (_b) {
                    request = {
                        audio_url: audio_url
                    };
                    token = (_a = this.credential) === null || _a === void 0 ? void 0 : _a.token;
                    if (!token) {
                        console.error('no token specified');
                        return [2 /*return*/];
                    }
                    element_plus_1.ElMessage.info(this.$t('suno.message.startingUploadAudio'));
                    operators_1.sunoOperator
                        .upload(request, {
                        token: token
                    })
                        .then(function (response) {
                        var _a, _b;
                        console.debug('get upload music success', response.data);
                        var audio_id = (_a = response.data) === null || _a === void 0 ? void 0 : _a.data.audio_id;
                        _this.$store.commit('suno/setConfig', __assign(__assign({}, (_b = _this.$store.state.suno) === null || _b === void 0 ? void 0 : _b.config), { audio_id: audio_id, action: 'upload_extend' }));
                        element_plus_1.ElMessage.success(_this.$t('suno.message.startUploadAudioSuccess'));
                    })
                        .catch(function (error) {
                        var _a, _b, _c;
                        element_plus_1.ElMessage.error(((_c = (_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error) === null || _c === void 0 ? void 0 : _c.message) || _this.$t('suno.message.startUploadAudioFailed'));
                    });
                    return [2 /*return*/];
                });
            });
        },
        onSetAudio: function () {
            // const url = this.urls?.[0];
            // this.$store.commit('suno/setConfig', {
            //   ...this.$store.state.suno?.config,
            //   audio_id: url
            // });
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElUpload: element_plus_1.ElUpload,
    ElButton: element_plus_1.ElButton,
    InfoIcon: InfoIcon_vue_1.default,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "relative" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex justify-between" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex justify-start items-center" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "text-sm font-bold" }));
(__VLS_ctx.$t('suno.name.referenceAudios'));
var __VLS_0 = {}.InfoIcon;
/** @type {[typeof __VLS_components.InfoIcon, typeof __VLS_components.infoIcon, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    content: (__VLS_ctx.$t('suno.description.uploadAudios')),
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        content: (__VLS_ctx.$t('suno.description.uploadAudios')),
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {}.ElUpload;
/** @type {[typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, typeof __VLS_components.ElUpload, typeof __VLS_components.elUpload, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign(__assign({ fileList: (__VLS_ctx.fileList), name: "file", limit: (1) }, { class: "upload-wrapper" }), { action: (__VLS_ctx.uploadUrl), accept: ".mp3", showFileList: (true), onExceed: (__VLS_ctx.onExceed), onError: (__VLS_ctx.onError), onSuccess: (__VLS_ctx.onSuccess), headers: (__VLS_ctx.headers) })));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign(__assign({ fileList: (__VLS_ctx.fileList), name: "file", limit: (1) }, { class: "upload-wrapper" }), { action: (__VLS_ctx.uploadUrl), accept: ".mp3", showFileList: (true), onExceed: (__VLS_ctx.onExceed), onError: (__VLS_ctx.onError), onSuccess: (__VLS_ctx.onSuccess), headers: (__VLS_ctx.headers) })], __VLS_functionalComponentArgsRest(__VLS_5), false));
__VLS_7.slots.default;
var __VLS_8 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ round: true, type: "primary", size: "small" }, { class: "btn btn-upload" })));
var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ round: true, type: "primary", size: "small" }, { class: "btn btn-upload" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
__VLS_11.slots.default;
var __VLS_12 = {}.FontAwesomeIcon;
/** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
// @ts-ignore
var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ icon: "fa-solid fa-upload" }, { class: "icon mr-1" })));
var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-upload" }, { class: "icon mr-1" })], __VLS_functionalComponentArgsRest(__VLS_13), false));
(__VLS_ctx.$t('suno.button.uploadAudios'));
var __VLS_11;
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
