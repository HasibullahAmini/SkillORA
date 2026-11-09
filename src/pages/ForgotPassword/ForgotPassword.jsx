import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, ArrowRight, LockKeyhole } from "lucide-react";
import "../Auth.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <section className="auth-page">
      <div className="auth-container">
        <div className="auth-info">
          <span className="auth-label">ACCOUNT RECOVERY</span>

          <h1>
            Forgot Your
            <span> Password?</span>
          </h1>

          <p>
            Don't worry! Enter your email address to begin the password recovery
            process.
          </p>

          <div className="auth-info-bottom">Your Learning Journey Matters.</div>
        </div>

        <div className="auth-form-container">
          <div className="forgot-icon">
            <LockKeyhole size={32} />
          </div>

          {!submitted ? (
            <>
              <div className="auth-form-header">
                <h2>Reset Password</h2>
                <p>Enter your registered email address below.</p>
              </div>

              <form onSubmit={handleSubmit} className="auth-form">
                <div className="auth-input-group">
                  <label>Email Address</label>

                  <div className="auth-input">
                    <Mail size={19} />

                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="auth-submit">
                  Send Reset Instructions
                  <ArrowRight size={18} />
                </button>
              </form>
            </>
          ) : (
            <div className="forgot-success">
              <h2>Request Submitted!</h2>

              <p>Your demo password recovery request has been submitted for:</p>

              <strong>{email}</strong>

              <p>
                Actual password recovery requires a backend and email service.
              </p>

              <button
                className="auth-submit"
                onClick={() => setSubmitted(false)}
              >
                Try Another Email
              </button>
            </div>
          )}

          <Link to="/login" className="forgot-back">
            <ArrowLeft size={17} />
            Back to Login
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
