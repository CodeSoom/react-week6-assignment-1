import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import restaurant from '../fixtures/restaurant';

const dispatch = jest.fn();
useDispatch.mockImplementation(() => dispatch);

describe('RestaurantContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('with restaurant', () => {
    it('renders a restaurant', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant,
      }));

      const { container } = render((
        <MemoryRouter>
          <RestaurantContainer />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('밥');
    });
  });

  context('without restaurant', () => {
    it('does not render', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: {},
      }));

      const { container } = render((
        <MemoryRouter>
          <RestaurantContainer />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('404 Not Found');
    });
  });

  context('with loading', () => {
    it('renders now loading', () => {
      useSelector.mockImplementation((selector) => selector({
        loading: true,
        restaurant: {},
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
