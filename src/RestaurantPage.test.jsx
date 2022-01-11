import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';

describe('RestaurantPage', () => {
  const params = { id: '1' };

  const renderRestaurantPage = () => render((
    <RestaurantPage params={params} />
  ));

  context('with path "/restaurants/:id"', () => {
    it('renders text and id', () => {
      const { container } = renderRestaurantPage();

      expect(container).toHaveTextContent('마녀식당 1');
    });
  });
});
