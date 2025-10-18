import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "120305",
  database: "management_app_database",
  waitForConnections: true,
  connectionLimit: 10,
});

export default pool;