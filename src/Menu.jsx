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
    {
      id: 4,
      to: "/login",
      text: "login",
    },
    {
      id: 5,
      to: "/logout",
      text: "logout",
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
    </nav>
  );
}

//navlink es muy bellako
export default Menu;
