import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import RESTAURANT from '../fixtures/restaurant';

jest.mock('react-redux');

describe('<RestaurantContainer />', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: RESTAURANT,
    }));
  });

  it('renders restaurant\'s name, address and menu', () => {
    const { getAllByRole, getByText, getByRole } = render((
      <MemoryRouter initialEntries={['/restaurants/1']}>
        <RestaurantContainer />
      </MemoryRouter>
    ));

    expect(getAllByRole('heading')[0]).toHaveTextContent('양천주가');
    expect(getByText(/서울 강남구 123456/)).toBeInTheDocument();
    expect(getByRole('list')).toHaveTextContent('비빔밥');
  });
});
