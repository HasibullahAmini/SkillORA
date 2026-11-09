import { useState } from "react";
import { Search, ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import "./Blog.css";
import blogPosts from "../../data/blogData";
function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Development", "Design", "Marketing"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;

    const matchesSearch = post.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="blog-page">
      {/* Hero */}
      <section className="blog-hero">
        <span>SKILLORA BLOG</span>
        <h1>Ideas That Inspire Learning</h1>
        <p>
          Discover helpful articles, practical tips, and insights to support
          your learning journey.
        </p>
      </section>

      {/* Featured Article */}
      <section className="featured-blog">
        <div className="featured-image">
          <img src={blogPosts[0].image} alt={blogPosts[0].title} />
        </div>

        <div className="featured-content">
          <span>FEATURED ARTICLE</span>
          <h2>{blogPosts[0].title}</h2>
          <p>{blogPosts[0].excerpt}</p>

          <div className="blog-meta">
            <span>
              <User size={15} /> {blogPosts[0].author}
            </span>
            <span>
              <Calendar size={15} /> {blogPosts[0].date}
            </span>
          </div>

          <Link to={`/blog/${blogPosts[0].id}`}>
            Read Article <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="blog-list-section">
        <div className="blog-heading">
          <span>OUR LATEST ARTICLES</span>
          <h2>Explore Our Blog</h2>
        </div>

        {/* Search */}
        <div className="blog-search">
          <Search size={20} />

          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className="blog-categories">
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

        {/* Article Cards */}
        <div className="blog-grid">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article className="blog-card" key={post.id}>
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                  <span>{post.category}</span>
                </div>

                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span>
                      <User size={14} /> {post.author}
                    </span>
                    <span>
                      <Calendar size={14} /> {post.date}
                    </span>
                  </div>

                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>

                  <Link to={`/blog/${post.id}`}>
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <p className="no-blog-results">
              No articles found. Try another search.
            </p>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="blog-newsletter">
        <span>STAY UPDATED</span>
        <h2>Get Learning Insights in Your Inbox</h2>
        <p>Discover new articles and useful learning resources.</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Newsletter subscription is a demo.");
          }}
        >
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </main>
  );
}

export default Blog;
