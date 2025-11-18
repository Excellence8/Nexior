"use strict";
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
exports.initializeFingerprint = exports.initializeRedirect = exports.initializeExchangeRate = exports.initializeCurrency = exports.initializeUser = exports.initializeTheme = exports.initializeToken = exports.initializeSite = exports.initializeFavicon = exports.initializeKeywords = exports.initializeDescription = exports.initializeTitle = exports.initializeCookies = exports.getDomain = void 0;
var typescript_cookie_1 = require("typescript-cookie");
var favicon_ico_1 = require("@/assets/images/favicon.ico");
var theme_1 = require("./theme");
var store_1 = require("@/store");
var psl_1 = require("psl");
var constants_1 = require("@/constants");
var is_1 = require("./is");
var i18n_1 = require("@/i18n");
var getDomain = function (host) {
    if (host === void 0) { host = window.location.hostname; }
    var parsed = (0, psl_1.parse)(host);
    if ('error' in parsed && parsed.error) {
        return host;
    }
    if (!('listed' in parsed) || !parsed.listed) {
        return host;
    }
    if (parsed.domain === host) {
        return host;
    }
    return '.' + parsed.domain;
};
exports.getDomain = getDomain;
// @ts-ignore
window.getDomain = exports.getDomain;
var initializeCookies = function () { return __awaiter(void 0, void 0, void 0, function () {
    var query, inviterId, expiration, theme, isDark, lang, locale;
    return __generator(this, function (_a) {
        query = new URLSearchParams(window.location.search);
        inviterId = query.get('inviter_id');
        if (inviterId) {
            expiration = new Date();
            expiration.setDate(expiration.getDate() + 7);
            console.debug('set INVITER_ID to cookies', inviterId);
            (0, typescript_cookie_1.setCookie)('INVITER_ID', inviterId, {
                expires: expiration,
                path: '/',
                domain: (0, exports.getDomain)()
            });
        }
        theme = query.get('theme');
        if (theme) {
            console.log('set THEME to cookies', theme);
            (0, typescript_cookie_1.setCookie)('THEME', theme, {
                path: '/',
                domain: (0, exports.getDomain)()
            });
        }
        else if (!(0, typescript_cookie_1.getCookie)('THEME')) {
            isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            console.debug('set THEME to cookies', isDark ? 'dark' : 'light');
            (0, typescript_cookie_1.setCookie)('THEME', isDark ? 'dark' : 'light', {
                path: '/',
                domain: (0, exports.getDomain)()
            });
        }
        lang = query.get('lang');
        locale = undefined;
        if (lang) {
            locale = (0, i18n_1.getLocale)(lang);
        }
        else if (!(0, typescript_cookie_1.getCookie)('LOCALE')) {
            locale = (0, i18n_1.getLocale)();
        }
        if (locale) {
            console.debug('set LOCALE to cookies', locale);
            (0, typescript_cookie_1.setCookie)('LOCALE', locale, {
                path: '/',
                domain: (0, exports.getDomain)()
            });
        }
        return [2 /*return*/];
    });
}); };
exports.initializeCookies = initializeCookies;
/**
 * Initialize title.
 */
var initializeTitle = function () { return __awaiter(void 0, void 0, void 0, function () {
    var title, titleElement;
    var _a;
    return __generator(this, function (_b) {
        title = ((_a = store_1.default.state.site) === null || _a === void 0 ? void 0 : _a.title) || '';
        titleElement = document.querySelector('title');
        if (!titleElement) {
            titleElement = document.createElement('title');
            document.head.appendChild(titleElement);
        }
        titleElement.innerHTML = title;
        return [2 /*return*/];
    });
}); };
exports.initializeTitle = initializeTitle;
/**
 * Initialize description.
 */
var initializeDescription = function () { return __awaiter(void 0, void 0, void 0, function () {
    var description, metaTag;
    var _a;
    return __generator(this, function (_b) {
        description = ((_a = store_1.default.state.site) === null || _a === void 0 ? void 0 : _a.description) || '';
        metaTag = document.querySelector('meta[name="description"]');
        if (!metaTag) {
            metaTag = document.createElement('meta');
            metaTag.setAttribute('name', 'description');
            document.head.appendChild(metaTag);
        }
        metaTag.setAttribute('content', description);
        return [2 /*return*/];
    });
}); };
exports.initializeDescription = initializeDescription;
/**
 * Initialize keywords in meta
 */
var initializeKeywords = function () { return __awaiter(void 0, void 0, void 0, function () {
    var keywords, metaTag;
    var _a, _b;
    return __generator(this, function (_c) {
        keywords = ((_b = (_a = store_1.default.state.site) === null || _a === void 0 ? void 0 : _a.keywords) === null || _b === void 0 ? void 0 : _b.join(',')) || '';
        metaTag = document.querySelector('meta[name="keywords"]');
        if (!metaTag) {
            metaTag = document.createElement('meta');
            metaTag.setAttribute('name', 'keywords');
            document.head.appendChild(metaTag);
        }
        metaTag.setAttribute('content', keywords);
        return [2 /*return*/];
    });
}); };
exports.initializeKeywords = initializeKeywords;
/**
 * Initialize favicon.
 */
