// 获取HTTP响应内容
let body = $response.body;
console.log("Response body:", body);  // 调试日志：打印响应体

try {
  let obj = JSON.parse(body); // 解析为JSON对象
  console.log("Parsed object:", JSON.stringify(obj));  // 调试日志：打印解析后的对象

  // 提取token字段
  let token = obj.token;
  console.log("Extracted token:", token);  // 调试日志：打印提取的token

  // 将提取的token保存到圈X环境变量
  if (token) {
    $prefs.setValueForKey(token, "wechat_token");  // 保存token
    console.log("Token saved to prefs");  // 调试日志：确认token已保存

    // 创建一个可点击的通知，点击后可以复制token
    $notify("Token 已保存", "点击复制Token", token, {"open-url": "quanx://clipboard?text=" + encodeURIComponent(token)});
    console.log("Notification sent");  // 调试日志：确认通知已发送

    // 额外的通知尝试
    $notification.post("Token 已保存", "点击复制Token", token, {"open-url": "quanx://clipboard?text=" + encodeURIComponent(token)});
    console.log("Additional notification sent");  // 调试日志：确认额外通知已发送
  } else {
    console.log("Token not found in response");  // 无法提取时的日志提示
    $notify("Token 提取失败", "未在响应中找到token", "请检查响应内容");
  }
} catch (error) {
  console.log("Error parsing response:", error);  // 调试日志：打印解析错误
  $notify("脚本执行错误", "解析响应时出错", error.toString());
}

// 返回原始响应
$done({});