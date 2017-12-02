// const logger = require('../lib/logger')('model-weight')
const { Schema, mongoose, } = require('../lib/mongoose')

const weightSChema = new Schema({
    // 体重
    value: {
        type: Number,
        required: true,
    },
    // 单位，，默认为 kg
    unit: {
        type: String,
        default: 'kg',
    },
    // 创建时间
    created_at: {
        type: Date,
        default: Date.now,
    },
    // 记录时间
    record_at: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('weight', weightSChema)
