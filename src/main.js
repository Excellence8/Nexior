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
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var router_1 = require("./router");
var store_1 = require("./store");
var i18n_1 = require("./i18n");
require("./assets/scss/style.scss");
require("./assets/css/tailwind.css");
require("mac-scrollbar/dist/mac-scrollbar.css");
var dayjs_1 = require("./plugins/dayjs");
require("./plugins/font-awesome");
var motion_1 = require("@vueuse/motion");
var element_plus_1 = require("element-plus");
var initializer_1 = require("./utils/initializer");
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var isRedirected, app;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, initializer_1.initializeRedirect)()];
            case 1:
                isRedirected = _a.sent();
                if (isRedirected) {
                    // if redirected, stop initialization
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, initializer_1.initializeCookies)()];
            case 2:
                _a.sent();
                return [4 /*yield*/, (0, initializer_1.initializeToken)()];
            case 3:
                _a.sent();
                return [4 /*yield*/, (0, initializer_1.initializeUser)()];
            case 4:
                _a.sent();
                return [4 /*yield*/, (0, initializer_1.initializeSite)()];
            case 5:
                _a.sent();
                // non-async and no need to await
                (0, initializer_1.initializeCurrency)();
                (0, initializer_1.initializeTheme)();
                (0, initializer_1.initializeExchangeRate)();
                (0, initializer_1.initializeTitle)();
                (0, initializer_1.initializeDescription)();
                (0, initializer_1.initializeKeywords)();
                (0, initializer_1.initializeFavicon)();
                (0, initializer_1.initializeFingerprint)();
                app = (0, vue_1.createApp)(App_vue_1.default);
                app.use(router_1.default);
                app.use(store_1.default);
                app.use(i18n_1.default);
                app.use(motion_1.MotionPlugin);
                app.use(dayjs_1.default, {
                    formatString: 'YYYY-MM-DD HH:mm:ss'
                });
                app.directive('loading', element_plus_1.vLoading);
                app.mount('#app');
                console.debug('app mounted');
                // make app available globally
                // @ts-ignore
                window.app = app;
                return [2 /*return*/];
        }
    });
}); };
main();
