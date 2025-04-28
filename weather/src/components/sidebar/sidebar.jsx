// src/components/Sidebar/Sidebar.jsx
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">Weathry</div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Map</a>
        <a href="#">Alerts</a>
        <a href="#">Settings</a>
      </nav>
      <div className="profile">
        <img src="https://via.placeholder.com/40" alt="Profile" />
      </div>
    </aside>
  );
}

export default Sidebar;
