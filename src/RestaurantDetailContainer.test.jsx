import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetailContainer from './RestaurantDetailContainer';

import restaurantDetail from '../fixtures/restaurantDetail';

jest.mock('react-redux');

describe('RestaurantDetailContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  })

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurantDetail,
  }))

  it('renders restaurant detail', () => {
    const { container } = render(<RestaurantDetailContainer match={{ params: { id: 1  }}}/>);
  
    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent('주소: 서울 강남구');
    expect(container).toHaveTextContent('비빔밥');
    expect(container).toHaveTextContent('육개장');
  })
})
