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

  context('with path /restaurants/Id', () => {
    it('renders restaurantDetilPage', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/restaurants/1']}>
          <RestaurantsContainer />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Not Found');
      // expect(container).toHaveTextContent('마법사주방');
      // expect(container).toHaveTextContent('메뉴');
    });
  });
});
