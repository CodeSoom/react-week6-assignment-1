import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import RestaurantsDetail from './RestaurantsDetail';

import RESTAURANTDETAIL from '../fixtures/restaurantDetail';

describe('RestaurantsDetail', () => {
  context('without restaurants detail', () => {
    it('renders "로딩중..."', () => {
      const { queryByText } = render((
        <MemoryRouter>
          <RestaurantsDetail restaurant={null} />
        </MemoryRouter>
      ));

      expect(queryByText('로딩중..')).not.toBeNull();
    });
  });

  context('with restaurants detail', () => {
    it('renders restaurents detail', () => {
      const { queryByText } = render((
        <MemoryRouter>
          <RestaurantsDetail restaurant={RESTAURANTDETAIL} />
        </MemoryRouter>
      ));

      expect(queryByText('양천주가')).not.toBeNull();
      expect(queryByText('서울 강남구 123456')).not.toBeNull();
      expect(queryByText('메뉴')).not.toBeNull();
      expect(queryByText('비빔밥')).not.toBeNull();
    });
  });
});
