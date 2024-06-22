const express = require("express")
const router = express.Router()

// helpers
const { success, fail } = require("../helpers/jsonFormatter")

// middleware
const { verifyToken, adminRole, userRole } = require("../middleware/loginMiddleware")

// service
const {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProductById,
    putProductById
} = require("./product.service")
// ==============================================================

router.get("/products", verifyToken, async (req, res) => {
    const products = await getAllProducts()

    success(res, products)
})

router.get("/product/:id", verifyToken, async (req, res) => {
    const productId = parseInt(req.params.id)

    const product = await getProductById(productId)

    product.type === "success" ? success(res, product.data) : fail(res, product.message, null, product.code)
})

router.post("/product", verifyToken, adminRole, async (req, res) => {
    const newProductData = req.body

    if (req.files && req.files.image) {
        const image = req.files.image

        const uploadPath = path.join(__dirname, "uploads", image.name)

        await image.mv(uploadPath)
        newProductData.image = image.name
    }

    const product = await createProduct(newProductData)

    success(res, product.data, 201)
})

router.put("/product/:id", async (req, res) => {
    const productId = parseInt(req.params.id)
    const newProductData = req.body

    const product = await putProductById(productId, newProductData)

    product.type === "success" ? success(res, product.data) : fail(res, product.message, null, product.code)
})

router.delete("/product/:id", async (req, res) => {
    const productId = parseInt(req.params.id)

    const product = await deleteProductById(productId)

    product.type === "success" ? success(res, product.data) : fail(res, product.message, null, product.code)
})

module.exports = router