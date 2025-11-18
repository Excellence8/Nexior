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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var disk_png_1 = require("@/assets/images/disk.png");
var vue_1 = require("vue");
var vuex_1 = require("vuex");
var store = (0, vuex_1.useStore)();
var audio = (0, vue_1.computed)({
    get: function () { return store.state.suno.audio; },
    set: function (value) { return store.commit('suno/setAudio', value); }
});
// watch audio change and play
(0, vue_1.watch)(audio, function (value, oldValue) {
    // url changed
    if ((value === null || value === void 0 ? void 0 : value.audio_url) !== (oldValue === null || oldValue === void 0 ? void 0 : oldValue.audio_url)) {
        console.log('audio changed', value);
        if (value.object) {
            console.log('111', value.object);
            // delete old object
            value.object.pause();
            delete value.object;
        }
        var object_1 = new Audio(value.audio_url);
        if (value.state === 'playing') {
            object_1.play();
        }
        else {
            object_1.pause();
        }
        // listen to the time change of audio
        object_1.addEventListener('loadedmetadata', function () {
            object_1.currentTime = 0;
            object_1.addEventListener('timeupdate', function () {
                store.commit('suno/setAudio', __assign(__assign({}, store.state.suno.audio), { progress: object_1.currentTime }));
            });
        });
        store.commit('suno/setAudio', __assign(__assign({}, store.state.suno.audio), { object: object_1 }));
    }
    else if ((value === null || value === void 0 ? void 0 : value.progress) !== (oldValue === null || oldValue === void 0 ? void 0 : oldValue.progress) && Math.abs(value.progress - value.object.currentTime) > 2) {
        console.log('progress changed', value.progress);
        var audio_1 = store.state.suno.audio;
        if (audio_1.object) {
            audio_1.object.currentTime = audio_1.progress;
        }
    }
    else if ((value === null || value === void 0 ? void 0 : value.state) !== (oldValue === null || oldValue === void 0 ? void 0 : oldValue.state)) {
        console.log('state changed', value.state);
        if (value.object) {
            if (value.state === 'playing') {
                value.object.play();
            }
            else {
                value.object.pause();
            }
        }
    }
    if ((value === null || value === void 0 ? void 0 : value.volume) !== (oldValue === null || oldValue === void 0 ? void 0 : oldValue.volume)) {
        console.log('volume changed', value.volume);
        if (value.object) {
            value.object.volume = value.volume / 100;
        }
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex player-song" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign(__assign({ alt: "" }, { class: "w-11 h-11 rounded" }), { src: (((_a = __VLS_ctx.audio) === null || _a === void 0 ? void 0 : _a.image_url) || __VLS_ctx.OpticalDisk) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "ml-2 text-xs flex flex-col justify-between" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "w-52 2xl:w-96 cursor-pointer truncate" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(((_b = __VLS_ctx.audio) === null || _b === void 0 ? void 0 : _b.title) || 'Music');
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "ml-2 text-dc" }));
(((_c = __VLS_ctx.audio) === null || _c === void 0 ? void 0 : _c.style) || "SmallRuralDog");
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['player-song']} */ ;
/** @type {__VLS_StyleScopedClasses['w-11']} */ ;
/** @type {__VLS_StyleScopedClasses['h-11']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['w-52']} */ ;
/** @type {__VLS_StyleScopedClasses['2xl:w-96']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['truncate']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-dc']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            OpticalDisk: disk_png_1.default,
            audio: audio,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
