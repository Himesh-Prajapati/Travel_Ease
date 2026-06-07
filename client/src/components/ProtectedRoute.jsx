import { useEffect } from "react";
import { useAppContext } from "../context/AppContext";

const ProtectedRoute = ({ children }) => {
  const { token, setShowLogin } = useAppContext();

  useEffect(() => {
    if (!token) {
      setShowLogin(true);
    }
  }, [token]);

  if (!token) {
    return null;
  }

  return children;
};

export default ProtectedRoute;