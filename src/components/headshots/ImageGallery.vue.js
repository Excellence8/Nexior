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
var vue_1 = require("vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'ImageGallery',
    props: {
        modelValue: {
            type: Object,
            required: true
        }
    },
    setup: function (props) {
        // Computed property to extract the first two images
        var images = (0, vue_1.computed)(function () {
            var _a, _b, _c;
            return ((_c = (_b = (_a = props.modelValue) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.slice(0, 2)) || [];
        });
        // Method to handle the "View Image" button click
        var viewImage = function (url) {
            window.open(url, '_blank');
        };
        return {
            images: images,
            viewImage: viewImage
        };
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['view-button']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "image-gallery" }));
var _loop_1 = function (image, index) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: (index) }, { class: "image-container" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (image.image_url),
        alt: "Image",
    });
    if (image.image_url) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!(image.image_url))
                    return;
                __VLS_ctx.viewImage(image.image_url);
            } }, { class: "view-button" }));
        (__VLS_ctx.$t('headshots.button.viewImage'));
    }
};
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.images)); _i < _a.length; _i++) {
    var _b = _a[_i], image = _b[0], index = _b[1];
    _loop_1(image, index);
}
/** @type {__VLS_StyleScopedClasses['image-gallery']} */ ;
/** @type {__VLS_StyleScopedClasses['image-container']} */ ;
/** @type {__VLS_StyleScopedClasses['view-button']} */ ;
var __VLS_dollars;
var __VLS_self;
