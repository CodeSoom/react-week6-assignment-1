import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((state) => state({
      restaurant: {
        id: 1,
        name: '마법사주방',
      },
    }));
  });

  it('renders name', () => {
    const { container } = render((
      <RestaurantContainer restaurantId={1} />
    ));

    expect(container).toHaveTextContent('마법사주방');
  });
});
