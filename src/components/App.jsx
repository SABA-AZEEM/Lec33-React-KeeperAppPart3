import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((preNotes) => [...preNotes, note]);
  }
  function delNote(id) {
    setNotes((preNotes) => {
      return notes.filter((note, idx) => {
        return idx !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, idx) => (
        <Note
          key={idx}
          id={idx}
          title={note.title}
          content={note.content}
          delNote={delNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
