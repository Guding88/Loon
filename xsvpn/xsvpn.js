var response = $response.body; // 获取响应体内容
var modifiedResponse = response.replace(/1/g, "0"); // 将所有的"1"替换为"0"

$done({ body: modifiedResponse }); // 返回修改后的响应体