const express = require("express")
const dotenv = require("dotenv")
const { fail } = require("./src/helpers/jsonFormatter")
// ===================================================================

// controllers
const productController = require("./src/product/product.controller")
const categoryController = require("./src/category/category.controller")
const authController = require("./src/auth/auth.controller")
const orderController = require("./src/order/order.controller")
const globalController = require("./src/global/global.controller")
// ===================================================================

const app = express()
dotenv.config()
app.use(express.json())

// port
const PORT = process.env.PORT

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.use("/runaway-realm/v1", authController)
app.use("/runaway-realm/v1", productController)
app.use("/runaway-realm/v1", categoryController)
app.use("/runaway-realm/v1", orderController)
app.use("/runaway-realm/v1", globalController)

app.listen(PORT, () => {
    console.log("Server running on port: " + PORT)
})

// error handling
app.get("*", (req, res) => {
    fail(res, "not found", null, 404);
});
