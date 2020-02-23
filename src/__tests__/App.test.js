import React from 'react';
import { render } from '@testing-library/react';
import App from '../App.tsx';

describe('App', () => {
  test('renders ready set build link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/ready. set. build./i);
    expect(linkElement).toBeInTheDocument();
  
  
  });

  test('renders CarSearchForm', () => {
    const { getByTestId } = render(<App />)
    const CarSearchForm = getByTestId('car-search-form');

    expect(CarSearchForm).toBeTruthy();
  });
});

