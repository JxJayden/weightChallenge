const API_CONFIG = require('./api')
const RES_CONFIG = require('./response')
const LIMIT_CONFIG = require('./limits')

module.exports = Object.assign({}, API_CONFIG, RES_CONFIG, LIMIT_CONFIG)
