import React from "react";
import { useAuth } from "./auth";

function LogOutPage() {
  const auth = useAuth();
  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={logout}>
        <label htmlFor="">Seguro que quieres salir?</label>
        <button type="submit">SI. Diablo</button>
      </form>
    </>
  );
}

export default LogOutPage;
