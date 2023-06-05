var body = $response.body;

var modifiedBody = {
  "auto": [],
  "hand": [
    {
      "ip": "146.190.170.69",
      "vip": "0",
      "na": "usa"
    }
  ],
  "tcp": [
    {
      "na": "usa",
      "mp": "17",
      "ip": "173.255.221.173",
      "vip": "0",
      "tcp_on": "1",
      "dp": "94107, 93945, 94030",
      "xp": "6"
    },
    {
      "na": "usa",
      "mp": "17",
      "ip": "45.33.46.170",
      "vip": "0",
      "tcp_on": "1",
      "dp": "94107, 93945, 94030",
      "xp": "6"
    },
    {
      "na": "usa",
      "mp": "17",
      "ip": "173.230.150.231",
      "vip": "0",
      "tcp_on": "1",
      "dp": "94107, 93945, 94030",
      "xp": "6"
    },
    {
      "na": "usa",
      "mp": "17",
      "ip": "50.116.12.50",
      "vip": "0",
      "tcp_on": "1",
      "dp": "94107, 93945, 94030",
      "xp": "6"
    },
    {
      "na": "usa",
      "mp": "35",
      "ip": "45.79.87.160",
      "vip": "0",
      "tcp_on": "1",
      "dp": "94046, 94276, 94168",
      "xp": "6"
    },
    {
      "vip": "0",
      "vpnon": "1",
      "na": "jp",
      "ip": "45.63.0.36"
    },
    {
      "vip": "0",
      "vpnon": "1",
      "na": "jp",
      "ip": "104.238.130.95"
    },
    {
      "na": "ger",
      "mp": "32",
      "ip": "172.104.155.67",
      "vip": "0",
      "tcp_on": "1",
      "dp": "95056, 94855, 94995",
      "xp": "6"
    },
    {
      "na": "uk",
      "mp": "0",
      "ip": "88.80.188.38",
      "vip": "0",
      "tcp_on": "1",
      "dp": "94842, 94749, 94650",
      "xp": "6"
    },
    {
      "mp": "3",
      "na": "usa",
      "tcp_on": "1",
      "xp": "3",
      "dp": "110140, 109819, 110102, 109986, 109885, 110131, 110139, 110094, 110139, 109736, 109799, 109662, 110133, 109985, 109880, 110000, 109753, 109760, 109736, 109889, 109829, 109819, 110121, 109647, 109766, 110029, 109929, 110040, 109959, 110119",
      "ip": "5.180.146.190"
    },
    {
      "mp": "20",
      "tcp_on": "1",
      "na": "usa",
      "ip": "45.85.1.78",
      "dp": "74708, 74580, 74630",
      "xp": "3"
    },
    {
      "mp": "37",
      "tcp_on": "1",
      "na": "usa",
      "ip": "45.128.153.135",
      "xp": "3",
      "dp": "74693, 75067, 74671"
    },
    {
      "mp": "15",
      "na": "usa",
      "tcp_on": "1",
      "dp": "74624, 74663, 74673",
      "xp": "3",
      "ip": "192.54.57.121"
    }
  ],
  "user": []
};

$done({ body: JSON.stringify(modifiedBody) });
