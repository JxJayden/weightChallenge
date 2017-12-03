const Koa = require('koa')
const koaLogger = require('koa-logger')
const logger = require('./lib/log')
const app = new Koa()
const api = require('./api')
const bodyparser = require('koa-bodyparser')

app.use(koaLogger())

app.use(async (ctx, next) => {
    try {
        await next()
    } catch (err) {
        logger.error(err)
        err.status = err.statusCode || err.status || 500
        throw err
    }
})

app.use(bodyparser()).use(api.middleware())

module.exports = app
