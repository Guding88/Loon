let body = {
  "success" : true,
  "message" : "success",
  "state" : 200,
  "content" : {
    "headUrl" : "https://raw.githubusercontent.com/Guding88/iCon/main/Guding.png",
    "isMountSwitch" : 0,
    "isAnchor" : 1,
    "isSYGuidePopUp" : 1,
    "isShowAppletWX" : 0,
    "isDistributor" : 0,
    "isShowGrey" : 0,
    "levDesc" : "无耻的破解会员",
    "totalCashBalance" : 0,
    "userName" : "仅供测试使用",
    "userId" : "1",
    "phoneNum" : "",
    "identityType" : 1,
    "cashBalance" : 0,
    "isShowBroadcast" : 0,
    "isShowShareBtn" : 0,
    "isShowAppletDY" : 0,
    "isActivate" : 1
  }
}

$done({ body: JSON.stringify(body) });
