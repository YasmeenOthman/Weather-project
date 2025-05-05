// src/components/Sidebar/Sidebar.jsx
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <h4 className="logo">Weathry</h4>
      </div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Map</a>
        <a href="#">Alerts</a>
        <a href="#">Settings</a>
      </nav>
      <div className="profile">
        <img
          src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png"
          alt="Profile"
          width={40}
          height={40}
        />
      </div>
    </aside>
  );
}

export default Sidebar;
