// repository
const { findAllOrders } = require("./order.repository")
// =============================================================

const getAllOrders = async () => {
    return await findAllOrders()
}

module.exports = {
    getAllOrders
}