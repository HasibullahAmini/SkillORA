import { useState } from "react";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Briefcase,
  Clock,
  User,
  Search,
  Mail,
  Phone,
} from "lucide-react";

import { Link } from "react-router-dom";
import blogPosts from "../../data/blogData";
import "./ExtraPages.css";

// CAREER PAGE
export function Career() {
  const jobs = [
    {
      title: "Frontend Developer",
      type: "Full Time",
      location: "Remote",
      category: "Development",
    },
    {
      title: "UI/UX Designer",
      type: "Part Time",
      location: "Remote",
      category: "Design",
    },
    {
      title: "Digital Marketing Specialist",
      type: "Full Time",
      location: "Remote",
      category: "Marketing",
    },
  ];

  return (
    <main className="extra-page">
      <section className="extra-hero">
        <span>CAREER OPPORTUNITIES</span>
        <h1>Build Your Career With Skillora</h1>
        <p>
          Join our mission to make learning accessible and help people develop
          professional skills.
        </p>
      </section>

      <section className="extra-container">
        <div className="extra-heading">
          <span>JOIN OUR TEAM</span>
          <h2>Explore Open Positions</h2>
        </div>

        <div className="extra-grid">
          {jobs.map((job) => (
            <article className="extra-card" key={job.title}>
              <Briefcase size={30} />
              <h3>{job.title}</h3>
              <p>{job.category}</p>

              <div className="extra-meta">
                <span>
                  <Clock size={15} /> {job.type}
                </span>
                <span>
                  <MapPin size={15} /> {job.location}
                </span>
              </div>

              <a href="mailto:careers@skillora.example">
                Apply Now <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

// EVENTS PAGE
export function Events() {
  const events = [
    {
      title: "Web Development Workshop",
      date: "November 20, 2026",
      category: "Development",
      description: "Explore modern web development and frontend technologies.",
    },
    {
      title: "UI/UX Design Masterclass",
      date: "November 25, 2026",
      category: "Design",
      description:
        "Learn the fundamentals of user interface and user experience.",
    },
    {
      title: "Future of Technology",
      date: "December 5, 2026",
      category: "Technology",
      description: "Discover new technologies and future career opportunities.",
    },
  ];

  return (
    <main className="extra-page">
      <section className="extra-hero">
        <span>SKILLORA EVENTS</span>
        <h1>Learn, Connect and Grow</h1>
        <p>
          Attend workshops, educational sessions, and events designed to support
          your learning journey.
        </p>
      </section>

      <section className="extra-container">
        <div className="extra-heading">
          <span>UPCOMING EVENTS</span>
          <h2>Explore Our Events</h2>
        </div>

        <div className="extra-grid">
          {events.map((event) => (
            <article className="extra-card" key={event.title}>
              <Calendar size={30} />
              <span className="extra-category">{event.category}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>

              <div className="extra-meta">
                <span>
                  <Calendar size={15} /> {event.date}
                </span>
              </div>

              <a href="mailto:events@skillora.example">
                Ask About Event <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

// BLOG TWO PAGE
export function BlogTwo() {
  return (
    <main className="extra-page">
      <section className="extra-hero">
        <span>SKILLORA BLOG</span>
        <h1>Knowledge for Your Next Step</h1>
        <p>Explore our latest learning articles and technology insights.</p>
      </section>

      <section className="extra-container">
        <div className="blog-two-grid">
          {blogPosts.map((post) => (
            <article className="blog-two-card" key={post.id}>
              <img src={post.image} alt={post.title} />

              <div>
                <span className="extra-category">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>

                <div className="extra-meta">
                  <span>
                    <User size={15} /> {post.author}
                  </span>
                  <span>
                    <Calendar size={15} /> {post.date}
                  </span>
                </div>

                <Link to={`/blog/${post.id}`}>
                  Read Article <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

// BLOG THREE PAGE
export function BlogThree() {
  const [search, setSearch] = useState("");

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="extra-page">
      <section className="extra-hero">
        <span>THE SKILLORA JOURNAL</span>
        <h1>Stories, Ideas and Inspiration</h1>
        <p>Find useful ideas to improve your knowledge and skills.</p>
      </section>

      <section className="extra-container">
        <div className="extra-search">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="blog-three-list">
          {filteredPosts.map((post) => (
            <article className="blog-three-card" key={post.id}>
              <img src={post.image} alt={post.title} />

              <div>
                <span className="extra-category">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>

                <div className="extra-meta">
                  <span>
                    <User size={15} /> {post.author}
                  </span>
                  <span>
                    <Calendar size={15} /> {post.date}
                  </span>
                </div>

                <Link to={`/blog/${post.id}`}>
                  Continue Reading <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}

          {filteredPosts.length === 0 && <p>No articles found.</p>}
        </div>
      </section>
    </main>
  );
}

// CONTACT TWO PAGE
export function ContactTwo() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="extra-page">
      <section className="extra-hero">
        <span>CONTACT SKILLORA</span>
        <h1>We Would Love to Hear From You</h1>
        <p>Have a question or suggestion? Send us a message.</p>
      </section>

      <section className="extra-container contact-two">
        <div className="contact-two-info">
          <span>GET IN TOUCH</span>
          <h2>Let's Talk About Your Learning Goals</h2>

          <p>
            Our team is ready to help you with questions about courses,
            learning, and the Skillora platform.
          </p>

          <div>
            <Mail /> nfleader.asdf52@gmail.com
          </div>
          <div>
            <Phone /> +93 766 889 488
          </div>
          <div>
            <MapPin /> Kabul, Afghanistan
          </div>
        </div>

        <form className="contact-two-form" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="contact-success">
              <h2>Thank You!</h2>
              <p>Your demo message has been submitted.</p>
              <button type="button" onClick={() => setSubmitted(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <h2>Send Us a Message</h2>

              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" required />

              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" required />

              <label>Subject</label>
              <input type="text" placeholder="Message subject" required />

              <label>Your Message</label>
              <textarea placeholder="Write your message..." rows="5" required />

              <button type="submit">Send Message</button>
            </>
          )}
        </form>
      </section>
    </main>
  );
}
