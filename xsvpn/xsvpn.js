var modifiedBody = $response.body.replace(/1/g, "0");
$done({ body: modifiedBody });