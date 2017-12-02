const CODE = {
    // 0表示成功
    SUCCESS: 0,
    // -1~-9预留
    ERR_PARAM: -1,
    // -10~-99表示系统级错误
    ERR_WRONG_REDIS_OPERATE: -10, // redis操作错误
    ERR_WRONG_MONGODB_OPERATE: -11, // mongodb 操作错误
    ERR_WRONG_SYSTEM_OPERATE: -13, // 系统错误
    ERR_WRONG_FORMAT_JSON: -14, // json 格式化错误
    ERR_WRONG_HTTP_GET_REQUEST: -15, // http get 请求错误
    ERR_WRONG_HTTP_POST_REQUEST: -16, // http post 请求错误
    ERR_WRONG_WECHAT_API_REQUEST: -17, // 微信请求接口错误
    // -100~-999表示业务逻辑中的错误
    ERR_PASSWORD_INCORRECT: -101,
    ERR_NO_LOGIN: -1001, // 用户未登录
    ERR_ACCESS_DENIED: -1002, // 没有权限
    ERR_NO_USER: -1003,
}

module.exports = CODE
