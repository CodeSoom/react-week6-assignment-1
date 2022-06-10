import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import RestaurantsContainer from './RestaurantsContainer';

import RESTAURANTS from '../fixtures/restaurants';

const RestaurantsContainerRender = () => render((
  <MemoryRouter>
    <RestaurantsContainer />
  </MemoryRouter>
));

describe('RestaurantsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: RESTAURANTS,
    }));
  });

  it('레스토랑 목록이 보인다.', () => {
    const { container } = RestaurantsContainerRender();

    expect(container).toHaveTextContent(RESTAURANTS[0].name);
  });

  it('레스토랑 목록은 링크이다.', () => {
    const { getAllByRole } = RestaurantsContainerRender();

    expect(getAllByRole('link')[0]).toHaveTextContent(RESTAURANTS[0].name);
  });
});
