import { useState } from 'react';

export function useWallet(initialState: { isConnected?: boolean; address?: string | null } = {}) {
  const [isConnected, setIsConnected] = useState(initialState.isConnected || false);
  const [address, setAddress] = useState<string | null>(initialState.address || null);

  const connect = () => {
    if (process.env.NEXT_PUBLIC_MOCK_MODE) {
      setIsConnected(true);
      setAddress('0x1234...5678');
    } else {
      // Real wallet connection logic would go here
    }
  };

  const disconnect = () => {
    setIsConnected(false);
    setAddress(null);
  };

  return { isConnected, address, connect, disconnect };
}