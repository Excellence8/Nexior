"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConsumption = exports.getPriceString = exports.getPrice = void 0;
var mapping_1 = require("@/constants/mapping");
var store_1 = require("@/store");
var json_logic_js_1 = require("json-logic-js");
/**
 * Input a value and target currency (e.g. cny), return the price which the current locale
 */
var getPrice = function (payload) {
    var exchange = store_1.default.state.exchange;
    var value = payload.value, _a = payload.currency, currency = _a === void 0 ? store_1.default.state.currency || 'usd' : _a;
    var label = mapping_1.CURRENCY_LABEL_MAPPING[currency];
    if (!exchange) {
        return {
            value: value,
            currency: currency,
            label: label
        };
    }
    var key = "usd-".concat(currency);
    var rate = exchange[key];
    if (rate) {
        value = value * rate;
    }
    console.log('new price', { value: value, currency: currency });
    return {
        value: value,
        currency: currency,
        label: label
    };
};
exports.getPrice = getPrice;
var getPriceString = function (payload) {
    var _a;
    var value = payload.value, defaultValue = payload.defaultValue, _b = payload.fractionDigits, fractionDigits = _b === void 0 ? 2 : _b;
    if (value === undefined) {
        value = defaultValue;
    }
    if (value === undefined) {
        return '';
    }
    var price = (0, exports.getPrice)({
        value: value
    });
    return "".concat(price.label).concat((_a = price.value) === null || _a === void 0 ? void 0 : _a.toFixed(fractionDigits));
};
exports.getPriceString = getPriceString;
var getConsumption = function (payload, rules) {
    console.debug('getConsumption payload', payload, rules);
    if (!rules || !Array.isArray(rules)) {
        return undefined;
    }
    console.debug('payload', payload);
    console.debug('rules', rules);
    for (var _i = 0, rules_1 = rules; _i < rules_1.length; _i++) {
        var rule = rules_1[_i];
        var conditions = rule.conditions;
        if (json_logic_js_1.default.apply(conditions, payload)) {
            return json_logic_js_1.default.apply(rule.consumption);
        }
    }
    return 0;
};
exports.getConsumption = getConsumption;
