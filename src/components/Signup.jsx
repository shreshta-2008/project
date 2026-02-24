export default function Signup({ setPage }) {
  return (
    <div className="auth-bg">
      <form className="auth-card large">
        <h1>Create Account</h1>

        <input placeholder="Full Name" />
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <button onClick={() => setPage("jobs")}>
          Sign Up
        </button>

        <p className="switch" onClick={() => setPage("login")}>
          Already have account?
        </p>
      </form>
    </div>
  );
}