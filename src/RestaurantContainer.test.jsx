import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import given from 'given2';

import restaurant from '../fixtures/restaurant';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  given('restaurant', () => restaurant);

  const renderRestaurantContainer = (newRestaurant) => render((
    <MemoryRouter initialEntries={['/restaurants/:id']}>
      <RestaurantContainer
        restaurant={newRestaurant}
      />
    </MemoryRouter>
  ));

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      restaurant: given.restaurant,
    }));
  });

  it('renders restaurant', () => {
    const { queryByText } = renderRestaurantContainer();

    expect(queryByText('마법사주방')).not.toBeNull();
    expect(queryByText('주소: 서울 강남구 강남대로94길 9')).not.toBeNull();
    expect(queryByText('맛나는 거')).not.toBeNull();
    expect(queryByText('짠 거')).not.toBeNull();
  });

  context("without restaurant's name", () => {
    it('renders loading', () => {
      given('restaurant', () => ({
        id: null,
        name: '',
      }));

      const { queryByText } = renderRestaurantContainer();

      expect(queryByText('loading')).not.toBeNull();
    });
  });

  context('when empty menuItems', () => {
    it('renders message menuItems are empty', () => {
      given('restaurant', () => ({
        id: 10,
        name: '홍콩반점',
        menuItems: [],
      }));

      const { queryByText } = renderRestaurantContainer();

      expect(queryByText('메뉴가 없어요')).not.toBeNull();
    });
  });
});
