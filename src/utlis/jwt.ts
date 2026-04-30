import  Jwt  from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN } from '../config/env.ts';


// generateToken Functions
export const generateToken = (userId: string): string => {
    return Jwt.sign({id:userId}, JWT_SECRET, {
        expiresIn:JWT_EXPIRES_IN
    });
};

// verifyToken Functions
export const verifyToken = (token: string) => {
    return Jwt.verify(token, JWT_SECRET);
};