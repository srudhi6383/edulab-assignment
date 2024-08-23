# Task Management System API

A backend API for managing tasks with secure authentication, user role management, and comprehensive CRUD operations. This API is built using Node.js, Express, MongoDB, and JWT for authentication.

# Feautres

- User Registration and Authentication: Secure user registration and login with JWT-based authentication and role-based access - control (admin, user).
- Task Management: CRUD operations for tasks with permissions based on user roles.
- Task Filtering: Retrieve and filter tasks based on priority, status, and assigned user.
- Role-Based Access Control: Route guards and middleware for managing user roles and permissions.

# Tech Stack

- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT (JSON Web Token)
- Validation: express-validator

# API Endpoints

API Endpoints Authentication Register User

- POST /api/auth/register Body: json Copy code { "username": "string", "password": "string" } Success: 201 Created Error: 400 Bad Request Login User

- POST /api/auth/login Body: json Copy code { "username": "string", "password": "string" } Success: 200 OK with JWT token Error: 401 Unauthorized Tasks Create Task

- POST /api/tasks Headers: Authorization: Bearer Body: json Copy code { "title": "string", "description": "string", "priority": "string", "status": "string", "assignedTo": "user_id" } Success: 201 Created Error: 400 Bad Request Get Tasks

- GET /api/tasks Headers: Authorization: Bearer Success: 200 OK Error: 401 Unauthorized Update Task

- PUT /api/tasks/:id Headers: Authorization: Bearer Body: json Copy code { "title": "string", "description": "string", "priority": "string", "status": "string" } Success: 200 OK Error: 400 Bad Request or 404 Not Found Delete Task

- DELETE /api/tasks/:id Headers: Authorization: Bearer Success: 204 No Content Error: 401 Unauthorized or 404 Not Found Users Get All Users

- GET /api/users Headers: Authorization: Bearer (admin only) Success: 200 OK Error: 401 Unauthorized Get User by ID

- GET /api/users/:id Headers: Authorization: Bearer (admin only) Success: 200 OK Error: 401 Unauthorized or 404 Not Found Update User

- PUT /api/users/:id Headers: Authorization: Bearer (admin only) Body: json Copy code { "username": "string", "role": "string" } Success: 200 OK Error: 400 Bad Request or 404 Not Found Delete User

- DELETE /api/users/:id Headers: Authorization: Bearer (admin only) Success: 204 No Content Error: 404 Not Found Database Models User Fields: username, password, role Role Options: admin, user Task Fields: title, description, priority, status, assignedTo Priority Options: low, medium, high Status Options: pending, in-progress, completed Configuration Database: Update DB_URI in the .env file to point to your MongoDB instance. JWT Secret: Set JWT_SECRET in the .env file for token encryption. Running the Application Start the Server

bash Copy code npm start The application will be accessible at http://localhost:3000.
