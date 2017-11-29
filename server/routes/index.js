const Router = require('koa-better-router')
const body = require('koa-better-body')
const router = Router().loadMethods()
const api = Router({ prefix: '/api' })

router.get('/*', body(), (ctx, next) => {
    ctx.body = `Hello world! Url: ${ctx.url}`
    return next()
})

api.extend(router)

module.exports = { api, router }
