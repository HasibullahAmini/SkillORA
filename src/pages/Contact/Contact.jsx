import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been received.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <span>GET IN TOUCH</span>
        <h1>Let's Start a Conversation</h1>
        <p>
          Have a question about our courses or learning platform? We're here to
          help you.
        </p>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="contact-info-card">
          <div className="contact-icon">
            <Mail />
          </div>
          <h3>Email Us</h3>
          <p>Our team is ready to help.</p>
          <a href="mailto:hello@skillora.com">hello@skillora.com</a>
        </div>

        <div className="contact-info-card">
          <div className="contact-icon">
            <Phone />
          </div>
          <h3>Call Us</h3>
          <p>Talk directly with our team.</p>
          <a href="tel:+10000000000">+1 000 000 0000</a>
        </div>

        <div className="contact-info-card">
          <div className="contact-icon">
            <MapPin />
          </div>
          <h3>Our Location</h3>
          <p>We're always happy to connect.</p>
          <span>Available Online</span>
        </div>

        <div className="contact-info-card">
          <div className="contact-icon">
            <Clock />
          </div>
          <h3>Working Hours</h3>
          <p>Monday – Friday</p>
          <span>9:00 AM – 5:00 PM</span>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="contact-form-content">
          <span>CONTACT SKILLORA</span>

          <h2>
            We'd Love to Hear
            <br />
            From You
          </h2>

          <p>
            Send us your questions, feedback, or suggestions. Complete the form
            and we'll be happy to assist.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Send Message
            <Send size={18} />
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
