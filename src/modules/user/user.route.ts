import { Router } from "express";
import { loginSchema, registerSchema } from "./user.validation";
import { getDashbord, loginUser, register } from "./user.controller";
import { validate } from '../../middlewares/Validate.middleware';
import { authenticate } from "../../middlewares/auth.middlewares";


const router = Router();

router.post("/register", validate(registerSchema), register);

router.post("/login", validate(loginSchema), loginUser);

router.get('/dashboard', authenticate, getDashbord);

export default router;
