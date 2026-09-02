import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/client";

const AuthContext = createContext(null);
const tokenKey = "organicsoap_token";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const hydrateUser = async () => {
    try {
      const { data } = await api.get("/user/profile");
      setUser(data.user);
      return data.user;
    } catch {
      localStorage.removeItem(tokenKey);
      setUser(null);
      return null;
    }
  };

  useEffect(() => { hydrateUser().finally(() => setLoading(false)); }, []);

  const authenticate = async (path, payload) => {
    const { data } = await api.post(path, payload);
    localStorage.setItem(tokenKey, data.token);
    setUser(data.user);
    return data.user;
  };
  const login = (payload) => authenticate("/user/login", payload);
  const signup = (payload) => authenticate("/user/signup", payload);
  const logout = async () => { try { await api.post("/user/logout"); } finally { localStorage.removeItem(tokenKey); setUser(null); } };

  return <AuthContext.Provider value={{ user, loading, login, signup, logout, refreshUser: hydrateUser, setUser }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
