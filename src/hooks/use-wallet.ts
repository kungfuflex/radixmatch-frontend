import { useState } from 'react';

export function useWallet() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);

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