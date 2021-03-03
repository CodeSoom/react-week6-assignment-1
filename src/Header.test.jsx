import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('Header', () => {
  it('renders Header', () => {
    const { queryByText } = render((
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    ));

    expect(queryByText('헤더')).not.toBeNull();
  });
});
