# MiniGram — Mini Social Media App 🧩

MiniGram is a beginner-friendly full-stack social media application built using Node.js, Express, MongoDB, and EJS.  
Users can register, log in securely, create posts, view a public feed, manage their personal dashboard, and edit or delete their own content.

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

---

## 🚀 Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend

- EJS (Embedded JavaScript Templates)
- Tailwind CSS (optional styling)

### Authentication & Security

- bcrypt (password hashing)
- JSON Web Token (JWT)
- cookie-parser

---

## 🎯 Features

### 🔐 Authentication

- User Registration
- User Login
- Password encryption using bcrypt
- JWT token generation
- Cookie-based authentication
- Protected routes

### 👤 Dashboard (Profile)

- View personal profile
- View all own posts
- Create new posts
- Edit existing posts
- Delete posts
- Logout functionality

### 📰 Feed Page

- Public feed displaying posts from all users

### 🛠 Backend Concepts

- MVC folder structure
- Middleware
- JWT authorization
- CRUD operations
- Server-side rendering with EJS

---

## 📂 Project Structure

```
MiniGram/
│
├── Middleware/              # Custom middleware (auth, JWT verify, etc.)
│
├── Models/                  # Mongoose schemas
│   └── user.js
│
├── public/                  # Static assets
│   ├── images/
│   ├── javascripts/
│   │   └── script.js
│   └── stylesheets/
│       └── style.css
│
├── views/                   # EJS templates
│   ├── index.ejs            # Landing page
│   ├── register.ejs         # Registration page
│   ├── login.ejs            # Login page
│   ├── dashboard.ejs        # User dashboard / profile
│   └── feed.ejs             # Public feed
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
cd MiniGram---social-app
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

- User registers
- Password is hashed using bcrypt
- User logs in
- JWT token is generated
- Token stored in cookies
- Middleware verifies JWT
- Protected routes become accessible

## 📦 Dependencies

```bash
bcrypt
cookie-parser
ejs
express
jsonwebtoken
mongoose

```

## 🧠 Learning Outcomes

- User authentication system
- Password encryption
- JWT token handling
- Cookie management
- Express middleware
- CRUD with MongoDB
- MVC architecture
- EJS rendering
- Real backend workflow

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes. Make sure to follow the standard coding conventions and best practices.

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for details. [MIT License](LICENSE)

## 📩 Contact

If you have any questions or need further assistance, please don't hesitate to contact me at  
[Vipin Kumar](mailto:vipin70kr@gmail.com). I'll be happy to help!
