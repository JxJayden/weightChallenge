const bcrypt = require('bcrypt-nodejs')
const logger = require('../lib/logger')('model-user')
const { Schema, mongoose, } = require('../lib/mongoose')
const CODE = require('../config/response-code')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    // 用户权限
    limits: {
        type: Array,
        default: [],
    },
    wechat: {
        type: Object,
        default: {},
    },
    // 创建时间
    created_at: {
        type: Date,
        default: Date.now,
    },
    // salt work factor
    _salt_bounds: {
        type: Number,
        required: false,
        default: 10,
    },
})

userSchema.statics.login = function (username, password) {
    return this.findOne({ username: username, })
        .exec()
        .then(user => {
            if (!user) {
                throw new Error({
                    code: CODE.ERR_NO_USER,
                    message: `The user ${username} is not exist!`,
                })
            }

            const isPasswordCorrect = bcrypt.compareSync(password, user.password)

            if (!isPasswordCorrect) {
                throw new Error({
                    code: CODE.ERR_PASSWORD_INCORRECT,
                    message: 'password is incorrect, please check it again!',
                })
            }

            return user
        })
}

userSchema.statics.isUserExit = function (username) {
    return this.count({ username, })
        .exec()
        .then(count => count && count > 0)
}

userSchema.pre('save', function (next) {
    const self = this

    if (!self.isModified('password')) return next()

    bcrypt.genSalt(self._salt_bounds, (err, salt) => {
        if (err) {
            logger.error(err)
            return next()
        }

        bcrypt.hash(self.password, salt, null, (err, hash) => {
            if (err) logger.error(err)
            self.password = hash
            return next()
        })
    })
})

module.exports = mongoose.model('user', userSchema)
