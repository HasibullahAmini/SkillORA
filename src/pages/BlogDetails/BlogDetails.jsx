import { useParams, Link } from "react-router-dom";

import { ArrowLeft, ArrowRight, Calendar, User, BookOpen } from "lucide-react";

import blogPosts from "../../data/blogData";
import "./BlogDetails.css";

function BlogDetails() {
  const { id } = useParams();

  const post = blogPosts.find((item) => item.id === Number(id));

  if (!post) {
    return (
      <div className="blog-not-found">
        <h1>Article Not Found</h1>
        <p>Sorry, we couldn't find this article.</p>

        <Link to="/blog">
          <ArrowLeft size={18} />
          Back to Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((item) => item.category === post.category && item.id !== post.id)
    .slice(0, 2);

  return (
    <main className="blog-details-page">
      {/* Article Hero */}
      <section className="blog-details-hero">
        <Link to="/blog" className="back-to-blog">
          <ArrowLeft size={17} />
          Back to Blog
        </Link>

        <span>{post.category}</span>

        <h1>{post.title}</h1>

        <div className="blog-details-meta">
          <span>
            <User size={16} />
            {post.author}
          </span>

          <span>
            <Calendar size={16} />
            {post.date}
          </span>
        </div>
      </section>

      {/* Article Image */}
      <section className="blog-details-image">
        <img src={post.image} alt={post.title} />
      </section>

      {/* Article Content */}
      <section className="blog-article-layout">
        <article className="blog-article-content">
          <p className="article-introduction">{post.excerpt}</p>

          {post.content.map((section, index) => (
            <div className="article-section" key={index}>
              <h2>{section.heading}</h2>
              <p>{section.text}</p>
            </div>
          ))}

          <div className="article-bottom">
            <BookOpen size={22} />
            <p>
              Keep learning, keep practicing, and keep building your future with
              Skillora.
            </p>
          </div>

          <Link to="/blog" className="article-back-button">
            <ArrowLeft size={17} />
            Explore More Articles
          </Link>
        </article>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="related-blog-section">
          <div className="related-blog-heading">
            <span>KEEP READING</span>
            <h2>Related Articles</h2>
          </div>

          <div className="related-blog-grid">
            {relatedPosts.map((related) => (
              <article className="related-blog-card" key={related.id}>
                <img src={related.image} alt={related.title} />

                <div>
                  <span>{related.category}</span>
                  <h3>{related.title}</h3>

                  <Link to={`/blog/${related.id}`}>
                    Read Article
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default BlogDetails;
