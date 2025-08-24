import { render, screen, fireEvent } from '@testing-library/react';
import LeftSidebar from './LeftSidebar';
import { describe, it, expect } from 'vitest';

describe('LeftSidebar', () => {
  it('renders the sidebar with navigation and action buttons', () => {
    render(<LeftSidebar />);
    expect(screen.getByText('R')).toBeInTheDocument();
    expect(screen.getByText('Alpha')).toBeInTheDocument();
    expect(screen.getAllByText('E')).toHaveLength(2);
    expect(screen.getByText('T')).toBeInTheDocument();
    expect(screen.getByText('D')).toBeInTheDocument();
    expect(screen.getByText('S')).toBeInTheDocument();
    expect(screen.getByText('P')).toBeInTheDocument();
    expect(screen.getByText('🚀')).toBeInTheDocument();
  });

  it('opens and closes the launch modal', () => {
    render(<LeftSidebar />);
    const launchButton = screen.getByText('🚀');
    fireEvent.click(launchButton);
    expect(screen.getByText('Launch a Token')).toBeInTheDocument();
    const closeButton = screen.getByText('Close');
    fireEvent.click(closeButton);
    expect(screen.queryByText('Launch a Token')).not.toBeInTheDocument();
  });
});