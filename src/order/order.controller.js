const express = require("express")
const router = express.Router()

// helpers
const { success, fail } = require("../helpers/jsonFormatter")

// services
const { getAllOrders } = require("./order.service")
// =============================================================

router.get("/orders", async (req, res) => {
    const orders = await getAllOrders()

    success(res, orders)
})

module.exports = router