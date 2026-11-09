import "./Home.css";
import {
  ArrowRight,
  Play,
  Users,
  BookOpen,
  Star,
  Code2,
  Palette,
  Database,
  Smartphone,
  Briefcase,
  Camera,
} from "lucide-react";

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-label">
              <span className="label-dot"></span>
              YOUR LEARNING JOURNEY STARTS HERE
            </span>

            <h1>
              Learn Skills.
              <br />
              <span>Build Your Future.</span>
            </h1>

            <p>
              Discover practical courses, learn from experienced instructors,
              and develop the skills you need to achieve your goals.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                Explore Courses <ArrowRight size={18} />
              </button>

              <button className="play-btn">
                <span>
                  <Play size={17} fill="currentColor" />
                </span>
                How it works
              </button>
            </div>

            <div className="hero-trust">
              <div className="trust-icon">
                <Users size={20} />
              </div>
              <div>
                <strong>Learn at your own pace</strong>
                <small>Build skills for tomorrow</small>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-card">
              <div className="visual-top">
                <span>SKILLORA LEARNING</span>
                <span className="online-dot"></span>
              </div>

              <div className="visual-main">
                <div className="visual-icon">
                  <BookOpen size={36} />
                </div>

                <h3>Grow Your Skills</h3>
                <p>Learn something new every day.</p>

                <div className="progress-area">
                  <div>
                    <span>Your learning journey</span>
                    <strong>75%</strong>
                  </div>
                  <div className="progress-bar">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-card rating-card">
              <Star size={20} fill="#FFB900" color="#FFB900" />
              <div>
                <strong>4.9/5</strong>
                <small>Learning experience</small>
              </div>
            </div>

            <div className="floating-card course-card">
              <div className="course-card-icon">
                <BookOpen size={20} />
              </div>
              <div>
                <strong>New Skills</strong>
                <small>New opportunities</small>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Trusted Companies Section */}
      <section className="trusted-section">
        <p>BUILD YOUR FUTURE WITH IN-DEMAND SKILLS</p>

        <div className="trusted-logos">
          <span>
            TECH<span className="logo-highlight">NOVA</span>
          </span>
          <span>
            CODE<span className="logo-highlight">FLOW</span>
          </span>
          <span>DigitalPro</span>
          <span>CREATIVE LAB</span>
          <span>
            DEV<span className="logo-highlight">SPACE</span>
          </span>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="categories-section">
        <div className="section-heading">
          <div>
            <span className="section-label">EXPLORE AND LEARN</span>
            <h2>
              Explore Top <span>Categories</span>
            </h2>
            <p>
              Find the right learning path and develop skills for your future.
            </p>
          </div>

          <button className="view-all-btn">
            View All Categories <ArrowRight size={17} />
          </button>
        </div>

        <div className="categories-grid">
          <div className="category-card">
            <div className="category-icon blue">
              <Code2 size={27} />
            </div>
            <h3>Web Development</h3>
            <p>Explore modern web technologies.</p>
            <span>
              12 Courses <ArrowRight size={15} />
            </span>
          </div>

          <div className="category-card">
            <div className="category-icon yellow">
              <Palette size={27} />
            </div>
            <h3>UI/UX Design</h3>
            <p>Create beautiful digital experiences.</p>
            <span>
              08 Courses <ArrowRight size={15} />
            </span>
          </div>

          <div className="category-card">
            <div className="category-icon green">
              <Database size={27} />
            </div>
            <h3>Data Science</h3>
            <p>Understand data and discover insights.</p>
            <span>
              10 Courses <ArrowRight size={15} />
            </span>
          </div>

          <div className="category-card">
            <div className="category-icon purple">
              <Smartphone size={27} />
            </div>
            <h3>Mobile Development</h3>
            <p>Build applications for mobile devices.</p>
            <span>
              09 Courses <ArrowRight size={15} />
            </span>
          </div>

          <div className="category-card">
            <div className="category-icon orange">
              <Briefcase size={27} />
            </div>
            <h3>Business</h3>
            <p>Develop professional business skills.</p>
            <span>
              07 Courses <ArrowRight size={15} />
            </span>
          </div>

          <div className="category-card">
            <div className="category-icon pink">
              <Camera size={27} />
            </div>
            <h3>Digital Marketing</h3>
            <p>Learn modern marketing strategies.</p>
            <span>
              11 Courses <ArrowRight size={15} />
            </span>
          </div>
        </div>
      </section>
      {/* Popular Courses Section */}

      <section className="popular-courses-section">
        <div className="section-heading">
          <div>
            <span className="section-label">OUR TOP PROGRAMS</span>
            <h2>
              Explore Our <span>Popular Courses</span>
            </h2>
            <p>
              Learn practical skills through expert-led courses designed for
              your future.
            </p>
          </div>
          ```
          <button className="view-all-btn">
            Explore All Courses <ArrowRight size={17} />
          </button>
          ```
        </div>

        <div className="courses-grid">
          ```
          {/* Course 1 */}
          <article className="course-card">
            <div className="course-image course-web">
              <span className="course-badge">BEST SELLER</span>
              <div className="course-image-content">
                <span>01</span>
                <h3>
                  Web
                  <br />
                  Development
                </h3>
                <p>HTML • CSS • JavaScript</p>
              </div>
            </div>

            <div className="course-info">
              <div className="course-category">
                <span>Development</span>
                <div className="course-rating">
                  <Star size={15} fill="currentColor" />
                  4.9
                </div>
              </div>

              <h3>Complete Frontend Web Development</h3>

              <p className="instructor">By Skillora Instructor</p>

              <div className="course-meta">
                <span>
                  <BookOpen size={15} /> 24 Lessons
                </span>
                <span>8 Weeks</span>
              </div>

              <div className="course-bottom">
                <strong>$49.00</strong>
                <button aria-label="Explore frontend course">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </article>
          {/* Course 2 */}
          <article className="course-card">
            <div className="course-image course-design">
              <span className="course-badge">POPULAR</span>
              <div className="course-image-content">
                <span>02</span>
                <h3>
                  UI / UX
                  <br />
                  Design
                </h3>
                <p>Design • Creativity • Figma</p>
              </div>
            </div>

            <div className="course-info">
              <div className="course-category">
                <span>Design</span>
                <div className="course-rating">
                  <Star size={15} fill="currentColor" />
                  4.8
                </div>
              </div>

              <h3>Professional UI/UX Design Masterclass</h3>

              <p className="instructor">By Skillora Instructor</p>

              <div className="course-meta">
                <span>
                  <BookOpen size={15} /> 18 Lessons
                </span>
                <span>6 Weeks</span>
              </div>

              <div className="course-bottom">
                <strong>$39.00</strong>
                <button aria-label="Explore UI UX course">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </article>
          {/* Course 3 */}
          <article className="course-card">
            <div className="course-image course-data">
              <span className="course-badge">NEW COURSE</span>
              <div className="course-image-content">
                <span>03</span>
                <h3>
                  Data
                  <br />
                  Science
                </h3>
                <p>Python • Data • Analytics</p>
              </div>
            </div>

            <div className="course-info">
              <div className="course-category">
                <span>Technology</span>
                <div className="course-rating">
                  <Star size={15} fill="currentColor" />
                  4.9
                </div>
              </div>

              <h3>Introduction to Data Science with Python</h3>

              <p className="instructor">By Skillora Instructor</p>

              <div className="course-meta">
                <span>
                  <BookOpen size={15} /> 30 Lessons
                </span>
                <span>10 Weeks</span>
              </div>

              <div className="course-bottom">
                <strong>$59.00</strong>
                <button aria-label="Explore data science course">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </article>
          ```
        </div>
      </section>
      {/* Promotional Banner */}
      <section className="promo-section">
        <div className="promo-container">
          <div className="promo-content">
            <span className="promo-label">START LEARNING TODAY</span>

            <h2>
              Invest in Your Skills.
              <br />
              <span>Invest in Your Future.</span>
            </h2>

            <p>
              Take the next step in your learning journey. Discover new skills
              and unlock new opportunities.
            </p>

            <button className="promo-btn">
              Get Started Now <ArrowRight size={18} />
            </button>
          </div>

          <div className="promo-visual">
            <div className="promo-circle"></div>

            <div className="promo-floating-card">
              <BookOpen size={30} />
              <div>
                <strong>Keep Learning</strong>
                <span>Keep Growing</span>
              </div>
            </div>

            <div className="promo-number">
              <strong>01</strong>
              <span>YOUR FUTURE STARTS HERE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Skillora */}
      <section className="benefits-section">
        <div className="benefits-container">
          <div className="benefits-heading">
            <span className="section-label">WHY CHOOSE SKILLORA?</span>

            <h2>
              A Better Way to
              <br />
              <span>Learn and Grow</span>
            </h2>

            <p>
              We make learning practical, flexible, and accessible so you can
              develop skills that matter.
            </p>

            <button className="benefits-btn">
              Discover More <ArrowRight size={17} />
            </button>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon benefit-blue">
                <Users size={27} />
              </div>

              <h3>Expert Instructors</h3>

              <p>
                Learn from experienced professionals who understand the
                industry.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon benefit-yellow">
                <BookOpen size={27} />
              </div>

              <h3>Practical Learning</h3>

              <p>
                Build real knowledge through practical lessons and projects.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon benefit-green">
                <Star size={27} />
              </div>

              <h3>Quality Education</h3>

              <p>
                Access structured courses designed to support your learning
                journey.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon benefit-purple">
                <ArrowRight size={27} />
              </div>

              <h3>Flexible Learning</h3>

              <p>Study at your own pace and make progress on your schedule.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Student Testimonials */}
      <section className="testimonials-section">
        <div className="section-heading">
          <div>
            <span className="section-label">STUDENT EXPERIENCES</span>
            <h2>
              What Our Students <span>Say</span>
            </h2>
            <p>Discover how Skillora supports learners on their journey.</p>
          </div>
        </div>

        <div className="testimonials-grid">
          <article className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>

            <p className="testimonial-text">
              "The courses helped me understand web development through
              practical lessons. I really enjoyed the learning experience."
            </p>

            <div className="testimonial-user">
              <div className="testimonial-avatar avatar-one">AM</div>
              <div>
                <h4>Ahmad Malik</h4>
                <span>Frontend Development Student</span>
              </div>
            </div>
          </article>

          <article className="testimonial-card featured-testimonial">
            <div className="testimonial-stars">★★★★★</div>

            <p className="testimonial-text">
              "Skillora provides clear lessons and a flexible learning
              experience. It helped me improve my design skills."
            </p>

            <div className="testimonial-user">
              <div className="testimonial-avatar avatar-two">SA</div>
              <div>
                <h4>Sara Ahmad</h4>
                <span>UI/UX Design Student</span>
              </div>
            </div>
          </article>

          <article className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>

            <p className="testimonial-text">
              "I wanted to learn Python and data science. The structured courses
              made the learning process easier."
            </p>

            <div className="testimonial-user">
              <div className="testimonial-avatar avatar-three">RK</div>
              <div>
                <h4>Rahim Khan</h4>
                <span>Data Science Student</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section">
        <div className="statistics-container">
          <div className="statistics-heading">
            <span>SKILLORA IN NUMBERS</span>
            <h2>Learning Together, Growing Together</h2>
          </div>

          <div className="statistics-grid">
            <div className="statistic-item">
              <Users size={30} />
              <h3>10K+</h3>
              <p>Active Students</p>
            </div>

            <div className="statistic-item">
              <BookOpen size={30} />
              <h3>250+</h3>
              <p>Online Courses</p>
            </div>

            <div className="statistic-item">
              <Star size={30} />
              <h3>50+</h3>
              <p>Expert Instructors</p>
            </div>

            <div className="statistic-item">
              <ArrowRight size={30} />
              <h3>95%</h3>
              <p>Student Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
      {/* Final Call To Action */}
      <section className="final-cta-section">
        <div className="final-cta-container">
          <span>YOUR FUTURE STARTS TODAY</span>

          <h2>
            Ready to Start Your
            <br />
            Learning Journey?
          </h2>

          <p>
            Explore new skills, discover opportunities, and take the next step
            toward your goals with Skillora.
          </p>

          <button className="final-cta-btn">
            Explore Courses <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}

export default Home;
