var guding = JSON.parse($response.body);

guding.data[" v i p "] = "0"

$done({
    body : JSON.stringify(guding)
});
