# Real Estate App

Welcome to the Real Estate App repository! This project is a full-fledged real estate application that allows users to search, list, and manage property listings. It includes functionalities such as user authentication, profile management, and saving favorite properties. This app is built using the MERN stack (MongoDB, Express, React, Node.js) and SCSS CSS.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)

## Features

- User authentication (Register/Login)
- User profile management
- Create, read, update, and delete property listings
- Save and unsave favorite properties
- Real-time notifications for new listings
- Responsive design with SCSS CSS

## Technologies Used

- **Frontend**: React, SCSS CSS, React Router
- **Backend**: Node.js, Express
- **Database**: MongoDB, Prisma ORM
- **Authentication**: JSON Web Tokens (JWT), bcrypt

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/DhruvilJariwala/Real-Estate-app.git
   cd Real-Estate-app
   ```

2. **Install dependencies:**

   ```bash
   # For the frontend
   cd client
   npm install

   # For the backend
   cd ../server
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the `server` directory and add the following environment variables:

   ```env
   DATABASE_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the application:**

   ```bash
   # Start the backend server
   cd server
   npm start

   # Start the frontend development server
   cd ../client
   npm start
   ```

5. **Access the application:**

   Open your browser and go to `http://localhost:3000` to see the frontend. The backend server will be running on `http://localhost:5000`.

## Usage

- **Register/Login**: Create a new account or log in with an existing one.
- **Profile Management**: View and update your user profile.
- **Property Listings**: Browse available properties, view detailed information, and save your favorites.
- **Add New Listing**: Add new property listings if you are logged in.

## Routes

### Frontend Routes

- `/`: Home page
- `/list`: Property listings page
- `/:id`: Single property detail page
- `/login`: Login page
- `/register`: Registration page
- `/profile`: User profile page (protected)
- `/profile/update`: Update user profile page (protected)
- `/add`: Add new property listing page (protected)

### Backend API Endpoints

- `GET /api/users`: Get all users
- `GET /api/users/:id`: Get a user by ID
- `PUT /api/users/:id`: Update a user by ID
- `DELETE /api/users/:id`: Delete a user by ID
- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: User login
- `GET /api/posts`: Get all property listings
- `GET /api/posts/:id`: Get a property listing by ID
- `POST /api/posts`: Create a new property listing (protected)
- `PUT /api/posts/:id`: Update a property listing by ID (protected)
- `DELETE /api/posts/:id`: Delete a property listing by ID (protected)
- `POST /api/posts/save`: Save or unsave a property listing (protected)
- `GET /api/profile/posts`: Get user profile posts (protected)
- `GET /api/profile/notifications`: Get number of unread notifications (protected)
