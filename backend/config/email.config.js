import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config();


const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.APP_PASS
    }
});

export default transporter