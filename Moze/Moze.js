let Guding = JSON.parse($response.body);

Guding = {
  "request_date": "2023-06-07T03:44:05Z",
  "request_date_ms": 1686109445655,
  "subscriber": {
    "entitlements": {
      "MOZE_PREMIUM_SUBSCRIPTION": {
        "expires_date": "2099-12-31T00:00:00Z",
        "grace_period_expires_date": null,
        "product_identifier": "MOZE_PRO_SUBSCRIPTION_MONTHLY_BASIC",
        "purchase_date": "2023-06-07T03:43:43Z"
      }
    },
    "first_seen": "2023-06-07T00:40:42Z",
    "last_seen": "2023-06-07T00:40:42Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "Guding",
    "original_application_version": "10",
    "original_purchase_date": "2023-06-07T03:43:45Z",
    "other_purchases": {},
    "subscriptions": {
      "MOZE_PRO_SUBSCRIPTION_MONTHLY_BASIC": {
        "auto_resume_date": null,
        "billing_issues_detected_at": null,
        "expires_date": "2099-12-31T00:00:00Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2023-06-07T03:43:44Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2023-06-07T03:43:43Z",
        "refunded_at": null,
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
};

$done({ body: JSON.stringify(Guding) });
