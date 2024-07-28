import { useState, useEffect } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Get Notes
  const getNotes = () => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  };

  // Add a Note
  const addNote = (title, description, tag) => {
    const newNote = {
      id: Date.now(),
      title,
      description,
      tag,
      timestamp: new Date().toISOString(),
    };
    setNotes([...notes, newNote]);
  };

  // Delete a Note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Edit a Note
  const editNote = (id, title, description, tag) => {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? {
              ...note,
              title,
              description,
              tag,
              timestamp: new Date().toISOString(),
            }
          : note
      )
    );
  };

  return (
    <noteContext.Provider
      value={{ notes, getNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
