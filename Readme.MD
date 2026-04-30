# 🚀 User Management Backend (Node.js + Express + Prisma)

This is a scalable and production-ready backend project built with **Node.js**, **Express**, **TypeScript**, and **Prisma ORM**.  
It provides a complete user authentication system including **Register, Login, JWT Auth, and Profile Management**.

---

## 📁 Project Structure



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

