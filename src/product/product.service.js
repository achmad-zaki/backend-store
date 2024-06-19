const { findProducts, findProductById, insertProduct, deleteProduct, updateProduct } = require("./product.repository")


const getAllProducts = async () => {
    const products = await findProducts()

    return products
}

const getProductById = async (product_id) => {
    const product = await findProductById(product_id)

    if (!product) {
        return {
            type: "failed",
            message: "Data not found",
        }
    }

    const output = {
        type: "success",
        data: product
    }

    return output
}

const createProduct = async (newProductData) => {
    const data = await insertProduct(newProductData)

    return data
}

const putProduct = async (product_id, newProductData) => {
    const product = await findProductById(product_id)

    if (!product) {
        return {
            type: "failed",
            message: "Data not found",
        }
    }

    const data = await updateProduct(product_id, newProductData)

    const output = {
        type: "success",
        data: data
    }

    return output
}

const deleteProductById = async (product_id) => {
    const product = await findProductById(product_id)

    if (!product) {
        return {
            type: "failed",
            message: "Data not found",
        }
    }

    const data = await deleteProduct(product_id)

    const output = {
        type: "success",
        data: data
    }

    return output
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProductById,
    putProduct
}