# Kambaz Frontend-Backend Connection

This directory contains the centralized API client for connecting the Next.js frontend with the Node.js backend.

## Setup

### Backend (Node Server)
Location: `kambaz-node-server-app/`

**Start the backend:**
```bash
cd kambaz-node-server-app
npm install
npm start
```

The server runs on `http://localhost:4000` by default.

### Frontend (Next.js)
Location: `kambas-next-js/`

**Start the frontend:**
```bash
cd kambas-next-js
npm install
npm run dev
```

The app runs on `http://localhost:3000` by default.

## Environment Variables

### Backend (.env)
```env
CLIENT_URL=http://localhost:3000
SERVER_ENV=development
SESSION_SECRET=kambaz
SERVER_URL=localhost
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_HTTP_SERVER=http://localhost:4000
CLIENT_URL=http://localhost:3000
```

## API Client Usage

Import the centralized API client in your components:

```typescript
import * as client from "@/(Kambaz)/client";
```

### Authentication Examples

```typescript
// Sign in
const signin = async () => {
  try {
    const user = await client.signin({ username: "alice", password: "alice123" });
    console.log("Signed in:", user);
  } catch (error) {
    console.error("Sign in failed:", error);
  }
};

// Sign up
const signup = async () => {
  const newUser = await client.signup({
    username: "newuser",
    password: "password123",
    firstName: "New",
    lastName: "User",
    email: "newuser@example.com"
  });
};

// Get current user profile
const getProfile = async () => {
  const user = await client.profile();
  console.log("Current user:", user);
};

// Sign out
const signout = async () => {
  await client.signout();
};
```

### Course Management Examples

```typescript
// Fetch all courses
const getAllCourses = async () => {
  const courses = await client.fetchAllCourses();
  console.log("All courses:", courses);
};

// Fetch user's enrolled courses
const getEnrolledCourses = async () => {
  const courses = await client.fetchUserCourses();
  console.log("Enrolled courses:", courses);
};

// Create a new course
const createNewCourse = async () => {
  const course = await client.createCourse({
    name: "Web Development",
    number: "CS4550",
    description: "Learn modern web development"
  });
};

// Update a course
const updateExistingCourse = async (courseId: string) => {
  await client.updateCourse(courseId, {
    name: "Updated Course Name",
    description: "Updated description"
  });
};

// Delete a course
const removeCourse = async (courseId: string) => {
  await client.deleteCourse(courseId);
};
```

### Enrollment Examples

```typescript
// Enroll in a course
const enroll = async (courseId: string) => {
  await client.enrollInCourse(courseId);
};

// Unenroll from a course
const unenroll = async (courseId: string) => {
  await client.unenrollFromCourse(courseId);
};

// Get users in a course
const getCourseUsers = async (courseId: string) => {
  const users = await client.fetchCourseUsers(courseId);
};
```

### Module Examples

```typescript
// Get modules for a course
const getModules = async (courseId: string) => {
  const modules = await client.fetchModulesForCourse(courseId);
};

// Create a module
const createNewModule = async (courseId: string) => {
  const module = await client.createModule(courseId, {
    name: "Week 1",
    description: "Introduction"
  });
};

// Update a module
const updateExistingModule = async (moduleId: string) => {
  await client.updateModule(moduleId, {
    name: "Updated Module Name"
  });
};

// Delete a module
const removeModule = async (moduleId: string) => {
  await client.deleteModule(moduleId);
};
```

### Assignment Examples

```typescript
// Get assignments for a course
const getAssignments = async (courseId: string) => {
  const assignments = await client.fetchAssignmentsForCourse(courseId);
};

// Create an assignment
const createNewAssignment = async (courseId: string) => {
  const assignment = await client.createAssignment(courseId, {
    title: "Assignment 1",
    description: "Complete the exercises",
    points: 100,
    dueDate: "2025-12-31"
  });
};

// Update an assignment
const updateExistingAssignment = async (assignmentId: string) => {
  await client.updateAssignment(assignmentId, {
    title: "Updated Assignment"
  });
};

// Delete an assignment
const removeAssignment = async (assignmentId: string) => {
  await client.deleteAssignment(assignmentId);
};
```

## Available API Endpoints

### User APIs
- `POST /api/users/signin` - Sign in
- `POST /api/users/signup` - Sign up
- `POST /api/users/signout` - Sign out
- `GET /api/users/profile` - Get current user
- `PUT /api/users/profile` - Update profile

### Course APIs
- `GET /api/courses` - Get all courses
- `GET /api/courses/:courseId` - Get specific course
- `POST /api/users/current/courses` - Create course
- `PUT /api/courses/:courseId` - Update course
- `DELETE /api/courses/:courseId` - Delete course
- `GET /api/users/current/courses` - Get user's enrolled courses

### Enrollment APIs
- `POST /api/users/current/enrollments/:courseId` - Enroll
- `DELETE /api/users/current/enrollments/:courseId` - Unenroll
- `GET /api/courses/:courseId/users` - Get course users

### Module APIs
- `GET /api/courses/:courseId/modules` - Get modules
- `POST /api/courses/:courseId/modules` - Create module
- `PUT /api/modules/:moduleId` - Update module
- `DELETE /api/modules/:moduleId` - Delete module

### Assignment APIs
- `GET /api/courses/:courseId/assignments` - Get assignments
- `POST /api/courses/:courseId/assignments` - Create assignment
- `PUT /api/assignments/:assignmentId` - Update assignment
- `DELETE /api/assignments/:assignmentId` - Delete assignment

## Testing the Connection

1. Start both servers (backend on 4000, frontend on 3000)
2. Open browser to http://localhost:3000
3. Try signing in with existing credentials or sign up
4. Navigate to the Dashboard to see courses
5. Check browser console and terminal for connection status

## Notes

- All API calls use `withCredentials: true` for session management
- The backend uses CORS to allow requests from the frontend
- Session data is stored server-side with express-session
- Frontend uses Redux for state management
