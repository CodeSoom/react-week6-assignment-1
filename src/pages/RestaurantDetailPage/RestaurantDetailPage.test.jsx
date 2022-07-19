import { render } from '@testing-library/react';

import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { RESTAURANT } from '@fixtures';

import RestaurantDetailPage from './RestaurantDetailPage';

jest.mock('react-router-dom');

describe('RestaurantDetailPage', () => {
  const dispatch = jest.fn();

  useParams.mockReturnValue({ restaurantId: RESTAURANT.id });

  useDispatch.mockReturnValue(dispatch);

  useSelector.mockImplementation((state) => state({
    restaurant: RESTAURANT,
  }));

  const renderRestaurantDetailPage = () => render(<RestaurantDetailPage />);

  it('renders the restaurant', () => {
    const { container } = renderRestaurantDetailPage();

    expect(container).toHaveTextContent(RESTAURANT.name);
    expect(container).toHaveTextContent(RESTAURANT.address);
  });
});
