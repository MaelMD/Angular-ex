"use strict";
function identity(arg) {
    console.log(typeof (arg));
    return arg;
}
identity(5);
identity("MD");
identity(true);
