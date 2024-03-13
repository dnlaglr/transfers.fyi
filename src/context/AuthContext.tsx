import { getCurrentUser } from 'aws-amplify/auth';
import { ReactNode, createContext, useEffect, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
});

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuthState() {
      try {
        await getCurrentUser();
        setIsAuthenticated(true);
      } catch (err) {
        setIsAuthenticated(false);
      }
    }

    checkAuthState();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
