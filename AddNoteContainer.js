import React, { useState, useEffect, useRef } from "react";
import './AddNoteContainer.css';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import BrushIcon from '@mui/icons-material/Brush';
import ImageIcon from '@mui/icons-material/Image';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PaletteIcon from '@mui/icons-material/Palette';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';

const AddNoteContainer = ({ addNote }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const containerRef = useRef(null);

  const handleInputClick = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
    setTitle('');
    setDescription('');
  };

  const handleAddNote = () => {
    if (title.trim() !== '' || description.trim() !== '') {
      const newNote = { title, description };
      addNote(newNote); 
      handleClose();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef}>
      {!isExpanded && (
        <div className="collapsed-note" onClick={handleInputClick}>
          <input
            type="text"
            placeholder="Take a note..."
            className="collapsed-input"
          />
          <div className="collapsed-icons">
            <CheckBoxIcon className="icon" />
            <BrushIcon className="icon" />
            <ImageIcon className="icon" />
          </div>
        </div>
      )}

      {isExpanded && (
        <div className="expanded-note">
          <input
            type="text"
            placeholder="Title"
            className="note-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Take a note..."
            className="note-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="note-footer">
            <div className="icons">
              <NotificationsNoneIcon className="icon" />
              <PersonAddIcon className="icon" />
              <PaletteIcon className="icon" />
              <ImageIcon className="icon" />
              <ArchiveIcon className="icon" />
              <MoreVertIcon className="icon" />
              <UndoIcon className="icon" />
              <RedoIcon className="icon" />
            </div>
            <button className="close-btn" onClick={handleAddNote}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNoteContainer;
