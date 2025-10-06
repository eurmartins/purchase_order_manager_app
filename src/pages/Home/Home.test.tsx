import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders home page', () => {
    render(<Home />);
    const headingElement = screen.getByText(/welcome to home page/i);
    expect(headingElement).toBeInTheDocument();
});