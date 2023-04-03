import React from "react";
import { useAuth } from "./auth";

function Profile() {
  const auth = useAuth();
  return (
    <>
      <h1>Holaaaa!, {auth.user.username}</h1>
    </>
  );
}

export default Profile;
