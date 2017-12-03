const logger = require('../../lib/log')('routes-user:logout')
const BodyFactory = require('../../lib/body-factory')
const { RES_CODE, } = require('../../config')
module.exports = async function (ctx) {
    try {
        ctx.cookies.set('sessionId', null)
        ctx.cookies.set('user', null)
        ctx.body = new BodyFactory({
            msg: 'logout succeed',
            code: RES_CODE.SUCCESS,
        })
    } catch (err) {
        logger.error(err)
        ctx.throw(400, err.message)
    }
}
