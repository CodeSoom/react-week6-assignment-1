import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import { MemoryRouter, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import RestaurantDetailContainer from './RestaurantDetailContainer';
import restaurantDetail from '../fixtures/restaurantDetail';

describe('RestaurantDetail', () => {
  const dispatch = jest.fn();

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
          path="/restaurants/:restaurantId"
          component={RestaurantDetailContainer}
        />
      </MemoryRouter>
    ));
  }

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurant: restaurantDetail,
    }));
  });

  it('renders RestaurantDetail', () => {
    const {
      getByRole, getByText, getAllByRole,
    } = renderRestaurantDetail('/restaurants/4');

    expect(getByRole('heading', { name })).toBeInTheDocument();
    expect(getByText(address)).toBeInTheDocument();
    expect(getByText(information)).toBeInTheDocument();

    expect(getByRole('heading', { name: '메뉴' })).toBeInTheDocument();
    menuItems.forEach((menuItem) => {
      expect(getAllByRole('list')[0]).toHaveTextContent(menuItem.name);
    });

    expect(getByRole('heading', { name: '리뷰' })).toBeInTheDocument();
    reviews.forEach((review) => {
      expect(getAllByRole('list')[1]).toHaveTextContent(review.name);
    });
  });

  it('gets params', () => {
    renderRestaurantDetail('/restaurants/4');

    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
