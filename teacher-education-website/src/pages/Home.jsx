import "./Home.css";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <>

      <Hero />

      <section className="features">

        <h2>Why Choose Teacher Academy?</h2>

        <p className="subtitle">
          Everything you need to become successful in your learning journey.
        </p>

        <div className="feature-grid">

          <FeatureCard
            icon="📚"
            title="Handwritten Notes"
            description="Easy-to-understand notes prepared by expert teachers."
          />

          <FeatureCard
            icon="🎥"
            title="Video Lectures"
            description="Watch high-quality recorded lectures anytime."
          />

          <FeatureCard
            icon="📝"
            title="Practice Tests"
            description="Daily quizzes and mock tests to improve performance."
          />

          <FeatureCard
            icon="🏆"
            title="Expert Mentors"
            description="Learn directly from experienced teachers."
          />

        </div>

      </section>

      <Footer />

    </>
  );
}

export default Home;