import { render } from '@testing-library/react';

import { useParams } from 'react-router-dom';

import RestaurantDetailPage from './RestaurantDetailPage';

jest.mock('react-router-dom');

describe('RestaurantDetailPage', () => {
  const restaurantId = 1;

  useParams.mockImplementation(() => ({ restaurantId }));

  const renderRestaurantDetailPage = () => render(<RestaurantDetailPage />);

  it('renders the restaurant id', () => {
    const { container } = renderRestaurantDetailPage();

    expect(container).toHaveTextContent(restaurantId);
  });
});
