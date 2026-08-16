import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  company?: string;
  role: 'user' | 'b2b_member' | 'student';
  avatarUrl?: string;
  enrolledCourses: string[];
  diagnosticScore?: number;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, name?: string) => void;
  signup: (name: string, email: string, company?: string) => void;
  logout: () => void;
  updateUserDiagnostic: (score: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = 'omazu_aica_user_session';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved session', e);
      }
    }
  }, []);

  const saveUserSession = (newUser: User | null) => {
    setUser(newUser);
    if (newUser) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const login = (email: string, name?: string) => {
    const defaultName = name || email.split('@')[0];
    const newUser: User = {
      id: `usr_${Date.now()}`,
      name: defaultName,
      email,
      company: 'OMAZU Partner Org',
      role: 'b2b_member',
      enrolledCourses: ['AI COURSE - 내 업무를 AI Workflow로'],
      diagnosticScore: 78,
      createdAt: new Date().toISOString().split('T')[0]
    };
    saveUserSession(newUser);
  };

  const signup = (name: string, email: string, company?: string) => {
    const newUser: User = {
      id: `usr_${Date.now()}`,
      name,
      email,
      company: company || '개인 회원',
      role: 'user',
      enrolledCourses: [],
      createdAt: new Date().toISOString().split('T')[0]
    };
    saveUserSession(newUser);
  };

  const logout = () => {
    saveUserSession(null);
  };

  const updateUserDiagnostic = (score: number) => {
    if (user) {
      const updated = { ...user, diagnosticScore: score };
      saveUserSession(updated);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        signup,
        logout,
        updateUserDiagnostic
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
