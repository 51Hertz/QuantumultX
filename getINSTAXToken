// 获取HTTP响应内容
let body = $response.body;
let obj = JSON.parse(body); // 解析为JSON对象
const token = $request.headers["authorization"] || $request.headers["Authorization"];
const id = obj.data.user.phone_number;
const userId = obj.data.user_id;
const newData = {"id": id, "userId": userId, "token": token};

// 将提取的token保存到圈X环境变量
if (token) {
    $prefs.setValueForKey(newData, "INSTAX");  // 保存token
    console.log("Token saved: " + newData);          // 打印日志
} else {
    console.log("Token not found in response");     // 无法提取时的日志提示
}
// 返回响应体
$done({});
