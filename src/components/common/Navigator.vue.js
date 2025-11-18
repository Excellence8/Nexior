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
var vue_1 = require("vue");
var element_plus_1 = require("element-plus");
var constants_1 = require("@/router/constants");
var chat_1 = require("@/constants/chat");
var Logo_vue_1 = require("./Logo.vue");
var Center_vue_1 = require("@/components/user/Center.vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'Navigator',
    components: {
        ElImage: element_plus_1.ElImage,
        Logo: Logo_vue_1.default,
        ElTooltip: element_plus_1.ElTooltip,
        UserCenter: Center_vue_1.default
    },
    props: {
        direction: {
            type: String,
            default: 'column'
        }
    },
    data: function () {
        return {
            operating: {
                dark: false,
                locale: false
            },
            activeIndex: this.$route.name
        };
    },
    computed: {
        links: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40;
            var result = [];
            // Add chatgpt's leftmost icon
            if ((_e = (_d = (_c = (_b = (_a = this.$store) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.site) === null || _c === void 0 ? void 0 : _c.features) === null || _d === void 0 ? void 0 : _d.chatgpt) === null || _e === void 0 ? void 0 : _e.enabled) {
                result.push({
                    route: {
                        name: constants_1.ROUTE_CHATGPT_CONVERSATION_NEW
                    },
                    displayName: this.$t('common.nav.chatgpt'),
                    logo: chat_1.CHAT_MODEL_ICON_CHATGPT,
                    routes: [constants_1.ROUTE_CHATGPT_CONVERSATION, constants_1.ROUTE_CHATGPT_CONVERSATION_NEW]
                });
            }
            // Add deepseek's leftmost icon
            if ((_k = (_j = (_h = (_g = (_f = this.$store) === null || _f === void 0 ? void 0 : _f.state) === null || _g === void 0 ? void 0 : _g.site) === null || _h === void 0 ? void 0 : _h.features) === null || _j === void 0 ? void 0 : _j.deepseek) === null || _k === void 0 ? void 0 : _k.enabled) {
                result.push({
                    route: {
                        name: constants_1.ROUTE_DEEPSEEK_CONVERSATION_NEW
                    },
                    displayName: this.$t('common.nav.deepseek'),
                    logo: chat_1.CHAT_MODEL_ICON_DEEPSEEK,
                    routes: [constants_1.ROUTE_DEEPSEEK_CONVERSATION, constants_1.ROUTE_DEEPSEEK_CONVERSATION_NEW]
                });
            }
            // Add grok's leftmost icon
            if ((_q = (_p = (_o = (_m = (_l = this.$store) === null || _l === void 0 ? void 0 : _l.state) === null || _m === void 0 ? void 0 : _m.site) === null || _o === void 0 ? void 0 : _o.features) === null || _p === void 0 ? void 0 : _p.grok) === null || _q === void 0 ? void 0 : _q.enabled) {
                result.push({
                    route: {
                        name: constants_1.ROUTE_GROK_CONVERSATION_NEW
                    },
                    displayName: this.$t('common.nav.grok'),
                    logo: chat_1.CHAT_MODEL_ICON_GROK,
                    routes: [constants_1.ROUTE_GROK_CONVERSATION, constants_1.ROUTE_GROK_CONVERSATION_NEW]
                });
            }
            // Add midjourney's leftmost icon
            if ((_v = (_u = (_t = (_s = (_r = this.$store) === null || _r === void 0 ? void 0 : _r.state) === null || _s === void 0 ? void 0 : _s.site) === null || _t === void 0 ? void 0 : _t.features) === null || _u === void 0 ? void 0 : _u.midjourney) === null || _v === void 0 ? void 0 : _v.enabled) {
                result.push({
                    route: {
                        name: constants_1.ROUTE_MIDJOURNEY_INDEX
                    },
                    displayName: this.$t('common.nav.midjourney'),
                    logo: 'https://cdn.acedata.cloud/wto43b.png',
                    routes: [constants_1.ROUTE_MIDJOURNEY_INDEX]
                });
            }
            // Add flux's leftmost icon
            if ((_0 = (_z = (_y = (_x = (_w = this.$store) === null || _w === void 0 ? void 0 : _w.state) === null || _x === void 0 ? void 0 : _x.site) === null || _y === void 0 ? void 0 : _y.features) === null || _z === void 0 ? void 0 : _z.flux) === null || _0 === void 0 ? void 0 : _0.enabled) {
                result.push({
                    route: {
                        name: constants_1.ROUTE_FLUX_INDEX
                    },
                    displayName: this.$t('common.nav.flux'),
                    logo: 'https://cdn.acedata.cloud/ogm2oa.png',
                    routes: [constants_1.ROUTE_FLUX_INDEX]
                });
            }
            // Add nanobanana's leftmost icon
            if ((_5 = (_4 = (_3 = (_2 = (_1 = this.$store) === null || _1 === void 0 ? void 0 : _1.state) === null || _2 === void 0 ? void 0 : _2.site) === null || _3 === void 0 ? void 0 : _3.features) === null || _4 === void 0 ? void 0 : _4.nanobanana) === null || _5 === void 0 ? void 0 : _5.enabled) {
                result.push({
                    route: {
                        name: constants_1.ROUTE_NANOBANANA_INDEX
                    },
                    displayName: this.$t('common.nav.nanobanana'),
                    logo: 'https://cdn.acedata.cloud/859plc.jpg',
                    routes: [constants_1.ROUTE_NANOBANANA_INDEX]
                });
            }
            // Add qrart's leftmost icon
            // if (this.$store?.state?.site?.features?.qrart?.enabled) {
            //   result.push({
            //     route: {
            //       name: ROUTE_QRART_INDEX
            //     },
            //     displayName: this.$t('common.nav.qrart'),
            //     routes: [ROUTE_QRART_INDEX, ROUTE_QRART_HISTORY]
            //   });
            // }
            // Add suno's leftmost icon
            if ((_10 = (_9 = (_8 = (_7 = (_6 = this.$store) === null || _6 === void 0 ? void 0 : _6.state) === null || _7 === void 0 ? void 0 : _7.site) === null || _8 === void 0 ? void 0 : _8.features) === null || _9 === void 0 ? void 0 : _9.suno) === null || _10 === void 0 ? void 0 : _10.enabled) {
                result.push({
                    route: {
                        name: constants_1.ROUTE_SUNO_INDEX
                    },
                    displayName: this.$t('common.nav.suno'),
                    logo: 'https://cdn.acedata.cloud/l3ffw7.jpg',
                    routes: [constants_1.ROUTE_SUNO_INDEX, constants_1.ROUTE_SUNO_HISTORY]
                });
            }
            // Add luma's leftmost icon
            if ((_15 = (_14 = (_13 = (_12 = (_11 = this.$store) === null || _11 === void 0 ? void 0 : _11.state) === null || _12 === void 0 ? void 0 : _12.site) === null || _13 === void 0 ? void 0 : _13.features) === null || _14 === void 0 ? void 0 : _14.luma) === null || _15 === void 0 ? void 0 : _15.enabled) {
                result.push({
                    route: {
                        name: constants_1.ROUTE_LUMA_INDEX
                    },
                    displayName: this.$t('common.nav.luma'),
                    logo: 'https://cdn.acedata.cloud/ahjfwi.png',
                    routes: [constants_1.ROUTE_LUMA_INDEX, constants_1.ROUTE_LUMA_HISTORY]
                });
            }
            // Add pika's leftmost icon
            // if (this.$store?.state?.site?.features?.pika?.enabled) {
            //   result.push({
            //     route: {
            //       name: ROUTE_PIKA_INDEX
            //     },
            //     displayName: this.$t('common.nav.pika'),
            //     logo: 'https://cdn.acedata.cloud/i80tgn.png',
            //     routes: [ROUTE_PIKA_INDEX, ROUTE_PIKA_HISTORY]
            //   });
            // }
            // Add hailuo's leftmost icon
            if ((_20 = (_19 = (_18 = (_17 = (_16 = this.$store) === null || _16 === void 0 ? void 0 : _16.state) === null || _17 === void 0 ? void 0 : _17.site) === null || _18 === void 0 ? void 0 : _18.features) === null || _19 === void 0 ? void 0 : _19.hailuo) === null || _20 === void 0 ? void 0 : _20.enabled) {
                result.push({
                    route: {
                        name: constants_1.ROUTE_HAILUO_INDEX
                    },
                    displayName: this.$t('common.nav.hailuo'),
                    logo: 'https://cdn.acedata.cloud/0qg4gp.png',
                    routes: [constants_1.ROUTE_HAILUO_INDEX, constants_1.ROUTE_HAILUO_HISTORY]
                });
            }
            // Add kling's leftmost icon
            if ((_25 = (_24 = (_23 = (_22 = (_21 = this.$store) === null || _21 === void 0 ? void 0 : _21.state) === null || _22 === void 0 ? void 0 : _22.site) === null || _23 === void 0 ? void 0 : _23.features) === null || _24 === void 0 ? void 0 : _24.kling) === null || _25 === void 0 ? void 0 : _25.enabled) {
                result.push({
                    route: {
                        name: constants_1.ROUTE_KLING_INDEX
                    },
                    displayName: this.$t('common.nav.kling'),
                    logo: 'https://cdn.acedata.cloud/qpbbbb.jpg',
                    routes: [constants_1.ROUTE_KLING_INDEX, constants_1.ROUTE_KLING_HISTORY]
                });
            }
            // Add veo's leftmost icon
            if ((_30 = (_29 = (_28 = (_27 = (_26 = this.$store) === null || _26 === void 0 ? void 0 : _26.state) === null || _27 === void 0 ? void 0 : _27.site) === null || _28 === void 0 ? void 0 : _28.features) === null || _29 === void 0 ? void 0 : _29.veo) === null || _30 === void 0 ? void 0 : _30.enabled) {
                result.push({
                    route: {
                        name: constants_1.ROUTE_VEO_INDEX
                    },
                    displayName: this.$t('common.nav.veo'),
                    logo: 'https://cdn.acedata.cloud/8nxyy9.jpg',
                    routes: [constants_1.ROUTE_VEO_INDEX, constants_1.ROUTE_VEO_HISTORY]
                });
            }
            // Add sora's leftmost icon
            if ((_35 = (_34 = (_33 = (_32 = (_31 = this.$store) === null || _31 === void 0 ? void 0 : _31.state) === null || _32 === void 0 ? void 0 : _32.site) === null || _33 === void 0 ? void 0 : _33.features) === null || _34 === void 0 ? void 0 : _34.sora) === null || _35 === void 0 ? void 0 : _35.enabled) {
                result.push({
                    route: {
                        name: constants_1.ROUTE_SORA_INDEX
                    },
                    displayName: this.$t('common.nav.sora'),
                    logo: 'https://cdn.acedata.cloud/z5id1u.png',
                    routes: [constants_1.ROUTE_SORA_INDEX, constants_1.ROUTE_SORA_HISTORY]
                });
            }
            // Add pixverse's leftmost icon
            if ((_40 = (_39 = (_38 = (_37 = (_36 = this.$store) === null || _36 === void 0 ? void 0 : _36.state) === null || _37 === void 0 ? void 0 : _37.site) === null || _38 === void 0 ? void 0 : _38.features) === null || _39 === void 0 ? void 0 : _39.pixverse) === null || _40 === void 0 ? void 0 : _40.enabled) {
                result.push({
                    route: {
                        name: constants_1.ROUTE_PIXVERSE_INDEX
                    },
                    displayName: this.$t('common.nav.pixverse'),
                    logo: 'https://cdn.acedata.cloud/viy61r.jpg',
                    routes: [constants_1.ROUTE_PIXVERSE_INDEX, constants_1.ROUTE_PIXVERSE_HISTORY]
                });
            }
            // Add headshots's leftmost icon
            // if (this.$store?.state?.site?.features?.headshots?.enabled) {
            //   result.push({
            //     route: {
            //       name: ROUTE_HEADSHOTS_INDEX
            //     },
            //     displayName: this.$t('common.nav.headshots'),
            //     icon: 'fa-solid fa-id-card',
            //     routes: [ROUTE_HEADSHOTS_INDEX, ROUTE_HEADSHOTS_HISTORY]
            //   });
            // }
            if (this.direction === 'row') {
                result.push({
                    route: {
                        name: constants_1.ROUTE_PROFILE_INDEX
                    },
                    displayName: this.$t('common.nav.profile'),
                    icon: 'fa-solid fa-user',
                    routes: [constants_1.ROUTE_PROFILE_INDEX]
                });
            }
            return result;
        },
        authenticated: function () {
            return !!this.$store.state.token.access;
        }
    },
    methods: {
        onHome: function () {
            this.$router.push({
                name: constants_1.ROUTE_INDEX
            });
        }
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    ElImage: element_plus_1.ElImage,
    Logo: Logo_vue_1.default,
    ElTooltip: element_plus_1.ElTooltip,
    UserCenter: Center_vue_1.default
};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['top']} */ ;
/** @type {__VLS_StyleScopedClasses['top']} */ ;
/** @type {__VLS_StyleScopedClasses['link']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ direction: (__VLS_ctx.direction) }, { class: "navigator" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "top" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "w-full flex justify-center brand" }));
if (__VLS_ctx.direction === 'column') {
    var __VLS_0 = {}.logo;
    /** @type {[typeof __VLS_components.Logo, typeof __VLS_components.logo, ]} */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ 'onClick': {} })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ 'onClick': {} })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    var __VLS_4 = void 0;
    var __VLS_5 = void 0;
    var __VLS_6 = void 0;
    var __VLS_7 = {
        onClick: (__VLS_ctx.onHome)
    };
    var __VLS_3;
}
var _loop_1 = function (link, linkIndex) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: (linkIndex) }, { class: ({ link: true, active: link.routes.includes(__VLS_ctx.$route.name) }) }));
    var __VLS_8 = {}.ElTooltip;
    /** @type {[typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ]} */ ;
    // @ts-ignore
    var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        effect: "dark",
        content: (link.displayName),
        placement: (__VLS_ctx.direction === 'row' ? 'top' : 'right'),
    }));
    var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([{
            effect: "dark",
            content: (link.displayName),
            placement: (__VLS_ctx.direction === 'row' ? 'top' : 'right'),
        }], __VLS_functionalComponentArgsRest(__VLS_9), false));
    __VLS_11.slots.default;
    if (link.logo) {
        var __VLS_12 = {}.ElImage;
        /** @type {[typeof __VLS_components.ElImage, typeof __VLS_components.elImage, ]} */ ;
        // @ts-ignore
        var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign(__assign({ 'onClick': {} }, { src: (link.logo) }), { class: "avatar" })));
        var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { src: (link.logo) }), { class: "avatar" })], __VLS_functionalComponentArgsRest(__VLS_13), false));
        var __VLS_16 = void 0;
        var __VLS_17 = void 0;
        var __VLS_18 = void 0;
        var __VLS_19 = {
            onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!(link.logo))
                    return;
                __VLS_ctx.$router.push(link.route);
            }
        };
    }
};
var __VLS_15, __VLS_11;
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.links)); _i < _a.length; _i++) {
    var _b = _a[_i], link = _b[0], linkIndex = _b[1];
    _loop_1(link, linkIndex);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "bottom" }));
var __VLS_20 = {}.UserCenter;
/** @type {[typeof __VLS_components.UserCenter, typeof __VLS_components.userCenter, ]} */ ;
// @ts-ignore
var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_21), false));
/** @type {__VLS_StyleScopedClasses['navigator']} */ ;
/** @type {__VLS_StyleScopedClasses['top']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['brand']} */ ;
/** @type {__VLS_StyleScopedClasses['link']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom']} */ ;
var __VLS_dollars;
var __VLS_self;
