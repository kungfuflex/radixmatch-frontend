import { render, screen } from '@/test-utils';
import { describe, it, expect } from 'vitest';
import { Footer } from './footer';

describe('Footer', () => {
  it('should render all footer links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /docs/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument();
  });
});