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
var icons_vue_1 = require("@element-plus/icons-vue");
var typescript_cookie_1 = require("typescript-cookie");
var initializer_1 = require("@/utils/initializer");
var i18n_1 = require("@/constants/i18n");
var i18n_2 = require("@/i18n");
exports.default = (0, vue_1.defineComponent)({
    name: 'Locale',
    components: {
        ElDropdown: element_plus_1.ElDropdown,
        ElDropdownMenu: element_plus_1.ElDropdownMenu,
        ElDropdownItem: element_plus_1.ElDropdownItem,
        ElIcon: element_plus_1.ElIcon,
        ArrowDown: icons_vue_1.ArrowDown
    },
    data: function () {
        return {
            locales: i18n_1.I18N_SUPPORTED_LOCALES
        };
    },
    computed: {
        value: function () {
            return this.$i18n.locale;
        },
        currentLabel: function () {
            var _this = this;
            var found = this.locales.find(function (l) { return l.value === _this.value; });
            return found ? found.label : this.value;
        }
    },
    methods: {
        onSelectLocale: function (locale) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.$router.push({ query: __assign(__assign({}, this.$route.query), { locale: undefined }) });
                            return [4 /*yield*/, (0, i18n_2.setI18nLanguage)(locale)];
                        case 1:
                            _a.sent();
                            (0, typescript_cookie_1.setCookie)('LOCALE', locale, {
                                path: '/',
                                domain: (0, initializer_1.getDomain)()
                            });
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
    ElDropdown: element_plus_1.ElDropdown,
    ElDropdownMenu: element_plus_1.ElDropdownMenu,
    ElDropdownItem: element_plus_1.ElDropdownItem,
    ElIcon: element_plus_1.ElIcon,
    ArrowDown: icons_vue_1.ArrowDown
};
var __VLS_components;
var __VLS_directives;
var __VLS_0 = {}.ElDropdown;
/** @type {[typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, typeof __VLS_components.ElDropdown, typeof __VLS_components.elDropdown, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ 'onCommand': {} }, { trigger: "click" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ 'onCommand': {} }, { trigger: "click" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_4;
var __VLS_5;
var __VLS_6;
var __VLS_7 = {
    onCommand: (__VLS_ctx.onSelectLocale)
};
var __VLS_8 = {};
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "el-dropdown-link" }));
(__VLS_ctx.currentLabel);
var __VLS_9 = {}.ElIcon;
/** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
// @ts-ignore
var __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9(__assign({ class: "el-icon--right" })));
var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([__assign({ class: "el-icon--right" })], __VLS_functionalComponentArgsRest(__VLS_10), false));
__VLS_12.slots.default;
var __VLS_13 = {}.ArrowDown;
/** @type {[typeof __VLS_components.ArrowDown, typeof __VLS_components.arrowDown, ]} */ ;
// @ts-ignore
var __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
var __VLS_15 = __VLS_14.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_14), false));
var __VLS_12;
{
    var __VLS_thisSlot = __VLS_3.slots.dropdown;
    var __VLS_17 = {}.ElDropdownMenu;
    /** @type {[typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, typeof __VLS_components.ElDropdownMenu, typeof __VLS_components.elDropdownMenu, ]} */ ;
    // @ts-ignore
    var __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({}));
    var __VLS_19 = __VLS_18.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_18), false));
    __VLS_20.slots.default;
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.locales)); _i < _a.length; _i++) {
        var _b = _a[_i], locale = _b[0], idx = _b[1];
        var __VLS_21 = {}.ElDropdownItem;
        /** @type {[typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, typeof __VLS_components.ElDropdownItem, typeof __VLS_components.elDropdownItem, ]} */ ;
        // @ts-ignore
        var __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
            key: (idx),
            command: (locale.value),
        }));
        var __VLS_23 = __VLS_22.apply(void 0, __spreadArray([{
                key: (idx),
                command: (locale.value),
            }], __VLS_functionalComponentArgsRest(__VLS_22), false));
        __VLS_24.slots.default;
        (locale.label);
        var __VLS_24;
    }
    var __VLS_20;
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['el-dropdown-link']} */ ;
/** @type {__VLS_StyleScopedClasses['el-icon--right']} */ ;
var __VLS_dollars;
var __VLS_self;
