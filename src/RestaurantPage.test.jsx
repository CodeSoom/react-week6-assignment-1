import React from 'react';

import { render } from '@testing-library/react';

import { useParams } from 'react-router-dom';

import RestaurantPage from './RestaurantPage';

jest.mock('react-router-dom');

describe('<RestaurantPage />', () => {
  beforeEach(() => {
    useParams.mockReturnValue({ restaurantId: 1 });
  });

  it('shows page name', () => {
    const { container } = render(<RestaurantPage />);

    expect(container).toHaveTextContent('Restaurant');
  });

  it('shows restaurant info', () => {
    const { container } = render(<RestaurantPage />);

    expect(container).toHaveTextContent('Restaurant1');
    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent(/서울시 강남구/i);
    expect(container).toHaveTextContent(/탕수육/i);
    expect(container).toHaveTextContent(/팔보채/i);
  });
});
