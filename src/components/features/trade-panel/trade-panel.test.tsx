import { render, screen, fireEvent } from '@/test-utils-connected';
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

  it('should switch between buy and sell tabs', () => {
    render(
      <WalletProvider>
        <TradePanel />
      </WalletProvider>
    );
    const buyButton = screen.getByRole('tab', { name: /buy/i });
    const sellButton = screen.getByRole('tab', { name: /sell/i });

    expect(buyButton).toHaveAttribute('data-state', 'active');
    expect(sellButton).toHaveAttribute('data-state', 'inactive');

    fireEvent.click(sellButton);

    expect(buyButton).toHaveAttribute('data-state', 'inactive');
    expect(sellButton).toHaveAttribute('data-state', 'active');
  });

  it('should show loading state when placing an order', async () => {
    render(<TradePanel />);
    const placeOrderButton = screen.getByText('Place Order');
    fireEvent.click(placeOrderButton);

    expect(screen.getByText('Placing Order...')).toBeInTheDocument();
  });

  it('should switch between market and limit order types', () => {
    render(
      <WalletProvider>
        <TradePanel />
      </WalletProvider>
    );
    const marketButton = screen.getByRole('radio', { name: /market/i });
    const limitButton = screen.getByRole('radio', { name: /limit/i });

    expect(marketButton).toHaveAttribute('data-state', 'on');
    expect(limitButton).toHaveAttribute('data-state', 'off');

    fireEvent.click(limitButton);

    expect(marketButton).toHaveAttribute('data-state', 'off');
    expect(limitButton).toHaveAttribute('data-state', 'on');
  });
});