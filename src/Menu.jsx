import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu() {
  const routes = [
    {
      id: 1,
      to: "/",
      text: "Home",
    },
    {
      id: 2,
      to: "/blog",
      text: "Blog",
    },
    {
      id: 3,
      to: "/profile",
      text: "Profile",
    },
  ];
  return (
    <nav>
      {routes.map((route) => (
        <li key={route.to}>
          <NavLink
            to={route.to}
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          >
            {route.text}
          </NavLink>
        </li>
      ))}
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul> */}
      {/* <li>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          to="/blog"
        >
          Blog
        </NavLink>
      </li> */}
    </nav>
  );
}

//navlink es muy bellako
export default Menu;
