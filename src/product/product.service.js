// repository
const { findAllProducts,
    findProductById,
    insertProduct,
    deleteProduct,
    updateProduct
} = require("./product.repository")
// ==============================================================

const getAllProducts = async () => {
    return await findAllProducts()
}

const getProductById = async (product_id) => {
    const product = await findProductById(product_id)

    if (!product) {
        return {
            type: "failed",
            message: "Data not found",
            code: 404
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

    const output = {
        data: {
            id: data.id,
            name: data.name,
            description: data.description,
            image: data.image,
            price: data.price,
            stock: data.stock,
            category_id: data.category_id
        }
    }

    return output
}

const putProductById = async (product_id, newProductData) => {
    const product = await findProductById(product_id)

    if (!product) {
        return {
            type: "failed",
            message: "Data not found",
            code: 404
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
            code: 404
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
    putProductById
}