import { NextFunction, Request, Response } from "express";
import { sendResponse } from "../utlis/sendResponse";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err.stack);
  const statusCode = err.message.includes("User already exists")
    ? 409
    : err.message.includes("Invalid credentials")
      ? 401
      : err.message.includes("not found")
        ? 404
        : 500;

  sendResponse(res, statusCode, false, err.message, null, err.stack);
};
