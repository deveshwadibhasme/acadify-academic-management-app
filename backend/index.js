import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pool from "./config/connect-sql.js";

import { runQueries } from "./utils/run-queries.js";
import authRoute from './routes/auth.routes.js';    
import userRoute from './routes/user.route.js';    

const app = express();
const port = 3001;


// Middleware
app.use(cors({origin:'*'}));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


await pool.getConnection().then((connection) => {

    runQueries(connection);

    console.log("Connected to the database");
    connection.release();
}).catch((error) => {
    console.error("Error connecting to the database:", error);
});


app.use('/auth', authRoute);
app.use('/user', userRoute)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


