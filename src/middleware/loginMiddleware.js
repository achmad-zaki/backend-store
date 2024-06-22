const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']

    if (!token) {
        return res.json({
            code: 403,
            message: 'Invalid token',
            data: null
        })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.json({
                code: 403,
                message: 'Invalid Token',
                data: null
            })
        }
        req.user = user

        next()
    });
}

const userRole = async (req, res, next) => {
    if (req.user.role !== 'user') {
        return res.json({
            code: 402,
            message: 'Invalid Role',
            data: null
        })
    }

    next()
}

const adminRole = async (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.json({
            code: 402,
            message: 'Invalid Role',
            data: null
        })
    }

    next()
}

module.exports = {
    verifyToken,
    userRole,
    adminRole
}
