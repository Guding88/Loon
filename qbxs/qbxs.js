var guding = JSON.parse($response.body);
console.log($response.body);

guding.data["bookCoins"] = 99999;
guding.data["rechargeCoins"] = 99999;
guding.data["rechargeCount"] = 999;
guding.data["vipRechargeCount"] = 999;
guding.data["vipRechargeMoney"] = 9999;
guding.data["consumeCoins"] = 9999;
guding.data["consumeCount"] = 999;
guding.data["bdConsumeCount"] = 999;
guding.data["paymentUser"] = true;
guding.data["freeUser"] = 99;
guding.data["isVip"] = true;

$done({ body: JSON.stringify(guding) });
