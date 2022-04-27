import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

describe('restaurantsContainer', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
    }));
  });

  function renderRestaurantsContainer() {
    return render((
      <MemoryRouter>
        <RestaurantsContainer />
      </MemoryRouter>
    ));
  }

  context('with path/restaurants', () => {
    it('renders restaurants', () => {
      const { container } = renderRestaurantsContainer();

      expect(container).toHaveTextContent('마법사주방');
    });
  });

  context('with path/restaurants/id', () => {
    it('renders the restaurant page', () => {
      const { getByText } = renderRestaurantsContainer();

      expect(getByText('마법사주방')).toHaveAttribute('href', '/1');
    });
  });
});
