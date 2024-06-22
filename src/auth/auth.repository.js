const prisma = require("../db")

const findUserById = async (user_id) => {
    return await prisma.user.findUnique({
        where: {
            id: user_id
        }
    })
}

const findUser = async (username, email) => {
    return await prisma.user.findFirst({
        where: {
            OR: [
                {
                    email: email,
                    username: username
                }
            ]
        }
    })
}

const insertUser = async (userData, password) => {
    return await prisma.user.create({
        data: {
            name: userData.name,
            username: userData.username,
            email: userData.email,
            password: userData.password,
            contact: userData.contact,
            address: userData.address,
            isVerified: false,
            password: password,
            role: "user"
        },
        select: {
            name: true,
            username: true,
            email: true,
            contact: true,
            address: true,
            isVerified: true,
            role: true
        }
    })
}

const verifiedUser = async (user_id) => {
    return await prisma.user.update({
        where: {
            id: user_id,
        },
        data: {
            isVerified: true
        },
        select: {
            email: true,
            username: true,
            isVerified: true
        }
    })
}

module.exports = {
    findUserById,
    findUser,
    insertUser,
    verifiedUser
}