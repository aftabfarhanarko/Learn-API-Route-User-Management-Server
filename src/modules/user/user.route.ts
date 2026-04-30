import { Router } from "express";
import { register, login, getDashboard } from "./user.controller"; // ঠিক নাম

import { registerSchema, loginSchema } from "./user.validation";

import { validate } from "../../middlewares/Validate.middleware";
import { authenticate } from "../../middlewares/auth.middlewares";

const router = Router();

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);
router.get("/dashboard", authenticate, getDashboard);

export default router;
