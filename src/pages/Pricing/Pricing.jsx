import { Check, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./Pricing.css";

const plans = [
  {
    name: "Starter",
    description: "Perfect for exploring new skills.",
    price: "0",
    period: "Forever",
    button: "Get Started",
    popular: false,
    features: [
      { text: "Access to free courses", included: true },
      { text: "Basic learning resources", included: true },
      { text: "Community access", included: true },
      { text: "Course certificates", included: false },
      { text: "Personal mentorship", included: false },
    ],
  },
  {
    name: "Professional",
    description: "For learners ready to grow.",
    price: "29",
    period: "Per month",
    button: "Choose Professional",
    popular: true,
    features: [
      { text: "Access to all courses", included: true },
      { text: "Downloadable resources", included: true },
      { text: "Community access", included: true },
      { text: "Course certificates", included: true },
      { text: "Personal mentorship", included: false },
    ],
  },
  {
    name: "Premium",
    description: "For learners who want more support.",
    price: "59",
    period: "Per month",
    button: "Choose Premium",
    popular: false,
    features: [
      { text: "Access to all courses", included: true },
      { text: "Downloadable resources", included: true },
      { text: "Community access", included: true },
      { text: "Course certificates", included: true },
      { text: "Personal mentorship", included: true },
    ],
  },
];

function Pricing() {
  return (
    <main className="pricing-page">
      {/* Hero */}
      <section className="pricing-hero">
        <span>OUR PRICING</span>
        <h1>Invest in Your Future</h1>
        <p>
          Choose a learning plan that fits your goals and start building
          valuable skills.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="pricing-section">
        <div className="pricing-heading">
          <span>SIMPLE PRICING</span>
          <h2>Choose Your Learning Plan</h2>
          <p>Flexible plans designed to support your learning journey.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
              key={plan.name}
            >
              {plan.popular && (
                <div className="popular-label">MOST POPULAR</div>
              )}

              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>

              <div className="plan-price">
                <span className="currency">$</span>
                <strong>{plan.price}</strong>
                <span className="period">/ {plan.period}</span>
              </div>

              <Link to="/courses" className="plan-button">
                {plan.button}
                <ArrowRight size={17} />
              </Link>

              <div className="plan-divider"></div>

              <h4>What's included:</h4>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature.text}>
                    {feature.included ? (
                      <Check className="feature-check" size={18} />
                    ) : (
                      <X className="feature-cross" size={18} />
                    )}

                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pricing-cta">
        <h2>Ready to Start Learning?</h2>
        <p>Explore our courses and take the next step toward your future.</p>

        <Link to="/courses">
          Explore Courses
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}

export default Pricing;
