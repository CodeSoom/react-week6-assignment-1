import React from 'react';

import { render } from '@testing-library/react';

import RestaurantContainer from './RestaurantContainer';
import restaurant from '../fixtures/restaurant';

describe('RestaurantContainer', () => {
  context('with restaurant data', () => {
    it('having menu items', () => {
      const { container } = render(<RestaurantContainer
        data={restaurant}
      />);

      expect(container).toHaveTextContent('코드숨 아파트');
      expect(container).toHaveTextContent('테스트코드 한사발');
    });

    it('not having menu items', () => {
      const restaurantNotMenu = {
        id: 1,
        name: '코드숨',
        address: '코드숨 아파트',
        menuItems: null,
      };

      const { container, getByRole } = render(<RestaurantContainer
        data={restaurantNotMenu}
      />);

      expect(container).toHaveTextContent('코드숨 아파트');
      expect(getByRole('list').childElementCount).toBe(0);
    });
  });

  it('without restaurant data', () => {
    const { container } = render(<RestaurantContainer
      data=""
    />);

    expect(container).toHaveTextContent('레스토랑 데이터를 불러올 수 없습니다.');
  });
});
