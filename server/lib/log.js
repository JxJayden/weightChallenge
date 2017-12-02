const log4js = require('log4js')
const path = require('path')

const LOG_CONFIG = {
    appenders: {
        out: { type: 'console', },
        task: {
            type: 'dateFile',
            filename: `${__dirname}/../logs/server`,
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true,
            maxLogSize: 20480,
            backups: 3,
        },
    },
    categories: {
        default: { appenders: [ 'out', ], level: 'info', },
        task: { appenders: [ 'task', ], level: 'error', },
    },
}

log4js.configure(LOG_CONFIG)

const log = logName => (logName ? log4js.getLogger(logName) : log4js.getLogger(path.basename(__filename)))

log.getLogger = log4js.getLogger

module.exports = log
