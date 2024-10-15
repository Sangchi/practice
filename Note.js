import React, { useState } from 'react';
import AddNoteContainer from '../layout/AddNoteContainer';
import NoteCardContainer from '../layout/NoteCardContainer';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  return (
    <>
      <AddNoteContainer addNote={addNote} />
      <NoteCardContainer notes={notes} />
    </>
  );
};

export default Notes;
