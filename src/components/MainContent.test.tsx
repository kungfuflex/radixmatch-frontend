import { render, screen } from '@testing-library/react';
import MainContent from './MainContent';
import { describe, it, expect } from 'vitest';

describe('MainContent', () => {
  it('renders the main content area with info bar and child components', () => {
    render(<MainContent />);
    expect(screen.getByText('Price (24hr Change)')).toBeInTheDocument();
    expect(screen.getByText('24hr Volume')).toBeInTheDocument();
    expect(screen.getByText('Market Cap')).toBeInTheDocument();
    expect(screen.getByText('Contract')).toBeInTheDocument();
    expect(screen.getByText('Chart Component')).toBeInTheDocument();
    expect(screen.getByText('Order Book')).toBeInTheDocument();
    expect(screen.getByText('Trades')).toBeInTheDocument();
    expect(screen.getByText('Buy')).toBeInTheDocument();
    expect(screen.getByText('Sell')).toBeInTheDocument();
  });
});