const { RES_CODE, } = require('../config')
const BodyFactory = require('./body-factory')
module.exports = (ctx, next) => {
    if (!ctx.request.body) {
        ctx.body = new BodyFactory({
            code: RES_CODE.ERR_PARAM,
            msg: 'get request body error',
        })
    } else {
        return next()
    }
}
