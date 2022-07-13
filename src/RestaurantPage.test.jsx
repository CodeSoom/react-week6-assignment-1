import { render } from '@testing-library/react';

import { useParams } from 'react-router-dom';

import RestaurantPage from './RestaurantPage';

jest.mock('react-router-dom');

describe('RestaurantPage', () => {
  const restaurantId = 1;

  useParams.mockImplementation(() => ({ restaurantId }));

  const renderRestaurantPage = () => render(<RestaurantPage />);

  it('renders the restaurant id', () => {
    const { container } = renderRestaurantPage();

    expect(container).toHaveTextContent(restaurantId);
  });
});
