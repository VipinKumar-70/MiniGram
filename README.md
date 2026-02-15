# MiniGram – Mini Social Media Application

MiniGram is a beginner-friendly, full-stack social media application built with **Node.js**, **Express**, **MongoDB**, and **EJS**.  
It demonstrates core backend development concepts including authentication, middleware, MVC architecture, relational data modeling, CRUD operations, and protected routing.

This project focuses on learning **real-world backend development concepts** such as authentication, middleware, MVC architecture, and CRUD operations.

---

## 📑 Index

- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Installation Instructions](#-installation-instructions)
- [Authentication Flow](#-authentication-flow)
- [Dependencies](#-dependencies)
- [Learning Outcomes](#-learning-outcomes)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## 🛠 Tech Stack

| Layer          | Technologies                                |
| -------------- | ------------------------------------------- |
| Backend        | Node.js, Express.js                         |
| Database       | MongoDB + Mongoose                          |
| Frontend       | EJS (Embedded JavaScript Templates)         |
| Styling        | Tailwind CSS                                |
| Authentication | bcrypt, JSON Web Token (JWT), cookie-parser |

---

## 🌟 Features

### Authentication & Security

- User registration and login
- Password hashing with **bcrypt**
- JWT-based authentication
- Secure cookie storage (`httpOnly`, `secure` in production)
- Protected routes via custom middleware
- Automatic redirect for already authenticated users

### User Dashboard (Private)

- View and manage personal profile
- Create, view, edit*, and delete own posts (*edit coming soon)
- Logout functionality
- Only accessible to authenticated users

### Public Feed

- View latest posts from all users (sorted by creation date – newest first)
- Displays username and post content
- Clickable usernames lead to profiles

### Public User Profiles

- View any user's posts
- Smart redirection:
  - Own username → redirects to personal dashboard
  - Other users → shows public profile

### Core Backend Concepts Demonstrated

- MVC folder structure
- Custom JWT authentication middleware
- Mongoose population for relational data
- Cookie-based session management
- Route protection & authorization
- Server-side rendering with EJS
- Basic input sanitization & security practices

---

## 📂 Project Structure

```
MiniGram/
│
├── Middleware/              # Custom middleware (auth, JWT verify, etc.)
│   └── auth.js
│
├── Models/                  # Mongoose schemas
│   └── user.js
│   └── post.js
│
├── public/                  # Static assets
│   ├── images/
│   ├── javascripts/
│   │   └── script.js
│   └── stylesheets/
│       └── style.css
│
├── views/                      # EJS templates
│   ├── index.ejs               # Landing page
│   ├── register.ejs            # Registration page
│   ├── login.ejs               # Login page
│   ├── dashboard.ejs           # User dashboard / User profile
│   └── feed.ejs                # Public feed
│   └── create-post.ejs         # create new post
│   └── profile.ejs             # Pulic profile
│
├── app.js                   # Main Express server
├── package.json             # Dependencies & scripts
├── package-lock.json        # Dependency lock file
└── README.md                # Project documentation

```

---

## 🔧 Installation Instructions

### Prerequisites

Make sure you have installed:

- Node.js (v14+)
- npm
- MongoDB (local or Atlas)
- Git

---

### Setup

1. Clone the repository:

```bash
git clone https://github.com/VipinKumar-70/MiniGram---social-app.git
```

2. Navigate to project directory:

```bash
cd MiniGram
```

3. Install dependencies:

```bash
npm install
```

## Run the Application

```bash
node app.js
```

**Open browser:**

```bash
http://localhost:3000
```

## 🔐 Authentication Flow

- User registers → password is hashed with bcrypt
- User logs in → valid credentials → JWT is generated
- JWT is stored in an httpOnly cookie
- Middleware verifies JWT on protected routes
- User ID is attached to **req.user** for easy access
- Posts are associated with the authenticated user

## 📦 Dependencies

```bash

"dependencies": {
    "bcrypt": "^6.0.0",
    "cookie-parser": "^1.4.7",
    "dotenv": "^17.3.1",
    "ejs": "^4.0.1",
    "express": "^5.2.1",
    "jsonwebtoken": "^9.0.3",
    "mongoose": "^9.2.0"
  }
```

## 🧠 Learning Outcomes

- Building a complete authentication system from scratch
- Secure password storage & verification
- JWT creation, validation and cookie management
- Writing custom Express middleware
- Implementing protected/private routes
- Modeling one-to-many relationships in MongoDB
- Using Mongoose populate() for relational queries
- MVC architecture in Express
- Server-side rendering with EJS + Tailwind CSS
- Real-world social app logic (feed, profiles, ownership checks)

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes. Make sure to follow the standard coding conventions and best practices.

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for details. [MIT License](LICENSE)

## 📩 Contact

If you have any questions or need further assistance, please don't hesitate to contact me at  
[Vipin Kumar](mailto:vipin70kr@gmail.com). I'll be happy to help!
