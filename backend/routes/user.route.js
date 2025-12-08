import express from "express";
import { authMiddleware as auth } from '../middleware/auth.middleware.js'
import { getStudentData, getAlumniData } from "../controllers/user.controller.js";

const router = express.Router()


router.get('/student-data', auth(['student']), getStudentData)
router.get('/alumni-data', auth(['alumni']), getAlumniData)


export default router