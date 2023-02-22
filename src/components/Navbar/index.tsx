import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Hamburger } from "./style";

const NavMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <Hamburger open={open} onClick={() => setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
      <Nav open={open}>
        <ul>
          <li>
            <Link to="/party" style={{ color: "white" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/TOS" style={{ color: "white" }}>
              Terms
            </Link>
          </li>

          <li>
            <Link to="/contact" style={{ color: "white" }}>
              Contact Us
            </Link>
          </li>
        </ul>
      </Nav>
    </Hamburger>
  );
};

export default NavMenu;
