import { useState } from "react";

import { Search, Clock, Star, ArrowRight, BookOpen, Heart } from "lucide-react";

import { Link } from "react-router-dom";
import coursesData from "../../data/coursesData";
import { toggleWishlist, getWishlistIds } from "../../utils/wishlist";

import "./Courses.css";

const categories = ["All", "Development", "Design", "Marketing"];

function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Wishlist state
  const [savedIds, setSavedIds] = useState(getWishlistIds());

  // Save or remove a course
  const handleWishlist = (id) => {
    const updatedIds = toggleWishlist(id);
    setSavedIds(updatedIds);
  };

  // Search and category filtering
  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || course.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="courses-page">
      {/* Page Header */}
      <section className="courses-hero">
        <div className="courses-hero-content">
          <span className="courses-label">OUR COURSES</span>

          <h1>
            Explore Our <span>Courses</span>
          </h1>

          <p>
            Discover practical courses designed to help you learn new skills and
            build your future.
          </p>

          <div className="courses-breadcrumb">
            <span>Home</span>
            <span>/</span>
            <strong>Courses</strong>
          </div>
        </div>
      </section>

      {/* Courses Content */}
      <section className="courses-content">
        <div className="courses-heading">
          <div>
            <span className="section-label">START LEARNING</span>
            <h2>Popular Courses</h2>
          </div>

          <p>Find the right course for your learning journey.</p>
        </div>

        {/* Search */}
        <div className="courses-toolbar">
          <div className="course-search">
            <Search size={20} />

            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filters */}
          <div className="course-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards */}
        <div className="courses-grid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <article className="course-card" key={course.id}>
                <div className="course-image">
                  <img src={course.image} alt={course.title} />

                  <span className="course-category">{course.category}</span>
                </div>

                <div className="course-card-content">
                  <div className="course-rating">
                    <Star size={16} fill="currentColor" />
                    <span>{course.rating}</span>
                    <small>({course.students} students)</small>
                  </div>

                  <h3>{course.title}</h3>

                  <p className="course-instructor">By {course.instructor}</p>

                  <div className="course-card-bottom">
                    <div className="course-duration">
                      <Clock size={16} />
                      <span>{course.duration}</span>
                    </div>

                    <strong>{course.price}</strong>
                  </div>

                  {/* Wishlist Button */}
                  <button
                    type="button"
                    onClick={() => handleWishlist(course.id)}
                    className="save-course-btn"
                  >
                    <Heart
                      size={19}
                      fill={
                        savedIds.includes(course.id) ? "currentColor" : "none"
                      }
                    />

                    {savedIds.includes(course.id) ? "Saved" : "Save Course"}
                  </button>

                  {/* Course Details Link */}
                  <Link
                    to={`/courses/${course.id}`}
                    className="course-details-btn"
                  >
                    View Course
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="no-courses">
              <BookOpen size={40} />
              <h3>No courses found</h3>
              <p>Try another search or category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Courses;
