const Router = require('koa-better-router')
const { API_PREFIX, } = require('../config')
const router = Router({ prefix: API_PREFIX, }).loadMethods()
const userRoutes = require('./user')
const checkBodyIsEmpty = require('../lib/check-body-empty')

router.post('/user', checkBodyIsEmpty, userRoutes.register)

module.exports = router
