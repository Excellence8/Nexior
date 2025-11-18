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
var Midjourney_vue_1 = require("@/layouts/Midjourney.vue");
var ConfigPanel_vue_1 = require("@/components/midjourney/ConfigPanel.vue");
var element_plus_1 = require("element-plus");
var operators_1 = require("@/operators");
var TaskList_vue_1 = require("@/components/midjourney/tasks/TaskList.vue");
var errorCode_1 = require("@/constants/errorCode");
var models_1 = require("@/models");
var models_2 = require("@/models");
var constants_1 = require("@/constants");
var CALLBACK_URL = 'https://webhook.acedata.cloud/midjourney';
exports.default = (0, vue_1.defineComponent)({
    name: 'MidjourneyIndex',
    components: {
        ConfigPanel: ConfigPanel_vue_1.default,
        TaskList: TaskList_vue_1.default,
        Layout: Midjourney_vue_1.default
    },
    inject: ['initialized'],
    data: function () {
        return {
            operating: false,
            job: 0
        };
    },
    computed: {
        tasks: function () {
            return this.$store.state.midjourney.tasks;
        },
        credential: function () {
            return this.$store.state.midjourney.credential;
        },
        config: function () {
            return this.$store.state.midjourney.config;
        },
        loading: function () {
            return this.$store.state.midjourney.status.getApplications === models_1.Status.Request;
        },
        application: function () {
            return this.$store.state.midjourney.application;
        },
        finalPrompt: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
            var content = '';
            if (this.config.references && ((_a = this.config.references) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                content += "".concat(this.config.references.join(' '), " ");
            }
            if (this.config.prompt) {
                content += this.config.prompt;
            }
            if (this.config.elements && this.config.elements.length > 0) {
                content += ',' + this.config.elements.map(function (item) { return item.value; }).join(',');
            }
            if (((_b = this.config) === null || _b === void 0 ? void 0 : _b.model) && !content.includes("--".concat(this.config.model))) {
                content += " --".concat(this.config.model);
            }
            if (((_c = this.config) === null || _c === void 0 ? void 0 : _c.version) && !content.includes("--version ") && !content.includes("--v ")) {
                content += " --version ".concat(this.config.version);
            }
            if (((_d = this.config) === null || _d === void 0 ? void 0 : _d.chaos) && ((_e = this.config) === null || _e === void 0 ? void 0 : _e.advanced) && !content.includes("--chaos ")) {
                content += " --chaos ".concat(this.config.chaos);
            }
            if (((_f = this.config) === null || _f === void 0 ? void 0 : _f.quality) &&
                !content.includes("--quality ") &&
                !content.includes("--q ") &&
                ((_g = this.config) === null || _g === void 0 ? void 0 : _g.quality) !== constants_1.MIDJOURNEY_DEFAULT_QUALITY) {
                content += " --quality ".concat(this.config.quality);
            }
            if (((_h = this.config) === null || _h === void 0 ? void 0 : _h.ratio) &&
                !content.includes("--aspect ") &&
                !content.includes("--ar ") &&
                ((_j = this.config) === null || _j === void 0 ? void 0 : _j.ratio) !== constants_1.MIDJOURNEY_DEFAULT_RATIO) {
                content += " --aspect ".concat(this.config.ratio);
            }
            if (((_k = this.config) === null || _k === void 0 ? void 0 : _k.stylize) &&
                !content.includes("--stylize ") &&
                !content.includes("--s ") &&
                ((_l = this.config) === null || _l === void 0 ? void 0 : _l.advanced) &&
                ((_m = this.config) === null || _m === void 0 ? void 0 : _m.stylize) !== constants_1.MIDJOURNEY_DEFAULT_STYLIZE) {
                content += " --stylize ".concat((_o = this.config) === null || _o === void 0 ? void 0 : _o.stylize);
            }
            if (((_p = this.config) === null || _p === void 0 ? void 0 : _p.weird) &&
                !content.includes("--weird ") &&
                !content.includes("--w ") &&
                ((_q = this.config) === null || _q === void 0 ? void 0 : _q.advanced) &&
                ((_r = this.config) === null || _r === void 0 ? void 0 : _r.weird) !== constants_1.MIDJOURNEY_DEFAULT_WIRED) {
                content += " --weird ".concat(this.config.weird);
            }
            if (this.config.ignore && !content.includes("--no ")) {
                content += " --no ".concat(this.config.ignore);
            }
            if (((_s = this.config) === null || _s === void 0 ? void 0 : _s.iw) &&
                !content.includes("--iw ") &&
                ((_t = this.config) === null || _t === void 0 ? void 0 : _t.advanced) &&
                ((_u = this.config) === null || _u === void 0 ? void 0 : _u.iw) !== constants_1.MIDJOURNEY_DEFAULT_IMAGE_WEIGHT) {
                content += " --iw ".concat(this.config.iw);
            }
            if (((_v = this.config) === null || _v === void 0 ? void 0 : _v.style) && ((_w = this.config) === null || _w === void 0 ? void 0 : _w.advanced) && !content.includes("--style")) {
                content += " --style ".concat((_x = this.config) === null || _x === void 0 ? void 0 : _x.style);
            }
            // remove `--fast`, `--relax`, `--turbo`
            content = content.replace(/--(fast|relax|turbo) /g, '');
            return this.config.prompt || (this.config.references && ((_y = this.config.references) === null || _y === void 0 ? void 0 : _y.length) > 0) ? content : '';
        }
    },
    watch: {
        tasks: {
            handler: function (value, oldValue) {
                var _a, _b;
                // scroll down if new tasks are added
                if (((_a = value === null || value === void 0 ? void 0 : value.items) === null || _a === void 0 ? void 0 : _a.length) > ((_b = oldValue === null || oldValue === void 0 ? void 0 : oldValue.items) === null || _b === void 0 ? void 0 : _b.length)) {
                    console.debug('new tasks detected');
                    // this.onScrollDown();
                }
            },
            deep: true
        },
        initialized: {
            handler: function (newValue) {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!newValue) return [3 /*break*/, 3];
                                console.debug('layout initialized');
                                return [4 /*yield*/, this.onGetTasks()];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, this.onScrollDown()];
                            case 2:
                                _a.sent();
                                this.job = setInterval(function () {
                                    _this.onGetTasks();
                                }, 5000);
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            },
            immediate: true
        }
    },
    mounted: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.onGetService()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    unmounted: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                clearInterval(this.job);
                return [2 /*return*/];
            });
        });
    },
    methods: {
        onReachTop: function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, this.onGetTasks({
                                createdAtMax: (_c = (_b = (_a = this.tasks) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.created_at
                            })];
                        case 1:
                            _d.sent();
                            return [2 /*return*/];
                    }
                });
            });
        },
        onGetService: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.debug('start onGetService');
                            return [4 /*yield*/, this.$store.dispatch('midjourney/getService')];
                        case 1:
                            _a.sent();
                            console.debug('end onGetService');
                            return [2 /*return*/];
                    }
                });
            });
        },
        onGetApplication: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.debug('start onGetApplications');
                            return [4 /*yield*/, this.$store.dispatch('midjourney/getApplications')];
                        case 1:
                            _a.sent();
                            console.debug('end onGetApplications');
                            return [4 /*yield*/, this.onGetTasks()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        },
        onStartImagineTask: function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var token;
                var _this = this;
                var _a;
                return __generator(this, function (_b) {
                    token = (_a = this.credential) === null || _a === void 0 ? void 0 : _a.token;
                    if (!token) {
                        console.error('no token specified');
                        return [2 /*return*/];
                    }
                    if (!request.prompt && request.action === models_2.MidjourneyImagineAction.GENERATE) {
                        element_plus_1.ElMessage.error(this.$t('midjourney.message.promptRequired'));
                        return [2 /*return*/];
                    }
                    element_plus_1.ElMessage.info(this.$t('midjourney.message.startingTask'));
                    operators_1.midjourneyOperator
                        .imagine(request, {
                        token: token
                    })
                        .then(function () {
                        element_plus_1.ElMessage.success(_this.$t('midjourney.message.startTaskSuccess'));
                    })
                        .catch(function (error) {
                        var _a, _b, _c, _d, _e;
                        var response = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data;
                        if (((_b = response === null || response === void 0 ? void 0 : response.error) === null || _b === void 0 ? void 0 : _b.code) === errorCode_1.ERROR_CODE_USED_UP) {
                            element_plus_1.ElMessage.error(_this.$t('midjourney.message.usedUp'));
                        }
                        else {
                            element_plus_1.ElMessage.error(_this.$t('midjourney.message.startTaskFailed') + ((_e = (_d = (_c = error.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.error) === null || _e === void 0 ? void 0 : _e.message));
                        }
                    })
                        .finally(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
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
                            }); }, 1000);
                            return [2 /*return*/];
                        });
                    }); });
                    return [2 /*return*/];
                });
            });
        },
        onStartVideosTask: function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var token;
                var _this = this;
                var _a;
                return __generator(this, function (_b) {
                    token = (_a = this.credential) === null || _a === void 0 ? void 0 : _a.token;
                    if (!token) {
                        console.error('no token specified');
                        return [2 /*return*/];
                    }
                    if (!request.prompt) {
                        element_plus_1.ElMessage.error(this.$t('midjourney.message.promptRequired'));
                        return [2 /*return*/];
                    }
                    element_plus_1.ElMessage.info(this.$t('midjourney.message.startingTask'));
                    operators_1.midjourneyOperator
                        .videos(request, {
                        token: token
                    })
                        .then(function () {
                        element_plus_1.ElMessage.success(_this.$t('midjourney.message.startVideosTaskSuccess'));
                    })
                        .catch(function (error) {
                        var _a, _b, _c, _d, _e;
                        var response = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data;
                        if (((_b = response === null || response === void 0 ? void 0 : response.error) === null || _b === void 0 ? void 0 : _b.code) === errorCode_1.ERROR_CODE_USED_UP) {
                            element_plus_1.ElMessage.error(_this.$t('midjourney.message.usedUp'));
                        }
                        else {
                            element_plus_1.ElMessage.error(_this.$t('midjourney.message.startVideosTaskFailed') + ((_e = (_d = (_c = error.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.error) === null || _e === void 0 ? void 0 : _e.message));
                        }
                    })
                        .finally(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
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
                            }); }, 1000);
                            return [2 /*return*/];
                        });
                    }); });
                    return [2 /*return*/];
                });
            });
        },
        onStartDescribeTask: function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var token;
                var _this = this;
                var _a;
                return __generator(this, function (_b) {
                    token = (_a = this.credential) === null || _a === void 0 ? void 0 : _a.token;
                    if (!token) {
                        console.error('no token specified');
                        return [2 /*return*/];
                    }
                    element_plus_1.ElMessage.info(this.$t('midjourney.message.startingTask'));
                    operators_1.midjourneyOperator
                        .describe(request, {
                        token: token
                    })
                        .then(function () {
                        element_plus_1.ElMessage.success(_this.$t('midjourney.message.startDescribeTaskSuccess'));
                    })
                        .catch(function (error) {
                        var _a, _b, _c, _d, _e;
                        var response = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data;
                        if (((_b = response === null || response === void 0 ? void 0 : response.error) === null || _b === void 0 ? void 0 : _b.code) === errorCode_1.ERROR_CODE_USED_UP) {
                            element_plus_1.ElMessage.error(_this.$t('midjourney.message.usedUp'));
                        }
                        else {
                            element_plus_1.ElMessage.error(_this.$t('midjourney.message.startDescribeTaskFailed') + ((_e = (_d = (_c = error.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.error) === null || _e === void 0 ? void 0 : _e.message));
                        }
                    })
                        .finally(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
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
                            }); }, 1000);
                            return [2 /*return*/];
                        });
                    }); });
                    return [2 /*return*/];
                });
            });
        },
        onCustom: function (payload) {
            return __awaiter(this, void 0, void 0, function () {
                var request;
                var _a;
                return __generator(this, function (_b) {
                    request = {
                        image_id: payload.image_id,
                        action: payload.action,
                        mode: ((_a = this.config) === null || _a === void 0 ? void 0 : _a.mode) || constants_1.MIDJOURNEY_DEFAULT_MODE,
                        callback_url: CALLBACK_URL
                    };
                    this.onStartImagineTask(request);
                    return [2 /*return*/];
                });
            });
        },
        onGenerate: function () {
            return __awaiter(this, void 0, void 0, function () {
                var request, request, request;
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
                return __generator(this, function (_r) {
                    switch (_r.label) {
                        case 0:
                            console.debug('onGenerate', this.config);
                            if (!(((_a = this.config) === null || _a === void 0 ? void 0 : _a.type) === 'videos')) return [3 /*break*/, 2];
                            request = {
                                video_id: (_b = this.config) === null || _b === void 0 ? void 0 : _b.video_id,
                                image_url: (_c = this.config) === null || _c === void 0 ? void 0 : _c.image_url,
                                action: (_d = this.config) === null || _d === void 0 ? void 0 : _d.action,
                                prompt: (_e = this.config) === null || _e === void 0 ? void 0 : _e.prompt,
                                end_image_url: (_f = this.config) === null || _f === void 0 ? void 0 : _f.end_image_url,
                                resolution: (_g = this.config) === null || _g === void 0 ? void 0 : _g.resolution,
                                loop: (_h = this.config) === null || _h === void 0 ? void 0 : _h.loop,
                                mode: ((_j = this.config) === null || _j === void 0 ? void 0 : _j.mode) || constants_1.MIDJOURNEY_DEFAULT_MODE,
                                callback_url: CALLBACK_URL
                            };
                            return [4 /*yield*/, this.onStartVideosTask(request)];
                        case 1:
                            _r.sent();
                            return [3 /*break*/, 6];
                        case 2:
                            if (!(((_k = this.config) === null || _k === void 0 ? void 0 : _k.type) === 'imagine')) return [3 /*break*/, 4];
                            request = {
                                mode: ((_l = this.config) === null || _l === void 0 ? void 0 : _l.mode) || constants_1.MIDJOURNEY_DEFAULT_MODE,
                                prompt: this.finalPrompt,
                                action: models_2.MidjourneyImagineAction.GENERATE,
                                translation: (_m = this.config) === null || _m === void 0 ? void 0 : _m.translation,
                                callback_url: CALLBACK_URL
                            };
                            return [4 /*yield*/, this.onStartImagineTask(request)];
                        case 3:
                            _r.sent();
                            return [3 /*break*/, 6];
                        case 4:
                            if (!(((_o = this.config) === null || _o === void 0 ? void 0 : _o.type) === 'describe')) return [3 /*break*/, 6];
                            if (!((_p = this.config) === null || _p === void 0 ? void 0 : _p.image_url)) {
                                element_plus_1.ElMessage.error(this.$t('midjourney.message.imageUrlRequired'));
                                return [2 /*return*/];
                            }
                            request = {
                                image_url: (_q = this.config) === null || _q === void 0 ? void 0 : _q.image_url,
                                callback_url: CALLBACK_URL
                            };
                            return [4 /*yield*/, this.onStartDescribeTask(request)];
                        case 5:
                            _r.sent();
                            _r.label = 6;
                        case 6: return [2 /*return*/];
                    }
                });
            });
        },
        onScrollDown: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.$nextTick()];
                        case 1:
                            _a.sent();
                            setTimeout(function () {
                                var el = document.querySelector('.tasks');
                                if (el) {
                                    el.scrollTop = el.scrollHeight;
                                }
                            }, 500);
                            return [2 /*return*/];
                    }
                });
            });
        },
        onGetTasks: function (payload) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, limit, createdAtMin, createdAtMax;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (this.loading) {
                                console.debug('loading');
                                return [2 /*return*/];
                            }
                            console.debug('start onGetTasks', payload);
                            _a = payload || {}, _b = _a.limit, limit = _b === void 0 ? 5 : _b, createdAtMin = _a.createdAtMin, createdAtMax = _a.createdAtMax;
                            console.debug('limit', limit, 'createdAtMin', createdAtMin, 'createdAtMax', createdAtMax);
                            return [4 /*yield*/, this.$store.dispatch('midjourney/getTasks', {
                                    limit: limit,
                                    createdAtMin: createdAtMin,
                                    createdAtMax: createdAtMax
                                })];
                        case 1:
                            _c.sent();
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
    ConfigPanel: ConfigPanel_vue_1.default,
    TaskList: TaskList_vue_1.default,
    Layout: Midjourney_vue_1.default
};
var __VLS_components;
var __VLS_directives;
var __VLS_0 = {}.layout;
/** @type {[typeof __VLS_components.Layout, typeof __VLS_components.layout, typeof __VLS_components.Layout, typeof __VLS_components.layout, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4 = {};
__VLS_3.slots.default;
{
    var __VLS_thisSlot = __VLS_3.slots.config;
    var __VLS_5 = {}.ConfigPanel;
    /** @type {[typeof __VLS_components.ConfigPanel, typeof __VLS_components.configPanel, ]} */ ;
    // @ts-ignore
    var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5(__assign({ 'onGenerate': {} })));
    var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([__assign({ 'onGenerate': {} })], __VLS_functionalComponentArgsRest(__VLS_6), false));
    var __VLS_9 = void 0;
    var __VLS_10 = void 0;
    var __VLS_11 = void 0;
    var __VLS_12 = {
        onGenerate: (__VLS_ctx.onGenerate)
    };
    var __VLS_8;
}
{
    var __VLS_thisSlot = __VLS_3.slots.results;
    var __VLS_13 = {}.TaskList;
    /** @type {[typeof __VLS_components.TaskList, typeof __VLS_components.taskList, ]} */ ;
    // @ts-ignore
    var __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13(__assign({ 'onCustom': {} }, { 'onReachTop': {} })));
    var __VLS_15 = __VLS_14.apply(void 0, __spreadArray([__assign({ 'onCustom': {} }, { 'onReachTop': {} })], __VLS_functionalComponentArgsRest(__VLS_14), false));
    var __VLS_17 = void 0;
    var __VLS_18 = void 0;
    var __VLS_19 = void 0;
    var __VLS_20 = {
        onCustom: (__VLS_ctx.onCustom)
    };
    var __VLS_21 = {
        onReachTop: (__VLS_ctx.onReachTop)
    };
    var __VLS_16;
}
var __VLS_3;
var __VLS_dollars;
var __VLS_self;
