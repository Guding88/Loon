let responseBody = $response.body;

// 将非字符串类型的 responseBody 转换为字符串
if (typeof responseBody !== "string") {
  responseBody = JSON.stringify(responseBody);
}

// 修改字符串内容
responseBody = {
  "errcode": 0,
  "errmsg": "success",
  "data": {
    "uid": 127539345,
    "bookCoins": 555,
    "rechargeCoins": 555,
    "rechargeCount": 555,
    "vipRechargeCount": 5,
    "vipRechargeMoney": 5,
    "consumeCoins": 5,
    "consumeCount": 5,
    "bdConsumeCount": 5,
    "paymentUser": true,
    "freeUser": 0,
    "createdOn": 1686126799000,
    "modifiedOn": 1686126799000,
    "isVip": true
  }
};

let modifiedBody = JSON.stringify(responseBody);

$done({ body: modifiedBody });
