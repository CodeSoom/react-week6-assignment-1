import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantPage from './RestaurantPage';

import restaurant from '../fixtures/restaurant';

// naive solution for testing useParams
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: 3,
  }),
}));

describe('RestaurantPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant,
    }));
  });

  it('renders RestaurantPage', () => {
    const { queryByText } = render((
      <MemoryRouter initialEntries={['/restaurants/3']}>
        <RestaurantPage />
      </MemoryRouter>
    ));

    expect(dispatch).toBeCalled();

    expect(queryByText('마법사주방')).not.toBeNull();
    expect(queryByText('주소: 서울 강남구 강남대로94길 9')).not.toBeNull();
    expect(queryByText('맛나는 거')).not.toBeNull();
    expect(queryByText('짠 거')).not.toBeNull();
  });
});
