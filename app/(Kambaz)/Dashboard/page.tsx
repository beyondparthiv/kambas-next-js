// app/(Kambaz)/Dashboard/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (6)</h2>
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Image src="/images/reactjs.png" alt="CS5610" width={260} height={140} />
          <div className="wd-course-body">
            <h5>CS5610 Web Development</h5>
            <p className="wd-dashboard-course-title">Full Stack Next.js</p>
            <Link href="/Courses/5610/Home" className="wd-course-btn">Go to course</Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <Image src="/images/reactjs.png" alt="CS5520" width={260} height={140} />
          <div className="wd-course-body">
            <h5>CS5520 Mobile App Dev</h5>
            <p className="wd-dashboard-course-title">Android - Kotlin</p>
            <Link href="/Courses/5520/Home" className="wd-course-btn">Go to course</Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <Image src="/images/reactjs.png" alt="CS5008" width={260} height={140} />
          <div className="wd-course-body">
            <h5>CS5008 Data Structures</h5>
            <p className="wd-dashboard-course-title">Algorithms Practice</p>
            <Link href="/Courses/5008/Home" className="wd-course-btn">Go to course</Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <Image src="/images/reactjs.png" alt="CS5010" width={260} height={140} />
          <div className="wd-course-body">
            <h5>CS5010 Program Design</h5>
            <p className="wd-dashboard-course-title">Design Fundamentals</p>
            <Link href="/Courses/5010/Home" className="wd-course-btn">Go to course</Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <Image src="/images/reactjs.png" alt="CS5800" width={260} height={140} />
          <div className="wd-course-body">
            <h5>CS5800 Algorithms</h5>
            <p className="wd-dashboard-course-title">Theory</p>
            <Link href="/Courses/5800/Home" className="wd-course-btn">Go to course</Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <Image src="/images/reactjs.png" alt="CS5004" width={260} height={140} />
          <div className="wd-course-body">
            <h5>CS5004 OOD</h5>
            <p className="wd-dashboard-course-title">Java OOP</p>
            <Link href="/Courses/5004/Home" className="wd-course-btn">Go to course</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
