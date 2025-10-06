import AccountNav from "../Navigation";

export default function SignupPage() {
  return (
    <div id="wd-account-shell">
      <AccountNav active="Signup" />
      <main id="wd-account-main" className="wd-auth">
        <h1>Signup</h1>
        <input className="form-control" placeholder="username" />
        <input className="form-control" placeholder="password" type="password" />
        <button className="btn btn-primary">Signup</button>
      </main>
    </div>
  );
}
