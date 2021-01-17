import React from 'react';

import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantDetailContainer from './RestaurantDetailContainer';
import RESTAURANTDETAIL from '../fixtures/restaurantDetail';

describe('RestaurantDetail', () => {
  useSelector.mockImplementation((selector) => selector({
    selectedRestaurantDetail: {
      done: true,
      info: RESTAURANTDETAIL,
    },
  }));

  it('레스토랑 이름이 출력됩니다.', () => {
    const { name } = RESTAURANTDETAIL;

    const { container } = render(<RestaurantDetailContainer />);

    expect(container).toHaveTextContent(name);
  });

  it('레스토랑 주소가 출력됩니다.', () => {
    const { address } = RESTAURANTDETAIL;

    const { container } = render(<RestaurantDetailContainer />);

    expect(container).toHaveTextContent(address);
  });

  it('레스토랑 아이템이 출력됩니다.', () => {
    const { menuItems } = RESTAURANTDETAIL;
    const { container } = render(<RestaurantDetailContainer />);

    menuItems.forEach((menuItem) => {
      expect(container).toHaveTextContent(menuItem.name);
    });
  });
});
