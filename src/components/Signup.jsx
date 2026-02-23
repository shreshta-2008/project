export default function Signup({ setPage }) {
  return (
    <div className="auth">
      <form className="card glass">
        <h2>Create Account</h2>
        <input placeholder="Name" required />
        <input placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button onClick={() => setPage("jobs")}>Sign Up</button>

        <p onClick={() => setPage("login")} className="link">
          Already have account?
        </p>
      </form>
    </div>
  );
}