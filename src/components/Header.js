import React from "react"

const Header = () => {
  return (
    <nav>
    <div class="nav-wrapper purple darken-4">
      <a href="#" className="brand-logo">MPQ Champ Tracker</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="">About</a></li>
        <li><a href="">Sign Out</a></li>
      </ul>
    </div>
  </nav>
  );
};

export default Header;

