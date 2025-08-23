import { render, screen, fireEvent } from '@testing-library/react';
import { TradePanel } from './trade-panel';
import { WalletProvider } from '@/context/wallet-provider';
import { describe, it, expect, vi } from 'vitest';

describe('TradePanel', () => {
  it('should show a message to connect wallet when trying to place an order while disconnected', () => {
    render(
      <WalletProvider>
        <TradePanel />
      </WalletProvider>
    );

    const placeOrderButton = screen.getByText('Connect Wallet');
    fireEvent.click(placeOrderButton);

    const errorMessage = screen.getByText(
      'Please connect your wallet to place an order.'
    );
    expect(errorMessage).toBeInTheDocument();
  });
});