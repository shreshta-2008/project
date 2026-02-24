import { useState } from "react";

export default function Login({ setPage }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setPage("jobs");
  };

  return (
    <div className="auth-bg">
      <form onSubmit={submit} className="auth-card">
        <h1>Welcome Back</h1>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button>Login</button>

        <p className="switch" onClick={() => setPage("signup")}>
          Create account
        </p>
      </form>
    </div>
  );
}