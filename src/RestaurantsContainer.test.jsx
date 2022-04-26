import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

beforeEach(() => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
    categories: [],
    restaurants: [],
    restaurant: {
      id: 200,
      name: '마법사주방',
      address: '서울 강남구',
      menu: [
        { id: 300, name: '탕수육' },
        { id: 301, name: '팔보채' },
      ],
    },
  }));
});

function renderApp({ path }) {
  return render((
    <MemoryRouter initialEntries={[path]}>
      <RestaurantsContainer />
    </MemoryRouter>
  ));
}

describe('restaurantsContainer', () => {
  context('with path/restaurants/id', () => {
    it('renders the restaurant page', () => {
      const { container } = renderApp({ path: '/restaurants/200' });

      expect(container).toHaveTextContent('서울 강남구');
      expect(container).toHaveTextContent('탕수육');
      expect(container).toHaveTextContent('팔보채');
    });
  });
});
