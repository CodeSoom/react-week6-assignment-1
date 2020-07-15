import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  beforeEach(() => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        id: 1,
        name: '한신포차',
      },
    }));
  });
  it('renders name', () => {
    const { container } = render((
      <RestaurantContainer restaurantId="1" />
    ));
    expect(container).toHaveTextContent('한신포차');
  });
});
