import React from "react";
import "../App.css";   

function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        <img
          src="https://www.skilllearningacademy.com/static/media/slaWhiteLogo.630597de4b3211919b67.png"
          alt="Logo"
        />
      </div>
      
      <nav className="nav-links">
        <a href="#">Why SLA?</a>
        <a href="#">Corporate Training</a>
        <a href="#">Blogs</a>
        <a href="#">Events</a>
        <a href="#">Programs ▼</a>
        <a href="#">Courses ▼</a>
      </nav>

      <div className="contact-btn">
        <button>Contact Us</button>
      </div>
    </header>
  );
}

export default Header;
