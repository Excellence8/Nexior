"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseUrlAuth = exports.getBaseUrlHub = exports.getBaseUrlPlatform = void 0;
var constants_1 = require("@/constants");
/**
 * Get base url of platform app
 * @returns
 */
var getBaseUrlPlatform = function () {
    if (import.meta.env.VITE_BASE_URL_PLATFORM) {
        return import.meta.env.VITE_BASE_URL_PLATFORM;
    }
    return constants_1.BASE_URL_PLATFORM;
};
exports.getBaseUrlPlatform = getBaseUrlPlatform;
/**
 * Get base url of hub app
 * @returns
 */
var getBaseUrlHub = function () {
    if (import.meta.env.VITE_BASE_URL_HUB) {
        return import.meta.env.VITE_BASE_URL_HUB;
    }
    return window.location.origin || constants_1.BASE_URL_HUB;
};
exports.getBaseUrlHub = getBaseUrlHub;
/**
 * Get base url of auth app
 * @returns
 */
var getBaseUrlAuth = function () {
    if (import.meta.env.VITE_BASE_URL_AUTH) {
        return import.meta.env.VITE_BASE_URL_AUTH;
    }
    return constants_1.BASE_URL_AUTH;
};
exports.getBaseUrlAuth = getBaseUrlAuth;
