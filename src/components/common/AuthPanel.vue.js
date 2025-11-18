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
var element_plus_1 = require("element-plus");
var utils_1 = require("@/utils");
var typescript_cookie_1 = require("typescript-cookie");
var vue_qrcode_1 = require("vue-qrcode");
var router_1 = require("@/router");
exports.default = (0, vue_1.defineComponent)({
    name: 'AuthPanel',
    components: {
        ElDialog: element_plus_1.ElDialog,
        QrCode: vue_qrcode_1.default
    },
    data: function () {
        return {
            showQR: false,
            qrLink: ''
        };
    },
    computed: {
        iframeUrl: function () {
            return "".concat((0, utils_1.getBaseUrlAuth)(), "/auth/login?inviter_id=").concat(this.inviterId);
        },
        inviterId: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
            // if forceInviterId is set, then use forceInviterId
            if ((_d = (_c = (_b = (_a = this.$store) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.site) === null || _c === void 0 ? void 0 : _c.distribution) === null || _d === void 0 ? void 0 : _d.force_inviter_id) {
                return (_h = (_g = (_f = (_e = this.$store) === null || _e === void 0 ? void 0 : _e.state) === null || _f === void 0 ? void 0 : _f.site) === null || _g === void 0 ? void 0 : _g.distribution) === null || _h === void 0 ? void 0 : _h.force_inviter_id;
            }
            // Otherwise, use the inviter_id in the url, then use the inviter_id in the cookie, and finally use the default inviter_id
            var result = ((_j = this.$route.query.inviter_id) === null || _j === void 0 ? void 0 : _j.toString()) ||
                (0, typescript_cookie_1.getCookie)('INVITER_ID') ||
                ((_o = (_m = (_l = (_k = this.$store) === null || _k === void 0 ? void 0 : _k.state) === null || _l === void 0 ? void 0 : _l.site) === null || _m === void 0 ? void 0 : _m.distribution) === null || _o === void 0 ? void 0 : _o.default_inviter_id);
            return result;
        },
        authenticated: function () {
            return !!this.$store.state.token.access;
        }
    },
    mounted: function () {
        var _this = this;
        window.addEventListener('message', function (event) { return __awaiter(_this, void 0, void 0, function () {
            var data, token, data;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (event.origin !== (0, utils_1.getBaseUrlAuth)()) {
                            return [2 /*return*/];
                        }
                        console.debug('received from child page', event);
                        if (!(event.data.name === 'login')) return [3 /*break*/, 6];
                        data = event.data.data;
                        token = {
                            access: data.access_token,
                            refresh: data.refresh_token,
                            expiration: data.expires_in
                        };
                        return [4 /*yield*/, this.$store.dispatch('setToken', token)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.$store.dispatch('getUser')];
                    case 2:
                        _b.sent();
                        if (!!((_a = this.$store.state.site) === null || _a === void 0 ? void 0 : _a.origin)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.$store.dispatch('initializeSite')];
                    case 3:
                        _b.sent();
                        // after initialization, navigate to the site config page
                        return [4 /*yield*/, this.$router.push({
                                name: router_1.ROUTE_SITE_INDEX
                            })];
                    case 4:
                        // after initialization, navigate to the site config page
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        window.location.reload();
                        _b.label = 6;
                    case 6:
                        if (event.data.name === 'show_qr') {
                            data = event.data.data;
                            this.qrLink = data.qrLink;
                            this.showQR = true;
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElDialog: element_plus_1.ElDialog,
    QrCode: vue_qrcode_1.default
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
var __VLS_0 = {}.ElDialog;
/** @type {[typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    modelValue: (!__VLS_ctx.authenticated),
    modalClass: "dialog",
    width: "400px",
    showClose: (false),
    closeOnPressEscape: (false),
    closeOnClickModal: (false),
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        modelValue: (!__VLS_ctx.authenticated),
        modalClass: "dialog",
        width: "400px",
        showClose: (false),
        closeOnPressEscape: (false),
        closeOnClickModal: (false),
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.iframe)({
    width: "360",
    height: "560",
    src: (__VLS_ctx.iframeUrl),
    frameborder: "0",
});
var __VLS_3;
var __VLS_4 = {}.ElDialog;
/** @type {[typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    modelValue: (__VLS_ctx.showQR),
    width: "400px",
    showClose: (true),
}));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{
        modelValue: (__VLS_ctx.showQR),
        width: "400px",
        showClose: (true),
    }], __VLS_functionalComponentArgsRest(__VLS_5), false));
__VLS_7.slots.default;
if (__VLS_ctx.qrLink) {
    var __VLS_8 = {}.QrCode;
    /** @type {[typeof __VLS_components.QrCode, typeof __VLS_components.qrCode, ]} */ ;
    // @ts-ignore
    var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign(__assign({ value: (__VLS_ctx.qrLink), width: (230), height: (230) }, { class: "qrcode w-[320px] h-[320px] block mx-auto mb-[20px]" }), { type: ('image/jpeg'), color: ({ dark: '#000000ff', light: '#ffffffff' }) })));
    var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign(__assign({ value: (__VLS_ctx.qrLink), width: (230), height: (230) }, { class: "qrcode w-[320px] h-[320px] block mx-auto mb-[20px]" }), { type: ('image/jpeg'), color: ({ dark: '#000000ff', light: '#ffffffff' }) })], __VLS_functionalComponentArgsRest(__VLS_9), false));
}
var __VLS_7;
/** @type {__VLS_StyleScopedClasses['qrcode']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[320px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[320px]']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-[20px]']} */ ;
var __VLS_dollars;
var __VLS_self;
