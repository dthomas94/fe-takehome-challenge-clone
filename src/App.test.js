import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders ready set build link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/ready. set. build./i);
  expect(linkElement).toBeInTheDocument();
});
