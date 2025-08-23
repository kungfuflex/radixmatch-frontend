import { renderHook, act } from '@testing-library/react';
import { useWallet } from './use-wallet';
import { describe, it, expect } from 'vitest';

describe('useWallet', () => {
  it('should connect and disconnect the wallet in mock mode', () => {
    const { result } = renderHook(() => useWallet());

    expect(result.current.isConnected).toBe(false);
    expect(result.current.address).toBe(null);

    act(() => {
      result.current.connect();
    });

    expect(result.current.isConnected).toBe(true);
    expect(result.current.address).toBe('0x1234...5678');

    act(() => {
      result.current.disconnect();
    });

    expect(result.current.isConnected).toBe(false);
    expect(result.current.address).toBe(null);
  });
});