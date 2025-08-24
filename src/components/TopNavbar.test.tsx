import { render, screen, fireEvent } from '@testing-library/react';
import TopNavbar from './TopNavbar';
import { describe, it, expect } from 'vitest';

describe('TopNavbar', () => {
  it('renders the navbar with market selector and connect button', () => {
    render(<TopNavbar />);
    expect(screen.getByText('frETH')).toBeInTheDocument();
    expect(screen.getByText('frBTC')).toBeInTheDocument();
    expect(screen.getByText('Connect')).toBeInTheDocument();
  });

  it('opens and closes the user dropdown', () => {
    render(<TopNavbar />);
    const dropdownButton = screen.getByText('▼');
    fireEvent.click(dropdownButton);
    expect(screen.getByText('Language')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
    fireEvent.click(dropdownButton);
    expect(screen.queryByText('Language')).not.toBeInTheDocument();
  });
});