const isTimeOut = (time, duration) => {
    if (!time || !duration) return true
    return new Date().getTime() - time > duration
}

module.exports = { isTimeOut, }
