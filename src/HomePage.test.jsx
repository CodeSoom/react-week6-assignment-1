import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  function renderHomePage({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <HomePage />
      </MemoryRouter>
    ));
  }

  it('show home title, About and Restaurants', () => {
    const { container, getByText } = renderHomePage({ path: '' });

    expect(container).toHaveTextContent('Home');
    expect(getByText('About')).not.toBeNull();
    expect(getByText('Restaurants')).not.toBeNull();
  });
});
