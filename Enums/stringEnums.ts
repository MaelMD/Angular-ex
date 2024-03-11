enum Message {
    Success = "SUCCESS",
    Failure = "FAILURE",
}

function getMessage(c: boolean) {
    return c ? Message.Success : Message.Failure;
}