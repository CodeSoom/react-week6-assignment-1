import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

describe('RestaurantDetailPage', () => {
  function renderRestaurantDetailPage() {
    return render((
      <MemoryRouter>
        <RestaurantDetailPage />
      </MemoryRouter>
    ));
  }

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurantDetail: {
      id: 1,
      categoryId: 1,
      name: '양천주가',
      address: '서울 강남구',
      menuItems: [
        {
          id: 1,
          retaurantId: 1,
          name: '탕수육',
        },
      ],
    },
  }));

  it('renders restaurant name, address, and menus', () => {
    const { container } = renderRestaurantDetailPage({ restaurantId: 1 });

    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent('주소: 서울 강남구');
    expect(container).toHaveTextContent('메뉴');
    expect(container).toHaveTextContent('탕수육');
  });
});
