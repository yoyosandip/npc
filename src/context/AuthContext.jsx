import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check local storage for dummy user session on load
    const storedUser = localStorage.getItem('dummyUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    // Simple dummy login
    const dummyUser = { email, name: email.split('@')[0], id: Date.now() };
    setUser(dummyUser);
    localStorage.setItem('dummyUser', JSON.stringify(dummyUser));
    return true;
  };

  const register = (name, email, password) => {
    const dummyUser = { name, email, id: Date.now() };
    setUser(dummyUser);
    localStorage.setItem('dummyUser', JSON.stringify(dummyUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('dummyUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
