import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const adminList = ["Santy", "Natha", "Jose"];

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();

  const login = ({ username }) => {
    const isAdmin = adminList.find((admin) => admin === username);

    setUser({ username, isAdmin });
    navigate("/profile");
  };
  const logout = () => {
    setUser(null);
    navigate("/");
  };

  const auth = { user, login, logout };
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}

function PrivateRoute(props) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to={"/login"} />;
  }
  return props.children;
}

export { AuthProvider, useAuth, PrivateRoute };
