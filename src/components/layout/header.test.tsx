import { render, screen } from '@/test-utils';
import { Header } from './header';
import { describe, it, expect } from 'vitest';

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />);
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });
});