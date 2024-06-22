const prisma = require("../db")

const findAllOrders = async () => {
    return await prisma.order.findMany({
        select: {
            id: true,
            status: true,
            payment_proof: true,
            image: true,
            size: true,
            total_amount: true,
            user: {
                select: {
                    id: true,
                    name: true,
                    address: true,
                    contact: true
                }
            }
        }
    })
}

module.exports = {
    findAllOrders
}