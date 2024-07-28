import React from "react";
import { useContext } from "react";
import noteContext from "../Context/notes/noteContext";

const NoteItem = ({ note, updateNote, showAlert }) => {
  const context = useContext(noteContext);
  const { deleteNote } = useContext(noteContext);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      deleteNote(note.id);
      showAlert("Deleted successfully", "success");
    }
  };

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <p className="card-text">
            <small className="text-muted">
              {new Date(note.timestamp).toLocaleString()}
            </small>
          </p>
          <i className="far fa-edit mx-2" onClick={() => updateNote(note)}></i>
          <i className="far fa-trash-alt mx-2" onClick={handleDelete}></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
