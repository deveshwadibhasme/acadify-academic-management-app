import transporter from '../config/email.config.js';
import createRes from './response-emmitor.js';
import dotenv from 'dotenv';
dotenv.config();

const sendEmail = async (email, subject, body) => {
    let mailOptions = {
        from: process.env.EMAIL_ID,
        to: email,
        subject: subject,
        html: body
    };

    try {
        await transporter.sendMail(mailOptions);
        return (createRes('success','Email Send Successfully!!'));
    } catch (err) {
        console.error('Failed to send email:', err);
        return (createRes('error','Error While Sending Email'));
    }
}

export default sendEmail
