import AccountNav from "../Navigation";

export default function SigninPage() {
  return (
    <div id="wd-account-shell">
      <AccountNav active="Signin" />
      <main id="wd-account-main" className="wd-auth">
        <h1>Signin</h1>
        <input className="form-control" placeholder="username" />
        <input className="form-control" placeholder="password" type="password" />
        <button className="btn btn-primary">Signin</button>
      </main>
    </div>
  );
}
