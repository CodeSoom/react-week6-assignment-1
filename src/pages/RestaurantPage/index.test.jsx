import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantPage from '.';

import restaurant from '../../../fixtures/restaurant';

jest.mock('react-redux');

describe('RestaurantPage', () => {
  const dispatch = jest.fn();

  const params = { id: 1 };

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurant,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  function renderRestaurantPage() {
    return render((
      <RestaurantPage params={params} />
    ));
  }

  context('with restaurant', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant,
      }));
    });

    it('renders title', () => {
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
        restaurant: null,
      }));
    });

    it('renders loading', () => {
      const { getByText } = renderRestaurantPage();

      expect(getByText('Loading...')).toBeInTheDocument();
    });
  });
});
