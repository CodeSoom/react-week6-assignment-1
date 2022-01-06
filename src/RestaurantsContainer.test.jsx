import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  const renderRestaurantsContainer = ({ path }) => render((
    <MemoryRouter initialEntries={[path]}>
      <RestaurantsContainer />
    </MemoryRouter>
  ));

  context('with id of restaurant', () => {
    it('renders name of restaurant', () => {
      const { container } = renderRestaurantsContainer(
        { path: '/detail/1' },
      );

      expect(container).toHaveTextContent('마법사주방');
    });
  });
});
