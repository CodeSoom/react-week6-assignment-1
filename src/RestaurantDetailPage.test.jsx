import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

describe('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: [
      {
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울 강남구',
        menuItems: [
          {
            id: 1,
            restaurantId: 1,
            name: '짜장면',
          },
          {
            id: 2,
            restaurantId: 1,
            name: '짬뽕',
          },
        ],
      },
    ],
  }));

  it('renders restaurant detail page', () => {
    const { container } = render((
      <RestaurantDetailPage />
    ));

    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent('서울 강남구');
    expect(container).toHaveTextContent('짜장면');
  });
});
