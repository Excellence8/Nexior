"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isApplicationExpired = isApplicationExpired;
exports.isApplicationExhausted = isApplicationExhausted;
exports.isApplicationUsable = isApplicationUsable;
exports.getFinalApplication = getFinalApplication;
var models_1 = require("@/models");
/**
 * Get is application expired
 * @param application
 * @returns boolean
 */
function isApplicationExpired(application) {
    if (!(application === null || application === void 0 ? void 0 : application.expired_at)) {
        return false;
    }
    try {
        var expiredAt = new Date(application === null || application === void 0 ? void 0 : application.expired_at);
        return expiredAt < new Date();
    }
    catch (error) {
        return false;
    }
}
/**
 * Get is application has balance
 * @param application
 * @returns boolean
 */
function isApplicationExhausted(application) {
    console.debug('application remaining amount', application, application === null || application === void 0 ? void 0 : application.remaining_amount);
    return (application === null || application === void 0 ? void 0 : application.remaining_amount) && (application === null || application === void 0 ? void 0 : application.remaining_amount) < 0;
}
/**
 * Get is application is valid, has balance and not expired
 * @param application
 * @returns boolean
 */
function isApplicationUsable(application) {
    if (!application) {
        console.debug('application is undefined, return false');
        return false;
    }
    var isExhausted = isApplicationExhausted(application);
    var isExpired = isApplicationExpired(application);
    console.debug('is application exhausted', isExhausted);
    console.debug('is application expired', isExpired);
    return !isExhausted && !isExpired;
}
/**
 * get final application from applications
 * @param applications
 * @returns application
 */
function getFinalApplication(applications, currentApplication) {
    console.debug('start to execute getFinalApplication', applications, currentApplication);
    if (currentApplication &&
        isApplicationUsable(currentApplication) &&
        (applications === null || applications === void 0 ? void 0 : applications.some(function (app) { return app.id === currentApplication.id; }))) {
        console.debug('current application is usable', currentApplication);
        return currentApplication;
    }
    console.debug('get final application from applications', applications);
    // check if there is any application with 'Global' scope and 'Period' type, if yes, use it
    var application1 = applications === null || applications === void 0 ? void 0 : applications.find(function (application) { return application.scope === models_1.IApplicationScope.GLOBAL && application.type === models_1.IApplicationType.PERIOD; });
    console.debug('application1', application1);
    if (isApplicationUsable(application1)) {
        console.debug('application with global scope and Period type', application1);
        return application1;
    }
    // check if there is any application with 'Global' scope and 'Usage' type, if yes, use it
    var application2 = applications === null || applications === void 0 ? void 0 : applications.find(function (application) { return application.scope === models_1.IApplicationScope.GLOBAL && application.type === models_1.IApplicationType.USAGE; });
    console.debug('application2', application2);
    if (isApplicationUsable(application2)) {
        console.debug('application with global scope and Usage type', application2);
        return application2;
    }
    // check if there is any application with 'Period' type, if yes, use it
    var application3 = applications === null || applications === void 0 ? void 0 : applications.find(function (application) {
        return (application.scope === models_1.IApplicationScope.INDIVIDUAL && (application === null || application === void 0 ? void 0 : application.type)) === models_1.IApplicationType.PERIOD;
    });
    console.debug('application3', application3);
    if (isApplicationUsable(application3)) {
        console.debug('application with Period type', application3);
        return application3;
    }
    // check if there is any application with 'Usage' type, if yes, use it
    var application4 = applications === null || applications === void 0 ? void 0 : applications.find(function (application) {
        return (application.scope === models_1.IApplicationScope.INDIVIDUAL && (application === null || application === void 0 ? void 0 : application.type)) === models_1.IApplicationType.USAGE;
    });
    console.debug('application4', application4);
    if (isApplicationUsable(application4)) {
        console.debug('application with Usage type', application4);
        return application4;
    }
    return application1 || application2 || application3 || application4;
}
