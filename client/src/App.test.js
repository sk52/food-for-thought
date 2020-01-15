import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders navbar', () => {
  const { container } = render(<App />);
  expect(container.firstChild.firstChild).toHaveClass('nav');
})

test('renders header', () => {
  const { container } = render(<App />);
  expect(container.firstChild.firstChild.nextSibling).toHaveClass('header');
})
