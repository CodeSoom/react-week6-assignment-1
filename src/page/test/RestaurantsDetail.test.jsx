import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsDetail from '../RestaurantsDetail';
import restaurant from '../../../fixtures/restaurant';

describe('RestaurantsDetail', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurant,
  }));

  it('레스토랑의 정보를 출력한다.', () => {
    const { queryByText } = render((
      <RestaurantsDetail />
    ));

    expect(dispatch).toBeCalled();

    expect(queryByText(restaurant.address)).not.toBeNull();
    expect(queryByText(restaurant.name)).not.toBeNull();
  });
});
