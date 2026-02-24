import { useState } from "react";

export default function Login({ setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const DEMO_EMAIL = "demo@careerpulse.com";
  const DEMO_PASS = "123456";

  const handleLogin = () => {
    // validation
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    if (!email.includes("@")) {
      setError("Enter valid email");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // demo credentials check
    if (email === DEMO_EMAIL && password === DEMO_PASS) {
      setError("");
      setPage("jobs");
    } else {
      setError("Invalid credentials. Use demo login below 👇");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        {/* fixed heading */}
        <h2 className="login-title">Welcome Back 👋</h2>

        <p className="demo-info">
          Demo → demo@careerpulse.com | 123456
        </p>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error-text">{error}</p>}

        <button onClick={handleLogin}>Login</button>

        <p className="link-text" onClick={() => setPage("signup")}>
          Create account
        </p>
      </div>
    </div>
  );
}