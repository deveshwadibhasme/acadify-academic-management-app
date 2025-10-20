import mysql from "mysql2/promise";
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
  host: process.env.SQL_HOST,
  user:process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: "student_management_app",
  waitForConnections: true,
  connectionLimit: 10,
});


export default pool;