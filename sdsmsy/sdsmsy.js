var guding = JSON.parse($response.body);

guding.isSubscribed = true;

$done({
  body: JSON.stringify(guding)
});
