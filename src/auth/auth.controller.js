const express = require("express")
const router = express.Router()
const bycrpt = require("bcrypt")

// helpers
const { success, fail } = require("../helpers/jsonFormatter")

// services
const { login, register, putVerifiedUser } = require("./auth.service")
// =============================================================


router.post("/login", async (req, res) => {
    const { email, username, password } = req.body

    const user = await login(username, email, password)

    user.type === "success" ? success(res, user.data) : fail(res, user.message, null, user.code)
})

router.post("/register", async (req, res) => {
    const userData = req.body

    const hashedPassword = await bycrpt.hash(userData.password, 5)

    const user = await register(userData, hashedPassword)

    success(res, user, 201)
})

router.put("/verifiy-user/:id", async (req, res) => {
    const userId = parseInt(req.params.id)

    const user = await putVerifiedUser(userId)

    user.type === "success" ? success(res, user.data) : fail(res, user.message, null, user.code)
})

module.exports = router