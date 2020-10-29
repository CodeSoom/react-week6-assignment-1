import React from 'react';

import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import { Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';
import RESTAURANT_DETAIL from '../../fixtures/restaurantDetail';

describe('RestaurantDetailPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      selectedRestaurant: RESTAURANT_DETAIL,
    }));
  });

  function renderRestaurantDetailPage({ history }) {
    return render((
      <Router history={history}>
        <RestaurantDetailPage />
      </Router>
    ));
  }

  it('renders restaurant detail', () => {
    const history = createMemoryHistory();
    history.push('/restaurant/1');

    const { container } = renderRestaurantDetailPage({ history });
    expect(dispatch).toBeCalled();

    expect(container).toHaveTextContent(RESTAURANT_DETAIL.name);
  });

  it('renders initial restaurant', () => {
    const history = createMemoryHistory();
    history.push('/');

    renderRestaurantDetailPage({ history });
    expect(dispatch).toBeCalledWith({
      type: 'resetRestaurantDetail',
    });
  });
});
