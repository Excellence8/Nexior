"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderState = void 0;
var OrderState;
(function (OrderState) {
    OrderState["PENDING"] = "Pending";
    OrderState["PAID"] = "Paid";
    OrderState["EXPIRED"] = "Expired";
    OrderState["FAILED"] = "Failed";
    OrderState["FINISHED"] = "Finished";
})(OrderState || (exports.OrderState = OrderState = {}));
