import React from 'react';

import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import { MemoryRouter, Router } from 'react-router-dom';
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

  it('renders restaurant detail', () => {
    const { container } = render((
      <MemoryRouter>
        <RestaurantDetailPage match={{ params: 1 }} />
      </MemoryRouter>
    ));

    expect(dispatch).toBeCalled();

    expect(container).toHaveTextContent(RESTAURANT_DETAIL.name);
  });

  it('renders initial restaurant', () => {
    const history = createMemoryHistory();
    history.push('/');

    render((
      <Router history={history}>
        <RestaurantDetailPage match={{ params: { id: null } }} />
      </Router>
    ));

    expect(dispatch).toBeCalledWith({
      type: 'resetRestaurantDetail',
    });
  });
});
