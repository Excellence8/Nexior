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
var vite_1 = require("vite");
var plugin_vue_1 = require("@vitejs/plugin-vue");
var plugin_replace_1 = require("@rollup/plugin-replace");
var path = require("path");
exports.default = (0, vite_1.defineConfig)(function (config) {
    process.env = __assign(__assign({}, process.env), (0, vite_1.loadEnv)(config.mode, process.cwd()));
    return {
        server: {
            host: 'localhost',
            port: 8084,
            proxy: {
                '/api/v1/auth': {
                    target: process.env.VITE_BASE_URL_AUTH,
                    changeOrigin: true
                },
                '/api/v1/users': {
                    target: process.env.VITE_BASE_URL_AUTH,
                    changeOrigin: true
                },
                '/oauth2/v1/token': {
                    target: process.env.VITE_BASE_URL_AUTH,
                    changeOrigin: true
                },
                '/api': {
                    target: process.env.VITE_BASE_URL_PLATFORM,
                    changeOrigin: true
                },
                '/static': {
                    target: process.env.VITE_BASE_URL_PLATFORM,
                    changeOrigin: true
                }
            }
        },
        plugins: [
            (0, plugin_vue_1.default)(),
            (0, plugin_replace_1.default)({
                preventAssignment: true
            })
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        }
    };
});
