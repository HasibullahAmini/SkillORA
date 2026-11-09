import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import "../Auth.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Demo login submitted successfully!");

    // Real authentication will be added with the backend.
    navigate("/");
  };

  return (
    <section className="auth-page">
      <div className="auth-container">
        <div className="auth-info">
          <span className="auth-label">WELCOME BACK</span>

          <h1>
            Continue Your
            <span> Learning Journey.</span>
          </h1>

          <p>
            Sign in to access your courses, track your progress, and continue
            building your future with Skillora.
          </p>

          <div className="auth-info-bottom">
            Learn Skills. Build Your Future.
          </div>
        </div>

        <div className="auth-form-container">
          <div className="auth-form-header">
            <h2>Welcome Back!</h2>
            <p>Enter your details to sign in.</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="auth-input-group">
              <label>Email Address</label>

              <div className="auth-input">
                <Mail size={19} />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="auth-input-group">
              <label>Password</label>

              <div className="auth-input">
                <Lock size={19} />

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="auth-extra">
              <label>
                <input type="checkbox" />
                Remember me
              </label>

              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            <button type="submit" className="auth-submit">
              Sign In
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="auth-switch">
            Don't have an account?
            <Link to="/register"> Create Account</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
