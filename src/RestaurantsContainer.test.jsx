import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';
import RestaurantsDetailPage from './RestaurantsDetailPage';

describe('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  it('renders restaurants component', () => {
    const { container } = render((
      <RestaurantsContainer />
    ));

    expect(container).toHaveTextContent('마법사주방');
  });

  context('with path /restaurantsDetailPage', () => {
    it('renders the restaurants detail page', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/restaurantsDetailPage']}>
          <RestaurantsDetailPage />
        </MemoryRouter>,
      );

      expect(container).toHaveTextContent('마법사주방');
    });
  });
});
