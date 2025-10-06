
import Link from "next/link";

export default function Navigation({ active }: { active: "Signin" | "Signup" | "Profile" }) {
  return (
    <aside id="wd-account-navigation">
      <h4>Account</h4>
      <ul>
        <li className={active === "Signin"  ? "wd-active" : ""}><Link href="/Account/Signin">Signin</Link></li>
        <li className={active === "Signup"  ? "wd-active" : ""}><Link href="/Account/Signup">Signup</Link></li>
        <li className={active === "Profile" ? "wd-active" : ""}><Link href="/Account/Profile">Profile</Link></li>
      </ul>
    </aside>
  );
}
