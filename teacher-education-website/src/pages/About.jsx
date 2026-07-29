import "./About.css";
import teacher from "../assets/teacher.png";
import Footer from "../components/Footer";

function About() {
  return (
    <>

      <section className="about">

        <div className="about-image">
          <img src={teacher} alt="Teacher" />
        </div>

        <div className="about-content">

          <h2>About Teacher Academy</h2>

          <p>
            Teacher Academy is an online education platform dedicated to
            helping students learn in a simple and effective way. Our goal
            is to provide quality education through handwritten notes,
            video lectures, assignments, and live guidance.
          </p>

          <div className="stats">

            <div>
              <h3>10K+</h3>
              <p>Students</p>
            </div>

            <div>
              <h3>500+</h3>
              <p>Notes</p>
            </div>

            <div>
              <h3>50+</h3>
              <p>Courses</p>
            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default About;