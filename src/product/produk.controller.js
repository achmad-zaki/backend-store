const express = require("express")
const router = express.Router()
const { success, fail } = require("../helpers/jsonFormatter")

const { getAllProducts, getProductById, createProduct, deleteProductById, putProduct } = require("./product.service")


router.get("/products", async (req, res) => {
    const products = await getAllProducts()

    success(res, products)
})

router.get("/product/:id", async (req, res) => {
    const productId = parseInt(req.params.id)

    const product = await getProductById(productId)

    product.type === "success" ? success(res, product.data) : fail(res, product.message)
})

router.post("/product", async (req, res) => {
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

    const product = await putProduct(productId, newProductData)

    product.type === "success" ? success(res, product.data) : fail(res, product.message)
})

router.delete("/product/:id", async (req, res) => {
    const productId = parseInt(req.params.id)

    const product = await deleteProductById(productId)

    product.type === "success" ? success(res, product.data) : fail(res, product.message)
})

module.exports = router