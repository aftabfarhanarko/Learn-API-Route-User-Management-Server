import { RequestHandler } from "express"; 
import * as userService from "./user.service";
import { sendResponse } from "../../utils/sendResponse";
import { IUserCreate, IUserLogin } from "./user.iterface";


export const register: RequestHandler = async (req, res, next) => {
  try {
    const data: IUserCreate = req.body;
    const result = await userService.registerUser(data);
    sendResponse(res, 201, true, "User registered successfully", result);
  } catch (error) {
    next(error);
  }
};

export const login: RequestHandler = async (req, res, next) => {
  try {
    const data: IUserLogin = req.body;
    const result = await userService.loginUser(data);
    sendResponse(res, 200, true, "Logged in successfully", result);
  } catch (error) {
    next(error);
  }
};

export const getDashboard: RequestHandler = async (req, res, next) => {
  try {
    // auth middleware req.user 
    const userId = (req as any).user.id;
    const user = await userService.getProfile(userId);
    sendResponse(res, 200, true, "User dashboard data", { user });
  } catch (error) {
    next(error);
  }
};
