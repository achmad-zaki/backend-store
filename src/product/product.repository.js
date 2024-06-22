const prisma = require("../db")


const findAllProducts = async () => {
    return await prisma.product.findMany({
        include: {
            category: true
        }
    })
}

const findProductById = async (product_id) => {
    return await prisma.product.findUnique({
        where: {
            id: product_id
        },
        include: {
            category: true
        }
    })
}

const insertProduct = async (productData) => {
    return await prisma.product.create({
        data: {
            name: productData.name,
            description: productData.description,
            image: productData.image,
            price: productData.price,
            stock: productData.stock,
            category_id: productData.category_id
        }
    })
}

const updateProduct = async (product_id, newProductData) => {
    return await prisma.product.update({
        where: {
            id: product_id
        },
        data: {
            nama: newProductData.nama,
            diskripsi: newProductData.diskripsi,
            gambar: newProductData.gambar,
            harga: newProductData.harga,
            stok: newProductData.stok,
            kategori_id: newProductData.kategori_id
        }
    })
}

const deleteProduct = async (product_id) => {
    return await prisma.product.delete({
        where: {
            id: product_id
        }
    })
}

module.exports = {
    findAllProducts,
    findProductById,
    insertProduct,
    deleteProduct,
    updateProduct
}