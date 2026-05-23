import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

// Global authentication context
const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  // Prevent route rendering until auth check finishes
  const [loading, setLoading] = useState(true);

  // Restore user session from localStorage
  useEffect(() => {

    const storedUser =
      localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);

  }, []);

  // Store user session after login
  const login = (data) => {

    localStorage.setItem(
      "token",
      data.token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(data.user)
    );

    setUser(data.user);
  };

  // Clear session on logout
  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for authentication access
export const useAuth = () =>
  useContext(AuthContext);