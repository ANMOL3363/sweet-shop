# Sweet Shop Management System

## 📌 Project Overview
A full-stack Sweet Shop Management System backend that supports user authentication, role-based access control, inventory management, and secure APIs.

## 🛠️ Tech Stack
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT
- Tools: Postman, MongoDB Compass

## ✨ Features
- User Registration & Login
- JWT-based Authentication
- Role-based Authorization (Admin/User)
- Add, View, Search Sweets
- Purchase & Restock Sweets
- Admin-only Delete Sweet

## 🔐 API Endpoints

### Auth
- POST `/api/auth/register`
- POST `/api/auth/login`

### Sweets (Protected)
- POST `/api/sweets`
- GET `/api/sweets`
- GET `/api/sweets/search`
- POST `/api/sweets/:id/purchase`
- POST `/api/sweets/:id/restock` (Admin)
- DELETE `/api/sweets/:id` (Admin)

AI USAGE
- I used AI as a productivity and learning tool — mainly to understand architecture patterns, debug errors faster, and generate boilerplate.
I always verified and modified the logic myself, and all integration decisions were mine.

## ▶️ How to Run Locally

```bash
git clone <your-repo-link>
cd backend
npm install
node src/server.js
