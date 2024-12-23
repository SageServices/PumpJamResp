import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '~/utils/supabase';
import type { User } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, walletAddress: string) => Promise<{ success: boolean; message?: string }>;
  signUp: (email: string, walletAddress: string) => Promise<{ success: boolean; message?: string }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for changes on auth state
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    signIn: async (email: string, walletAddress: string) => {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password: walletAddress,
        });
        if (error) throw error;
        return { success: true };
      } catch (error) {
        return { success: false, message: error.message };
      }
    },
    signUp: async (email: string, walletAddress: string) => {
      try {
        const { data, error } = await supabase.auth.signUp({
          email,
          password: walletAddress,
          options: {
            data: { wallet_address: walletAddress }
          }
        });
        if (error) throw error;
        return { 
          success: true, 
          message: 'Please check your email for verification link'
        };
      } catch (error) {
        return { success: false, message: error.message };
      }
    },
    signOut: async () => {
      await supabase.auth.signOut();
    }
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}