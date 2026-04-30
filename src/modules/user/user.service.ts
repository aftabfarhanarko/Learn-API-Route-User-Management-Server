import { comparePassword, hashPassword } from "../../utils/bcrypt";
import { generateToken } from "../../utils/jwt";
import prisma from "../../utils/prisma";
import { IUserCreate, IUserLogin, IUserResponse } from "./user.iterface";

// Register User
export const registerUser = async (data: IUserCreate) => {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await hashPassword(data.password);

    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        name: data.name,
      },
    });

    const token = generateToken(user.id);

    const response: IUserResponse = {
      id: user.id,
      email: user.email,
      name: user.name,
    };

    return { user: response, token };
  } catch (error: any) {
    console.error("Register Error:", error.message);

    
    if (error.message === "User already exists") {
      throw error;
    }

    throw new Error("Failed to register user");
  }
};

// Login User
export const loginUser = async (data: IUserLogin) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isMatch = await comparePassword(data.password, user.password);

    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    const token = generateToken(user.id);

    const response: IUserResponse = {
      id: user.id,
      email: user.email,
      name: user.name,
    };

    return { user: response, token };
  } catch (error: any) {
    console.error("Login Error:", error.message);

    // Keep auth errors clean (don’t expose internals)
    if (error.message === "Invalid credentials") {
      throw error;
    }

    throw new Error("Login failed");
  }
};

// Get Profile
export const getProfile = async (userId: string): Promise<IUserResponse> => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, name: true },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  } catch (error: any) {
    console.error("Get Profile Error:", error.message);

    if (error.message === "User not found") {
      throw error;
    }

    throw new Error("Failed to fetch profile");
  }
};
