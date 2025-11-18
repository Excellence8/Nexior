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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var number_1 = require("@/utils/number");
var element_plus_1 = require("element-plus");
var icons_vue_1 = require("@element-plus/icons-vue");
var icons_vue_2 = require("@element-plus/icons-vue");
var models_1 = require("@/models");
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var file_saver_1 = require("file-saver");
var operators_1 = require("@/operators");
var CALLBACK_URL = 'https://webhook.acedata.cloud/suno';
exports.default = (0, vue_1.defineComponent)({
    name: 'TaskPreview',
    components: {
        ElImage: element_plus_1.ElImage,
        ElIcon: element_plus_1.ElIcon,
        ElTooltip: element_plus_1.ElTooltip,
        ElButton: element_plus_1.ElButton,
        FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
        VideoPlay: icons_vue_2.VideoPlay,
        VideoPause: icons_vue_2.VideoPause,
        ElDropdown: element_plus_1.ElDropdown,
        ElDropdownMenu: element_plus_1.ElDropdownMenu,
        ElDropdownItem: element_plus_1.ElDropdownItem,
        Loading: icons_vue_1.Loading
    },
    props: {
        modelValue: {
            type: Object,
            required: true
        }
    },
    data: function () {
        return {
            isFetchingVideoUrl: false
        };
    },
    computed: {
        loading: function () {
            var _a, _b;
            return ((_b = (_a = this.$store.state.suno) === null || _a === void 0 ? void 0 : _a.status) === null || _b === void 0 ? void 0 : _b.getApplications) === models_1.Status.Request;
        },
        credential: function () {
            return this.$store.state.suno.credential;
        },
        config: function () {
            return this.$store.state.suno.config;
        },
        task: function () {
            var _a;
            return (_a = this.$store.state.suno) === null || _a === void 0 ? void 0 : _a.tasks;
        },
        audios: function () {
            var _a, _b, _c, _d, _e;
            var data = ((_c = (_b = (_a = this.modelValue) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.data) !== null && _c !== void 0 ? _c : []);
            // @ts-ignore
            var action = (_e = (_d = this.modelValue) === null || _d === void 0 ? void 0 : _d.request) === null || _e === void 0 ? void 0 : _e.action;
            return action ? data.map(function (a) { return (__assign(__assign({}, a), { action: action })); }) : data;
        },
        application: function () {
            var _a;
            return (_a = this.$store.state.suno) === null || _a === void 0 ? void 0 : _a.application;
        },
        active: function () {
            var _a, _b;
            return (_b = (_a = this.$store.state.suno) === null || _a === void 0 ? void 0 : _a.tasks) === null || _b === void 0 ? void 0 : _b.active;
        }
    },
    methods: {
        useFormatDuring: number_1.useFormatDuring,
        onPlay: function (audio) {
            this.$store.dispatch('suno/setAudio', __assign(__assign(__assign({}, this.$store.state.suno.audio), audio), { state: 'playing' }));
            console.log('on play');
        },
        onPause: function (audio) {
            this.$store.dispatch('suno/setAudio', __assign(__assign(__assign({}, this.$store.state.suno.audio), audio), { state: 'paused' }));
            console.log('on pause');
        },
        onClick: function (audio) {
            var _a, _b, _c;
            if (((_c = (_b = (_a = this.$store.state) === null || _a === void 0 ? void 0 : _a.suno) === null || _b === void 0 ? void 0 : _b.audio) === null || _c === void 0 ? void 0 : _c.id) !== audio.id) {
                this.onPlay(__assign(__assign({}, audio), { progress: 0 }));
            }
        },
        onExtend: function (event, audio) {
            var _a;
            event.stopPropagation();
            console.log('on extend');
            // download url here
            console.debug('set config', audio);
            this.$store.commit('suno/setConfig', __assign(__assign({}, (_a = this.$store.state.suno) === null || _a === void 0 ? void 0 : _a.config), { model: audio.model, custom: true, instrumental: false, style: audio.style, action: 'extend', audio: audio, audio_id: audio.id, continue_at: audio.duration }));
        },
        onDownload: function (event, audioUrl) {
            if (event) {
                event.stopPropagation();
            }
            console.log('on download', audioUrl);
            var parsedUrl = new URL(audioUrl);
            var pathname = parsedUrl.pathname;
            var filename = pathname.substring(pathname.lastIndexOf('/') + 1);
            console.log('on preview', filename);
            fetch(audioUrl)
                .then(function (response) { return response.blob(); })
                .then(function (blob) {
                (0, file_saver_1.saveAs)(blob, filename);
            });
            // download url here
            // window.open(audioUrl, '_blank');
        },
        handleVideoDownload: function (audio) {
            return __awaiter(this, void 0, void 0, function () {
                var videoUrl, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (audio.video_url) {
                                this.onDownload(null, audio.video_url);
                                return [2 /*return*/];
                            }
                            if (this.isFetchingVideoUrl) {
                                return [2 /*return*/];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, 4, 5]);
                            this.isFetchingVideoUrl = true;
                            return [4 /*yield*/, this.fetchVideoUrlFromApi(audio === null || audio === void 0 ? void 0 : audio.id)];
                        case 2:
                            videoUrl = _a.sent();
                            console.log("get videoUrl: ".concat(videoUrl));
                            audio.video_url = videoUrl;
                            this.onDownload(null, videoUrl);
                            return [3 /*break*/, 5];
                        case 3:
                            error_1 = _a.sent();
                            console.error('get videoUrl failed:', error_1);
                            element_plus_1.ElMessage.error(this.$t('suno.message.getVideoUrlFailed'));
                            return [3 /*break*/, 5];
                        case 4:
                            this.isFetchingVideoUrl = false;
                            return [7 /*endfinally*/];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        },
        fetchVideoUrlFromApi: function (audioId) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var _a;
                            var request = {
                                audio_id: audioId
                            };
                            var token = (_a = _this.credential) === null || _a === void 0 ? void 0 : _a.token;
                            if (!token) {
                                console.error('no token specified');
                                reject(new Error('No token specified'));
                                return;
                            }
                            operators_1.sunoOperator
                                .mp4(request, { token: token })
                                .then(function (response) {
                                var _a, _b;
                                var videoUrl = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.video_url;
                                if (videoUrl) {
                                    resolve(videoUrl);
                                }
                                else {
                                    reject(new Error('Video URL not found in response'));
                                }
                            })
                                .catch(function (error) {
                                reject(error);
                            });
                        })];
                });
            });
        },
        onPreview: function (event, videoUrl) {
            event.stopPropagation();
            console.log('on preview', videoUrl);
            // preview url here
            window.open(videoUrl, '_blank');
        },
        onGetStems: function (audioId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.onGenerateAudioUrl('stems', audioId)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        },
        onCover: function (audio) {
            var _a;
            console.log('on cover');
            // download url here
            console.debug('set config', audio);
            this.$store.commit('suno/setConfig', __assign(__assign({}, (_a = this.$store.state.suno) === null || _a === void 0 ? void 0 : _a.config), { model: audio.model, custom: true, instrumental: false, style: audio.style, action: 'cover', audio: audio, audio_id: audio.id }));
        },
        onConcatMusic: function (audioId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.onGenerateAudioUrl('concat', audioId)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        },
        onGenerateAudioUrl: function (action, audioId) {
            return __awaiter(this, void 0, void 0, function () {
                var request, token;
                var _this = this;
                var _a;
                return __generator(this, function (_b) {
                    request = {
                        action: action,
                        audio_id: audioId,
                        callback_url: CALLBACK_URL
                    };
                    token = (_a = this.credential) === null || _a === void 0 ? void 0 : _a.token;
                    if (!token) {
                        console.error('no token specified');
                        return [2 /*return*/];
                    }
                    element_plus_1.ElMessage.info(this.$t('suno.message.startingTask'));
                    operators_1.sunoOperator
                        .audio(request, {
                        token: token
                    })
                        .then(function () {
                        element_plus_1.ElMessage.success(_this.$t('suno.message.startTaskSuccess'));
                    })
                        .catch(function (error) {
                        var _a, _b, _c;
                        element_plus_1.ElMessage.error(((_c = (_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error) === null || _c === void 0 ? void 0 : _c.message) || _this.$t('suno.message.startTaskFailed'));
                    })
                        .finally(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.onGetTasks()];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, this.onScrollDown()];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            });
        },
        onScrollDown: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    setTimeout(function () {
                        var el = document.querySelector('.tasks');
                        if (el) {
                            el.scrollTop = el.scrollHeight;
                        }
                    }, 1000);
                    return [2 /*return*/];
                });
            });
        },
        onGetTasks: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.loading) {
                                console.debug('loading');
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, this.$store.dispatch('suno/getTasks', {
                                    limit: 30,
                                    offset: 0
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElImage: element_plus_1.ElImage,
    ElIcon: element_plus_1.ElIcon,
    ElTooltip: element_plus_1.ElTooltip,
    ElButton: element_plus_1.ElButton,
    FontAwesomeIcon: vue_fontawesome_1.FontAwesomeIcon,
    VideoPlay: icons_vue_2.VideoPlay,
    VideoPause: icons_vue_2.VideoPause,
    ElDropdown: element_plus_1.ElDropdown,
    ElDropdownMenu: element_plus_1.ElDropdownMenu,
    ElDropdownItem: element_plus_1.ElDropdownItem,
    Loading: icons_vue_1.Loading
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "task" }));
var _loop_1 = function (audio) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.onClick(audio);
        } }, { key: (audio.id) }), { class: "audio" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "left" }));
    __VLS_asFunctionalDirective(__VLS_directives.vLoading)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (!(audio === null || audio === void 0 ? void 0 : audio.audio_url)) }), null, null);
    var __VLS_0 = {}.ElImage;
    /** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({ src: (audio === null || audio === void 0 ? void 0 : audio.image_url) }, { class: "cover" }), { fit: "cover", lazy: true })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ src: (audio === null || audio === void 0 ? void 0 : audio.image_url) }, { class: "cover" }), { fit: "cover", lazy: true })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    if ((audio === null || audio === void 0 ? void 0 : audio.audio_url) &&
        ((_c = (_b = (_a = __VLS_ctx.$store.state) === null || _a === void 0 ? void 0 : _a.suno) === null || _b === void 0 ? void 0 : _b.audio) === null || _c === void 0 ? void 0 : _c.id) === audio.id &&
        ((_f = (_e = (_d = __VLS_ctx.$store.state) === null || _d === void 0 ? void 0 : _d.suno) === null || _e === void 0 ? void 0 : _e.audio) === null || _f === void 0 ? void 0 : _f.state) === 'playing') {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: function () {
                var _a, _b, _c, _d, _e, _f;
                var _g = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _g[_i] = arguments[_i];
                }
                var $event = _g[0];
                if (!((audio === null || audio === void 0 ? void 0 : audio.audio_url) &&
                    ((_c = (_b = (_a = __VLS_ctx.$store.state) === null || _a === void 0 ? void 0 : _a.suno) === null || _b === void 0 ? void 0 : _b.audio) === null || _c === void 0 ? void 0 : _c.id) === audio.id &&
                    ((_f = (_e = (_d = __VLS_ctx.$store.state) === null || _d === void 0 ? void 0 : _d.suno) === null || _e === void 0 ? void 0 : _e.audio) === null || _f === void 0 ? void 0 : _f.state) === 'playing'))
                    return;
                __VLS_ctx.onPause(audio);
            } }, { class: "overlay" }));
        var __VLS_4 = {}.ElIcon;
        /** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
        // @ts-ignore
        var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({}));
        var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_5), false));
        __VLS_7.slots.default;
        var __VLS_8 = {}.VideoPause;
        /** @type {[typeof __VLS_components.VideoPause, typeof __VLS_components.videoPause, ]} */ ;
        // @ts-ignore
        var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({}));
        var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_9), false));
    }
    if ((audio === null || audio === void 0 ? void 0 : audio.audio_url) &&
        (((_j = (_h = (_g = __VLS_ctx.$store.state) === null || _g === void 0 ? void 0 : _g.suno) === null || _h === void 0 ? void 0 : _h.audio) === null || _j === void 0 ? void 0 : _j.id) !== audio.id ||
            (((_m = (_l = (_k = __VLS_ctx.$store.state) === null || _k === void 0 ? void 0 : _k.suno) === null || _l === void 0 ? void 0 : _l.audio) === null || _m === void 0 ? void 0 : _m.id) === audio.id && ((_q = (_p = (_o = __VLS_ctx.$store.state) === null || _o === void 0 ? void 0 : _o.suno) === null || _p === void 0 ? void 0 : _p.audio) === null || _q === void 0 ? void 0 : _q.state) === 'paused'))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: function () {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                var _k = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _k[_i] = arguments[_i];
                }
                var $event = _k[0];
                if (!((audio === null || audio === void 0 ? void 0 : audio.audio_url) &&
                    (((_c = (_b = (_a = __VLS_ctx.$store.state) === null || _a === void 0 ? void 0 : _a.suno) === null || _b === void 0 ? void 0 : _b.audio) === null || _c === void 0 ? void 0 : _c.id) !== audio.id ||
                        (((_f = (_e = (_d = __VLS_ctx.$store.state) === null || _d === void 0 ? void 0 : _d.suno) === null || _e === void 0 ? void 0 : _e.audio) === null || _f === void 0 ? void 0 : _f.id) === audio.id && ((_j = (_h = (_g = __VLS_ctx.$store.state) === null || _g === void 0 ? void 0 : _g.suno) === null || _h === void 0 ? void 0 : _h.audio) === null || _j === void 0 ? void 0 : _j.state) === 'paused'))))
                    return;
                __VLS_ctx.onPlay(audio);
            } }, { class: "overlay" }));
        var __VLS_12 = {}.ElIcon;
        /** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
        // @ts-ignore
        var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
        var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_13), false));
        __VLS_15.slots.default;
        var __VLS_16 = {}.VideoPlay;
        /** @type {[typeof __VLS_components.VideoPlay, typeof __VLS_components.videoPlay, ]} */ ;
        // @ts-ignore
        var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({}));
        var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_17), false));
    }
    if (audio === null || audio === void 0 ? void 0 : audio.duration) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "duration" }));
        (__VLS_ctx.useFormatDuring(audio === null || audio === void 0 ? void 0 : audio.duration));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "info" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "title" }));
    (audio === null || audio === void 0 ? void 0 : audio.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "style" }));
    (audio === null || audio === void 0 ? void 0 : audio.style);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "right" }));
    if (audio === null || audio === void 0 ? void 0 : audio.audio_url) {
        var __VLS_20 = {}.ElButton;
        /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
        // @ts-ignore
        var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20(__assign({ 'onClick': {} }, { size: "small", round: true })));
        var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { size: "small", round: true })], __VLS_functionalComponentArgsRest(__VLS_21), false));
        var __VLS_24 = void 0;
        var __VLS_25 = void 0;
        var __VLS_26 = void 0;
        var __VLS_27 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!(audio === null || audio === void 0 ? void 0 : audio.audio_url))
                    return;
                __VLS_ctx.onExtend($event, audio);
            }
        };
        __VLS_23.slots.default;
        (__VLS_ctx.$t('suno.button.extend'));
    }
    var __VLS_28 = {}.ElDropdown;
    /** @type {[typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, ]} */ ;
    // @ts-ignore
    var __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({}));
    var __VLS_30 = __VLS_29.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_29), false));
    __VLS_31.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "el-dropdown-link" }));
    var __VLS_32 = {}.ElTooltip;
    /** @type {[typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ]} */ ;
    // @ts-ignore
    var __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
        effect: "dark",
        content: (__VLS_ctx.$t('suno.button.download')),
        placement: "top",
    }));
    var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([{
            effect: "dark",
            content: (__VLS_ctx.$t('suno.button.download')),
            placement: "top",
        }], __VLS_functionalComponentArgsRest(__VLS_33), false));
    __VLS_35.slots.default;
    if ((audio === null || audio === void 0 ? void 0 : audio.audio_url) || (audio === null || audio === void 0 ? void 0 : audio.video_url)) {
        var __VLS_36 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36(__assign({ icon: "fa-solid fa-download" }, { class: "icon icon-download" })));
        var __VLS_38 = __VLS_37.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-download" }, { class: "icon icon-download" })], __VLS_functionalComponentArgsRest(__VLS_37), false));
    }
    {
        var __VLS_thisSlot = __VLS_31.slots.dropdown;
        var __VLS_40 = {}.ElDropdownMenu;
        /** @type {[typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, ]} */ ;
        // @ts-ignore
        var __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({}));
        var __VLS_42 = __VLS_41.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_41), false));
        __VLS_43.slots.default;
        var __VLS_44 = {}.ElDropdownItem;
        /** @type {[typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ]} */ ;
        // @ts-ignore
        var __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44(__assign({ 'onClick': {} }, { disabled: (__VLS_ctx.isFetchingVideoUrl) })));
        var __VLS_46 = __VLS_45.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { disabled: (__VLS_ctx.isFetchingVideoUrl) })], __VLS_functionalComponentArgsRest(__VLS_45), false));
        var __VLS_48 = void 0;
        var __VLS_49 = void 0;
        var __VLS_50 = void 0;
        var __VLS_51 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.handleVideoDownload(audio);
            }
        };
        __VLS_47.slots.default;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex items-center min-w-[120px]" }));
        if (__VLS_ctx.isFetchingVideoUrl) {
            var __VLS_52 = {}.ElIcon;
            /** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
            // @ts-ignore
            var __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52(__assign({ class: "is-loading mr-2" })));
            var __VLS_54 = __VLS_53.apply(void 0, __spreadArray([__assign({ class: "is-loading mr-2" })], __VLS_functionalComponentArgsRest(__VLS_53), false));
            __VLS_55.slots.default;
            var __VLS_56 = {}.Loading;
            /** @type {[typeof __VLS_components.Loading, ]} */ ;
            // @ts-ignore
            var __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({}));
            var __VLS_58 = __VLS_57.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_57), false));
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.$t('suno.button.download_video'));
        if (audio === null || audio === void 0 ? void 0 : audio.audio_url) {
            var __VLS_60 = {}.ElDropdownItem;
            /** @type {[typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ]} */ ;
            // @ts-ignore
            var __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60(__assign({ 'onClick': {} })));
            var __VLS_62 = __VLS_61.apply(void 0, __spreadArray([__assign({ 'onClick': {} })], __VLS_functionalComponentArgsRest(__VLS_61), false));
            var __VLS_64 = void 0;
            var __VLS_65 = void 0;
            var __VLS_66 = void 0;
            var __VLS_67 = {
                onClick: function () {
                    var _a = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _a[_i] = arguments[_i];
                    }
                    var $event = _a[0];
                    if (!(audio === null || audio === void 0 ? void 0 : audio.audio_url))
                        return;
                    __VLS_ctx.onDownload($event, audio === null || audio === void 0 ? void 0 : audio.audio_url);
                }
            };
            __VLS_63.slots.default;
            (__VLS_ctx.$t('suno.button.download_audio'));
        }
    }
    var __VLS_68 = {}.ElDropdown;
    /** @type {[typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, ]} */ ;
    // @ts-ignore
    var __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({}));
    var __VLS_70 = __VLS_69.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_69), false));
    __VLS_71.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "el-dropdown-link" }));
    var __VLS_72 = {}.ElTooltip;
    /** @type {[typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ]} */ ;
    // @ts-ignore
    var __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
        effect: "dark",
        content: (__VLS_ctx.$t('suno.button.more')),
        placement: "top",
    }));
    var __VLS_74 = __VLS_73.apply(void 0, __spreadArray([{
            effect: "dark",
            content: (__VLS_ctx.$t('suno.button.more')),
            placement: "top",
        }], __VLS_functionalComponentArgsRest(__VLS_73), false));
    __VLS_75.slots.default;
    if ((audio === null || audio === void 0 ? void 0 : audio.audio_url) || (audio === null || audio === void 0 ? void 0 : audio.video_url)) {
        var __VLS_76 = {}.FontAwesomeIcon;
        /** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
        // @ts-ignore
        var __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76(__assign({ icon: "fa-solid fa-ellipsis" }, { class: "icon icon-ellipsis" })));
        var __VLS_78 = __VLS_77.apply(void 0, __spreadArray([__assign({ icon: "fa-solid fa-ellipsis" }, { class: "icon icon-ellipsis" })], __VLS_functionalComponentArgsRest(__VLS_77), false));
    }
    {
        var __VLS_thisSlot = __VLS_71.slots.dropdown;
        var __VLS_80 = {}.ElDropdownMenu;
        /** @type {[typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, ]} */ ;
        // @ts-ignore
        var __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({}));
        var __VLS_82 = __VLS_81.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_81), false));
        __VLS_83.slots.default;
        if (audio.id) {
            var __VLS_84 = {}.ElDropdownItem;
            /** @type {[typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ]} */ ;
            // @ts-ignore
            var __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84(__assign({ 'onClick': {} })));
            var __VLS_86 = __VLS_85.apply(void 0, __spreadArray([__assign({ 'onClick': {} })], __VLS_functionalComponentArgsRest(__VLS_85), false));
            var __VLS_88 = void 0;
            var __VLS_89 = void 0;
            var __VLS_90 = void 0;
            var __VLS_91 = {
                onClick: function () {
                    var _a = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _a[_i] = arguments[_i];
                    }
                    var $event = _a[0];
                    if (!(audio.id))
                        return;
                    __VLS_ctx.onGetStems(audio.id);
                }
            };
            __VLS_87.slots.default;
            (__VLS_ctx.$t('suno.button.get_stems'));
        }
        var __VLS_92 = {}.ElDropdownItem;
        /** @type {[typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ]} */ ;
        // @ts-ignore
        var __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92(__assign({ 'onClick': {} })));
        var __VLS_94 = __VLS_93.apply(void 0, __spreadArray([__assign({ 'onClick': {} })], __VLS_functionalComponentArgsRest(__VLS_93), false));
        var __VLS_96 = void 0;
        var __VLS_97 = void 0;
        var __VLS_98 = void 0;
        var __VLS_99 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.onCover(audio);
            }
        };
        __VLS_95.slots.default;
        (__VLS_ctx.$t('suno.button.cover_music'));
        if ((audio === null || audio === void 0 ? void 0 : audio.id) && (audio === null || audio === void 0 ? void 0 : audio.action) === 'extend') {
            var __VLS_100 = {}.ElDropdownItem;
            /** @type {[typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ]} */ ;
            // @ts-ignore
            var __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100(__assign({ 'onClick': {} })));
            var __VLS_102 = __VLS_101.apply(void 0, __spreadArray([__assign({ 'onClick': {} })], __VLS_functionalComponentArgsRest(__VLS_101), false));
            var __VLS_104 = void 0;
            var __VLS_105 = void 0;
            var __VLS_106 = void 0;
            var __VLS_107 = {
                onClick: function () {
                    var _a = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _a[_i] = arguments[_i];
                    }
                    var $event = _a[0];
                    if (!((audio === null || audio === void 0 ? void 0 : audio.id) && (audio === null || audio === void 0 ? void 0 : audio.action) === 'extend'))
                        return;
                    __VLS_ctx.onConcatMusic(audio === null || audio === void 0 ? void 0 : audio.id);
                }
            };
            __VLS_103.slots.default;
            (__VLS_ctx.$t('suno.button.concat_music'));
        }
    }
};
var __VLS_7, __VLS_15, __VLS_23, __VLS_35, __VLS_55, __VLS_47, __VLS_63, __VLS_43, __VLS_31, __VLS_75, __VLS_87, __VLS_95, __VLS_103, __VLS_83, __VLS_71;
for (var _i = 0, _r = __VLS_getVForSourceType((__VLS_ctx.audios)); _i < _r.length; _i++) {
    var audio = _r[_i][0];
    _loop_1(audio);
}
/** @type {__VLS_StyleScopedClasses['task']} */ ;
/** @type {__VLS_StyleScopedClasses['audio']} */ ;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['cover']} */ ;
/** @type {__VLS_StyleScopedClasses['overlay']} */ ;
/** @type {__VLS_StyleScopedClasses['overlay']} */ ;
/** @type {__VLS_StyleScopedClasses['duration']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['style']} */ ;
/** @type {__VLS_StyleScopedClasses['right']} */ ;
/** @type {__VLS_StyleScopedClasses['el-dropdown-link']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-download']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['min-w-[120px]']} */ ;
/** @type {__VLS_StyleScopedClasses['is-loading']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['el-dropdown-link']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-ellipsis']} */ ;
var __VLS_dollars;
var __VLS_self;
