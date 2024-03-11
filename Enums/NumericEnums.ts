enum nResponse {
    No = 0,
    Yes = 1,
}

function getResponseType(response: boolean) {
    return response ? nResponse.Yes : nResponse.No;
}