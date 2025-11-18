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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRedirect = exports.getInviterId = void 0;
var store_1 = require("@/store");
var baseUrl_1 = require("./baseUrl");
var typescript_cookie_1 = require("typescript-cookie");
var getInviterId = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    // if forceInviterId is set, then use forceInviterId
    if ((_c = (_b = (_a = store_1.default === null || store_1.default === void 0 ? void 0 : store_1.default.state) === null || _a === void 0 ? void 0 : _a.site) === null || _b === void 0 ? void 0 : _b.distribution) === null || _c === void 0 ? void 0 : _c.force_inviter_id) {
        return (_f = (_e = (_d = store_1.default === null || store_1.default === void 0 ? void 0 : store_1.default.state) === null || _d === void 0 ? void 0 : _d.site) === null || _e === void 0 ? void 0 : _e.distribution) === null || _f === void 0 ? void 0 : _f.force_inviter_id;
    }
    // parse the query string and set to cookies
    var query = new URLSearchParams(window.location.search);
    // Otherwise, use the inviter_id in the url, then use the inviter_id in the cookie, and finally use the default inviter_id
    var result = query.get('inviter_id') || (0, typescript_cookie_1.getCookie)('INVITER_ID') || ((_j = (_h = (_g = store_1.default === null || store_1.default === void 0 ? void 0 : store_1.default.state) === null || _g === void 0 ? void 0 : _g.site) === null || _h === void 0 ? void 0 : _h.distribution) === null || _j === void 0 ? void 0 : _j.default_inviter_id);
    return result;
};
exports.getInviterId = getInviterId;
var loginRedirect = function (_a) {
    var _b = _a.redirect, redirect = _b === void 0 ? '/' : _b, _c = _a.site, site = _c === void 0 ? window.location.origin : _c;
    var hubBaseUrl = (0, baseUrl_1.getBaseUrlHub)();
    var authBaseUrl = (0, baseUrl_1.getBaseUrlAuth)();
    var inviterId = (0, exports.getInviterId)();
    // callback url used to init access token and then redirect back of `redirect`
    var callbackUrl = "".concat(hubBaseUrl, "/auth/callback?redirect=").concat(redirect);
    // redirect to auth service to get access token then redirect back
    var targetBaseUrl = "".concat(authBaseUrl, "/auth/login");
    var targetQuery = __assign(__assign({ site: site }, (inviterId ? { inviter_id: inviterId } : {})), (callbackUrl ? { redirect: callbackUrl } : {}));
    var targetUrl = "".concat(targetBaseUrl, "?").concat(new URLSearchParams(targetQuery).toString());
    window.location.href = targetUrl;
};
exports.loginRedirect = loginRedirect;
