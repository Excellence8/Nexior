"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SORA_ALLOWED_DURATIONS_BY_MODEL = exports.SORA_DEFAULT_EXTEND_IMG = exports.SORA_DEFAULT_TRANSLATION = exports.SORA_DEFAULT_ORIENTATION = exports.SORA_DEFAULT_ACTION = exports.SORA_ALLOWED_SIZES = exports.SORA_DEFAULT_SIZE = exports.SORA_DEFAULT_DURATION = exports.SORA_DEFAULT_MODEL = exports.SORA_MODEL_PRO = exports.SORA_MODEL_STANDARD = exports.SORA_SERVICE_ID = void 0;
exports.SORA_SERVICE_ID = 'b0761231-74e6-42d3-a095-c1987a61e900';
exports.SORA_MODEL_STANDARD = 'sora-2';
exports.SORA_MODEL_PRO = 'sora-2-pro';
exports.SORA_DEFAULT_MODEL = exports.SORA_MODEL_STANDARD;
exports.SORA_DEFAULT_DURATION = 10;
exports.SORA_DEFAULT_SIZE = 'small';
exports.SORA_ALLOWED_SIZES = ['small', 'large'];
exports.SORA_DEFAULT_ACTION = 'text2video';
exports.SORA_DEFAULT_ORIENTATION = 'landscape';
exports.SORA_DEFAULT_TRANSLATION = false;
exports.SORA_DEFAULT_EXTEND_IMG = false;
exports.SORA_ALLOWED_DURATIONS_BY_MODEL = (_a = {},
    _a[exports.SORA_MODEL_STANDARD] = [10, 15],
    _a[exports.SORA_MODEL_PRO] = [10, 15, 25],
    _a);
