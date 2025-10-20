import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
const port = 3001;

import pool from "./config/connect-sql.js";
import { runQueries } from "./utils/run-queries.js";


// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



await pool.getConnection().then((connection) => {

    runQueries(connection);

    console.log("Connected to the database");
    connection.release();
}).catch((error) => {
    console.error("Error connecting to the database:", error);
});




// Get all students
// app.get("/students", async (req, res) => {
//   try {
//     const [rows] = await pool.query("SELECT * FROM students");
//     res.json(rows);
//   } catch (error) {
//     console.error("Error fetching students:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


