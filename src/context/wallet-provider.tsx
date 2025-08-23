"use client";

import { createContext, useContext, ReactNode } from 'react';
import { useWallet } from '@/hooks/use-wallet';

type WalletContextType = ReturnType<typeof useWallet>;

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: Partial<WalletContextType>;
}) {
  const wallet = useWallet(initialState);
  return (
    <WalletContext.Provider value={wallet}>{children}</WalletContext.Provider>
  );
}

export function useWalletContext() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWalletContext must be used within a WalletProvider');
  }
  return context;
}