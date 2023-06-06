var response = $response.body; 
var modifiedResponse = response.replace(/1/g, "0"); 

$done({ body: modifiedResponse }); 