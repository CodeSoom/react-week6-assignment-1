import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantPage from './RestaurantPage';

jest.mock('react-redux');
jest.mock('./services/api');

describe('RestaurantPage', () => {
  beforeEach(() => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((state) => state({
      restaurant: {
        id: 1,
        name: '한신포차',
      },
    }));
  });
  it('renders name', () => {
    const params = { id: 1 };
    const { container } = render((
      <RestaurantPage params={params} />
    ));

    expect(container).toHaveTextContent('한신포차');
  });
});
