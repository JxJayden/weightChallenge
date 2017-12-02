const { RES_CODE, } = require('../config')
class BodyFactory {
    constructor ({ code = RES_CODE.SUCCESS, msg = '', data = {}, }) {
        this.code = code
        this.msg = msg
        this.data = data
    }
}

module.exports = BodyFactory
