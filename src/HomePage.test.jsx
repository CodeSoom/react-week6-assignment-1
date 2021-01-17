import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import HomePage from './HomePage';

function renderHomePage() {
  return render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));
}

describe('HomePage', () => {
  it('"About" 리스트를 보여줍니다.', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('About');
  });

  it('"Restaurants" 리스트를 보여줍니다.', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('Restaurants');
  });
});
