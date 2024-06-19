const prisma = require("../db")

const findCategories = async () => {
    return await prisma.category.findMany()
}

module.exports = {
    findCategories
}