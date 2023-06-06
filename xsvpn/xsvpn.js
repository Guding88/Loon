var response = $response.body; 
var modifiedResponse = response.replace(/"vip":"1"/g, '"vip":"0"'); 

$done({ body: modifiedResponse }); 