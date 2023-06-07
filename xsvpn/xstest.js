var guding = JSON.parse($response.body);
guding.data["VIP"] = "0"
$done({
    body : JSON.stringify(guding)
});
