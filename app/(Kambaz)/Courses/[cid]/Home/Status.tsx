export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: 320 }}>
      <h2>Course Status</h2>

      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <button>Unpublish</button>
        <button>Publish</button>
      </div>

      <div style={{ display: "grid", gap: 8 }}>
        <button>Import Existing Content</button>
        <button>Import from Commons</button>
        <button>Choose Home Page</button>
        <button>View Course Stream</button>
        <button>New Announcement</button>
        <button>New Analytics</button>
        <button>View Course Notifications</button>
      </div>
    </div>
  );
}
