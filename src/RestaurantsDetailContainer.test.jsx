import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import RestaurantsDetailContainer from './RestaurantsDetailContainer';

import RESTAURANT from '../fixtures/restaurant';

describe('RestaurantsDetailContainer', () => {
  const dispatch = jest.fn();

  const renderRestaurantsDetailContainer = ({ path }) => render(
    <MemoryRouter initialEntries={[path]}>
      <RestaurantsDetailContainer />
    </MemoryRouter>,
  );

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      selectedRestaurant: RESTAURANT,
    }));
  });

  afterEach(() => {
    dispatch.mockClear();
  });

  it('레스토랑 상세 정보가 보인다.', () => {
    const { getByText } = renderRestaurantsDetailContainer({ path: '/restaurants/10' });

    expect(getByText(/양천주가/)).not.toBeNull();
    expect(getByText(/탕수육/)).not.toBeNull();
  });

  it('dispatch 가 실행된다.', () => {
    renderRestaurantsDetailContainer({ path: '/restaurants/10' });

    expect(dispatch).toBeCalled();
  });
});
