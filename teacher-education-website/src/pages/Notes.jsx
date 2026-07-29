import "./Notes.css";
import NoteCard from "../components/NoteCard";
import Footer from "../components/Footer";
import notes from "../data/notes";

function Notes() {
  return (
    <>

      <section className="notes-page">

        <h2>Study Notes</h2>

        <p>
          Download high-quality handwritten notes prepared by expert teachers.
        </p>

        <div className="notes-grid">

          {notes.map((note) => (
            <NoteCard
              key={note.id}
              subject={note.subject}
              description={note.description}
            />
          ))}

        </div>

      </section>

      <Footer />

    </>
  );
}

export default Notes;