import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env";

export const generateToken = (userId: string): string => {
  // Secret কে স্পষ্টভাবে jwt.Secret টাইপে কাস্ট করে দিচ্ছি
  const secret: jwt.Secret = JWT_SECRET;
  return jwt.sign({ id: userId }, secret, {
    expiresIn: JWT_EXPIRES_IN,
  } as jwt.SignOptions); // options কে স্পষ্ট টাইপ দেওয়া
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET as jwt.Secret);
};
