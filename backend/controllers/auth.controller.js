import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import pool from '../config/connect-sql.js'
import createRes from '../utils/response-emmitor.js'
import sendEmail from '../utils/send-email.js'

const generateOTP = () => Math.floor(Math.random() * 9000 + 1000)


const userSignup = async (req, res) => {
    const { email, number } = req.body

    if (!email) {
        res.status(400).json(createRes('warning', 'All field are required'))
    }

    try {
        const [rows] = await pool.query('Select * from users where number = ? and email = ?;', [number, email])


        if (rows.length !== 0) {
            res.status(400).json(createRes('warning', 'User already exists'))
        }
        const otp = generateOTP()

        // sendEmail(email, "OTP for Verification", `Hi there, Your OTP for verify your Email is ${otp}. This OTP will expire in 5 minutes.`)

        await pool.query(`insert into otp_store 
            (email, otp_value, expire_at ) 
            values (?,?, DATE_ADD(NOW(), INTERVAL 5 MINUTE))`, [email, otp])

        res.status(201).json(createRes('success', 'OTP Sent Succesfully!!'))

    } catch (error) {
        console.log(error);
        res.status(500).json(createRes('error', 'Server Error'))
    }
}

const verifyOTPandRegisterUser = async (req, res) => {
    const { name, last_name, email, password, number, role, otp } = req.body

    if (!name || !email || !password || !number || !role || !otp) {
        res.status(400).json(createRes('warning', 'All field are required'))
    }

    try {

        const [rows] = await pool.query('Select * from otp_store where email = ? and expire_at > NOW()', [email])
        if (Number(rows[0].otp_value) !== Number(otp) || rows.length < 0) return res.status(401).json(createRes('warning', 'Incorrect or Expired OTP'))

        await pool.query(`DELETE FROM otp_store WHERE email = ?`, [email]);

        const hashedPassword = await bcrypt.hash(password, 10)

        await pool.query(`insert into users 
               (first_name, last_name, email, password, number, role) 
               values (?,?,?,?,?,?)`, [name, last_name, email, hashedPassword, number, role])

        res.status(201).json(createRes('success', 'User Registered Succesfully'))

    } catch (error) {
        console.log(error);
        res.status(500).json(createRes('error', 'Server Error'))
    }
}

const userLogin = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) res.status(401).json(createRes('warning', 'Enter Credential Correctly'))

    try {
        const [user] = await pool.query('select * from users where email = ?', [email])

        const isValid = await bcrypt.compare(password, user[0].password)

        if (!isValid) return res.status(401).json(createRes('warning', 'Incorrect Password or Credential'))

        const token = jwt.sign({ id: user[0].id, email: user[0].email, role: user[0].role },
            process.env.JWT_SECRET, { expiresIn: "1h" });

        return res.status(200).json(createRes('success', 'User Authenticated Successfully',
            { token: token, role: user[0].role, name: user[0].first_name }))

    } catch (error) {
        console.error(error)
        return res.status(500).json(createRes('error', 'Authetication Error'))
    }
}






export { userSignup, userLogin, verifyOTPandRegisterUser }