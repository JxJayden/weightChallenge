/* eslint-disable */
module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [
        {
            name: 'SERVER',
            script: './bin/www',
            watch: ['./config', './models', './routes'],
            env: {
                NODE_ENV: 'dev'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ]
}
