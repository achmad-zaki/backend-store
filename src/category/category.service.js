const { findCategories } = require("./category.repository")


const getAllCategories = async () => {
    const categories = await findCategories()

    return categories
}

module.exports = {
    getAllCategories
}