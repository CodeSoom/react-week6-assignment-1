import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Restaurant from './Restaurant';

import restaurant from '../fixtures/restaurant';

describe('', () => {
  const renderRestaurant = (newRestaurant) => render((
    <MemoryRouter initialEntries={['/restaurants/:id']}>
      <Restaurant
        restaurant={newRestaurant}
      />
    </MemoryRouter>
  ));

  it('renders restaurant', () => {
    const { queryByText } = renderRestaurant(restaurant);

    expect(queryByText('마법사주방')).not.toBeNull();
    expect(queryByText('주소: 서울 강남구 강남대로94길 9')).not.toBeNull();
    expect(queryByText('맛나는 거')).not.toBeNull();
    expect(queryByText('짠 거')).not.toBeNull();
  });

  context('when empty menuItems', () => {
    it('renders message menuItems are empty', () => {
      const { queryByText } = renderRestaurant({
        id: 10,
        name: '홍콩반점',
        menuItems: null,
      });

      expect(queryByText('메뉴가 없어요')).not.toBeNull();
    });
  });
});
