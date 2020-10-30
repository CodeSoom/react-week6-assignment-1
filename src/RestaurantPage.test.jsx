import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantPage from './RestaurantPage';

jest.mock('react-redux');

describe('RestaurantPage', () => {
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

  const renderRestaurantPage = () => render(
    <RestaurantPage />,
  );

  it('renders restaurant', () => {
    const { container } = renderRestaurantPage();

    expect(container).toHaveTextContent('양천주가');
  });
});
