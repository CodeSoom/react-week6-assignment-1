import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';

describe('RestaurantPage', () => {
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
    const params = { id: '1' };

    const { container } = render((
      <RestaurantPage params={params} />
    ));

    expect(container).toHaveTextContent('레스토랑');
  });
});
