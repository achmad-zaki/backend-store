const prisma = require("../db")


const findProducts = async () => {
    return await prisma.product.findMany({
        include: {
            kategori: true
        }
    })
}

const findProductById = async (product_id) => {
    return await prisma.product.findUnique({
        where: {
            id: product_id
        },
        include: {
            kategori: true
        }
    })
}

const insertProduct = async (productData) => {
    return await prisma.product.create({
        data: {
            nama: productData.nama,
            diskripsi: productData.diskripsi,
            gambar: productData.gambar,
            harga: productData.harga,
            stok: productData.stok,
            kategori_id: productData.kategori_id
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
    findProducts,
    findProductById,
    insertProduct,
    deleteProduct,
    updateProduct
}