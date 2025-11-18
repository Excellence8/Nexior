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
exports.highlight = void 0;
var i18n_1 = require("@/i18n");
var copy_to_clipboard_1 = require("copy-to-clipboard");
var highlight = function (el) { return __awaiter(void 0, void 0, void 0, function () {
    var hl, blocks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require('highlight.js'); })];
            case 1:
                hl = (_a.sent()).default;
                blocks = el.querySelectorAll('pre code');
                blocks.forEach(function (code) {
                    var pre = code.parentElement;
                    if (!pre)
                        return;
                    if (pre.dataset.hasCopy === '1') {
                        if ('highlightElement' in hl)
                            hl.highlightElement(code);
                        else
                            hl.highlightBlock(code);
                        return;
                    }
                    var wrapper = document.createElement('div');
                    wrapper.className = 'relative';
                    pre.parentNode.insertBefore(wrapper, pre);
                    wrapper.appendChild(pre);
                    pre.classList.add('overflow-auto');
                    var btn = document.createElement('button');
                    btn.type = 'button';
                    btn.dataset.copyBtn = '1';
                    btn.className =
                        'absolute top-1 right-1 z-10 rounded-md px-2 py-1 text-xs ' +
                            'bg-zinc-800 text-white hover:bg-zinc-700 active:scale-95';
                    btn.textContent = i18n_1.default.global.t('common.button.copy').toString();
                    btn.addEventListener('click', function () {
                        var _a;
                        (0, copy_to_clipboard_1.default)(code.innerText);
                        var old = btn.textContent;
                        btn.textContent = (_a = i18n_1.default.global.t('common.button.copied')) === null || _a === void 0 ? void 0 : _a.toString();
                        setTimeout(function () { return (btn.textContent = old); }, 5000);
                    });
                    wrapper.appendChild(btn);
                    pre.dataset.hasCopy = '1';
                    if ('highlightElement' in hl)
                        hl.highlightElement(code);
                    else
                        hl.highlightBlock(code);
                });
                return [2 /*return*/];
        }
    });
}); };
exports.highlight = highlight;
