"use strict";
function createEmail(to, subject) {
    if (subject)
        return to + ":" + subject;
    else
        return to + ":" + "No Subject";
}
function add(x, y, z) {
    if (z)
        return x + y + z;
    else
        return x + y;
}
