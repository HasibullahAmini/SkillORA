import {
  Target,
  Eye,
  Users,
  BookOpen,
  Award,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./About.css";

const values = [
  {
    icon: <Target size={28} />,
    title: "Our Mission",
    description:
      "Our mission is to make quality education accessible and help learners develop practical skills for their future.",
  },
  {
    icon: <Eye size={28} />,
    title: "Our Vision",
    description:
      "We envision a world where everyone has the opportunity to learn, grow and achieve their professional goals.",
  },
  {
    icon: <Award size={28} />,
    title: "Our Values",
    description:
      "We believe in continuous learning, creativity, innovation and creating meaningful educational experiences.",
  },
];

const benefits = [
  {
    icon: <BookOpen size={28} />,
    title: "Practical Learning",
    description:
      "Learn through practical examples, projects and real-world exercises.",
  },
  {
    icon: <Users size={28} />,
    title: "Expert Instructors",
    description:
      "Learn from experienced instructors who share knowledge and guidance.",
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Flexible Education",
    description:
      "Access learning resources and develop skills at your own pace.",
  },
  {
    icon: <Award size={28} />,
    title: "Career Development",
    description:
      "Build knowledge and practical abilities that support your career goals.",
  },
];

const team = [
  {
    name: "John Smith",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Education",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500",
  },
  {
    name: "Michael Brown",
    role: "Lead Instructor",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
  },
];

function About() {
  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span>ABOUT SKILLORA</span>

          <h1>
            Empowering People Through
            <span> Quality Education</span>
          </h1>

          <p>
            We help people discover new opportunities, develop valuable skills
            and build a better future through modern online learning.
          </p>

          <div className="about-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <strong>About Us</strong>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="about-intro">
        <div className="about-intro-image">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900"
            alt="Students learning together"
          />

          <div className="about-experience">
            <h3>Learn</h3>
            <p>Grow Every Day</p>
          </div>
        </div>

        <div className="about-intro-content">
          <span className="about-label">WHO WE ARE</span>

          <h2>
            Building Skills For
            <span> A Better Tomorrow</span>
          </h2>

          <p>
            Skillora is an online learning platform designed to make education
            more accessible, practical and engaging.
          </p>

          <p>
            We believe learning should not stop in the classroom. Everyone
            deserves the opportunity to explore new ideas, improve their
            abilities and prepare for future opportunities.
          </p>

          <div className="about-check-list">
            <p>✓ Practical and engaging learning</p>
            <p>✓ Flexible learning experience</p>
            <p>✓ Skills for future opportunities</p>
          </div>

          <Link to="/courses" className="about-button">
            Explore Courses
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="about-values">
        <div className="about-section-heading">
          <span className="about-label">OUR PURPOSE</span>
          <h2>What Drives Us Forward</h2>
          <p>
            Our principles guide everything we create and every learner we
            support.
          </p>
        </div>

        <div className="about-values-grid">
          {values.map((value, index) => (
            <div className="about-value-card" key={index}>
              <div className="about-value-icon">{value.icon}</div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATISTICS */}
      <section className="about-stats">
        <div className="about-stats-content">
          <div>
            <h2>10K+</h2>
            <p>Active Learners</p>
          </div>

          <div>
            <h2>250+</h2>
            <p>Online Courses</p>
          </div>

          <div>
            <h2>50+</h2>
            <p>Expert Instructors</p>
          </div>

          <div>
            <h2>95%</h2>
            <p>Student Satisfaction</p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="about-benefits">
        <div className="about-section-heading">
          <span className="about-label">WHY SKILLORA</span>
          <h2>Why Learn With Us?</h2>
          <p>Discover a learning experience designed around your growth.</p>
        </div>

        <div className="about-benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="about-benefit-card" key={index}>
              <div className="about-benefit-icon">{benefit.icon}</div>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="about-team">
        <div className="about-section-heading">
          <span className="about-label">OUR TEAM</span>
          <h2>Meet Our Team</h2>
          <p>Meet the people behind our learning experience.</p>
        </div>

        <div className="about-team-grid">
          {team.map((person, index) => (
            <div className="about-team-card" key={index}>
              <div className="about-team-image">
                <img src={person.image} alt={person.name} />
              </div>

              <div className="about-team-info">
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="about-cta">
        <div>
          <span>START YOUR JOURNEY</span>
          <h2>Ready to Build Your Future?</h2>
          <p>Discover courses that help you develop valuable skills.</p>
        </div>

        <Link to="/courses">
          Explore Courses
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}

export default About;
