const express = require("express")
const router = express.Router()
const { success } = require("../helpers/jsonFormatter")

// services
const { getAllCategories } = require("./category.service")
// =============================================================


router.get("/categories", async (req, res) => {
    const categories = await getAllCategories()

    success(res, categories)
})

module.exports = router