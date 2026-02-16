import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '@/app/page';

describe('Home page', () => {
  it('renders the app title', () => {
    render(<Home />);
    expect(screen.getByText('MemoryForge')).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<Home />);
    expect(screen.getByText(/evidence-based exercises/i)).toBeInTheDocument();
  });

  it('renders the disclaimer', () => {
    render(<Home />);
    expect(screen.getByText(/not a diagnostic instrument/i)).toBeInTheDocument();
  });
});
