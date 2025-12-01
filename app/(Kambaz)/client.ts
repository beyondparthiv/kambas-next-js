/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";

// Configure axios instance with credentials support
const axiosInstance = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
});

// ==================== USER API ====================
export const signin = async (credentials: { username: string; password: string }) => {
  const response = await axiosInstance.post("/api/users/signin", credentials);
  return response.data;
};

export const signup = async (user: any) => {
  const response = await axiosInstance.post("/api/users/signup", user);
  return response.data;
};

export const signout = async () => {
  const response = await axiosInstance.post("/api/users/signout");
  return response.data;
};

export const profile = async () => {
  const response = await axiosInstance.get("/api/users/profile");
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axiosInstance.put("/api/users/profile", user);
  return response.data;
};

export const fetchAllUsers = async () => {
  const response = await axiosInstance.get("/api/users");
  return response.data;
};

export const deleteUser = async (userId: string) => {
  const response = await axiosInstance.delete(`/api/users/${userId}`);
  return response.data;
};

export const updateUserById = async (userId: string, updates: any) => {
  const response = await axiosInstance.put(`/api/users/${userId}`, updates);
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await axiosInstance.post("/api/users", user);
  return response.data;
};

// ==================== COURSE API ====================
export const fetchAllCourses = async () => {
  const response = await axiosInstance.get("/api/courses");
  return response.data;
};

export const fetchCourse = async (courseId: string) => {
  const response = await axiosInstance.get(`/api/courses/${courseId}`);
  return response.data;
};

export const createCourse = async (course: any) => {
  const response = await axiosInstance.post("/api/users/current/courses", course);
  return response.data;
};

export const updateCourse = async (courseId: string, course: any) => {
  const response = await axiosInstance.put(`/api/courses/${courseId}`, course);
  return response.data;
};

export const deleteCourse = async (courseId: string) => {
  const response = await axiosInstance.delete(`/api/courses/${courseId}`);
  return response.data;
};

export const fetchUserCourses = async () => {
  const response = await axiosInstance.get("/api/users/current/courses");
  return response.data;
};

// ==================== ENROLLMENT API ====================
export const enrollInCourse = async (courseId: string) => {
  const response = await axiosInstance.post(`/api/users/current/enrollments/${courseId}`);
  return response.data;
};

export const unenrollFromCourse = async (courseId: string) => {
  const response = await axiosInstance.delete(`/api/users/current/enrollments/${courseId}`);
  return response.data;
};

export const fetchCourseUsers = async (courseId: string) => {
  const response = await axiosInstance.get(`/api/courses/${courseId}/users`);
  return response.data;
};

// ==================== MODULE API ====================
export const fetchModulesForCourse = async (courseId: string) => {
  const response = await axiosInstance.get(`/api/courses/${courseId}/modules`);
  return response.data;
};

export const createModule = async (courseId: string, module: any) => {
  const response = await axiosInstance.post(`/api/courses/${courseId}/modules`, module);
  return response.data;
};

export const updateModule = async (moduleId: string, module: any) => {
  const response = await axiosInstance.put(`/api/modules/${moduleId}`, module);
  return response.data;
};

export const deleteModule = async (moduleId: string) => {
  const response = await axiosInstance.delete(`/api/modules/${moduleId}`);
  return response.data;
};

// ==================== ASSIGNMENT API ====================
export const fetchAssignmentsForCourse = async (courseId: string) => {
  const response = await axiosInstance.get(`/api/courses/${courseId}/assignments`);
  return response.data;
};

export const createAssignment = async (courseId: string, assignment: any) => {
  const response = await axiosInstance.post(`/api/courses/${courseId}/assignments`, assignment);
  return response.data;
};

export const updateAssignment = async (assignmentId: string, assignment: any) => {
  const response = await axiosInstance.put(`/api/assignments/${assignmentId}`, assignment);
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const response = await axiosInstance.delete(`/api/assignments/${assignmentId}`);
  return response.data;
};

export default axiosInstance;
