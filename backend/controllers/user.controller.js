import createRes from "../utils/response-emmitor.js"
import pool from "../config/connect-sql.js"



const getStudentData = async (req, res) => {
    const user = req.user

    try {
        const [rows] = await pool.query('select first_name, last_name, email, number, role from users where id = ?', [user.id])

        return res.status(200).json(createRes('success', "User Data Fetched Successfully", rows[0]))

    } catch (error) {
        return res.status(400).json(createRes('error', "User Data Fetched Failed", error))
    }
}

export { getStudentData }