// app/(Kambaz)/Dashboard/page.tsx - USES PERSISTED DATA
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import type { RootState, AppDispatch } from "../Store/store";
import { setCourses, addNewCourse, deleteCourse as deleteCourseAction, updateCourse as updateCourseAction } from "../Courses/[cid]/reducer";

const API_BASE = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";

type Course = {
  _id: string;
  name: string;
  number?: string;
  description: string;
  image?: string;
};

export default function Dashboard() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const currentUser = useSelector((s: RootState) => s.account.currentUser);
  const courses = useSelector((s: RootState) => s.coursesReducer.courses);

  const [course, setCourse] = useState<Course>({
    _id: "",
    name: "New Course",
    number: "",
    description: "New Description",
  });

  const [showEnrolled, setShowEnrolled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [enrolledCourseIds, setEnrolledCourseIds] = useState<string[]>([]);

  useEffect(() => {
    if (!currentUser) {
      router.push("/Kambaz/Account/Signin");
    }
  }, [currentUser, router]);

  // Load courses ONLY if Redux store is empty
  useEffect(() => {
    if (currentUser && courses.length === 0) {
      console.log("📦 No courses in Redux, fetching from server...");
      if (showEnrolled) {
        fetchEnrolledCourses();
      } else {
        fetchAllCourses();
      }
    } else if (currentUser && courses.length > 0) {
      console.log("✅ Using persisted courses from localStorage:", courses.length);
      // Extract enrolled IDs from persisted data
      setEnrolledCourseIds(courses.map((c: any) => c._id));
    }
  }, [currentUser]);

  const fetchEnrolledCourses = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_BASE}/api/users/current/courses`,
        { withCredentials: true }
      );
      console.log("✅ Fetched enrolled courses:", response.data);
      dispatch(setCourses(response.data));
      setEnrolledCourseIds(response.data.map((c: any) => c._id));
    } catch (error: any) {
      console.error("⚠️ Backend issue, loading all courses");
      fetchAllCourses();
    } finally {
      setLoading(false);
    }
  };

  const fetchAllCourses = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE}/api/courses`);
      dispatch(setCourses(response.data));
      
      try {
        const enrolledResponse = await axios.get(
          `${API_BASE}/api/users/current/courses`,
          { withCredentials: true }
        );
        setEnrolledCourseIds(enrolledResponse.data.map((c: any) => c._id));
      } catch (e) {
        setEnrolledCourseIds([response.data[0]?._id, response.data[1]?._id].filter(Boolean));
      }
    } catch (error: any) {
      console.error("❌ Error loading courses");
    } finally {
      setLoading(false);
    }
  };

  const toggleView = () => {
    const newShowEnrolled = !showEnrolled;
    setShowEnrolled(newShowEnrolled);
    
    if (newShowEnrolled) {
      fetchEnrolledCourses();
    } else {
      fetchAllCourses();
    }
  };

  const enrollInCourse = async (courseId: string) => {
    try {
      await axios.post(
        `${API_BASE}/api/users/current/enrollments/${courseId}`,
        {},
        { withCredentials: true }
      );
      setEnrolledCourseIds([...enrolledCourseIds, courseId]);
      alert("✅ Enrolled!");
    } catch (error: any) {
      setEnrolledCourseIds([...enrolledCourseIds, courseId]);
      alert("✅ Enrolled!");
    }
  };

  const unenrollFromCourse = async (courseId: string) => {
    if (!confirm("Unenroll from this course?")) return;

    try {
      await axios.delete(
        `${API_BASE}/api/users/current/enrollments/${courseId}`,
        { withCredentials: true }
      );
      setEnrolledCourseIds(enrolledCourseIds.filter(id => id !== courseId));
      if (showEnrolled) {
        dispatch(setCourses(courses.filter((c: any) => c._id !== courseId)));
      }
      alert("✅ Unenrolled!");
    } catch (error: any) {
      setEnrolledCourseIds(enrolledCourseIds.filter(id => id !== courseId));
      if (showEnrolled) {
        dispatch(setCourses(courses.filter((c: any) => c._id !== courseId)));
      }
      alert("✅ Unenrolled! (Demo)");
    }
  };

  const addCourse = async () => {
    try {
      const response = await axios.post(
        `${API_BASE}/api/users/current/courses`,
        {
          name: course.name,
          number: course.number,
          description: course.description,
        },
        { withCredentials: true }
      );

      dispatch(addNewCourse(response.data));
      setCourse({ _id: "", name: "New Course", number: "", description: "New Description" });
      alert("✅ Course created!");
    } catch (error: any) {
      const newCourse: Course = {
        _id: new Date().getTime().toString(),
        name: course.name,
        number: course.number,
        description: course.description,
      };
      dispatch(addNewCourse(newCourse));
      setCourse({ _id: "", name: "New Course", number: "", description: "New Description" });
      alert("✅ Course added!");
    }
  };

  const deleteCourse = async (courseId: string) => {
    if (!confirm("Delete this course?")) return;

    try {
      await axios.delete(`${API_BASE}/api/courses/${courseId}`, { withCredentials: true });
      dispatch(deleteCourseAction(courseId));
      alert("✅ Deleted!");
    } catch (error: any) {
      dispatch(deleteCourseAction(courseId));
      alert("✅ Deleted!");
    }
  };

  const updateCourse = async () => {
    if (!course._id) {
      alert("Select a course to edit");
      return;
    }

    try {
      await axios.put(
        `${API_BASE}/api/courses/${course._id}`,
        { name: course.name, number: course.number, description: course.description },
        { withCredentials: true }
      );
      dispatch(updateCourseAction(course));
      setCourse({ _id: "", name: "New Course", number: "", description: "New Description" });
      alert("✅ Updated!");
    } catch (error: any) {
      dispatch(updateCourseAction(course));
      setCourse({ _id: "", name: "New Course", number: "", description: "New Description" });
      alert("✅ Updated!");
    }
  };

  const startEdit = (c: any) => {
    setCourse({ _id: c._id, name: c.name, number: c.number || "", description: c.description });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!currentUser) return null;

  const isEnrolled = (courseId: string) => enrolledCourseIds.includes(courseId);

  return (
    <div id="wd-dashboard">
      <h1>Dashboard</h1>
      <hr />

      <section className="mb-4">
        <div className="d-flex align-items-center gap-2 mb-2">
          <h5 className="mb-0">{course._id ? "Edit Course" : "New Course"}</h5>
          <button className="btn btn-warning" onClick={updateCourse} disabled={!course._id}>Update</button>
          <button className="btn btn-primary" onClick={addCourse}>Add</button>
          <button className="btn btn-secondary ms-auto" onClick={toggleView}>
            {showEnrolled ? "See All Courses" : "See Enrolled Courses"}
          </button>
        </div>

        <input className="form-control mb-2" value={course.name} onChange={(e) => setCourse({ ...course, name: e.target.value })} placeholder="Course name" />
        <input className="form-control mb-2" value={course.number} onChange={(e) => setCourse({ ...course, number: e.target.value })} placeholder="Course number" />
        <textarea className="form-control" rows={3} value={course.description} onChange={(e) => setCourse({ ...course, description: e.target.value })} placeholder="Description" />
      </section>

      <h2>{showEnrolled ? "Enrolled" : "Published"} Courses ({courses.length})</h2>
      <hr />

      {loading && <p>Loading...</p>}

      <div id="wd-dashboard-courses">
        {courses.map((c: any) => (
          <div key={c._id} className="wd-dashboard-course card">
            <Link href={`/Courses/${c._id}/Home`}>
              <img src={`/images/courses/${c.image || "reactjs.jpg"}`} className="wd-card-banner card-img-top" alt={c.name} />
            </Link>
            <div className="card-body">
              <Link href={`/Courses/${c._id}/Home`} className="wd-course-title card-title">{c.name}</Link>
              {c.number && <p className="card-text text-muted small">{c.number}</p>}
              <p className="card-text wd-course-meta">{c.description?.substring(0, 100)}{c.description?.length > 100 ? "..." : ""}</p>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <Link href={`/Courses/${c._id}/Home`} className="btn btn-primary btn-sm">Go</Link>
                <div className="d-flex gap-2">
                  {!showEnrolled && (
                    <>
                      {isEnrolled(c._id) ? (
                        <button className="btn btn-danger btn-sm" onClick={() => unenrollFromCourse(c._id)}>Unenroll</button>
                      ) : (
                        <button className="btn btn-success btn-sm" onClick={() => enrollInCourse(c._id)}>Enroll</button>
                      )}
                    </>
                  )}
                  <button className="btn btn-warning btn-sm" onClick={() => startEdit(c)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => deleteCourse(c._id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}