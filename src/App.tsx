import React, { useContext, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mantine/core';
import AuthService from './api/Api';
import Login from './features/auth/login/Login';
import Register from './features/auth/register/Register';
import Main from './features/auth/main/Main';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/login' element={Login} />
        <Route path='/register' element={Register} />
        <Route
          path='/main'
          element={
            <RequireAuth>
              <Main />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

// TODO refactor type
interface AuthContextType {
  user: any;
  signIn: (user: any, callback: any) => void;
  signOut: (callback: any) => void;
}

const AuthContext = React.createContext<AuthContextType>({
  user: {},
  signIn: () => null,
  signOut: () => null,
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);

  const signIn = (newUser, callback) => {
    // return AuthService.signIn();
  };

  const signOut = () => null;

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return useContext(AuthContext);
}

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  // TODO change
  if (!auth.user) {
    // TODO read about replace.
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
}

// TODO change to ReactDom.method. I thinks it's better.

export default App;
