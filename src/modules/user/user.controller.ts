import { NextFunction } from "express";
import { IUserCreate, IUserLogin } from "./user.iterface";
import * as userService from "./user.service";
import { sendResponse } from "../../utlis/sendResponse";

// User Register Controler
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data: IUserCreate = req.body;
    const result = await userService.registerUser(data);
    sendResponse(res, 201, true, "User registered successfully", result);
  } catch (error) {
    next(error);
  }
};

// User Login Controler

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data: IUserLogin = req.body;
    const result = await userService.loginUser(data);
    sendResponse(res, 200, true, "Logged in successfully", result);
  } catch (error) {
    next(error);
  }
};

//  Get Dashbord

export const getDashbord = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // req.user set by auth middleware
    const userId = (req as any).user.id;
    const user = await userService.getProfile(userId);
    sendResponse(res, 200, true, "User dashboard data", { user });
  } catch (error) {
    next(error);
  }
};
