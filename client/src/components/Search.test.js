import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';

test('input has placeholder', () => {
    const { getByPlaceholderText } = render(<Search />);
    const placeholder = getByPlaceholderText(/e.g. tomato, cheese, basil/i);
    expect(placeholder).toBeInTheDocument();
})
