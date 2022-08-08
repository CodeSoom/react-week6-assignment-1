import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('with restaurant', () => {
    it('RestaurantContainer', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: {
          id: 6,
          categoryId: 1,
          name: '한국식 초밥',
          address: '서울 강남구',
          menuItems: [
            {
              id: 18,
              restaurantId: 6,
              name: '밥',
            },
          ],
        },
      }));

      const { container } = render((
        <MemoryRouter>
          <RestaurantContainer />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('밥');
    });
  });

  context('with loading', () => {
    it('renders now loading', () => {
      useSelector.mockImplementation((selector) => selector({
        loading: true,
        restaurant: {
          id: 6,
          categoryId: 1,
          name: '한국식 초밥',
          address: '서울 강남구',
          menuItems: [
            {
              id: 18,
              restaurantId: 6,
              name: '밥',
            },
          ],
        },
      }));

      const { container } = render((
        <MemoryRouter>
          <RestaurantContainer />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Now Loading');
    });
  });
});
