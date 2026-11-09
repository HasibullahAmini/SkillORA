import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import "./FAQ.css";

const faqData = [
  {
    category: "General",
    question: "What is Skillora?",
    answer:
      "Skillora is an online learning platform designed to help students develop practical skills through structured courses.",
  },
  {
    category: "General",
    question: "Who can join Skillora?",
    answer:
      "Anyone interested in learning new skills can explore our courses and improve their knowledge.",
  },
  {
    category: "Courses",
    question: "How do I enroll in a course?",
    answer:
      "Visit the Courses page, choose a course, and follow the enrollment instructions.",
  },
  {
    category: "Courses",
    question: "Can I study at my own pace?",
    answer:
      "Yes. Our courses are designed to support flexible learning so students can study at a suitable pace.",
  },
  {
    category: "Certificates",
    question: "Will I receive a certificate?",
    answer:
      "Certificate availability depends on the individual course. Check the course details for more information.",
  },
  {
    category: "Payments",
    question: "Are all courses free?",
    answer:
      "Course prices may vary. Check each course page for its current pricing information.",
  },
  {
    category: "Support",
    question: "How can I contact the support team?",
    answer:
      "You can contact our team through the Contact page using the contact information or form.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "General",
    "Courses",
    "Certificates",
    "Payments",
    "Support",
  ];

  const filteredFAQs =
    activeCategory === "All"
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="faq-page">
      {/* Hero */}
      <section className="faq-hero">
        <span>HELP CENTER</span>
        <h1>Frequently Asked Questions</h1>
        <p>
          Find answers to common questions about Skillora, our courses, and your
          learning experience.
        </p>
      </section>

      {/* FAQ Content */}
      <section className="faq-container">
        <div className="faq-heading">
          <span>HAVE QUESTIONS?</span>
          <h2>Everything You Need to Know</h2>
        </div>

        {/* Categories */}
        <div className="faq-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => {
                setActiveCategory(category);
                setActiveIndex(null);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Questions */}
        <div className="faq-list">
          {filteredFAQs.map((faq, index) => (
            <div className="faq-item" key={faq.question}>
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>

                {activeIndex === index ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="faq-cta">
        <div className="faq-cta-icon">
          <MessageCircle size={30} />
        </div>

        <h2>Still Have Questions?</h2>
        <p>Our team is ready to help you with anything you need.</p>

        <Link to="/contact">Contact Us</Link>
      </section>
    </main>
  );
}

export default FAQ;
