const db = require('../../models')
const logger = require('../../lib/log')('routes-user:register')
const { RES_CODE, DEFAULT_LIMIT, } = require('../../config')
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

        let isUserExit = await db.UserModel.isUserExit(username)

        if (isUserExit) {
            ctx.body = new BodyFactory({
                msg: `用户名: ${username} 已存在！`,
                code: RES_CODE.ERR_USER_EXIT,
            })
            return
        }

        let newUser = await new db.UserModel({
            password,
            username,
            limit_code: DEFAULT_LIMIT,
        }).save()

        ctx.body = new BodyFactory({
            code: RES_CODE.SUCCESS,
            msg: 'register success',
            data: {
                username: newUser.username,
                limit_code: newUser.limit_code,
                created_time: newUser.created_at,
                email: newUser.email || '',
            },
        })
    } catch (error) {
        logger.error(error)
        ctx.throw(400, error.message)
    }
}
