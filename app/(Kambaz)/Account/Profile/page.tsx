import AccountNav from "../Navigation";

export default function ProfilePage() {
  return (
    <div id="wd-account-shell">
      <AccountNav active="Profile" />
      <main id="wd-account-main" className="wd-auth">
        <h1>Profile</h1>

        <input className="form-control" defaultValue="alice" />
        <input className="form-control" defaultValue="123" type="password" />
        <input className="form-control" defaultValue="Alice" />
        <input className="form-control" defaultValue="Wonderland" />
        <input className="form-control" type="date" placeholder="mm/dd/yyyy" />
        <input className="form-control" defaultValue="alice@wonderland.com" type="email" />
        <input className="form-control" defaultValue="User" />

        <button className="btn btn-danger mt-1">Signout</button>
      </main>
    </div>
  );
}
