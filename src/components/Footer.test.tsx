import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { describe, it, expect } from 'vitest';

describe('Footer', () => {
  it('renders the footer text', () => {
    render(<Footer />);
    const footerText = screen.getByText(/© 2025 Radix Worldwide S.A./i);
    expect(footerText).toBeInTheDocument();
  });
});