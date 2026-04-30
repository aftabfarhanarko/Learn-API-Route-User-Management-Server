import { NextFunction, Request, Response } from "express";
import { sendResponse } from "../utils/sendResponse";
import { verifyToken } from "../utils/jwt";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return sendResponse(res, 401, false, "No token provided");
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoad = verifyToken(token) as { id: string };
    (req as any).user = { id: decoad.id }; /// attach user id to request
    next();
  } catch (error) {
    return sendResponse(res, 401, false, "Invalid or expired token");
  }
};
