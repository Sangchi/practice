import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import './Sidebar.css'; 

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = React.useState('Notes');

  const handleListItemClick = (text) => {
    setSelectedItem(text);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <ul className="sidebar-list">
          {[
            { text: 'Notes', icon: <LightbulbIcon />, path: '/dashboard/' },
            { text: 'Reminders', icon: <NotificationsIcon />, path: '/dashboard/reminder' },
            { text: 'Edit labels', icon: <EditIcon />, path: '/dashboard/editlabel' },
            { text: 'Archive', icon: <ArchiveIcon />, path: '/dashboard/archive' },
            { text: 'Trash', icon: <DeleteIcon />, path: '/dashboard/trash' },
          ].map((item) => (
            <li
              key={item.text}
              className={`sidebar-list-item ${selectedItem === item.text ? 'selected' : ''}`}
              onClick={() => handleListItemClick(item.text)}
            >
              <Link to={item.path} className="sidebar-link">
                <span className="sidebar-icon">{item.icon}</span>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
