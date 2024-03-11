"use strict";
var Message;
(function (Message) {
    Message["Success"] = "SUCCESS";
    Message["Failure"] = "FAILURE";
})(Message || (Message = {}));
function getMessage(c) {
    return c ? Message.Success : Message.Failure;
}
