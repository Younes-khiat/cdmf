'use client';


import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  cookieData: { table: string };
  name: string;
  number: string;
  message: string;
  data: {
    feedbacks: Array<{ feedback: string; date: string }>;
    calendar: Array<{ full_name: string; phone_number: string; detail: string; paiement: string; paid: string, date: string }>;
    specials: Array<{ full_name: string; phone_number: string; detail: string; paiement: string; next_session: string }>;
    stock: Array<{ product: string; quantity: string; price: string }>;
  }

}

interface UserContextProps {
  user: User ;
  setUser: (user: User) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children, initialUser }: { children: ReactNode; initialUser: User }) => {
  const [user, setUser] = useState<User>(initialUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};