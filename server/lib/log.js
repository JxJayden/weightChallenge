const log4js = require('log4js')
const path = require('path')

const LOG_CONFIG = {
    appenders: [
        {
            type: 'console'
        },
        {
            type: 'dateFile',
            level: 'ERROR',
            filename: `${__dirname}/../logs/server`,
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true,
            maxLogSize: 20480,
            backups: 3
        }
    ]
}

log4js.configure(LOG_CONFIG)

const log = logName => (logName ? log4js.getLogger(logName) : log4js.getLogger(path.basename(__filename)))

log.getLogger = log4js.getLogger

module.exports = log
