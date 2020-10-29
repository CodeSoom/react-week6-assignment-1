import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import RestaurantDetailPage from './RestaurantDetailPage';

import RESTAURANT from '../fixtures/restaurant';

jest.mock('react-redux');

describe('RestaurantDetailPage', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: RESTAURANT,
  }));

  it('show restaurant detail', () => {
    const { container } = render((
      <MemoryRouter initialEntries={['/restaurants/1']}>
        <RestaurantDetailPage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent('서울 강남구 12345');
  });
});
