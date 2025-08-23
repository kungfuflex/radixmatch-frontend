import { render, screen, fireEvent } from '@/test-utils';
import { describe, it, expect } from 'vitest';
import { OrderBook } from './order-book';
import { mockTrades } from '@/data/mock';

describe('OrderBook', () => {
  it('should render the trades list when the trades tab is clicked', () => {
    render(<OrderBook />);
    const tradesTab = screen.getByRole('tab', { name: /trades/i });
    fireEvent.click(tradesTab);

    expect(screen.getByText('Time')).toBeInTheDocument();
    expect(screen.getByText('Price (USD)')).toBeInTheDocument();
    expect(screen.getByText('Amount (BTC)')).toBeInTheDocument();

    mockTrades.forEach(trade => {
      expect(screen.getByText(trade.time)).toBeInTheDocument();
      expect(
        screen.getAllByText(trade.price.toFixed(2)).length
      ).toBeGreaterThanOrEqual(1);
      expect(
        screen.getAllByText(trade.amount.toFixed(3)).length
      ).toBeGreaterThanOrEqual(1);
    });
  });
});