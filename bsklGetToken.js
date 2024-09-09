// 获取HTTP响应内容
let body = $response.body;
let obj = JSON.parse(body); // 解析为JSON对象
// 提取token字段
let token = obj.token;
// 将提取的token保存到圈X环境变量
if (token) {
  $prefs.setValueForKey(token, "wechat_token");  // 保存token

  // 创建一个可点击的通知，点击后可以复制token
  $notify("Token 已保存", "点击复制Token", token, {"open-url": "quanx://clipboard?text=" + encodeURIComponent(token)});

  console.log("Token saved: " + token);          // 打印日志
} else {
  console.log("Token not found in response");     // 无法提取时的日志提示
}
// 返回原始响应
$done({});