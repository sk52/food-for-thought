import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('shows welcome message', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Welcome to the product list/i);
  expect(title).toBeInTheDocument();
})
