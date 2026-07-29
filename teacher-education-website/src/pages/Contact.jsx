import "./Contact.css";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>

      <section className="contact">

        <h2>Contact Us</h2>

        <p>
          Have questions? We'd love to hear from you.
        </p>

        <form>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button>Send Message</button>

        </form>

      </section>

      <Footer />

    </>
  );
}

export default Contact;