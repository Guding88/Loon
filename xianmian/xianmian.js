const url =
  "https://appraven.net/AppRaven/app?t=sn&qt=pd&pr=Free&mr=0&mrc=0&ml=0&pg=0&g=Any&d=Universal&rare=0";
const method = "GET";
const headers = {
  "Accept-Encoding": "gzip, deflate, br",
  Cookie: "JSESSIONID=F6887C7D97DE6FA5469E56B35CF15FD5",
  Connection: "keep-alive",
  Accept: "*/*",
  Host: "appraven.net",
  "User-Agent": "AppRaven/1 CFNetwork/1399 Darwin/22.1.0",
  "Accept-Language": "zh-CN,zh-Hans;q=0.9",
};
const body = "";

const request = {
  url: url,
  method: method,
  headers: headers,
  body: body,
};

$httpClient.get(request, (error, response, data) => {
  if (error) {
    $notification.post("Error", "请检查脚本", error);
    $done();
  } else {
    var json = data;
    var obj = JSON.parse(json);
    var count = Object.keys(obj).length;
    var notice2 = " ";
    for (var i = 0; i < count; i++) {
      var count2 = obj[i].apps.length;
      var notice = "";
      for (var j = 0; j < count2; j++) {
        var app = obj[i].apps[j];
        var name = '🟢' + app.app_title;
        var original_price = app.last;
        var price = app.price;
        var link = "https://apps.apple.com/us/app/id" + app.application_id;
        var str = name +": $" + original_price + " --> $" + price + "\n" + link + "\n" + "\n";
        notice += str;
      }
      notice2 += notice;
    }
    console.log(notice2);
    $notification.post("Appraven", "今日限免已送达,点击查看日志👇", notice2);
    $done();
  }
});
