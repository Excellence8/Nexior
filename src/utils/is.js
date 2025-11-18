"use strict";
/**
 * Js JSON string
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSubOfficial = exports.isOfficial = exports.isWechatBrowser = exports.isJSONString = void 0;
exports.isImageUrl = isImageUrl;
var constants_1 = require("@/constants");
var isJSONString = function (str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
};
exports.isJSONString = isJSONString;
/**
 * Check if the string is wechat browser
 */
var isWechatBrowser = function () {
    var ua = navigator.userAgent.toLowerCase();
    return ua.includes('micromessenger');
};
exports.isWechatBrowser = isWechatBrowser;
/**
 * isOfficial
 */
var isOfficial = function () {
    return window.location.host.includes(constants_1.BASE_HOST_HUB);
};
exports.isOfficial = isOfficial;
/**
 * isSubOfficial
 */
var isSubOfficial = function () {
    return (0, exports.isOfficial)() && window.location.host !== constants_1.BASE_HOST_HUB;
};
exports.isSubOfficial = isSubOfficial;
/**
 * is image url
 */
function isImageUrl(url) {
    if (!url) {
        return false;
    }
    return /\.(jpg|jpeg|png|gif|bmp|webp|svg|tiff|ico|heic?)$/i.test(url.toLowerCase());
}
