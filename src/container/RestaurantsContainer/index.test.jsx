import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantsContainer from '.';

describe('RestaurantsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
    }));
  });

  function renderRestaurantsContainer() {
    return render((
      <RestaurantsContainer />
    ));
  }

  it('renders restaurants', () => {
    const { getByRole } = renderRestaurantsContainer();

    expect(getByRole('link', { name: '마법사주방' })).toBeInTheDocument();
  });
});
