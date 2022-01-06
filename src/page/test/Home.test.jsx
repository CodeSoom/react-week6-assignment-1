// @ts-check
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import Home from '../Home';

describe('Home', () => {
  it('레스토랑의 정보를 출력한다.', () => {
    const { queryByText } = render((
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    ));

    expect(queryByText(/About/)).not.toBeNull();
    expect(queryByText(/Restaurants/)).not.toBeNull();
  });
});
