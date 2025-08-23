import { render, screen } from '@/test-utils';
import { describe, it, expect } from 'vitest';
import { Sidebar } from './sidebar';

describe('Sidebar', () => {
  it('should render all navigation links', () => {
    render(<Sidebar />);
    expect(screen.getByRole('link', { name: /trade/i })).toHaveAttribute(
      'href',
      '/trade/spot/0x776401b9bc8aae31a685731b7147d4445fd9fb19/0x5ca9f32d4ce7cc0f782213c446c2ae14b754a623'
    );
    expect(screen.getByRole('link', { name: /swap/i })).toHaveAttribute('href', '/swap');
    expect(screen.getByRole('link', { name: /dash/i })).toHaveAttribute('href', '/dash');
    expect(screen.getByRole('link', { name: /earn/i })).toHaveAttribute('href', '/earn');
    expect(screen.getByRole('link', { name: /portfolio/i })).toHaveAttribute(
      'href',
      '/portfolio'
    );
    expect(screen.getByRole('link', { name: /explore/i })).toHaveAttribute('href', '/');
  });
});