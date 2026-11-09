import { ArrowRight, Users } from "lucide-react";

import { Link } from "react-router-dom";
import "./Team.css";

const teamMembers = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Lead Web Development Instructor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    description:
      "Specializes in modern web technologies and frontend development.",
  },
  {
    id: 2,
    name: "Sophia Carter",
    role: "UI/UX Design Instructor",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500",
    description:
      "Helps students understand design principles and user experience.",
  },
  {
    id: 3,
    name: "Daniel Wilson",
    role: "Software Development Mentor",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
    description: "Focuses on programming fundamentals and practical projects.",
  },
  {
    id: 4,
    name: "Emma Johnson",
    role: "Digital Marketing Instructor",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500",
    description: "Teaches digital strategy, branding, and online marketing.",
  },
];

function Team() {
  return (
    <main className="team-page">
      {/* Hero */}
      <section className="team-hero">
        <span>MEET OUR TEAM</span>
        <h1>Learn from People Who Care</h1>
        <p>
          Meet the instructors and mentors helping learners build knowledge,
          confidence, and practical skills.
        </p>
      </section>

      {/* Introduction */}
      <section className="team-intro">
        <div>
          <span>THE PEOPLE BEHIND SKILLORA</span>
          <h2>Great Learning Starts with Great Teachers</h2>
        </div>

        <p>
          Our team brings together educators and professionals who are
          passionate about sharing knowledge and helping students reach their
          learning goals.
        </p>
      </section>

      {/* Team Members */}
      <section className="team-members-section">
        <div className="team-section-heading">
          <span>OUR INSTRUCTORS</span>
          <h2>Meet the Team</h2>
          <p>Learn from experienced professionals and educators.</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className="team-card" key={member.id}>
              <div className="team-image">
                <img src={member.image} alt={member.name} />

                <div className="team-socials">
                  <a href="#linkedin" aria-label="LinkedIn">
                    in
                  </a>
                  <a href="#twitter" aria-label="Twitter">
                    X
                  </a>
                </div>
              </div>

              <div className="team-card-content">
                <h3>{member.name}</h3>
                <span>{member.role}</span>
                <p>{member.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="team-stats">
        <div>
          <Users size={30} />
          <h3>25+</h3>
          <p>Expert Instructors</p>
        </div>

        <div>
          <h3>50+</h3>
          <p>Learning Programs</p>
        </div>

        <div>
          <h3>10K+</h3>
          <p>Happy Learners</p>
        </div>

        <div>
          <h3>15+</h3>
          <p>Countries Reached</p>
        </div>
      </section>

      {/* CTA */}
      <section className="team-cta">
        <span>GROW WITH US</span>
        <h2>Want to Become Part of Our Team?</h2>
        <p>
          We believe in sharing knowledge and creating opportunities for
          learners everywhere.
        </p>

        <Link to="/contact">
          Contact Our Team
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}

export default Team;
