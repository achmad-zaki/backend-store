const nodemailer = require("nodemailer")

// const sendEmail = async (to, subject, html) => {
//     const from = "achmadzaki10d@gmail.com"

//     const transporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         auth: {
//             user: "achmadzaki10d@gmail.com",
//             pass: "11223344"
//         }
//     });

//     await transporter.sendMail({ from, to, subject, html });
// }

const sendVerificationEmail = async (to, subject, html) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: "achmadzaki10d@gmail.com",
            pass: "fozgxwwtufptrqsi"
        }
    });


    const mailOptions = {
        from: 'runaway.realm@gmail.com',
        to: to,
        subject: subject,
        html: html,
    };

    return transporter.sendMail(mailOptions)
}


module.exports = {
    sendVerificationEmail
}