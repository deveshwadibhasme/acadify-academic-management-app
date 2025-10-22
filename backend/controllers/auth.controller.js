import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import pool from '../config/connect-sql.js'


const userSignup = async (req, res) => {
    const { first_name, last_name, email, password, number, role } = req.body

    if (!first_name, !email, !password, !number, !role) {
        res.status(400).json({ type: 'warning', message: 'All field are required' })
    }

    try {
        const [rows] = await pool.query('Select id from users;')
        const [existing] = await pool.query('Select * from users where id = ?;', [rows[0]?.id])

        if (existing.length !== 0) {
            res.status(400).json({ type: 'warning', message: 'User already exists' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        

        await pool.query(`insert into users 
            (first_name, last_name, email, password, number, role) 
            values (?,?,?,?,?,?)`, [first_name, last_name, email, hashedPassword, number, role])

        res.status(201).json({ type: 'success', message: 'User Registered Succesfully' })

    } catch (error) {
        console.log(error);
        res.status(500).json({ type: 'error', message: 'Server Error' })
    }
}

export { userSignup }