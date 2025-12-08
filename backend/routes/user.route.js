import express from "express";
import { authMiddleware as auth } from '../middleware/auth.middleware.js'
import { getStudentData } from "../controllers/user.controller.js";

const router = express.Router()


router.get('/student-data', auth(['student']), getStudentData)


export default router