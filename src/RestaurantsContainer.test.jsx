import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';
import RestaurantDetailPage from './RestaurantDetailPage';

describe('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  it('renders restaurants component', () => {
    const { container } = render((
      <MemoryRouter initialEntries={['/restaurantsPage']}>
        <RestaurantsContainer />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('마법사주방');
  });

  // context('with path /restaurantDetailPage', () => {
  it('renders the restaurants detail page', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/restaurantDetailPage']}>
        <RestaurantDetailPage />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('양천주가');
  });
  // });
});
