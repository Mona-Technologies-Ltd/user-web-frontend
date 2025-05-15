import React, { useState } from "react";
import "./ToggleMenu.css";

const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="menu-container">
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </button>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="/dashboard">Dashboard</a>
        <a href="/claims">Claims</a>
        <a href="/devices">Devices</a>
        <a href="/support">Support</a>
        <a href="/account">Account</a>
        <a href="/logout">Logout</a>
      </nav>
    </div>
  );
};

export default ToggleMenu;
