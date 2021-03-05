import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter, Route } from 'react-router-dom';

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

  function renderDetailPage({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <Route
          path="./restaurants/:id"
          component={RestaurantDetailContainer}
        />
      </MemoryRouter>,
    );
  }

  it('renders restaurant detail', () => {
    const { container } = renderDetailPage({ path: './restaurants/1' })
  
    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent('주소: 서울 강남구');
    expect(container).toHaveTextContent('비빔밥');
    expect(container).toHaveTextContent('육개장');
  })
})
