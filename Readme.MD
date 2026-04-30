# 🚀 User Management Backend (Node.js + Express + Prisma)

This is a scalable and production-ready backend project built with **Node.js**, **Express**, **TypeScript**, and **Prisma ORM**.  
It provides a complete user authentication system including **Register, Login, JWT Auth, and Profile Management**.

---

## 📁 Project Structure

project-root/
│
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
├── prisma/
│ └── schema.prisma
│
└── src/
├── index.ts // server startup
├── server.ts // Express app setup
├── config/
│ └── env.ts // .env variables load & validate
├── middlewares/
│ ├── auth.middleware.ts // JWT authentication guard
│ ├── error.middleware.ts // global error handler
│ └── validate.middleware.ts // request validation (Joi)
├── modules/
│ └── user/
│ ├── user.controller.ts
│ ├── user.interface.ts
│ ├── user.route.ts
│ ├── user.service.ts
│ └── user.validation.ts
└── utils/
├── bcrypt.ts // password hashing & comparison
├── jwt.ts // token generation & verification
├── prisma.ts // Prisma client setup
└── sendResponse.ts // standard API response handler




---

## ⚙️ Tech Stack

- Node.js  
- Express.js  
- TypeScript  
- Prisma ORM  
- PostgreSQL  
- JWT (Authentication)  
- Bcrypt (Password Security)  
- Joi (Validation)  

---

## 🔐 Features

- ✅ User Registration (hashed password)  
- ✅ User Login (JWT authentication)  
- ✅ Secure Password Handling  
- ✅ Protected Routes with Middleware  
- ✅ Global Error Handling  
- ✅ Clean Architecture (Controller → Service → DB)  
- ✅ Input Validation (Joi)  

---

## 🧪 API Endpoints

### 🔹 Auth Routes

| Method | Endpoint                | Description          |
|--------|------------------------|----------------------|
| POST   | /api/v1/users/register | Register new user    |
| POST   | /api/v1/users/login    | Login user           |

---

### 🔹 User Routes

| Method | Endpoint                 | Description                  |
|--------|--------------------------|------------------------------|
| GET    | /api/v1/users/profile    | Get user profile (Protected) |

---

## 🔑 Environment Variables

Create a `.env` file in the root:


---

## ▶️ Getting Started

### 1. Install Dependencies


---

## 🔒 Authentication Flow

1. User registers → password is hashed using bcrypt  
2. User logs in → password is compared  
3. If valid → JWT token is generated  
4. Protected routes require token in headers  

---

## 📦 Response Format

All responses follow a standard structure:

```json
{
  "success": true,
  "message": "Request successful",
  "data": {}
}

