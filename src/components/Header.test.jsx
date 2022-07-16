import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('<Header />', () => {
  const renderHeader = () => render((
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ));

  it('renders header', () => {
    const { getByText } = renderHeader();

    const header = getByText('헤더');

    expect(header).toBeInTheDocument();
    expect(header).toHaveAttribute('href', '/');
  });
});
