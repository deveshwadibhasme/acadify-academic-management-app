import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import pool from '../config/connect-sql.js'
import createRes from '../utils/response-emmitor.js'


const userSignup = async (req, res) => {
    const { first_name, last_name, email, password, number, role } = req.body

    if (!first_name, !email, !password, !number, !role) {
        res.status(400).json(createRes('warning', 'All field are required'))
    }

    try {
        const [rows] = await pool.query('Select * from users where number = ? and email = ?;', [number, email])
        // const [existing] = await pool.query('Select * from users where id = ?;', [rows?.id])

        if (rows.length !== 0) {
            res.status(400).json(createRes('warning', 'User already exists'))
        }

        const hashedPassword = await bcrypt.hash(password, 10)


        await pool.query(`insert into users 
            (first_name, last_name, email, password, number, role) 
            values (?,?,?,?,?,?)`, [first_name, last_name, email, hashedPassword, number, role])

        res.status(201).json(createRes('success', 'User Registered Succesfully'))

    } catch (error) {
        console.log(error);
        res.status(500).json(createRes('error', 'Server Error'))
    }
}

const userLogin = async (req, res) => {
    const { email, number, password, role } = req.body

    if (!email || !number && !password && !role) res.status(401).json(createRes('warning', 'Enter Credential Correctly'))

    try {
        const [user] = await pool.query('select * from users where email = ?', [email])

        const isValid = await bcrypt.compare(password, user[0]?.password)

        if (!isValid) return res.status(401).json(createRes('warning', 'Incorrect Password or Credential'))

        const token = jwt.sign({ id: user[0].id, email: user[0].email, role: user[0].role }, process.env.JWT_SECRET, { expiresIn: "1h" });

        return res.status(200).json(createRes('success', 'User Authenticated', { token: token, role: user[0].role, name: user[0].first_name }))

    } catch (error) {
        console.error(error)
        return res.status(500).json(createRes('error', 'Authetication Error'))
    }
}






export { userSignup, userLogin }