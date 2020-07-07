import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import RestaurantsDetail from './RestaurantsDetail';

import RESTAURANT from '../fixtures/restaurant';

describe('RestaurantsDetail', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      selectedRestaurant: RESTAURANT,
    }));
  });

  it('레스토랑 상세 정보가 보인다.', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/restaurants/10']}>
        <RestaurantsDetail />
      </MemoryRouter>,
    );

    expect(getByText(/양천주가/)).not.toBeNull();
    expect(getByText(/탕수육/)).not.toBeNull();
  });

  it('dispatch 가 실행된다.', () => {
    render(
      <MemoryRouter initialEntries={['/restaurants/10']}>
        <RestaurantsDetail />
      </MemoryRouter>,
    );

    expect(dispatch).toBeCalled();
  });
});
