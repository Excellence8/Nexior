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
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatOperator = void 0;
var axios_1 = require("axios");
var models_1 = require("@/models");
var constants_1 = require("@/constants");
var ChatOperator = /** @class */ (function () {
    function ChatOperator() {
    }
    ChatOperator.prototype.chatConversation = function (data, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var response, errorText, status_1, errorJson, errorMessage, errorCode, reader, decoder, finalAnswer, id, buffer, _a, done, value, lines, _i, lines_1, line, trimmedLine, subValue, json, error_1;
                        var _b, _c;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    _d.trys.push([0, 7, , 8]);
                                    return [4 /*yield*/, fetch("".concat(constants_1.BASE_URL_API, "/aichat/conversations"), {
                                            method: 'POST',
                                            headers: {
                                                authorization: "Bearer ".concat(options.token),
                                                'Content-Type': 'application/json',
                                                Accept: 'text/event-stream'
                                            },
                                            signal: options.signal,
                                            body: JSON.stringify(data)
                                        })];
                                case 1:
                                    response = _d.sent();
                                    if (!!response.ok) return [3 /*break*/, 3];
                                    return [4 /*yield*/, response.text()];
                                case 2:
                                    errorText = _d.sent();
                                    status_1 = response.status;
                                    errorJson = errorText ? JSON.parse(errorText) : {};
                                    errorMessage = ((_b = errorJson === null || errorJson === void 0 ? void 0 : errorJson.error) === null || _b === void 0 ? void 0 : _b.message) || 'An error occurred';
                                    errorCode = ((_c = errorJson === null || errorJson === void 0 ? void 0 : errorJson.error) === null || _c === void 0 ? void 0 : _c.code) || constants_1.ERROR_CODE_API_ERROR;
                                    console.error('Error message:', errorMessage, 'Error code:', errorCode);
                                    reject(new models_1.BaseError(status_1, errorCode, errorMessage));
                                    return [2 /*return*/];
                                case 3:
                                    if (!response.body)
                                        throw new models_1.ApiError('ReadableStream not supported.');
                                    reader = response.body.getReader();
                                    decoder = new TextDecoder();
                                    finalAnswer = '';
                                    id = void 0;
                                    buffer = '';
                                    _d.label = 4;
                                case 4:
                                    if (!true) return [3 /*break*/, 6];
                                    return [4 /*yield*/, reader.read()];
                                case 5:
                                    _a = _d.sent(), done = _a.done, value = _a.value;
                                    if (done)
                                        return [3 /*break*/, 6];
                                    buffer += decoder.decode(value, { stream: true });
                                    lines = buffer.split('\n');
                                    buffer = lines.pop() || '';
                                    for (_i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
                                        line = lines_1[_i];
                                        trimmedLine = line.trim();
                                        if (!trimmedLine)
                                            continue;
                                        if (trimmedLine.startsWith('data: ')) {
                                            subValue = trimmedLine.substring(6).trim();
                                            if (subValue === '[DONE]') {
                                                resolve({ answer: finalAnswer, delta_answer: '' });
                                                return [2 /*return*/];
                                            }
                                            try {
                                                json = JSON.parse(subValue);
                                                if (json.delta_answer) {
                                                    finalAnswer += json.delta_answer;
                                                }
                                                if (json.id) {
                                                    id = json.id;
                                                }
                                                if (options === null || options === void 0 ? void 0 : options.stream) {
                                                    options.stream({
                                                        answer: finalAnswer,
                                                        delta_answer: json.delta_answer || '',
                                                        id: id
                                                    });
                                                }
                                            }
                                            catch (err) {
                                                console.error('JSON parse error:', err);
                                            }
                                        }
                                    }
                                    return [3 /*break*/, 4];
                                case 6:
                                    resolve({ answer: finalAnswer, delta_answer: '' });
                                    return [3 /*break*/, 8];
                                case 7:
                                    error_1 = _d.sent();
                                    console.error('Error:', error_1);
                                    reject(error_1);
                                    return [3 /*break*/, 8];
                                case 8: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    ChatOperator.prototype.getConversations = function (filter, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post("/aichat/conversations", __assign(__assign(__assign({ action: models_1.IChatConversationAction.RETRIEVE_BATCH }, (filter.ids
                            ? {
                                ids: filter.ids
                            }
                            : {})), (filter.applicationId
                            ? {
                                application_id: filter.applicationId
                            }
                            : {})), (filter.userId
                            ? {
                                user_id: filter.userId
                            }
                            : {})), {
                            headers: {
                                'content-type': 'application/json',
                                authorization: "Bearer ".concat(options.token),
                                'x-record-exempt': 'true'
                            },
                            baseURL: constants_1.BASE_URL_API
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChatOperator.prototype.deleteConversation = function (id, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post("/aichat/conversations", {
                            action: models_1.IChatConversationAction.DELETE,
                            id: id
                        }, {
                            headers: {
                                'content-type': 'application/json',
                                authorization: "Bearer ".concat(options.token),
                                'x-record-exempt': 'true'
                            },
                            baseURL: constants_1.BASE_URL_API
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChatOperator.prototype.updateConversation = function (payload, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post("/aichat/conversations", __assign({ action: models_1.IChatConversationAction.UPDATE }, payload), {
                            headers: {
                                'content-type': 'application/json',
                                authorization: "Bearer ".concat(options.token),
                                'x-record-exempt': 'true'
                            },
                            baseURL: constants_1.BASE_URL_API,
                            signal: options.signal
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ChatOperator;
}());
exports.chatOperator = new ChatOperator();
