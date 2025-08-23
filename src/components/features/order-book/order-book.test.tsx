import { render, screen } from '@/test-utils';
import { describe, it, expect } from 'vitest';
import { OrderBook } from './order-book';
import { mockOrderBook } from '@/data/mock';

describe('OrderBook', () => {
  it('should render the order book with asks and bids', () => {
    render(<OrderBook />);
    expect(screen.getByText('Price')).toBeInTheDocument();
    expect(screen.getByText('Size')).toBeInTheDocument();
    expect(screen.getByText('Total')).toBeInTheDocument();

    mockOrderBook.asks.forEach(ask => {
      expect(screen.getByText(ask.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }))).toBeInTheDocument();
    });

    mockOrderBook.bids.forEach(bid => {
      expect(screen.getByText(bid.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }))).toBeInTheDocument();
    });
  });
});
