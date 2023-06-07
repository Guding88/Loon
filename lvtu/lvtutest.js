var guding = JSON.parse($response.body);

guding.data["userId"] = "1";
guding.data["identityType"] = "1";
guding.data["headUrl"] = "https://raw.githubusercontent.com/Guding88/iCon/main/Guding.png";
guding.data["isActivate"] = "1";

$done({ body: JSON.stringify(guding) });
