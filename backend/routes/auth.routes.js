import express from "express";

import { userLogin, userSignup, verifyOTPandRegisterUser } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/user/signup', userSignup)
router.post('/user/verify-otp',verifyOTPandRegisterUser)

router.post('/user/login', userLogin)


export default router;


