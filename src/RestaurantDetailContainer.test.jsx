import React from 'react';

import { render } from '@testing-library/react';

import given from 'given2';

import { useSelector, useDispatch } from 'react-redux';

import { MemoryRouter, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import RestaurantDetailContainer from './RestaurantDetailContainer';
import restaurantDetail from '../fixtures/restaurantDetail';

describe('RestaurantDetailContainer', () => {
  const dispatch = jest.fn();

  given('restaurant', () => restaurantDetail);

  const {
    name, address, menuItems, reviews, information,
  } = restaurantDetail;

  function renderRestaurantDetail(path) {
    const history = createMemoryHistory();

    return render((
      <MemoryRouter initialEntries={[path]}>
        <Route
          exact
          history={history}
          path="/restaurants/:id"
          component={RestaurantDetailContainer}
        />
      </MemoryRouter>
    ));
  }

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurant: given.restaurant,
    }));
  });

  context('with restaurant', () => {
    it('renders restaurant', () => {
      const {
        getByRole, getByText, getAllByRole,
      } = renderRestaurantDetail('/restaurants/4');

      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(getByRole('heading', { name })).toBeInTheDocument();
      expect(getByText(`주소 : ${address}`)).toBeInTheDocument();
      expect(getByText(`정보 : ${information}`)).toBeInTheDocument();

      expect(getByRole('heading', { name: '메뉴' })).toBeInTheDocument();
      menuItems.forEach((menuItem) => {
        expect(getAllByRole('list')[0]).toHaveTextContent(menuItem.name);
      });

      expect(getByRole('heading', { name: '리뷰' })).toBeInTheDocument();
      reviews.forEach((review) => {
        expect(getAllByRole('list')[1]).toHaveTextContent(review.name);
      });
    });
  });

  context('without restaurant', () => {
    it('renders "텅~!"', () => {
      given('restaurant', () => null);

      const {
        getByRole,
      } = renderRestaurantDetail('/restaurants/4');

      expect(getByRole('heading', { name: '텅~!' })).toBeInTheDocument();
    });
  });

  context('with wrong parmas', () => {
    it('renders NotFound', () => {
      const {
        getByRole,
      } = renderRestaurantDetail('/restaurants/wrong-params');

      expect(dispatch).not.toBeCalled();
      expect(getByRole('heading', { name: '404 Not Found' })).toBeInTheDocument();
    });
  });
});
