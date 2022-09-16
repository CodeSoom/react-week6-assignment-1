import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  it('renders Restaurants', () => {
    const { container } = render((
      <RestaurantsContainer />
    ));

    expect(container).toHaveTextContent('마법사주방');
  });
});
