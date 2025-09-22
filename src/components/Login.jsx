// src/components/Login.jsx
import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [btnHover, setBtnHover] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    // Hardcoded admin credentials
    if (email === "admin@example.com" && password === "admin123") {
      onLogin && onLogin();
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <style>{`
        /* Scoped styles for the login component (no external CSS needed) */
        .admin-login-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: radial-gradient(1200px 600px at 10% 10%, rgba(255,255,255,0.06), transparent 6%),
                      linear-gradient(135deg, #0f172a 0%, #0b1220 40%, #0b1220 100%);
          color: #e6eef8;
          box-sizing: border-box;
        }

        .admin-login-card {
          width: 100%;
          max-width: 420px;
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
          border-radius: 14px;
          padding: 28px;
          box-shadow: 0 10px 30px rgba(2,6,23,0.7), inset 0 1px 0 rgba(255,255,255,0.02);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.04);
        }

        .admin-login-heading {
          margin: 0 0 18px 0;
          font-size: 1.5rem;
          color: #f8fafc;
          text-align: center;
          letter-spacing: -0.2px;
          font-weight: 700;
        }

        .admin-login-sub {
          margin: 0 0 18px 0;
          text-align: center;
          color: rgba(230,238,248,0.75);
          font-size: 0.95rem;
        }

        .error-message {
          background: rgba(255,60,60,0.08);
          color: #ffb4b4;
          padding: 10px 12px;
          border-radius: 8px;
          margin-bottom: 14px;
          font-size: 0.95rem;
          text-align: center;
          border: 1px solid rgba(255,60,60,0.12);
        }

        form.login-form { display: grid; gap: 12px; }

        .field-label {
          display: block;
          margin-bottom: 6px;
          font-size: 0.85rem;
          color: rgba(230,238,248,0.9);
        }

        .input-field {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
          color: #e6eef8;
          font-size: 0.98rem;
          transition: box-shadow 160ms ease, transform 120ms ease, border-color 120ms ease;
        }

        .input-field::placeholder { color: rgba(230,238,248,0.35); }

        .input-field:focus {
          outline: none;
          border-color: rgba(99,102,241,0.95);
          box-shadow: 0 6px 18px rgba(99,102,241,0.12), 0 0 0 4px rgba(99,102,241,0.07);
          transform: translateY(-1px);
        }

        .submit-btn {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          border: none;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          color: white;
          transition: transform 120ms ease, box-shadow 120ms ease;
          background-image: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
          box-shadow: 0 8px 20px rgba(139,92,246,0.16);
        }

        .submit-btn:active { transform: translateY(1px) scale(0.998); }

        .submit-btn.hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 36px rgba(99,102,241,0.18);
        }

        .help-row {
          display:flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 6px;
          font-size: 0.85rem;
          color: rgba(230,238,248,0.7);
        }

        .small-link {
          color: rgba(255,255,255,0.9);
          text-decoration: underline;
          cursor: pointer;
          opacity: 0.9;
        }

        @media (max-width: 480px) {
          .admin-login-card { padding: 20px; border-radius: 12px; }
          .admin-login-heading { font-size: 1.25rem; }
        }
      `}</style>

      <div className="admin-login-wrapper" role="main">
        <div className="admin-login-card" aria-label="Admin login card">
          <h2 className="admin-login-heading">Admin Login</h2>
          <p className="admin-login-sub">Sign in with your admin credentials to access the dashboard</p>

          {error && <div className="error-message" role="alert">{error}</div>}

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <div>
              <label className="field-label" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                className="input-field"
                value={email}
                placeholder="admin@example.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="field-label" htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="input-field"
                value={password}
                placeholder="admin123"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className={`submit-btn ${btnHover ? "hover" : ""}`}
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
              aria-label="Log in as admin"
            >
              Login
            </button>
          </form>

          <div className="help-row" style={{ marginTop: 14 }}>
            <div style={{ fontSize: 13, color: "rgba(230,238,248,0.6)" }}>
              Forgot credentials? Ask project lead
            </div>
            {/* <div
              className="small-link"
              onClick={() => {
                // quick helper to prefill admin credentials (developer convenience)
                setEmail("admin@example.com");
                setPassword("admin123");
                setError("");
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter") { setEmail("admin@example.com"); setPassword("admin123"); setError(""); } }}
            >
              Prefill
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
