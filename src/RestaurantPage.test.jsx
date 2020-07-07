import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import RestaurantPage from './RestaurantPage';

import restaurant from '../fixtures/restaurant';

jest.mock('react-router-dom');

describe('<RestaurantPage />', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useParams.mockReturnValue({ restaurantId: 1 });
  });

  it('shows page name', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurant,
    }));

    const { container } = render(<RestaurantPage />);

    expect(container).toHaveTextContent('Restaurant');
  });

  it('shows restaurant info', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurant,
    }));

    const { container } = render(<RestaurantPage />);

    expect(dispatch).toBeCalled();

    expect(container).toHaveTextContent('Restaurant1');
    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent(/서울 강남구/i);
    expect(container).toHaveTextContent(/탕수육/i);
    expect(container).toHaveTextContent(/팔보채/i);
  });
});
