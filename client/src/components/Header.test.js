import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('shows welcome message question', () => {
    const { getByText } = render(<Header />);
    const title = getByText(/Need a sprinkling of inspiration in the kitchen/i);
    expect(title).toBeInTheDocument();
})

test('shows welcome message tagline', () => {
    const { getByText } = render(<Header />);
    const title = getByText(/Let me pepper your thoughts!/i);
    expect(title).toBeInTheDocument();
})

test('shows welcome message tagline', () => {
    const { getByAltText } = render(<Header />);
    const title = getByAltText(/pepper your thoughts/i);
    expect(title).toBeInTheDocument();
})
