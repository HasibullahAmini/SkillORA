import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Trash2, ArrowRight, Star, Clock } from "lucide-react";

import "./Wishlist.css";
import { getWishlistCourses, toggleWishlist } from "../../utils/wishlist.js";

function Wishlist() {
  const [courses, setCourses] = useState([]);

  const loadWishlist = () => {
    setCourses(getWishlistCourses());
  };

  useEffect(() => {
    loadWishlist();

    window.addEventListener("wishlistUpdated", loadWishlist);

    return () => {
      window.removeEventListener("wishlistUpdated", loadWishlist);
    };
  }, []);

  const handleRemove = (id) => {
    toggleWishlist(id);
  };

  return (
    <section className="wishlist-page">
      <div className="wishlist-hero">
        <span>MY LEARNING</span>

        <h1>
          Your <span>Wishlist</span>
        </h1>

        <p>
          Keep track of the courses you want to learn. Your next skill starts
          here.
        </p>
      </div>

      <div className="wishlist-container">
        <div className="wishlist-heading">
          <div>
            <h2>Saved Courses</h2>
            <p>{courses.length} courses saved</p>
          </div>

          <Link to="/courses">
            Explore Courses
            <ArrowRight size={18} />
          </Link>
        </div>

        {courses.length === 0 ? (
          <div className="wishlist-empty">
            <div className="empty-icon">
              <Heart size={35} />
            </div>

            <h2>Your Wishlist Is Empty</h2>

            <p>
              You haven't saved any courses yet. Explore our courses and save
              your favorites.
            </p>

            <Link to="/courses" className="wishlist-browse-btn">
              Browse Courses
              <ArrowRight size={18} />
            </Link>
          </div>
        ) : (
          <div className="wishlist-grid">
            {courses.map((course) => (
              <div className="wishlist-card" key={course.id}>
                <div className="wishlist-image">
                  <img src={course.image} alt={course.title} />

                  <button
                    className="wishlist-remove"
                    onClick={() => handleRemove(course.id)}
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <div className="wishlist-card-content">
                  <span className="wishlist-category">{course.category}</span>

                  <h3>{course.title}</h3>

                  <p className="wishlist-instructor">By {course.instructor}</p>

                  <div className="wishlist-meta">
                    <span>
                      <Star size={16} />
                      {course.rating}
                    </span>

                    <span>
                      <Clock size={16} />
                      {course.duration}
                    </span>
                  </div>

                  <div className="wishlist-card-bottom">
                    <strong>${course.price}</strong>

                    <Link to={`/courses/${course.id}`}>
                      View Course
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Wishlist;
