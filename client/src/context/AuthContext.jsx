import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on load
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await axios.post(`${API_URL}/user/login`, {
        email,
        password
      });
      
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  };

  const signup = async (username, email, password) => {
    try {
      const { data } = await axios.post(`${API_URL}/user/signup`, {
        username,
        email,
        password
      });

      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      return { session: { access_token: data.token }, user: data };
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Signup failed');
    }
  };

  const loginWithGoogle = async () => {
    // Social login is currently disabled after moving away from Supabase
    alert('Google login is currently disabled. Please use Email/Password.');
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Helper to get auth config with token
  const getConfig = () => {
    return {
      headers: {
        Authorization: `Bearer ${user?.token}`
      }
    };
  };

  const value = {
    user,
    session: user ? { access_token: user.token } : null,
    loading,
    login,
    signup,
    loginWithGoogle,
    logout,
    getConfig
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
