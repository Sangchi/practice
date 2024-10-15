import React from "react";
import './NoteCardContainer.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PaletteIcon from '@mui/icons-material/Palette';
import ImageIcon from '@mui/icons-material/Image';
import DownloadIcon from '@mui/icons-material/Download';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const NoteCardContainer = ({ notes = [] }) => {
  return (
    <div className="note-card-container">
      {notes.length === 0 ? (
        <div className="no-notes">No notes available. Please add a note!</div>
      ) : (
        notes.map((note) => (
          <div className="note-card"> 
            <div className="note-content">
              <div className="note-title">{note.title}</div>
              <div className="note-description">{note.description} </div>
            </div>
            <div className="note-icons">
              <NotificationsIcon className="icon" aria-label="Notifications" />
              <PersonAddIcon className="icon" aria-label="Add Person" />
              <PaletteIcon className="icon" aria-label="Palette" />
              <ImageIcon className="icon" aria-label="Image" />
              <DownloadIcon className="icon" aria-label="Download" />
              <MoreVertIcon className="icon" aria-label="More Options" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NoteCardContainer;
