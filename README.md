#  Sweet Shop Management System

A full-stack Sweet Shop Management System built using the MERN stack that enables administrators and staff to manage sweets, inventory, and customer orders through a secure and responsive web application. The system provides JWT-based authentication, role-based access control, real-time inventory updates, and RESTful APIs for efficient shop management.
---
##  Features

### Authentication & Security
- Secure user registration and login
- JWT-based authentication
- Protected REST APIs
- Password encryption using bcrypt
- Role-based authorization (Admin & Staff)

### Inventory Management
- Add new sweets to inventory
- Update sweet details
- Delete sweets
- View complete inventory
- Automatic stock updates after purchases
- Out-of-stock detection

### Order Management
- Place customer orders
- Automatic inventory deduction
- Order tracking and status management
- Prevent purchases when stock is unavailable

### Dashboard
- Responsive and user-friendly interface
- Inventory overview
- Sweet management panel
- Real-time stock availability
- Secure access to protected resources

---

## Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3

### Backend
- Node.js
- Express.js
- RESTful APIs

### Database
- MongoDB
- Mongoose

### Authentication
- JSON Web Token (JWT)
- bcrypt

### Tools
- Git & GitHub
- Postman
- MongoDB Compass

---

##  Project Structure

```
Sweet-Shop/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── config/
│   │   └── server.js
│   └── package.json
│
└── README.md
```

---


---

##  Application Screenshots

### Login Page
![Login Page](screenshots/login.png)

### Dashboard
![Dashboard](screenshots/dashboard.png)

### Database (MongoDB)
![Mongo](screenshots/mongodb.png)


 
 ##  Installation

### Clone the Repository

```bash
git clone https://github.com/ANMOL3363/sweet-shop

cd sweet-shop
```
---
### Backend Setup

```bash
cd backend
npm install
npm start
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

##  Authentication

After logging in successfully, the application generates a JWT token that is used to access protected API routes.

---

##  Future Enhancements

- Customer Management
- Sales Analytics Dashboard
- Invoice Generation
- Payment Gateway Integration
- Barcode Scanning
- Image Upload for Sweets
- Low Stock Notifications
- Search, Filter & Pagination

---

##  Author

**Anmol Kumar**

B.Tech – Electronics & Communication Engineering

 anmolkumar4122002@gmail.com
