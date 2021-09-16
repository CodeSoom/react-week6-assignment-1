import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import RESTAURANTS from '../fixtures/restaurants';

describe('RestaurantsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: RESTAURANTS,
    }));
  });

  it('식당 리스트를 보여준다', () => {
    const { container } = render((
      <MemoryRouter>
        <RestaurantsContainer />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('김밥제국');
  });
});
