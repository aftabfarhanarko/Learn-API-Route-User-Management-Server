export interface IUser {
  id: string;
  email: string;
  name: string | null;
  password: string; // hashed
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserCreate {
  email: string;
  password: string;
  name?: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserResponse {
  id: string;
  email: string;
  name?: string | null;
}
