var guding = JSON.parse($response.body);
console.log($response.body);

guding.content["userId"] = "1";
guding.content["identityType"] = 1;
guding.content["headUrl"] = "https://raw.githubusercontent.com/Guding88/iCon/main/Guding.png";
guding.content["isActivate"] = 1;

$done({ body: JSON.stringify(guding) });
