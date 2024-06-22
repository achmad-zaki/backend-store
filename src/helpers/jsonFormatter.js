const success = (res, data, code = 200) => res.json({
    code: code,
    message: "Success",
    data: data
})

const fail = (res, msg, data = null, code = 400) => res.json({
    code: code,
    message: msg,
    data
})

const error = (res, err) => res.json({
    code: 500,
    message: 'Error',
    data: {
        name: err.name,
        message: err.message,
        stack: err.stack,
    },
})


module.exports = {
    success,
    fail,
    error
}