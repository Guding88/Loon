/*******************************************
#!name = 旅途随身听
#!desc = 破解内购
#!openUrl = 
#!author = 骨钉
#!homepage = https://github.com/Guding88/Loon/tree/main/lvtu
#!icon = https://raw.githubusercontent.com/Guding88/iCon/main/ltsst.png

[Script]

http-response ^https?://www.1314zhilv.com/ltsstnew/user/getInfo script-path=https://raw.githubusercontent.com/Guding88/Loon/main/lvtu/lvtu.js, requires-body=true, timeout=10, tag=旅途随身听


[rewrite_local]

^https?://www.1314zhilv.com/ltsstnew/user/getInfo url script-response-body https://raw.githubusercontent.com/Guding88/Loon/main/lvtu/lvtu.js


[MITM]
host = www.1314zhilv.com


********************************************/


let body = {
  "success" : true,
  "message" : "success",
  "state" : 200,
  "content" : {
    "headUrl" : null,
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
