import "./Hero.css";
import teacher from "../assets/teacher.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Learn From <span>Expert Teachers</span>
        </h1>

        <p>
          Download premium handwritten notes, watch quality lectures,
          improve your skills and become industry ready.
        </p>

        <div className="hero-buttons">
          <button>Explore Notes</button>
          <button className="outline">Learn More</button>
        </div>

      </div>

      <div className="hero-right">
        <img src={teacher} alt="Teacher"/>
      </div>

    </section>
  );
}

export default Hero;