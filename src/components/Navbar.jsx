import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../../data/navLinks";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <ul className="navbar__container">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              onClick={() => setIsOpened(false)}
            >
              <li className="navbar__container__title">{link.title}</li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
