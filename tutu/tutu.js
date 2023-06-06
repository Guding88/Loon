
let body = {
{
    "request_date": "null",//请求时间
    "request_date_ms": null,//请求时间，毫秒
    "subscriber": {                  //订阅内容
        "entitlements": {
            "all": {
                "expires_date": "2099-12-31T23:59:59Z",     //到期时间
                "grace_period_expires_date": null,//优惠到期时间
                "product_identifier": "com.ziheng.totowallet.lifetime",//产品标识符
                "purchase_date": "2023-06-06T09:29:03Z"//购买日期
            }
        },
        "first_seen": "2023-06-06T09:26:12Z",
        "last_seen": "2023-06-06T09:26:12Z",
        "management_url": "https://apps.apple.com/account/subscriptions",
        "non_subscriptions": {},
        "original_app_user_id": "$RCAnonymousID:e4c6f82786454a3fb3a5ce8a18649c76",
        "original_application_version": "236",
        "original_purchase_date": "2023-06-06T09:13:19Z",//原始购买日期
        "other_purchases": {},
        "subscriptions": {
            "com.ziheng.totowallet.lifetime": {
                "auto_resume_date": null,
                "billing_issues_detected_at": null,
                "expires_date": "2099-12-31T23:59:59Z",
                "grace_period_expires_date": null,
                "is_sandbox": ture,
                "original_purchase_date": "2023-06-06T09:29:04Z",//原始购买日期
                "ownership_type": "PURCHASED",
                "period_type": "Cancelable",
                "purchase_date": "2023-06-06T09:29:03Z",//购买日期
                "refunded_at": null,
                "store": "app_store",
                "unsubscribe_detected_at": null
            }
        }
    }
}


}

$done({ body: JSON.stringify(body) });
