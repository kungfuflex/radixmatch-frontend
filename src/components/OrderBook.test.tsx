import { render, screen, fireEvent } from '@testing-library/react';
import OrderBook from './OrderBook';
import { describe, it, expect } from 'vitest';

describe('OrderBook', () => {
  it('renders the order book and trades tabs', () => {
    render(<OrderBook />);
    expect(screen.getByText('Order Book')).toBeInTheDocument();
    expect(screen.getByText('Trades')).toBeInTheDocument();
  });

  it('switches between order book and trades tabs', () => {
    render(<OrderBook />);
    const tradesButton = screen.getByText('Trades');
    fireEvent.click(tradesButton);
    expect(screen.getByText('Price')).toBeInTheDocument();
    expect(screen.getByText('Size')).toBeInTheDocument();
    expect(screen.getByText('Time')).toBeInTheDocument();
    const orderBookButton = screen.getByText('Order Book');
    fireEvent.click(orderBookButton);
    expect(screen.getByText('Asks')).toBeInTheDocument();
    expect(screen.getByText('Bids')).toBeInTheDocument();
  });
});