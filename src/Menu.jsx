import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul> */}
      <li>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </nav>
  );
}

//navlink es muy bellako
export default Menu;
