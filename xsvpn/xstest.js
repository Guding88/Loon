var guding = JSON.parse($response.body);

for (let key in guding) {
  // 检查属性的类型
  if (typeof guding[key] === "undefined") {
    // 删除无法识别的标记
    delete guding[key];
  }
}

guding.data["vip"] = "0"

$done({
    body : JSON.stringify(guding)
});
