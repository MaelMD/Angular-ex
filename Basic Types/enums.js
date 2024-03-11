"use strict";
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Autumn"] = 2] = "Autumn";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
;
let currentSeason;
function logValue(arg) {
    console.log(arg);
}
function noReturn() {
    console.log("No Return");
}
