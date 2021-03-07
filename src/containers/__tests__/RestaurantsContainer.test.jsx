import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import restaurants from '../../../fixtures/restaurants';

import RestaurantsContainer from '../RestaurantsContainer';

describe('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({ restaurants }));

  it('식당목록을 보여준다.', () => {
    const { container, queryByText } = render(
      <MemoryRouter>
        <RestaurantsContainer />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('김밥제국');
    expect(queryByText('김밥제국').getAttribute('href')).toBe('/restaurants/1');
  });
});
