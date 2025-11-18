"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooManyRequestsError = exports.TimeoutError = exports.ForbiddenError = exports.BusyError = exports.ApiError = exports.BadRequestError = exports.BaseError = void 0;
var constants_1 = require("@/constants");
var BaseError = /** @class */ (function (_super) {
    __extends(BaseError, _super);
    function BaseError(status, code, detail, extraData) {
        var _this = _super.call(this) || this;
        _this.status = status;
        _this.code = code;
        _this.detail = detail;
        _this.extraData = extraData;
        return _this;
    }
    Object.defineProperty(BaseError.prototype, "message", {
        get: function () {
            return "".concat(this.code, " - ").concat(this.detail);
        },
        enumerable: false,
        configurable: true
    });
    return BaseError;
}(Error));
exports.BaseError = BaseError;
var BadRequestError = /** @class */ (function (_super) {
    __extends(BadRequestError, _super);
    function BadRequestError(detail, extraData) {
        return _super.call(this, constants_1.ERROR_STATUS_BAD_REQUEST, constants_1.ERROR_CODE_BAD_REQUEST, detail, extraData) || this;
    }
    return BadRequestError;
}(BaseError));
exports.BadRequestError = BadRequestError;
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    function ApiError(detail, extraData) {
        return _super.call(this, constants_1.ERROR_STATUS_API_ERROR, constants_1.ERROR_CODE_API_ERROR, detail, extraData) || this;
    }
    return ApiError;
}(BaseError));
exports.ApiError = ApiError;
var BusyError = /** @class */ (function (_super) {
    __extends(BusyError, _super);
    function BusyError(detail, extraData) {
        return _super.call(this, constants_1.ERROR_STATUS_BUSY, constants_1.ERROR_CODE_BUSY, detail, extraData) || this;
    }
    return BusyError;
}(BaseError));
exports.BusyError = BusyError;
var ForbiddenError = /** @class */ (function (_super) {
    __extends(ForbiddenError, _super);
    function ForbiddenError(detail, extraData) {
        return _super.call(this, constants_1.ERROR_STATUS_FORBIDDEN, constants_1.ERROR_CODE_FORBIDDEN, detail, extraData) || this;
    }
    return ForbiddenError;
}(BaseError));
exports.ForbiddenError = ForbiddenError;
var TimeoutError = /** @class */ (function (_super) {
    __extends(TimeoutError, _super);
    function TimeoutError(detail, extraData) {
        return _super.call(this, constants_1.ERROR_STATUS_TIMEOUT, constants_1.ERROR_CODE_TIMEOUT, detail, extraData) || this;
    }
    return TimeoutError;
}(BaseError));
exports.TimeoutError = TimeoutError;
var TooManyRequestsError = /** @class */ (function (_super) {
    __extends(TooManyRequestsError, _super);
    function TooManyRequestsError(detail, extraData) {
        return _super.call(this, constants_1.ERROR_STATUS_TOO_MANY_REQUESTS, constants_1.ERROR_CODE_TOO_MANY_REQUESTS, detail, extraData) || this;
    }
    return TooManyRequestsError;
}(BaseError));
exports.TooManyRequestsError = TooManyRequestsError;
