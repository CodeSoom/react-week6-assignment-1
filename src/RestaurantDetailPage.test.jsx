import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import RestaurantDetailPage from './RestaurantDetailPage';

function renderRestaurantDetailPage() {
  return render((
    <MemoryRouter>
      <RestaurantDetailPage />
    </MemoryRouter>
  ));
}

describe('RestaurantDetailPage', () => {
  const dispatch = jest.fn();

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
  }));

  it('dispatch가 호출됩니다.', () => {
    renderRestaurantDetailPage();

    expect(dispatch).toBeCalled();
  });
});
