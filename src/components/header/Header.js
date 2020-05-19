import React from "react";

import "./Header.css";

export default function Header() {
  function toggle() {}

  return (
    <header id="header">
      <a href="#" className="logo">
        Erick Lavielle
      </a>
      <ul>
        <li>
          <a href="#home" onClick={toggle}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={toggle}>
            About
          </a>
        </li>
        <li>
          <a href="#services" onClick={toggle}>
            Services
          </a>
        </li>

        <li>
          <a href="#contact" onClick={toggle}>
            Contact
          </a>
        </li>
      </ul>
      <div className="toggle" onClick={toggle}></div>
    </header>
  );
}
