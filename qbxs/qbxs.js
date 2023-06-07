let guding = JSON.parse($response.body);
guding = {
  
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
}
  


$done({ body: JSON.stringify(guding) });
