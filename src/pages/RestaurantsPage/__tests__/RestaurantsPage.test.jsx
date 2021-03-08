import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantsPage from '../RestaurantsPage';

describe('RestaurantsPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [
        { id: 1, name: '한식' },
      ],
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
      restaurant: {
        id: 3,
        categoryId: 4,
        name: '마법사주방',
        address: '서울 강남구 강남대로94길 9',
        menuItems: [
          {
            id: 14,
            restaurantId: 3,
            name: '맛나는 거',
          },
          {
            id: 15,
            restaurantId: 3,
            name: '짠 거',
          },
        ],
      },
    }));
  });

  it('renders RestaurantsPage', () => {
    const { queryByText } = render((
      <MemoryRouter initialEntries={['/restaurants']}>
        <RestaurantsPage />
      </MemoryRouter>
    ));

    expect(dispatch).toBeCalled();

    expect(queryByText('서울')).not.toBeNull();
    expect(queryByText('한식')).not.toBeNull();
  });

  it('initializes restaurant', () => {
    render((
      <MemoryRouter initialEntries={['/restaurants']}>
        <RestaurantsPage />
      </MemoryRouter>
    ));

    expect(dispatch).toBeCalledTimes(2);
  });
});
