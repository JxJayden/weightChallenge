const Koa = require('koa')
const logger = require('koa-logger')
const app = new Koa()
const { router, api } = require('./routes')

app.use(logger())
app.use(router.middleware())
app.use(api.middleware())

module.exports = app
