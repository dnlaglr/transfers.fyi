import { getCurrentUser } from 'aws-amplify/auth';
import { ReactNode, createContext, useEffect, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  profileID: string;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  profileID: '',
});

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profileID, setProfileID] = useState('');

  useEffect(() => {
    async function checkAuthState() {
      try {
        const { userId } = await getCurrentUser();
        setIsAuthenticated(true);
        setProfileID(userId);
      } catch (err) {
        setIsAuthenticated(false);
      }
    }

    checkAuthState();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, profileID }}>
      {children}
    </AuthContext.Provider>
  );
}
