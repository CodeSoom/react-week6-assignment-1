import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('with restaurants', () => {
    it('RestaurantsContainer', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: [
          { id: 1, name: '마법사주방' },
        ],
      }));

      const { container } = render((
        <MemoryRouter>
          <RestaurantsContainer />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('마법사주방');
    });
  });

  context('without restaurants', () => {
    it('RestaurantsContainer', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: [
          {},
        ],
      }));

      const { container } = render((
        <MemoryRouter>
          <RestaurantsContainer />
        </MemoryRouter>
      ));

      expect(container).not.toHaveTextContent('마법사주방');
    });
  });
});
