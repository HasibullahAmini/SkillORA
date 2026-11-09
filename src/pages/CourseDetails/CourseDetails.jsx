import { useParams, Link } from "react-router-dom";

import {
  Clock,
  Star,
  Users,
  BookOpen,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

import coursesData from "../../data/coursesData";
import "./CourseDetails.css";

function CourseDetails() {
  const { id } = useParams();

  const course = coursesData.find((item) => item.id === Number(id));

  if (!course) {
    return (
      <div className="course-not-found">
        <h2>Course Not Found</h2>
        <p>Sorry, this course does not exist.</p>

        <Link to="/courses">
          <ArrowLeft size={18} />
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <main className="course-details-page">
      {/* HERO */}
      <section className="details-hero">
        <div className="details-hero-content">
          <div className="details-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/courses">Courses</Link>
            <span>/</span>
            <span>{course.title}</span>
          </div>

          <span className="details-category">{course.category}</span>

          <h1>{course.title}</h1>

          <p>{course.description}</p>

          <div className="details-rating">
            <Star size={18} fill="currentColor" />
            <strong>{course.rating}</strong>
            <span>({course.students} students)</span>
          </div>

          <p className="details-instructor">
            Instructor: <strong>{course.instructor}</strong>
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="details-main">
        <div className="details-left">
          {/* COURSE IMAGE */}
          <div className="details-image">
            <img src={course.image} alt={course.title} />
          </div>

          {/* WHAT YOU WILL LEARN */}
          <div className="details-card">
            <h2>What You'll Learn</h2>

            <div className="learning-list">
              {course.learn.map((item, index) => (
                <div className="learning-item" key={index}>
                  <CheckCircle size={19} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CURRICULUM */}
          <div className="details-card">
            <h2>Course Curriculum</h2>

            <div className="curriculum-list">
              {course.curriculum.map((module, index) => (
                <details className="curriculum-module" key={index}>
                  <summary>
                    <span>{module.title}</span>
                    <span>{module.lessons.length} Lessons</span>
                  </summary>

                  <div className="module-lessons">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div className="module-lesson" key={lessonIndex}>
                        <BookOpen size={16} />
                        <span>{lesson}</span>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="details-sidebar">
          <div className="enrollment-card">
            <img src={course.image} alt={course.title} />

            <div className="enrollment-price">
              <span>Course Price</span>
              <h2>{course.price}</h2>
            </div>

            <button className="enroll-button">Enroll Now</button>

            <h3>Course Information</h3>

            <div className="course-info-item">
              <Clock size={18} />
              <span>Duration</span>
              <strong>{course.duration}</strong>
            </div>

            <div className="course-info-item">
              <BookOpen size={18} />
              <span>Lessons</span>
              <strong>{course.lessons}</strong>
            </div>

            <div className="course-info-item">
              <Users size={18} />
              <span>Students</span>
              <strong>{course.students}</strong>
            </div>

            <div className="course-info-item">
              <Star size={18} />
              <span>Rating</span>
              <strong>{course.rating}</strong>
            </div>

            <div className="course-info-item">
              <CheckCircle size={18} />
              <span>Level</span>
              <strong>{course.level}</strong>
            </div>
          </div>

          <Link to="/courses" className="back-courses">
            <ArrowLeft size={17} />
            Browse All Courses
          </Link>
        </aside>
      </section>
    </main>
  );
}

export default CourseDetails;
