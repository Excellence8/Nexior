"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IChatConversationAction = exports.IChatMessageState = void 0;
var IChatMessageState;
(function (IChatMessageState) {
    IChatMessageState["PENDING"] = "pending";
    IChatMessageState["ANSWERING"] = "answering";
    IChatMessageState["FINISHED"] = "finished";
    IChatMessageState["FAILED"] = "failed";
})(IChatMessageState || (exports.IChatMessageState = IChatMessageState = {}));
var IChatConversationAction;
(function (IChatConversationAction) {
    IChatConversationAction["CHAT"] = "chat";
    IChatConversationAction["RETRIEVE"] = "retrieve";
    IChatConversationAction["UPDATE"] = "update";
    IChatConversationAction["DELETE"] = "delete";
    IChatConversationAction["RETRIEVE_BATCH"] = "retrieve_batch";
})(IChatConversationAction || (exports.IChatConversationAction = IChatConversationAction = {}));
