import { Router } from "express";
import {getProtected, login, register} from "../controllers/auth.controller.js"
import authMiddleware from "../middleware/auth.middleware.js";

const router = Router();

router.post('/register', register)
router.post('/login',login)
router.get('/protected',authMiddleware, getProtected);

export default router;