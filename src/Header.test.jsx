import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  const renderHeader = () => render((
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ));

  it('renders header text', () => {
    const { container } = renderHeader();

    expect(container).toHaveTextContent('헤더');
  });
});
