import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  function renderRestaurantsContainer() {
    return render((
      <MemoryRouter>
        <RestaurantsContainer />
      </MemoryRouter>
    ));
  }

  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  it('renders restaurants', () => {
    const { container } = renderRestaurantsContainer();

    expect(container).toHaveTextContent('마법사주방');
  });

  it('has links to restaurant detail page', () => {
    const { getByText } = renderRestaurantsContainer();

    expect(getByText('마법사주방')).toHaveAttribute('href', '/1');
  });
});
