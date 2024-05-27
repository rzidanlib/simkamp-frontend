import * as React from 'react';

const AuthContext = React.createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState({
    isAuthenticated: true,
    isAllowed: true,
    roles: 'kandidat',
  });

  const login = () => {
    const user = {
      isAllowed: true,
      isAuthenticated: true,
      roles: 'kandidat',
    };
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return <AuthContext.Provider value={{ login, logout, user }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
