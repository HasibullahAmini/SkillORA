import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import "../Auth.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      alert("Password must contain at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Demo registration submitted successfully!");

    // Real account creation will be added with the backend.
    navigate("/login");
  };

  return (
    <section className="auth-page">
      <div className="auth-container">
        <div className="auth-info">
          <span className="auth-label">JOIN SKILLORA</span>

          <h1>
            Start Learning.
            <span> Start Growing.</span>
          </h1>

          <p>
            Create your Skillora account and discover courses designed to help
            you develop valuable skills.
          </p>

          <div className="auth-info-bottom">Your Future Starts Here.</div>
        </div>

        <div className="auth-form-container">
          <div className="auth-form-header">
            <h2>Create Account</h2>
            <p>Fill in your information to get started.</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="auth-input-group">
              <label>Full Name</label>

              <div className="auth-input">
                <User size={19} />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

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
                  placeholder="At least 8 characters"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={8}
                />
              </div>
            </div>

            <div className="auth-input-group">
              <label>Confirm Password</label>

              <div className="auth-input">
                <Lock size={19} />

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="auth-submit">
              Create Account
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="auth-switch">
            Already have an account?
            <Link to="/login"> Sign In</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;
