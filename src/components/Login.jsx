import { useState } from "react";

export default function Login({ setPage }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage("jobs");
  };

  return (
    <div className="auth">
      <form onSubmit={handleSubmit} className="card glass">
        <h2>Welcome Back</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />

        <button>Login</button>

        <p onClick={() => setPage("signup")} className="link">
          Create account
        </p>
      </form>
    </div>
  );
}