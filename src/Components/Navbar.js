import React, { useState } from "react";

export default function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <h2>TextUtils</h2>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Menu */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button onClick={props.togglemode}>{props.btntext}</button>
    </nav>
  );
}