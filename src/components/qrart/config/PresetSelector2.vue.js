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
var constants_1 = require("@/constants");
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
exports.default = (0, vue_1.defineComponent)({
    name: 'PresetSelector',
    components: {
        ElImage: element_plus_1.ElImage
    },
    data: function () {
        return {
            options: [
                {
                    value: 'sunset',
                    label: this.$t('qrart.preset.sunset'),
                    url: 'https://cdn.acedata.cloud/rp1h1s.png'
                },
                {
                    value: 'floral',
                    label: this.$t('qrart.preset.floral'),
                    url: 'https://cdn.acedata.cloud/upyikx.png'
                },
                {
                    value: 'snowflakes',
                    label: this.$t('qrart.preset.snowflakes'),
                    url: 'https://cdn.acedata.cloud/j447da.png'
                },
                {
                    value: 'feathers',
                    label: this.$t('qrart.preset.feathers'),
                    url: 'https://cdn.acedata.cloud/d2ctz9.png'
                },
                {
                    value: 'raindrops',
                    label: this.$t('qrart.preset.raindrops'),
                    url: 'https://cdn.acedata.cloud/xv2t3s.png'
                },
                {
                    value: 'ultra-realism',
                    label: this.$t('qrart.preset.ultraRealism'),
                    url: 'https://cdn.acedata.cloud/nlor4y.png'
                },
                {
                    value: 'epic-realms',
                    label: this.$t('qrart.preset.epicRealms'),
                    url: 'https://cdn.acedata.cloud/wwzkvy.png'
                },
                {
                    value: 'intricate-studio',
                    label: this.$t('qrart.preset.intricateStudio'),
                    url: 'https://cdn.acedata.cloud/4kzf5y.png'
                },
                {
                    value: 'symmetric-masterpiece',
                    label: this.$t('qrart.preset.symmetricMasterpiece'),
                    url: 'https://cdn.acedata.cloud/ff4ii2.png'
                },
                {
                    value: 'luminous-highway',
                    label: this.$t('qrart.preset.luminousHighway'),
                    url: 'https://cdn.acedata.cloud/cliodt.png'
                },
                {
                    value: 'celestial-journey',
                    label: this.$t('qrart.preset.celestialJourney'),
                    url: 'https://cdn.acedata.cloud/ejellf.png'
                },
                {
                    value: 'neon-mech',
                    label: this.$t('qrart.preset.neonMech'),
                    url: 'https://cdn.acedata.cloud/3z0y6z.png'
                },
                {
                    value: 'ethereal-low-poly',
                    label: this.$t('qrart.preset.etherealLowPoly'),
                    url: 'https://cdn.acedata.cloud/36o0mm.png'
                },
                {
                    value: 'golden-vista',
                    label: this.$t('qrart.preset.goldenVista'),
                    url: 'https://cdn.acedata.cloud/xa0267.png'
                },
                {
                    value: 'cinematic-expanse',
                    label: this.$t('qrart.preset.cinematicExpanse'),
                    url: 'https://cdn.acedata.cloud/krl5qp.png'
                },
                {
                    value: 'cinematic-warm',
                    label: this.$t('qrart.preset.cinematicWarm'),
                    url: 'https://cdn.acedata.cloud/e1aahg.png'
                },
                {
                    value: 'desolate-wilderness',
                    label: this.$t('qrart.preset.desolateWilderness'),
                    url: 'https://cdn.acedata.cloud/9evqqu.png'
                },
                {
                    value: 'vibrant-palette',
                    label: this.$t('qrart.preset.vibrantPalette'),
                    url: 'https://cdn.acedata.cloud/3fvsmz.png'
                },
                {
                    value: 'enigmatic-journey',
                    label: this.$t('qrart.preset.enigmaticJourney'),
                    url: 'https://cdn.acedata.cloud/l6kku0.png'
                },
                {
                    value: 'timeless-cinematic',
                    label: this.$t('qrart.preset.timelessCinematic'),
                    url: 'https://cdn.acedata.cloud/h5mzyn.png'
                },
                {
                    value: 'regal-galaxy',
                    label: this.$t('qrart.preset.regalGalaxy'),
                    url: 'https://cdn.acedata.cloud/czkegd.png'
                },
                {
                    value: 'illustrious-canvas',
                    label: this.$t('qrart.preset.illustriousCanvas'),
                    url: 'https://cdn.acedata.cloud/m8hwzh.png'
                },
                {
                    value: 'expressive-mural',
                    label: this.$t('qrart.preset.expressiveMural'),
                    url: 'https://cdn.acedata.cloud/g4v1rb.png'
                },
                {
                    value: 'serene-haze',
                    label: this.$t('qrart.preset.sereneHaze'),
                    url: 'https://cdn.acedata.cloud/3w3ixr.png'
                }
            ]
        };
    },
    computed: {
        value: {
            get: function () {
                var _a, _b;
                return (_b = (_a = this.$store.state.qrart) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.preset;
            },
            set: function (val) {
                var _a;
                console.debug('set qrw', val);
                this.$store.commit('qrart/setConfig', __assign(__assign({}, (_a = this.$store.state.qrart) === null || _a === void 0 ? void 0 : _a.config), { preset: val }));
            }
        }
    },
    mounted: function () {
        if (!this.value) {
            this.value = constants_1.QRART_DEFAULT_PRESET;
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElImage: element_plus_1.ElImage
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "field" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "text-sm font-bold block mb-2" }));
(__VLS_ctx.$t('qrart.name.preset'));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "pane" }));
var _loop_1 = function (option, optionKey) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.value === option.value ? (__VLS_ctx.value = undefined) : (__VLS_ctx.value = option.value);
        } }, { key: (optionKey) }), { class: ({
            item: true,
            active: __VLS_ctx.value === option.value
        }) }));
    var __VLS_0 = {}.ElImage;
    /** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ src: (option.url), fit: "fill" }, { class: "preview" })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ src: (option.url), fit: "fill" }, { class: "preview" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "name" }));
    (option.label);
};
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.options)); _i < _a.length; _i++) {
    var _b = _a[_i], option = _b[0], optionKey = _b[1];
    _loop_1(option, optionKey);
}
/** @type {__VLS_StyleScopedClasses['field']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['pane']} */ ;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['preview']} */ ;
/** @type {__VLS_StyleScopedClasses['name']} */ ;
var __VLS_dollars;
var __VLS_self;
