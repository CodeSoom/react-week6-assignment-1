import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      id: 1,
      name: '양천주가',
      address: '서울 강남구',
      menuItems: [
        { id: 1, name: '비빔밥' },
        { id: 2, name: '짬뽕' },
      ],
    },
  }));

  const renderRestaurantContainer = () => render(
    <RestaurantContainer />,
  );

  it('renders restaurant', () => {
    const { container } = renderRestaurantContainer();

    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent(/서울 강남구/);
  });
});
