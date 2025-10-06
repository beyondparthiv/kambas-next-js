
import Image from "next/image";
import Link from "next/link";
import {
  FaUserCircle,
  FaTachometerAlt,
  FaBook,
  FaCalendarAlt,
  FaInbox,
  FaFlask,
  FaUsers,
  FaHistory,
  FaQuestionCircle,
} from "react-icons/fa";

export default function Navigation() {
  return (
    <nav id="wd-kanbas-navigation">
      <ul>
        {/* Northeastern logo (required) */}
        <li id="wd-nav-neu">
          <a
            href="https://www.northeastern.edu"
            target="_blank"
            rel="noreferrer"
            className="wd-nav-link wd-link-neu"
            aria-label="Northeastern University"
          >
            <Image
              src="/images/northeastern.webp"
              alt="Northeastern University"
              width={60}
              height={60}
            />
          </a>
        </li>

        {/* REQUIRED BY RUBRIC */}
        <li className="wd-item-required wd-item-account">
          <Link href="/Account" className="wd-nav-link">
            <FaUserCircle className="wd-icon" />
            <span>Account</span>
          </Link>
        </li>

        <li className="wd-item-required wd-item-dashboard">
          <Link href="/Dashboard" className="wd-nav-link">
            <FaTachometerAlt className="wd-icon" />
            <span>Dashboard</span>
          </Link>
        </li>

        <li className="wd-item-required wd-item-default">
          <Link href="/Dashboard" className="wd-nav-link">
            <FaBook className="wd-icon" />
            <span>Courses</span>
          </Link>
        </li>

        <li className="wd-item-required wd-item-default">
          <Link href="/Calendar" className="wd-nav-link">
            <FaCalendarAlt className="wd-icon" />
            <span>Calendar</span>
          </Link>
        </li>

        <li className="wd-item-required wd-item-default">
          <Link href="/Inbox" className="wd-nav-link">
            <FaInbox className="wd-icon" />
            <span>Inbox</span>
          </Link>
        </li>

        <li className="wd-item-required wd-item-default">
          <Link href="/labs" className="wd-nav-link">
            <FaFlask className="wd-icon" />
            <span>Labs</span>
          </Link>
        </li>

        {/* --- Optional extras (after required items) --- */}
        <li className="wd-sep" aria-hidden="true"><div /></li>

        <li className="wd-item-default">
          <Link href="/Groups" className="wd-nav-link">
            <FaUsers className="wd-icon" />
            <span>Groups</span>
          </Link>
        </li>

        <li className="wd-item-default">
          <Link href="/History" className="wd-nav-link">
            <FaHistory className="wd-icon" />
            <span>History</span>
          </Link>
        </li>

        <li className="wd-item-default">
          <Link href="/Help" className="wd-nav-link">
            <FaQuestionCircle className="wd-icon" />
            <span>Help</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
