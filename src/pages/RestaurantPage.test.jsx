import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import RestaurantPage from './RestaurantPage';

describe('RestaurantPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((state) => state({
      restaurant: {
        id: 1,
        name: '양천주가',
        address: '서울시 강남구',
        menus: [
          { id: 1, name: '탕수육' },
        ],
      },
    }));
  });

  function renderRestaurantPage() {
    return render((
      <MemoryRouter>
        <RestaurantPage />
      </MemoryRouter>
    ));
  }

  it('renders restaurant title', () => {
    const { container } = renderRestaurantPage();

    expect(container).toHaveTextContent('양천주가');
  });

  it('renders restaurant adress', () => {
    const { container } = renderRestaurantPage();

    expect(container).toHaveTextContent(/서울시 강남구/);
  });

  it('renders restaurant menu', () => {
    const { container } = renderRestaurantPage();

    expect(container).toHaveTextContent('메뉴');
    expect(container).toHaveTextContent('탕수육');
  });
});
