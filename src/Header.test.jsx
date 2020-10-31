import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import Header from './Header';

jest.unmock('react-router-dom');

test('Header', () => {
  const { container } = render((
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('헤더');
});
