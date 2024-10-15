import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import googlekeep from '../assets/keep.png';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamSharpIcon from '@mui/icons-material/ViewStreamSharp';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import profileimage from '../assets/profile4.png';
import NoteCardContainer from './NoteCardContainer';
import AddNoteContainer from './AddNoteContainer';

const Header = () => {
  return (
    <>
    <div className="header">
      <div className="left-section">
        <MenuIcon className="menu-icon" />
        <div className="logo-section">
          <img
            src={googlekeep}
            alt="keep"
            className="keep-image"
          />
          <div className="logo-text">Fundoo Notes</div>
        </div>
      </div>
      
      <div className="center-section">
        <div className="search-container">
          <SearchIcon className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>
      
      <div className="right-section">
        <RefreshIcon className="header-icon" />
        <ViewStreamSharpIcon className="header-icon" />
        <SettingsIcon className="header-icon" />
        <AppsIcon className="header-icon" />
        <img src={profileimage} alt="profile" className="profile-image" />
      </div>
    </div>

    </>
  );
};

export default Header;
