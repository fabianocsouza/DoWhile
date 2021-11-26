import React, { createContext, useContext, useState } from 'react';
import * as AuthSession from 'expo-auth-session';

const CLIENT_ID ='';
const SCOPE ='';

type User = {
  id: string;
  avatar_url: string;
  name: string;
  login: string;
}

type AuthContextData = {
  user: User | null;
  isSigning: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

type AuthProviderProps = {
  children: React.ReactNode;
}

type AuthResponse = {
  token: string;
  user: User;
}

type AuthorizationResponse = {
  params: {
    code?: string;
  }
}

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isSigning, setIsSigning] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  

  const authUrl = `https://github.com/login/oauth/
                  authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`

  const signIn = async () => {

  }
  const signOut = async () => {

  }

  return (
    <AuthContext.Provider value={{ user, isSigning, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => { return useContext(AuthContext) }

export { AuthProvider, useAuth }

