import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

test('App', () => {
  context('requests HomePage', () => {
    const { container } = render((
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('Home');
  });
});
