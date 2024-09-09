// 获取HTTP响应内容
let body = $response.body;
let obj = JSON.parse(body); // 解析为JSON对象

console.log("obj: " + obj);    

// 提取token字段
let token = obj.token;

// 将提取的token保存到圈X环境变量
if (token) {
  $prefs.setValueForKey(token, "wechat_token");  // 保存token
  console.log("Token saved: " + token);          // 打印日志
} else {
  console.log("Token not found in response");     // 无法提取时的日志提示
}

// 返回响应体
$done({});
