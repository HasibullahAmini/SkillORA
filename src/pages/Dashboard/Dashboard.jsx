import {
  BookOpen,
  Clock,
  Award,
  TrendingUp,
  Play,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import coursesData from "../../data/coursesData";
import "./Dashboard.css";

const enrolledCourses = [
  {
    id: 1,
    progress: 75,
    completed: 18,
    total: 24,
  },
  {
    id: 3,
    progress: 45,
    completed: 9,
    total: 20,
  },
  {
    id: 5,
    progress: 30,
    completed: 6,
    total: 20,
  },
];

function Dashboard() {
  return (
    <main className="dashboard-page">
      <div className="dashboard-container">
        <section className="dashboard-welcome">
          <div>
            <span className="dashboard-label">STUDENT DASHBOARD</span>
            <h1>Welcome back, Student!</h1>
            <p>Continue learning and make progress toward your goals.</p>
          </div>

          <Link to="/courses" className="dashboard-explore-btn">
            Explore Courses <ArrowRight size={18} />
          </Link>
        </section>

        <section className="dashboard-stats">
          <div className="dashboard-stat-card">
            <div className="dashboard-stat-icon">
              <BookOpen />
            </div>
            <div>
              <h3>3</h3>
              <p>Enrolled Courses</p>
            </div>
          </div>

          <div className="dashboard-stat-card">
            <div className="dashboard-stat-icon">
              <Clock />
            </div>
            <div>
              <h3>24</h3>
              <p>Learning Hours</p>
            </div>
          </div>

          <div className="dashboard-stat-card">
            <div className="dashboard-stat-icon">
              <Award />
            </div>
            <div>
              <h3>2</h3>
              <p>Certificates</p>
            </div>
          </div>

          <div className="dashboard-stat-card">
            <div className="dashboard-stat-icon">
              <TrendingUp />
            </div>
            <div>
              <h3>65%</h3>
              <p>Average Progress</p>
            </div>
          </div>
        </section>

        <section className="dashboard-courses">
          <div className="dashboard-section-heading">
            <div>
              <span className="dashboard-label">MY LEARNING</span>
              <h2>My Enrolled Courses</h2>
            </div>

            <Link to="/courses">
              Browse Courses <ArrowRight size={16} />
            </Link>
          </div>

          <div className="dashboard-course-list">
            {enrolledCourses.map((item) => {
              const course = coursesData.find(
                (course) => course.id === item.id,
              );

              if (!course) return null;

              return (
                <article className="dashboard-course-card" key={item.id}>
                  <img src={course.image} alt={course.title} />

                  <div className="dashboard-course-info">
                    <span>{course.category}</span>
                    <h3>{course.title}</h3>

                    <div className="dashboard-progress-text">
                      <span>
                        {item.completed} of {item.total} lessons
                      </span>
                      <strong>{item.progress}%</strong>
                    </div>

                    <div className="dashboard-progress-bar">
                      <div style={{ width: `${item.progress}%` }}></div>
                    </div>

                    <Link to={`/courses/${course.id}`}>
                      <Play size={15} /> Continue Learning
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Dashboard;
