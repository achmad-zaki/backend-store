const express = require("express")
const router = express.Router()

// helpers
const { sendVerificationEmail } = require("../helpers/globalHelper")
const { success } = require("../helpers/jsonFormatter")

router.post("/send-email", async (req, res) => {
    const { to, subject, html } = req.body

    await sendVerificationEmail(to, subject, html)

    success(res, req.body)
})

module.exports = router