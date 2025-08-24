import { render, screen, fireEvent } from '@testing-library/react';
import Swap from './Swap';
import { describe, it, expect } from 'vitest';

describe('Swap', () => {
  it('renders the buy and sell tabs', () => {
    render(<Swap />);
    expect(screen.getByText('Buy')).toBeInTheDocument();
    expect(screen.getByText('Sell')).toBeInTheDocument();
  });

  it('switches between buy and sell tabs', () => {
    render(<Swap />);
    const sellButton = screen.getByText('Sell');
    fireEvent.click(sellButton);
    // Add assertions for sell tab content when implemented
    const buyButton = screen.getByText('Buy');
    fireEvent.click(buyButton);
    // Add assertions for buy tab content when implemented
  });

  it('shows "Connect Wallet" button when wallet is not connected', () => {
    render(<Swap />);
    expect(screen.getByText('Connect Wallet')).toBeInTheDocument();
  });
});