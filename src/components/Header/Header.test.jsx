import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('Header', () => {
  const renderHeader = () => render((
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ));

  it('renders Header', () => {
    const { queryByText } = renderHeader();

    expect(queryByText('헤더')).not.toBeNull();
  });
});
