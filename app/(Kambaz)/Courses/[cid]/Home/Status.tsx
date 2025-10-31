import {
  FaTimesCircle,
  FaCheckCircle,
  FaCloudUploadAlt,
  FaCubes,
  FaHome,
  FaStream,
  FaBullhorn,
  FaChartBar,
  FaBell,
} from "react-icons/fa";

type Props = {
  stats?: { modules: number; lessons: number; assignments: number };
};

export default function CourseStatus({ stats }: Props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title m-0">Course Status</h5>

        {/* publish row */}
        <div className="mt-2 mb-3" style={{ display: "flex", gap: 8 }}>
          <button className="btn-grey" style={{ width: "100%", display: "flex", alignItems: "center", gap: 8 }}>
            <FaTimesCircle /> Unpublish
          </button>
          <button className="btn-green" style={{ width: "100%", display: "flex", alignItems: "center", gap: 8 }}>
            <FaCheckCircle /> Publish
          </button>
        </div>

        {/* slate actions with icons */}
        <div id="wd-status-actions">
          <a className="btn-slate" href="#"><FaCloudUploadAlt /> Import Existing Content</a>
          <a className="btn-slate" href="#"><FaCubes /> Import from Commons</a>
          <a className="btn-slate" href="#"><FaHome /> Choose Home Page</a>
          <a className="btn-slate" href="#"><FaStream /> View Course Stream</a>
          <a className="btn-slate" href="#"><FaBullhorn /> New Announcement</a>
          <a className="btn-slate" href="#"><FaChartBar /> New Analytics</a>
          <a className="btn-slate" href="#"><FaBell /> View Course Notifications</a>
        </div>

        {/* small stats list (optional but nice) */}
        {stats && (
          <ul className="mt-3 mb-0 text-secondary small">
            <li>Published</li>
            <li>Modules: {stats.modules}</li>
            <li>Lessons: {stats.lessons}</li>
            <li>Assignments: {stats.assignments}</li>
          </ul>
        )}
      </div>
    </div>
  );
}
