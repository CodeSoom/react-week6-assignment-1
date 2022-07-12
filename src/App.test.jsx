import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  const renderApp = () => render(<App />);

  it('renders header', () => {
    const { getByText } = renderApp();

    expect(getByText('헤더')).toBeInTheDocument();
  });

  it('renders home page', () => {
    const { getByText } = renderApp();

    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Restaurants')).toBeInTheDocument();
  });
});
