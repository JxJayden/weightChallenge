const cry = require('./cryptology')
const { RES_CODE, LOGIN_STATE_DURATION, } = require('../config')
const BodyFactory = require('./body-factory')
const { isTimeOut, } = require('./date')
/**
 * 如果没有 sessionId 或者超时，返回 false
 * @param {String} sessionId
 * @returns {Boolean}
 */
module.exports = (ctx, next) => {
    let sessionId = ctx.cookies.get('sessionId')
    if (!sessionId || isTimeOut(parseInt(cry.decrypt(sessionId)), LOGIN_STATE_DURATION)) {
        ctx.cookies.set('sessionId', null)
        ctx.cookies.set('user', null)
        ctx.body = new BodyFactory({
            msg: '长时间未操作，请重新登录',
            code: RES_CODE.ERR_USER_NO_EFFECTIVE,
        })
    } else {
        return next()
    }
}
