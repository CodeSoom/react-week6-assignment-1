import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
    }));
  });

  it('renders restaurants', () => {
    const { container } = render((
      <MemoryRouter>
        <RestaurantsContainer />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('마법사주방');
  });

  context('with path /restaurants/:id', () => {
    it('renders restaurantDetilPage', () => {
      render((
        <MemoryRouter initialEntries={['/restaurants/1']}>
          <RestaurantsContainer />
        </MemoryRouter>
      ));
    });
  });
});
