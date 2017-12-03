const Router = require('koa-better-router')
const { API_PREFIX, } = require('../config')
const api = Router({ prefix: API_PREFIX, }).loadMethods()
const userRoutes = require('./user')
const weightRoutes = require('./weight')
const checkBodyIsEmpty = require('../lib/check-body-empty')
const isEffective = require('../lib/is-state-effective')

api
    .post('/user', checkBodyIsEmpty, userRoutes.register)
    .post('/login', checkBodyIsEmpty, userRoutes.login)
    .post('/logout', userRoutes.logout)
    .post('weight', checkBodyIsEmpty, isEffective, weightRoutes.add)
    .get('weight', checkBodyIsEmpty, isEffective, weightRoutes.get)
    .put('weight', checkBodyIsEmpty, isEffective, weightRoutes.modify)
    .del('weight', checkBodyIsEmpty, isEffective, weightRoutes.delete)

module.exports = api