var initializeFavicon = function () { return __awaiter(void 0, void 0, void 0, function () {
    var favIconUrl, faviconElement;
    var _a;
    return __generator(this, function (_b) {
        favIconUrl = ((_a = store_1.default.state.site) === null || _a === void 0 ? void 0 : _a.favicon) || '';
        faviconElement = document.querySelector('link[rel="icon"]');
        if (!faviconElement) {
            faviconElement = document.createElement('link');
            faviconElement.rel = 'icon';
            document.head.appendChild(faviconElement);
        }
        faviconElement.href = favIconUrl || favicon_ico_1.default;
        return [2 /*return*/];
    });
}); };
exports.initializeFavicon = initializeFavicon;
/**
 * Need to initialize site before render contents
 */
var initializeSite = function () { return __awaiter(void 0, void 0, void 0, function () {
    var site;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store_1.default.dispatch('getSite')];
            case 1:
                _a.sent();
                site = store_1.default.state.site;
                console.debug('site', site);
                if (!!(site === null || site === void 0 ? void 0 : site.origin)) return [3 /*break*/, 3];
                return [4 /*yield*/, store_1.default.dispatch('initializeSite')];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.initializeSite = initializeSite;
/**
 * Initialize token by code
 */
var initializeToken = function () { return __awaiter(void 0, void 0, void 0, function () {
    var query, code, token;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                query = new URLSearchParams(window.location.search);
                code = query.get('code');
                console.debug('get code', code);
                if (!code) return [3 /*break*/, 2];
                console.debug('start get token by code', code);
                return [4 /*yield*/, store_1.default.dispatch('getToken', code)];
            case 1:
                token = _a.sent();
                console.debug('success get token', token);
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); };
exports.initializeToken = initializeToken;
/**
 * Initialize theme
 */
var initializeTheme = function () { return __awaiter(void 0, void 0, void 0, function () {
    var theme;
    return __generator(this, function (_a) {
        theme = (0, typescript_cookie_1.getCookie)('THEME') || 'dark';
        console.debug('initialize theme', theme);
        (0, theme_1.applyTheme)(theme);
        return [2 /*return*/];
    });
}); };
exports.initializeTheme = initializeTheme;
/**
 * Initialize user by token
 */
var initializeUser = function () { return __awaiter(void 0, void 0, void 0, function () {
    var token, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                token = store_1.default.state.token;
                if (!(token === null || token === void 0 ? void 0 : token.access)) {
                    console.debug('no access token, skip get user');
                    return [2 /*return*/];
                }
                console.debug('start to get user');
                return [4 /*yield*/, store_1.default.dispatch('getUser')];
            case 1:
                user = _a.sent();
                console.debug('get user', user);
                return [2 /*return*/];
        }
    });
}); };
exports.initializeUser = initializeUser;
var initializeCurrency = function () { return __awaiter(void 0, void 0, void 0, function () {
    var locale, mapping, currency;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                locale = (0, typescript_cookie_1.getCookie)('LOCALE');
                console.debug('initialize currency', locale);
                mapping = constants_1.LOCALE_CURRENCY_MAPPING;
                currency = 'usd';
                if (locale && mapping[locale]) {
                    currency = mapping[locale];
                }
                console.debug('set currency', currency);
                return [4 /*yield*/, store_1.default.dispatch('setCurrency', currency)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.initializeCurrency = initializeCurrency;
var initializeExchangeRate = function () { return __awaiter(void 0, void 0, void 0, function () {
    var locale, mapping, target, source, payload;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                locale = (0, typescript_cookie_1.getCookie)('LOCALE');
                mapping = constants_1.LOCALE_CURRENCY_MAPPING;
                if (!locale || !mapping[locale]) {
                    return [2 /*return*/];
                }
                target = mapping[locale];
                source = 'usd';
                payload = { source: source, target: target };
                console.debug('initialize exchange rate', payload);
                return [4 /*yield*/, store_1.default.dispatch('getExchangeRate', payload)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.initializeExchangeRate = initializeExchangeRate;
var initializeRedirect = function () { return __awaiter(void 0, void 0, void 0, function () {
    var date, newUrl;
    return __generator(this, function (_a) {
        if ((0, is_1.isOfficial)() && !(0, is_1.isSubOfficial)() && (0, is_1.isWechatBrowser)()) {
            console.debug('redirect to sub domain with prefix');
            date = new Date().toISOString().split('T')[0].replace(/-/g, '');
            newUrl = window.location.href.replace(constants_1.BASE_HOST_HUB, "".concat(date, ".").concat(constants_1.BASE_HOST_HUB));
            console.debug('redirect to', newUrl);
            window.location.href = newUrl;
            return [2 /*return*/, true];
        }
        return [2 /*return*/, false];
    });
}); };
exports.initializeRedirect = initializeRedirect;
var initializeFingerprint = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store_1.default.dispatch('getFingerprint')];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.initializeFingerprint = initializeFingerprint;
// ES6 导出
export {
  initializeRedirect,
  initializeFingerprint,
  initializeExchangeRate,
  initializeCurrency,
  initializeUser,
  initializeTheme,
  initializeToken,
  initializeSite,
  initializeFavicon,
  initializeKeywords,
  initializeDescription,
  initializeTitle,
  initializeCookies,
  getDomain
};