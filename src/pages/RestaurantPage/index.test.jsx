import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router';

import RestaurantPage from '.';

import restaurant from '../../../fixtures/restaurant';

jest.mock('react-redux');

describe('RestaurantsPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurant,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  function renderRestaurantPage() {
    return render((
      <MemoryRouter>
        <RestaurantPage />
      </MemoryRouter>
    ));
  }

  it('loads restaurant', () => {
    renderRestaurantPage();

    expect(dispatch).toBeCalled();
  });

  context('with restaurant', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant,
      }));
    });

    it('renders "메뉴" title', () => {
      const { getByRole } = renderRestaurantPage();

      expect(getByRole('heading', { name: '메뉴' })).toBeInTheDocument();
    });

    it('renders menus', () => {
      const { getByText } = renderRestaurantPage();

      restaurant.menuItems.forEach(({ name }) => {
        expect(getByText(name)).toBeInTheDocument();
      });
    });
  });

  context('without restaurant', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: {},
      }));
    });

    it('renders loading', () => {
      const { getByText } = renderRestaurantPage();

      expect(getByText('Loading...')).toBeInTheDocument();
    });
  });
});
