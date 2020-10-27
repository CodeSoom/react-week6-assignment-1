import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('Header', () => {
  it('renders header', () => {
    const { container } = render((
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('헤더');
  });
});
