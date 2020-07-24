import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

jest.mock('react-redux');
jest.mock('./services/api');

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    // useSelector.mockImplementation((selector) => selector({
    //   restaurant: {
    //     id: 1,
    //     name: '한신포차',
    //   },
    // }));
  });
  it('renders name', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        id: 1,
        name: '한신포차',
      },
    }));
    const { container } = render((
      <RestaurantContainer restaurantId="1" />
    ));
    expect(dispatch).toBeCalled();
    expect(container).toHaveTextContent('한신포차');
  });

  it('renders loading', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurant: null,
    }));
    const { container } = render((
      <RestaurantContainer />
    ));
    expect(container).toHaveTextContent('Loading');
  });
});
