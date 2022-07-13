import { render } from '@testing-library/react';

import REGIONS from '../../fixtures/regions';

import RestaurantsPage from './RestaurantsPage';

describe('<RestaurantsPage />', () => {
  const renderRestaurantsPage = () => render(<RestaurantsPage />);

  it('renders regions', () => {
    const { container } = renderRestaurantsPage();

    REGIONS.forEach((region) => {
      expect(container).toHaveTextContent(region.name);
    });
  });
});
