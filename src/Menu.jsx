import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./auth";

function Menu() {
  const routes = [
    {
      id: 1,
      to: "/",
      text: "Home",
      private: false,
    },
    {
      id: 2,
      to: "/blog",
      text: "Blog",
      private: false,
    },
    {
      id: 3,
      to: "/profile",
      text: "Profile",
      private: true,
    },
    {
      id: 4,
      to: "/login",
      text: "login",
      publicOnly: true,
      private: false,
    },
    {
      id: 5,
      to: "/logout",
      text: "logout",
      private: true,
    },
  ];

  const auth = useAuth();

  return (
    <nav>
      {routes.map((route) => {
        if (route.publicOnly && auth.user) {
          return null;
        }
        if (route.private && !auth.user) {
          return null;
        }
        return (
          <li key={route.to}>
            <NavLink
              to={route.to}
              style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            >
              {route.text}
            </NavLink>
          </li>
        );
      })}
    </nav>
  );
}

//navlink es muy bellako
export default Menu;
