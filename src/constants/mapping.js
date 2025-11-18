"use strict";
/*
{ value: 'en', label: 'English' },
{ value: 'de', label: 'Deutsch' },
{ value: 'pt', label: 'Português' },
{ value: 'es', label: 'Español' },
{ value: 'fr', label: 'Français' },
{ value: 'zh-CN', label: '简体中文' },
{ value: 'zh-TW', label: '繁體中文' },
{ value: 'it', label: 'Italiano' },
{ value: 'ko', label: '한국어' },
{ value: 'ja', label: '日本語' },
{ value: 'ru', label: 'Русский' },
{ value: 'pl', label: 'Polski' },
{ value: 'fi', label: 'Suomi' },
{ value: 'sv', label: 'Svenska' },
{ value: 'el', label: 'Ελληνικά' },
{ value: 'uk', label: 'Українська' },
{ value: 'ar', label: 'العربية' },
{ value: 'sr', label: 'Српски' }
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.CURRENCY_LABEL_MAPPING = exports.LOCALE_CURRENCY_MAPPING = void 0;
exports.LOCALE_CURRENCY_MAPPING = {
    'zh-CN': 'cny',
    'zh-TW': 'cny',
    en: 'usd',
    de: 'eur',
    pt: 'eur',
    es: 'eur',
    fr: 'eur',
    it: 'eur',
    ko: 'krw',
    ja: 'jpy',
    ru: 'rub',
    pl: 'pln',
    fi: 'eur',
    sv: 'sek',
    el: 'eur',
    uk: 'uah',
    ar: 'sar',
    sr: 'rsd'
};
exports.CURRENCY_LABEL_MAPPING = {
    cny: '￥',
    usd: '$',
    eur: '€',
    jpy: '¥',
    krw: '₩',
    gbp: '£',
    rub: '₽',
    pln: 'zł',
    sek: 'kr',
    uah: '₴',
    sar: '﷼',
    rsd: 'din'
};
