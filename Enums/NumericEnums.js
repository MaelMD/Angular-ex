"use strict";
var nResponse;
(function (nResponse) {
    nResponse[nResponse["No"] = 0] = "No";
    nResponse[nResponse["Yes"] = 1] = "Yes";
})(nResponse || (nResponse = {}));
function getResponseType(response) {
    return response ? nResponse.Yes : nResponse.No;
}
