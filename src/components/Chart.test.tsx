import { render, screen } from '@testing-library/react';
import Chart from './Chart';
import { describe, it, expect } from 'vitest';

describe('Chart', () => {
  it('renders the chart component placeholder', () => {
    render(<Chart />);
    expect(screen.getByText('Chart Component')).toBeInTheDocument();
  });
});