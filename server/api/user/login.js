const db = require('../../models/index')
const logger = require('../../lib/log')('routes-user:login')
const { RES_CODE, } = require('../../config')
const cry = require('../../lib/cryptology')
const BodyFactory = require('../../lib/body-factory')

module.exports = async function (ctx) {
    const { username, password, } = ctx.request.body

    try {
        if (!username || !password) {
            ctx.body = new BodyFactory({
                msg: 'username & password is required',
                code: RES_CODE.ERR_PARAM,
            })
            return
        }

        const [error, user, ] = await db.UserModel.login(username, password)

        if (error || !user) {
            ctx.body = new BodyFactory({
                msg: error.msg,
                code: error.code || RES_CODE.ERR_WRONG_HTTP_POST_REQUEST,
            })
            return
        }

        ctx.cookies.set('sessionId', cry.encrypt(new Date().getTime().toString()))
        ctx.cookies.set('user', cry.encrypt(String(user._id)))

        ctx.body = new BodyFactory({
            code: RES_CODE.SUCCESS,
            msg: 'login succeed',
            data: {
                username: user.username,
                limit_code: user.limit_code,
                email: user.email,
            },
        })
    } catch (error) {
        logger.error(error)
        ctx.throw(400, error.message)
    }
}
