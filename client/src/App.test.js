import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('shows welcome message', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Need a sprinkling of inspiration in the kitchen/i);
  expect(title).toBeInTheDocument();
})
