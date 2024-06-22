const jwt = require("jsonwebtoken")
const bycrpt = require("bcrypt")

// service
const { findUser, insertUser, verifiedUser, findUserById } = require("./auth.repository")
// ===============================================================


const login = async (username, email, password) => {
    const user = await findUser(username, email)
    if (!user) {
        return {
            type: "failed",
            message: "User not found",
            code: 412
        }
    }

    if (!user.isVerified) {
        return {
            type: 'failed',
            message: 'Email not verified. Please verify your email to login',
            code: 403
        }
    }

    const isPasswordValid = await bycrpt.compare(password, user.password)
    if (!isPasswordValid) {
        return {
            type: 'failed',
            message: 'Wrong password',
            code: 401
        }
    }

    const token = jwt.sign({
        id: user.id,
        email: user.email,
        username: user.username,
        role: user.role
    }, process.env.JWT_SECRET, { expiresIn: '1d' })

    const output = {
        type: 'success',
        data: {
            token,
            id: user.id,
            email: user.email,
            username: user.username,
            role: user.role
        }
    }

    return output
}

const register = async (userData, password) => {
    return await insertUser(userData, password)
}

const putVerifiedUser = async (user_id) => {
    const user = await findUserById(user_id)
    if (!user) {
        return {
            type: "failed",
            message: "User not found",
            code: 412
        }
    }

    const data = await verifiedUser(user_id)

    const output = {
        type: "success",
        data: data
    }

    return output
}

module.exports = {
    login,
    register,
    putVerifiedUser
}