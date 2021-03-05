import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter, Route } from 'react-router-dom';

import { createMemoryHistory } from 'history';

import given from 'given2';

import {
  restaurant,
  restaurants,
  REGIONS,
  CATEGORIES,
} from '../../../../fixtures';

import RestaurantContainer from '../RestaurantContainer';

import RestaurantsPage from '../../RestaurantsPage/RestaurantsPage';

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  const history = createMemoryHistory();

  given('restaurant', () => restaurant);

  const renderRestaurantContainer = () => render((
    <MemoryRouter initialEntries={['/restaurants/:id']}>
      <Route
        exact
        history={history}
        path="/restaurants/:id"
        component={RestaurantContainer}
      />
    </MemoryRouter>
  ));

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      regions: REGIONS,
      categories: CATEGORIES,
      restaurants,
      restaurant: given.restaurant,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders restaurant', () => {
    const { queryByText } = renderRestaurantContainer();

    expect(queryByText('마법사주방')).not.toBeNull();
    expect(queryByText('주소: 서울 강남구 강남대로94길 9')).not.toBeNull();
    expect(queryByText('맛나는 거')).not.toBeNull();
    expect(queryByText('짠 거')).not.toBeNull();
  });

  it('renders RestaurantsPage upon clicking 레스토랑스 페이지로 가기', () => {
    const { queryByText } = renderRestaurantContainer();

    const route = '/restaurants';

    fireEvent.click(queryByText('레스토랑스 페이지로 가기'));

    history.push(route);

    render((
      <MemoryRouter initialEntries={['/restaurants/']}>
        <RestaurantsPage />
      </MemoryRouter>
    ));

    expect(queryByText('서울')).not.toBeNull();
    expect(queryByText('한식')).not.toBeNull();
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
